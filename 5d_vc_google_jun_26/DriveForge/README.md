# DriveForge
A modern, premium command-line tool for Google Drive file uploads.
DriveForge provides a robust, developer-friendly CLI assistant designed to bring cloud upload and productivity pipelines directly into your terminal.


## Features
*   **OAuth2 Authentication**: Secure credentials authorization using browser flow and automated token caching.
*   **Resumable Uploads**: Uploads files in 1MB chunks with real-time percentage progress indicators.
*   **Target Folder Selection**: Upload files directly into specific Google Drive folders by ID.
*   **Format Conversion**: Automatic conversion of local formats (like CSV, TXT, DOCX) to Google Workspace formats (Google Sheets, Google Docs) during upload.


## Installation & Setup
1. **Install Dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

2. **Configure Google Drive Credentials**:
   To use DriveForge, you must set up OAuth 2.0 Credentials on Google Cloud. Follow the step-by-step guide in **[SETUP.md](SETUP.md)**.


## Command Usage
Run the commands in terminal, on first execution, this will open a web browser asking you to log in and authorize the application. A file named `token.json` will be saved to cache your credentials for future uploads.

```bash
# Upload a local file to your main Google Drive root directory:
python upload_to_drive.py my_document.pdf

# Upload and convert to a Google Workspace format (e.g., CSV to Google Sheets)
python upload_to_drive.py data.csv --convert

# Upload a file and give it a different name on Google Drive:
python upload_to_drive.py local_file.txt --name "Important Notes.txt"

# Upload a file directly into a specific Google Drive folder. You will need to obtain the Google Drive Folder ID (the long string of characters at the end of the URL when viewing the folder in your web browser):
python upload_to_drive.py image.png --folder "1A2B3C4D5E6F7G8H9I0J..."
```


#### Refer to [sample output](output_sample.md)