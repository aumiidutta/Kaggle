# 🐍 Python Insider Release Tracker

A sleek, responsive, and modern web application built using **Python Flask** and vanilla **HTML, JavaScript, and CSS**. It fetches, parses, and styles release updates and core news from the **Official Python Insider Blog RSS Feed**, providing users with powerful filtering, searching, and custom tweeting capabilities on X (Twitter).

---

## 🚀 Key Features

* **Live RSS Parsing**: Scrapes and parses `https://blog.python.org/rss.xml` (using standard Python libraries `urllib` and `xml.etree.ElementTree`) into structured JSON items.
* **Dynamic Category Filters**: Automatically detects unique category tags (e.g., `Releases`, `Security`, `Community`, `JIT`, `Performance`) present in the feed and generates filter pills on-the-fly.
* **Instant Debounced Search**: Fast, client-side keyword searching across titles, dates, descriptions, and categories.
* **Select & Share on X (Twitter)**:
  * **Single Card Share**: Click a card's "Tweet" button to open an X sharing intent pre-composed with the title, category, date, and deep link (properly formatted within X's 280-character limit).
  * **Combined Thread Share**: Select multiple updates to slide up a **Floating Action Drawer**. Click "Tweet Selected" to compose a structured bulleted recap.
* **Intelligent Caching**: Implements a **5-minute memory cache** to prevent feed rate limits, coupled with a manual reload trigger (with spinner feedback) that forces a live fetch bypass.
* **Premium Dark Mode Theme**: Features a custom dark glassmorphism layout, smooth scale transitions, color-coded badges, custom scrollbars, and pulsing skeleton loader states.

---

## 📂 Project Structure

```text
agy-cli-projects/
├── .gitignore               # Excludes virtual env, caching, and IDE folders
├── requirements.txt         # Project dependencies (Flask)
├── app.py                   # Flask server, caching, and XML parser endpoints
├── README.md                # Project documentation & run guide
├── templates/
│   └── index.html           # Main HTML structure with skeleton screens and layouts
└── static/
    ├── style.css            # Dark glassmorphic design theme & animations
    └── script.js            # Client-side routing, filtering, selection, and share logic
```

---

## 🛠️ Getting Started & Installation

Follow these steps to run the application locally on your machine.

### Prerequisites
Make sure you have **Python 3.8 or higher** installed.

### 1. Clone & Navigate
```bash
git clone <your-repository-url>
cd agy-cli-projects
```

### 2. Set Up Virtual Environment
Create and activate an isolated Python virtual environment:
```bash
# Create environment
python -m venv .venv

# Activate (Windows PowerShell)
.\.venv\Scripts\Activate.ps1

# Activate (Linux/macOS)
source .venv/bin/activate
```

### 3. Install Dependencies
Install Flask from the `requirements.txt` manifest:
```bash
pip install -r requirements.txt
```

### 4. Run the Server
Launch the Flask development server:
```bash
python app.py
```

### 5. Access the Web App
Open your browser and visit:
* Local Address: **[http://127.0.0.1:5000](http://127.0.0.1:5000)**
* Local Network Address: **[http://192.168.1.7:5000](http://192.168.1.7:5000)** (if accessible on your LAN)

---

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).
