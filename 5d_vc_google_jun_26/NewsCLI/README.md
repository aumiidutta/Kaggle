# About
The NewsCLI application has been successfully implemented and verified. It is a single-file Python script that works out-of-the-box with **zero external dependencies**.


# What Was Built
A command-line script that:
1. Fetches and parses RSS feeds from Google News.
2. Supports three main subcommands:
   - **`top`**: Displays current top news headlines (default).
   - **`search "<query>"`**: Queries specific keywords (e.g. `search "artificial intelligence"`).
   - **`topic <category>`**: Filters stories by predefined categories: `world`, `nation`, `business`, `technology`, `science`, `sports`, `entertainment`, `health`.
3. Supports global parameters for custom behavior:
   - `-n` / `--limit`: Number of news items to fetch (default: 10).
   - `-l` / `--lang`: Language code (default: `en-US`).
   - `-c` / `--country`: Region code (default: `US`).
   - `-o` / `--open`: Automatically open the top story in the default web browser.
4. Includes an interactive prompt so you can easily choose an article number and open it immediately in your web browser.


# Key Technical Enhancements
- **UTF-8 Encoding Fix**: Added reconfiguration of standard output streams (`sys.stdout`/`sys.stderr`) to use UTF-8 on Windows, preventing garbled special characters (like smart quotes `’` or smart double quotes `“”`).
- **Clean Article Titles**: Parsed and separated the source name from the title to avoid redundant output (e.g., changing *"Android 17 starts hitting Pixel phones and watches today - Ars Technica"* to just *"Android 17 starts hitting Pixel phones and watches today"* under the *Ars Technica* header).
- **ANSI Terminal Styling**: Implemented colored output (using standard ANSI escape codes) that activates only when connected to a TTY console.


# How to Run the App
Here are some commands you can try in your terminal inside the workspace directory:
```bash
# Show top news (default limit is 10)
python newscli.py

# Show top 5 news
python newscli.py top -n 5

# Search for Python programming news
python newscli.py search "Python programming"

# Show technology news
python newscli.py topic technology

# Show top news in India (in English)
python newscli.py top -l en-IN -c IN
```