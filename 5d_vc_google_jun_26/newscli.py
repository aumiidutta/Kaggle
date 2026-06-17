#!/usr/bin/env python3
"""
newscli - Google News CLI Application
Fetches, parses, and displays the latest news from Google News RSS feeds.
"""

import argparse
import ctypes
import html
import os
import sys
import urllib.parse
import urllib.request
import webbrowser
import xml.etree.ElementTree as ET
from datetime import datetime
from email.utils import parsedate_to_datetime

# Reconfigure stdout/stderr to use UTF-8 to prevent encoding issues on Windows (e.g. garbled quotes)
def configure_encoding():
    for stream in (sys.stdout, sys.stderr):
        if hasattr(stream, 'reconfigure'):
            try:
                stream.reconfigure(encoding='utf-8', errors='replace')
            except Exception:
                pass

# Enable ANSI escape sequences on Windows if stdout is a TTY
def enable_ansi():
    if sys.platform == 'win32' and sys.stdout.isatty():
        try:
            kernel32 = ctypes.windll.kernel32
            # 7 = ENABLE_PROCESSED_OUTPUT | ENABLE_WRAP_AT_EOL_OUTPUT | ENABLE_VIRTUAL_TERMINAL_PROCESSING
            kernel32.SetConsoleMode(kernel32.GetStdHandle(-11), 7)
        except Exception:
            pass

configure_encoding()
enable_ansi()

# Color configuration
class Colors:
    enabled = sys.stdout.isatty()

    HEADER = '\033[95m' if enabled else ''
    BLUE = '\033[94m' if enabled else ''
    CYAN = '\033[96m' if enabled else ''
    GREEN = '\033[92m' if enabled else ''
    WARNING = '\033[93m' if enabled else ''
    FAIL = '\033[91m' if enabled else ''
    BOLD = '\033[1m' if enabled else ''
    UNDERLINE = '\033[4m' if enabled else ''
    GRAY = '\033[90m' if enabled else ''
    END = '\033[0m' if enabled else ''

# Predefined Google News Topics
TOPICS = ['world', 'nation', 'business', 'technology', 'science', 'sports', 'entertainment', 'health']

def parse_date(date_str):
    """Parse RFC 2822 date string and return a pretty formatted local time string."""
    try:
        dt = parsedate_to_datetime(date_str)
        # Format: YYYY-MM-DD HH:MM
        return dt.strftime('%Y-%m-%d %H:%M')
    except Exception:
        return date_str

def fetch_rss(url):
    """Fetch and parse RSS feed, returning a list of dicts representing news items."""
    req = urllib.request.Request(
        url, 
        headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'}
    )
    
    try:
        with urllib.request.urlopen(req, timeout=10) as response:
            xml_data = response.read()
    except Exception as e:
        print(f"{Colors.FAIL}Error fetching news: {e}{Colors.END}", file=sys.stderr)
        return []

    try:
        root = ET.fromstring(xml_data)
    except ET.ParseError as e:
        print(f"{Colors.FAIL}Error parsing feed XML: {e}{Colors.END}", file=sys.stderr)
        return []

    articles = []
    for item in root.findall('.//item'):
        title_elem = item.find('title')
        link_elem = item.find('link')
        pub_date_elem = item.find('pubDate')
        source_elem = item.find('source')

        title_text = html.unescape(title_elem.text) if title_elem is not None else 'No Title'
        link = link_elem.text if link_elem is not None else ''
        pub_date = pub_date_elem.text if pub_date_elem is not None else ''
        source = source_elem.text if source_elem is not None else ''

        # Clean source from the end of title to avoid duplication
        title_clean = title_text
        if source:
            source_suffix = f" - {source}"
            if title_clean.endswith(source_suffix):
                title_clean = title_clean[:-len(source_suffix)]
            elif title_clean.endswith(f" – {source}"):  # Handle en-dash
                title_clean = title_clean[:-len(source) - 3]
        elif ' - ' in title_text:
            title_clean, source_fallback = title_text.rsplit(' - ', 1)
            source = source_fallback

        articles.append({
            'title': title_clean.strip(),
            'source': source.strip() if source else 'Google News',
            'link': link,
            'date': parse_date(pub_date)
        })

    return articles

def print_articles(articles, limit):
    """Display the parsed articles in a structured, colored list."""
    display_list = articles[:limit]
    if not display_list:
        print(f"{Colors.WARNING}No articles found.{Colors.END}")
        return

    print(f"\n{Colors.HEADER}{Colors.BOLD}=== LATEST GOOGLE NEWS ==={Colors.END}\n")
    for idx, art in enumerate(display_list, 1):
        # Format index with padding
        idx_str = f"[{idx}]".ljust(5)
        print(f"{Colors.CYAN}{idx_str}{Colors.END} {Colors.BOLD}{art['title']}{Colors.END}")
        print(f"      {Colors.GREEN}{art['source']}{Colors.END} | {Colors.GRAY}{art['date']}{Colors.END}")
        print()

