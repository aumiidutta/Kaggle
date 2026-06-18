#!/usr/bin/env python3
"""
Google Drive File Uploader
==========================
Based on the Google Developer Knowledge, this script handles OAuth2 authentication
and uploads local files to Google Drive with support for resumable uploads, progress tracking,
specific folder uploads, and document format conversions.
"""

import os
import sys
import mimetypes
import argparse
from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError
from googleapiclient.http import MediaFileUpload

# Scopes required to upload and manage files created by this app.
# If you need to access files not created by this app, change to:
# ['https://www.googleapis.com/auth/drive']
SCOPES = ['https://www.googleapis.com/auth/drive.file']

# Mappings for converting office documents to Google Workspace formats
CONVERSION_MAPPING = {
    # Text / Documents
    'text/plain': 'application/vnd.google-apps.document',
    'text/rtf': 'application/vnd.google-apps.document',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document': 'application/vnd.google-apps.document',
    'application/msword': 'application/vnd.google-apps.document',
    
    # Spreadsheets
    'text/csv': 'application/vnd.google-apps.spreadsheet',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': 'application/vnd.google-apps.spreadsheet',
    'application/vnd.ms-excel': 'application/vnd.google-apps.spreadsheet',
    
    # Presentations
    'application/vnd.openxmlformats-officedocument.presentationml.presentation': 'application/vnd.google-apps.presentation',
    'application/vnd.ms-powerpoint': 'application/vnd.google-apps.presentation',
}

# ANSI escape codes for colored terminal output
COLOR_RESET = "\033[0m"
COLOR_GREEN = "\033[32m"
COLOR_RED = "\033[31m"
COLOR_YELLOW = "\033[33m"
COLOR_CYAN = "\033[36m"
COLOR_BOLD = "\033[1m"

def print_colored(text, color):
    """Prints colored text to terminal if stdout is a TTY."""
    if sys.stdout.isatty():
        print(f"{color}{text}{COLOR_RESET}")
    else:
        print(text)

def show_setup_instructions():
    """Prints a detailed guide on how to obtain credentials.json."""
    instructions = f"""
{COLOR_BOLD}{COLOR_YELLOW}======================================================================
                  CREDENTIALS CONFIGURATION REQUIRED
======================================================================{COLOR_RESET}

To run this script, you need to configure OAuth 2.0 Credentials:

1. {COLOR_BOLD}Go to the Google Cloud Console:{COLOR_RESET}
   https://console.cloud.google.com/

2. {COLOR_BOLD}Create a project{COLOR_RESET} or select an existing one.

3. {COLOR_BOLD}Enable the Google Drive API:{COLOR_RESET}
   - Navigate to 'APIs & Services' > 'Library'.
   - Search for 'Google Drive API' and click 'Enable'.

4. {COLOR_BOLD}Configure the OAuth Consent Screen:{COLOR_RESET}
   - Navigate to 'APIs & Services' > 'OAuth consent screen'.
   - Select 'External' and click 'Create'.
   - Provide the required info: App name, User support email, Developer contact email.
   - Click 'Save and Continue' through the scopes and summary pages.
   - {COLOR_YELLOW}IMPORTANT:{COLOR_RESET} Under 'Test users', add your Google email address.

5. {COLOR_BOLD}Create Desktop OAuth Credentials:{COLOR_RESET}
   - Navigate to 'APIs & Services' > 'Credentials'.
   - Click '+ Create Credentials' > 'OAuth client ID'.
   - Choose Application Type: 'Desktop app'.
   - Click 'Create'.
   - Download the JSON file from the dialog or the list.

6. {COLOR_BOLD}Setup in Workspace:{COLOR_RESET}
   - Rename the downloaded file to {COLOR_BOLD}credentials.json{COLOR_RESET}
   - Place it in the same directory as this script.

======================================================================"""
    print_colored(instructions, "")

def authenticate():
    """Handles user authentication and token storage."""
    creds = None
    # token.json stores user access and refresh tokens.
    # It is created automatically when the authorization flow completes for the first time.
    if os.path.exists('token.json'):
        creds = Credentials.from_authorized_user_file('token.json', SCOPES)
        
    # If there are no (valid) credentials available, let the user log in.
    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            print_colored("Token expired. Refreshing...", COLOR_YELLOW)
            try:
                creds.refresh(Request())
            except Exception as e:
                print_colored(f"Error refreshing token: {e}. Re-authenticating...", COLOR_YELLOW)
                creds = None
                
        if not creds:
            if not os.path.exists('credentials.json'):
                show_setup_instructions()
                raise FileNotFoundError("Missing 'credentials.json' in current directory.")
            
            print_colored("Starting OAuth flow. Check your browser to authenticate...", COLOR_CYAN)
            flow = InstalledAppFlow.from_client_secrets_file('credentials.json', SCOPES)
            creds = flow.run_local_server(port=0)
            
        # Save credentials for the next run
        with open('token.json', 'w') as token:
            token.write(creds.to_json())
            print_colored("Authenticated successfully. Saved token to 'token.json'.", COLOR_GREEN)
            
    return creds

