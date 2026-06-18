### 1. Upload a .txt file
```bash
C:\Users\project>python upload_to_drive.py demo.txt
Starting OAuth flow. Check your browser to authenticate...
Please visit this URL to authorize this application: https://accounts.google.com/o/oauth2/auth?response_type=code&client_id=759980-f382m6psne.apps.googleusercontent.com&redirect_uri=http%3A%2F%2Flocalhost%3A60956%2F&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fdrive.file&state=u1us2MRia3M91cX&code_challenge=uK4ALtBwv0NcE&code_challenge_method=S256&access_type=offline

Authenticated successfully. Saved token to 'token.json'.
Preparing upload: demo.txt -> Drive: demo.txt
Uploading...

Success! Upload completed.
File Name: demo.txt
File ID:   1eSHvkqk
MIME Type: text/plain
Link:      https://drive.google.com/file/d/1eSHvkqk/view?usp=drivesdk
```


### 2. Upload a .pdf file
```bash
C:\Users\project>python upload_to_drive.py bt_report.pdf
Preparing upload: bt_report.pdf -> Drive: bt_report.pdf
Uploading...
Uploaded 83% ...

Success! Upload completed.
File Name: bt_report.pdf
File ID:   1OjGgBB
MIME Type: application/pdf
Link:      https://drive.google.com/file/d/1OjGgBB/view?usp=drivesdk
```


### 3. Upload a .pdf file in the specified folder and rename it
```bash
C:\Users\project>python upload_to_drive.py 2802.pdf --folder 1NZrjsy --name "certificate"
Preparing upload: 2802.pdf -> Drive: certificate
Uploading...

Success! Upload completed.
File Name: certificate
File ID:   1-sxvoRsmst
MIME Type: application/pdf
Link:      https://drive.google.com/file/d/1-sxvoRsmst/view?usp=drivesdk
```


### 4. Upload a .txt file and convert to suitable GWS format
```bash
C:\Users\project>python upload_to_drive.py demo.txt --convert
Conversion enabled: 'text/plain' -> 'application/vnd.google-apps.document'
Preparing upload: demo.txt -> Drive: demo.txt
Uploading...

Success! Upload completed.
File Name: demo
File ID:   1nNXhSRKNY8
MIME Type: application/vnd.google-apps.document
Link:      https://docs.google.com/document/d/1nNXhSRKNY8/edit?usp=drivesdk
```