def main():
    # Parent parser with shared options
    parent_parser = argparse.ArgumentParser(add_help=False)
    parent_parser.add_argument('-n', '--limit', type=int, default=10, help='Number of news stories to display (default: 10)')
    parent_parser.add_argument('-l', '--lang', type=str, default='en-US', help='Language code (default: en-US)')
    parent_parser.add_argument('-c', '--country', type=str, default='US', help='Country code (default: US)')
    parent_parser.add_argument('-o', '--open', action='store_true', help='Immediately open the top story in default browser')

    parser = argparse.ArgumentParser(
        description="newscli - Google News CLI Application - Get the latest news from Google in your terminal.",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  python newscli.py top                       Show top stories
  python newscli.py search "space exploration" Search for news
  python newscli.py topic technology           Show technology news
  python newscli.py top -n 5                   Show top 5 stories
  python newscli.py top -l en-IN -c IN         Show top stories for India
        """
    )
    
    # Subcommands
    subparsers = parser.add_subparsers(dest='command', help='Command to run (default: top)')
    
    # top command
    subparsers.add_parser('top', parents=[parent_parser], help='Show the top news stories (default command)')
    
    # search command
    search_parser = subparsers.add_parser('search', parents=[parent_parser], help='Search Google News for keywords')
    search_parser.add_argument('query', type=str, help='Search query term or phrase')
    
    # topic command
    topic_parser = subparsers.add_parser('topic', parents=[parent_parser], help='Show news for a specific topic')
    topic_parser.add_argument(
        'topic_name', 
        choices=TOPICS,
        help='Name of the topic category'
    )
    
    # Parse args (default to 'top' if no subcommand given)
    if len(sys.argv) == 1:
        sys.argv.append('top')
    elif sys.argv[1] not in ['top', 'search', 'topic', '-h', '--help']:
        # If user passed options but not a command, default to 'top'
        # e.g. python newscli.py -n 5 -> python newscli.py top -n 5
        sys.argv.insert(1, 'top')
        
    args = parser.parse_args()

    # Formulate country/lang identifier parameter
    # Google news uses ceid=Country:Lang (e.g. ceid=US:en or ceid=IN:en)
    # Usually country is uppercase, lang is lowercase prefix (e.g., en)
    lang_prefix = args.lang.split('-')[0].lower()
    country_upper = args.country.upper()
    ceid = f"{country_upper}:{lang_prefix}"

    # Build URL based on command
    if args.command == 'search':
        encoded_query = urllib.parse.quote(args.query)
        url = f"https://news.google.com/rss/search?q={encoded_query}&hl={args.lang}&gl={args.country}&ceid={ceid}"
    elif args.command == 'topic':
        topic_upper = args.topic_name.upper()
        url = f"https://news.google.com/rss/headlines/section/topic/{topic_upper}?hl={args.lang}&gl={args.country}&ceid={ceid}"
    else: # top
        url = f"https://news.google.com/rss?hl={args.lang}&gl={args.country}&ceid={ceid}"

    # Fetch and parse
    articles = fetch_rss(url)
    
    if not articles:
        return

    # Print results
    print_articles(articles, args.limit)

    # Immediately open top story if requested
    if args.open and articles:
        print(f"{Colors.BLUE}Opening top story in browser...{Colors.END}")
        webbrowser.open(articles[0]['link'])
        return

    # Interactive prompt to open articles
    display_count = min(len(articles), args.limit)
    while True:
        try:
            choice = input(
                f"Select an article number (1-{display_count}) to open, or 'q' to quit: "
            ).strip().lower()
            
            if choice == 'q':
                break
            
            if not choice:
                continue

            idx = int(choice)
            if 1 <= idx <= display_count:
                article = articles[idx - 1]
                print(f"{Colors.BLUE}Opening article in web browser:{Colors.END}")
                print(f"\"{article['title']}\"")
                webbrowser.open(article['link'])
            else:
                print(f"{Colors.WARNING}Please enter a number between 1 and {display_count}.{Colors.END}")
        except ValueError:
            print(f"{Colors.WARNING}Invalid input. Please enter a number or 'q'.{Colors.END}")
        except (KeyboardInterrupt, EOFError):
            print("\nExiting.")
            break

if __name__ == '__main__':
    main()
