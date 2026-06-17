import os
import re
import time
import html
import email.utils
import urllib.request
import xml.etree.ElementTree as ET
from flask import Flask, jsonify, render_template, request

app = Flask(__name__)

# In-memory cache for Python release notes
CACHE_DURATION = 300  # 5 minutes cache
notes_cache = {"data": None, "timestamp": 0}

def clean_html_tags(html_str):
    """Remove HTML tags and return clean text, preserving spacing."""
    if not html_str:
        return ""
    temp = html_str
    # Replace common HTML break points with linebreaks
    temp = re.sub(r'</p>', '\n\n', temp)
    temp = re.sub(r'<br\s*/?>', '\n', temp)
    temp = re.sub(r'</li>', '\n', temp)
    # Strip HTML tags
    temp = re.sub(r'<[^>]+>', '', temp)
    # Unescape HTML entities
    clean_text = html.unescape(temp)
    # Trim lines
    lines = [re.sub(r'[ \t]+', ' ', line).strip() for line in clean_text.splitlines()]
    clean_text = '\n'.join(lines)
    clean_text = re.sub(r'\n{3,}', '\n\n', clean_text).strip()
    return clean_text

def parse_rfc822_date(date_str):
    """Parse RFC 822 format date (e.g. 'Wed, 10 Jun 2026 00:00:00 GMT') to human and ISO dates."""
    if not date_str:
        return "Unknown Date", ""
    try:
        dt = email.utils.parsedate_to_datetime(date_str)
        display_date = dt.strftime("%B %d, %Y")
        iso_date = dt.isoformat()
        return display_date, iso_date
    except Exception:
        return date_str, ""

def fetch_and_parse_notes():
    """Fetch official Python Insider RSS feed and parse it into structured updates."""
    url = "https://blog.python.org/rss.xml"
    req = urllib.request.Request(
        url,
        headers={
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
    )
    
    with urllib.request.urlopen(req, timeout=15) as response:
        xml_data = response.read()
        
    root = ET.fromstring(xml_data)
    channel = root.find('channel')
    if channel is None:
        return []
        
    all_updates = []
    
    # Iterate through RSS items
    for item in channel.findall('item'):
        title_elem = item.find('title')
        title_text = title_elem.text.strip() if title_elem is not None else "Python Core Update"
        
        link_elem = item.find('link')
        link = link_elem.text.strip() if link_elem is not None else ""
        
        guid_elem = item.find('guid')
        item_id = guid_elem.text.strip() if guid_elem is not None else link
        
        desc_elem = item.find('description')
        desc_html = desc_elem.text.strip() if desc_elem is not None else ""
        
        pub_date_elem = item.find('pubDate')
        pub_date_str = pub_date_elem.text.strip() if pub_date_elem is not None else ""
        
        # Parse date
        date_display, iso_date = parse_rfc822_date(pub_date_str)
        
        # Find category - fallback to 'General' if missing
        cat_elem = item.find('category')
        category = cat_elem.text.strip() if cat_elem is not None else "General"
        # Format: releases -> Releases
        category = category.capitalize()
        
        # Construct content HTML
        content_html = f'<h3 class="update-title" style="margin-top: 0; margin-bottom: 0.75rem; font-size: 1.15rem; color: #ffffff; font-weight: 700;">{title_text}</h3>'
        content_html += f'<div class="update-description" style="color: #cbd5e1; font-size: 0.95rem;">{desc_html}</div>'
        
        # Construct clean text for text filtering and tweet sharing
        clean_desc = clean_html_tags(desc_html)
        content_text = f"{title_text}\n\n{clean_desc}".strip()
        
        all_updates.append({
            "id": item_id,
            "date": date_display,
            "iso_date": iso_date,
            "category": category,
            "content_html": content_html,
            "content_text": content_text,
            "link": link
        })
        
    return all_updates

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/release-notes')
def get_release_notes():
    force_refresh = request.args.get('refresh', 'false').lower() == 'true'
    current_time = time.time()
    
    if not force_refresh and notes_cache["data"] is not None and (current_time - notes_cache["timestamp"] < CACHE_DURATION):
        return jsonify({
            "status": "success",
            "source": "cache",
            "data": notes_cache["data"]
        })
        
    try:
        data = fetch_and_parse_notes()
        notes_cache["data"] = data
        notes_cache["timestamp"] = current_time
        return jsonify({
            "status": "success",
            "source": "live",
            "data": data
        })
    except Exception as e:
        if notes_cache["data"] is not None:
            return jsonify({
                "status": "partial_error",
                "message": f"Failed to fetch live notes ({str(e)}). Serving cached version.",
                "source": "cache_fallback",
                "data": notes_cache["data"]
            })
        return jsonify({
            "status": "error",
            "message": f"Failed to load release notes: {str(e)}"
        }), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
