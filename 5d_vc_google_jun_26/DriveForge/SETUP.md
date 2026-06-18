# Google Drive Uploader - Setup Guide

## 1. Install Dependencies
Ensure you have Python 3.6 or higher installed. Install the Google API Client libraries using pip:
```bash
pip install -r requirements.txt
```


## 2. Google Cloud Console Configuration
To communicate with Google Drive, you must register a project in the Google Cloud Console and generate client credentials:
1. **Go to the Console**: Open the [Google Cloud Console](https://console.cloud.google.com/).
2. **Create/Select Project**: Create a new project or select an existing one.
3. **Enable Google Drive API**:
   - In the left sidebar, navigate to **APIs & Services** > **Library**.
   - Search for **Google Drive API** and click on it.
   - Click **Enable**.
4. **Configure OAuth Consent Screen**:
   - Go to **APIs & Services** > **OAuth consent screen**.
   - Enter your **App Name**, **User support email**, and **Developer contact information**.
   - Select **External** and click **Create**.
   - Click **Save and Continue**
   - Go to **audience** and scroll until you reach the **Test Users** step.
   - **CRITICAL STEP**: Click **Add Users** and enter your Google account email address. Only accounts added as test users will be allowed to log in while the app is in "Testing" status.
   - Save and finish the setup.
5. **Create OAuth Desktop Credentials**:
   - Navigate to **APIs & Services** > **Credentials**.
   - Click **+ Create Credentials** at the top and select **OAuth client ID**.
   - Under **Application type**, choose **Desktop app**.
   - Name the credentials (e.g., "Drive CLI Uploader") and click **Create**.
   - Download the client secrets file by clicking the download icon next to your client ID (or from the popup dialog).
6. **Save in Project Directory**:
   - Rename the downloaded JSON file to `credentials.json`.
   - Save it directly in the same folder as `upload_to_drive.py`.


## 3. Troubleshooting
* **Error: `Missing 'credentials.json' in current directory.`**
  Make sure you downloaded your desktop client secret JSON file, renamed it exactly to `credentials.json`, and put it in the same directory as `upload_to_drive.py`.

* **Error: `Access blocked: authorization error` or `Error 403: access_denied`**
  Make sure you added the Google Account you are logging in with to the **Test Users** section under the *OAuth consent screen* in your Google Cloud Console.

* **Modifying Scopes**:
  If you decide to modify the API permissions/scopes inside the script (e.g. from `drive.file` to full `drive`), you must delete the existing `token.json` file to force a fresh authorization flow.