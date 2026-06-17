# Python Insider Release Tracker - Documentation
This web application fetches, parses, and formats core Python development release announcements and news from the official Python Insider RSS feed, allowing users to search, filter, select, and share specific updates on X (Twitter).


## 📂 Project Structure
All files are located in the user's workspace at: `C:\Users\username\folder\PythonInsider`
- app.py: The Flask web server. Handles caching, fetches the Python Insider RSS XML feed (`https://blog.python.org/rss.xml`), parses dates using standard library utilities, and exposes the JSON endpoints.
- templates/index.html: The core HTML structure styled dynamically with custom Python gradients, dynamic category containers, and loading states.
- static/style.css: Custom stylesheet providing dark glassmorphism layout, Python brand color gradients, color-coded badges, custom scrollbars, and a floating selection drawer.
- static/script.js: Handles client-side API requests, dynamic category filter pill generation, real-time debounced searching, multi-select drawers, and custom tweet formatters.


## 🛠️ Architecture & Core Mechanics
### 1. Python Insider RSS Parser
- **Backend Parser**: Fetches the RSS XML feed and loops through all `<item>` blocks.
- **Richer Content Rendering**: Combines the post `<title>` (as a prominent heading) and the `<description>` field inside the card body.
- **Dates**: Standardizes RFC 822 format dates (e.g. `Wed, 10 Jun 2026 00:00:00 GMT`) into clean reader dates (`June 10, 2026`) and standard ISO strings.
- **Dynamic Categories**: Capitalizes category tags (e.g. `releases` -> `Releases`, `security` -> `Security`).

### 2. Dynamic Category Filters
Instead of hardcoding categories on the frontend:
- When Python updates load, JavaScript scans the dataset for all unique categories present in the feed (e.g., `Releases`, `Security`, `Community`, `JIT`, `Performance`).
- It dynamically generates interactive filter pills. Selecting a pill filters the update stream instantly.
- Unknown categories fallback gracefully in the stylesheet with clean gray default styling.

### 3. Intelligent Caching
- **Cache**: The application caches feed results in memory for **5 minutes** to prevent rate-limiting.
- **Forced Refresh**: Clicking the "Refresh" button on the UI bypasses the cache to query a fresh copy of the feed and update the cache.

### 4. Selection & X (Twitter) Sharing Panel
- **Single Card Action**: Each card has a "Tweet" button that pre-formats a status update containing the category emoji, title, date, and link (wrapped inside Twitter's 280-character limit).
- **Multi-Select Action**: Clicking on cards selects multiple updates. A bottom action bar slides up showing the selection count. Clicking "Tweet Selected" aggregates them into a clean bulleted recap tweet, dynamically truncating it if it exceeds X character length.


## 🚀 How to Run the Application
The Flask development server is currently running in the background. If you need to restart or run it manually:
### 1. Activate the Virtual Environment
Open a terminal in the project directory (`C:\Users\username\folder\PythonInsider`) and run:
```powershell
.\.venv\Scripts\Activate.ps1
```

### 2. Start the Flask Server
Run the Flask server:
```powershell
python app.py
```

### 3. Open in Browser
Navigate to:
- Local URL: **[http://127.0.0.1:5000](http://127.0.0.1:5000)**


## 📊 Features & Aesthetics Preview
> [!NOTE]
> UI badge styles are custom-tailored to Python Insider tags: green for `Releases`, red for `Security`, purple for `Community`, and cyan/teal for core engine enhancements (`Performance`, `JIT`, `Rust`).
> [!TIP]
> The search bar works instantly in real-time as you type, filtering across post titles, descriptions, dates, and categories.