def get_mime_type(file_path):
    """Guesses the MIME type of a file based on its extension."""
    mime_type, _ = mimetypes.guess_type(file_path)
    if mime_type is None:
        mime_type = 'application/octet-stream'
    return mime_type

def upload_file(file_path, drive_name=None, folder_id=None, mime_type_override=None, convert=False):
    """Uploads a file to Google Drive with progress tracking."""
    if not os.path.exists(file_path):
        print_colored(f"Error: Local file '{file_path}' does not exist.", COLOR_RED)
        return None

    try:
        creds = authenticate()
    except FileNotFoundError as e:
        print_colored(str(e), COLOR_RED)
        return None
    except Exception as e:
        print_colored(f"Authentication failed: {e}", COLOR_RED)
        return None

    # Get local file base name if drive name not specified
    filename = drive_name or os.path.basename(file_path)
    
    # Get mime type
    local_mime = mime_type_override or get_mime_type(file_path)
    
    # Set default Drive MIME type (same as local)
    drive_mime = local_mime
    
    # If convert option is enabled, check if we can convert to Workspace format
    if convert:
        if local_mime in CONVERSION_MAPPING:
            drive_mime = CONVERSION_MAPPING[local_mime]
            print_colored(f"Conversion enabled: '{local_mime}' -> '{drive_mime}'", COLOR_CYAN)
        else:
            print_colored(f"Warning: No Google Workspace conversion format mapped for '{local_mime}'. Uploading as-is.", COLOR_YELLOW)

    # Initialize Drive service
    try:
        service = build('drive', 'v3', credentials=creds)
    except Exception as e:
        print_colored(f"Failed to build Google Drive service: {e}", COLOR_RED)
        return None

    # Prepare file metadata
    file_metadata = {
        'name': filename
    }
    
    # If convert flag is set, set the target mimeType in metadata
    if convert and drive_mime != local_mime:
        file_metadata['mimeType'] = drive_mime

    # Set parent folder if specified
    if folder_id:
        file_metadata['parents'] = [folder_id]

    print_colored(f"Preparing upload: {file_path} -> Drive: {filename}", COLOR_CYAN)
    
    # Prepare the media to upload
    # Using chunksize=1024*1024 (1MB) to track progress.
    # Set resumable=True for progress support and reliability.
    media = MediaFileUpload(
        file_path, 
        mimetype=local_mime, 
        chunksize=1024 * 1024, 
        resumable=True
    )

    try:
        # Create drive api client request
        request = service.files().create(
            body=file_metadata,
            media_body=media,
            fields='id, name, webViewLink, mimeType'
        )

        print_colored("Uploading...", COLOR_CYAN)
        
        response = None
        while response is None:
            status, response = request.next_chunk()
            if status:
                print(f"Uploaded {int(status.progress() * 100)}% ...")

        print_colored(f"\n{COLOR_BOLD}Success! Upload completed.{COLOR_RESET}", COLOR_GREEN)
        print_colored(f"File Name: {response.get('name')}", COLOR_GREEN)
        print_colored(f"File ID:   {response.get('id')}", COLOR_GREEN)
        print_colored(f"MIME Type: {response.get('mimeType')}", COLOR_GREEN)
        print_colored(f"Link:      {response.get('webViewLink')}", COLOR_CYAN)
        
        return response

    except HttpError as error:
        print_colored(f"\nAn HTTP error occurred: {error}", COLOR_RED)
        return None
    except Exception as error:
        print_colored(f"\nAn error occurred: {error}", COLOR_RED)
        return None

def main():
    parser = argparse.ArgumentParser(
        description='Upload a file to Google Drive utilizing Google Drive API v3.'
    )
    parser.add_argument(
        'file_path',
        help='Path to the local file to upload'
    )
    parser.add_argument(
        '-n', '--name',
        help='Name to give the file in Google Drive (default: same as local file)'
    )
    parser.add_argument(
        '-f', '--folder',
        help='ID of the Google Drive folder to upload the file to'
    )
    parser.add_argument(
        '-t', '--mime-type',
        help='MIME type for the upload (guesses if not provided)'
    )
    parser.add_argument(
        '-c', '--convert',
        action='store_true',
        help='Convert file to Google Workspace document format (e.g. CSV to Google Sheets, TXT/DOCX to Google Docs)'
    )

    args = parser.parse_args()
    
    # Configure stdout for UTF-8 compatibility
    if hasattr(sys.stdout, 'reconfigure'):
        sys.stdout.reconfigure(encoding='utf-8')
    if hasattr(sys.stderr, 'reconfigure'):
        sys.stderr.reconfigure(encoding='utf-8')

    upload_file(
        file_path=args.file_path,
        drive_name=args.name,
        folder_id=args.folder,
        mime_type_override=args.mime_type,
        convert=args.convert
    )

if __name__ == '__main__':
    main()
