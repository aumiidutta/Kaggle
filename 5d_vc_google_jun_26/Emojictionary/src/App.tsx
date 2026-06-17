/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo } from "react";
import { 
  Search, 
  X, 
  Copy, 
  Check, 
  HelpCircle, 
  Info, 
  ExternalLink,
  Clipboard
} from "lucide-react";
import { EMOJI_LIST, CATEGORIES, EmojiItem } from "./data/emojisData";

export default function App() {
  // Navigation & filtering states
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  
  // Interaction states
  const [activeEmoji, setActiveEmoji] = useState<EmojiItem | null>(null);
  const [inspectedEmoji, setInspectedEmoji] = useState<EmojiItem | null>(EMOJI_LIST[0]);
  
  // Clipboard/Feedback states
  const [copiedType, setCopiedType] = useState<"emoji" | "html" | null>(null);
  


  // Filter emojis based on selected category and search query
  const filteredEmojis = useMemo(() => {
    return EMOJI_LIST.filter((item) => {
      // Category filter
      const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
      
      // Search query filter
      const query = searchQuery.trim().toLowerCase();
      if (!query) return matchesCategory;

      const matchesSearch = 
        item.emoji.includes(query) ||
        item.name.toLowerCase().includes(query) ||
        item.meaning.toLowerCase().includes(query) ||
        item.tags.some(tag => tag.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Handle setting inspected emoji
  const handleInspect = (item: EmojiItem) => {
    setInspectedEmoji(item);
  };

  // Copy to clipboard utility
  const copyToClipboard = (text: string, type: "emoji" | "html") => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => {
      setCopiedType(null);
    }, 2000);
  };



  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-stone-900 selection:text-stone-100">
      
      {/* 1. Header (The 'EMOJICTIONARY' title box with black borders) */}
      <div className="w-full max-w-7xl mx-auto px-4 pt-10 pb-6">
        <header className="border-t-4 border-b-4 border-black py-6 md:py-8 mb-8">
          <h1 className="text-4xl md:text-6xl font-extrabold font-display tracking-[0.2em] text-center text-stone-900 select-none">
            EMOJICTIONARY
          </h1>
          <p className="text-center font-display font-medium text-xs md:text-sm tracking-widest text-stone-500 mt-2 uppercase">
            A Clean Interactive Guide to Emojis and Meanings
          </p>
        </header>

        {/* 2. Horizontal Category Selectors */}
        <div className="flex flex-wrap justify-center gap-x-6 md:gap-x-8 gap-y-3 font-display text-xs md:text-sm font-bold tracking-wider mb-8 border-b border-stone-200 pb-6 select-none">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setSelectedCategory(cat.id);
                setSearchQuery(""); // Clear search to see entire category
              }}
              className={`px-2 py-1 uppercase transition-all duration-200 relative cursor-pointer active:scale-95 ${
                selectedCategory === cat.id
                  ? "text-stone-900 scale-105 font-black"
                  : "text-stone-400 hover:text-stone-700"
              }`}
              id={`cat-btn-${cat.id}`}
            >
              {cat.name}
              {selectedCategory === cat.id && (
                <span className="absolute left-1 right-1 -bottom-1.5 h-1 bg-stone-900 rounded-full animate-fade-in"></span>
              )}
            </button>
          ))}
        </div>

        {/* 3. Helper Search bar */}
        <div className="max-w-md mx-auto mb-10 px-2">
          {/* Symmetrical Search Frame */}
          <div className="relative w-full flex items-center bg-white border-2 border-stone-900 rounded-full overflow-hidden px-4 py-2.5 shadow-sm transition-all focus-within:ring-2 focus-within:ring-stone-400">
            <Search className="w-5 h-5 text-stone-400 mr-2 shrink-0" />
            <input
              type="text"
              placeholder={`Search in ${selectedCategory === 'all' ? 'all categories' : `${selectedCategory}`}...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent outline-none text-stone-800 text-sm font-sans"
              id="emoji-search-input"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="text-stone-400 hover:text-stone-900 transition-colors shrink-0"
                id="search-clear-btn"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>

        {/* 4. Instant Meaning Inspector Bar */}
        <div 
          className="max-w-4xl mx-auto mb-10 bg-stone-100 border-l-4 border-stone-900 py-4 px-6 rounded-r-xl shadow-inner transition-colors duration-200"
          id="instant-inspector-container"
        >
          {inspectedEmoji ? (
            <div className="flex items-start gap-4 animate-fade-in">
              <span className="text-4xl shrink-0 select-none">{inspectedEmoji.emoji}</span>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-display font-bold text-stone-900 text-sm tracking-wide uppercase">
                    {inspectedEmoji.name}
                  </h3>
                  <span className="text-[10px] bg-stone-200 text-stone-600 font-bold font-display py-0.5 px-2 rounded-full uppercase tracking-wider">
                    {inspectedEmoji.category}
                  </span>
                </div>
                <p className="text-stone-700 text-sm mt-1 leading-relaxed font-sans">
                  {inspectedEmoji.meaning}
                </p>
                <button
                  onClick={() => setActiveEmoji(inspectedEmoji)}
                  className="text-xs text-stone-500 hover:text-stone-900 font-bold gap-1 mt-2 flex items-center transition-colors underline cursor-pointer"
                >
                  <Info className="w-3.5 h-3.5" /> Direct Lookup Details
                </button>
              </div>
            </div>
          ) : (
            <p className="text-stone-500 text-sm font-sans italic text-center py-2 select-none">
              💡 Hover over or click any emoji circle below to immediately inspect its meaning!
            </p>
          )}
        </div>

        {/* 5. Main Grid of Circular Cards */}
        {filteredEmojis.length > 0 ? (
          <div 
            className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-4 md:gap-6 justify-center items-center py-4"
            id="emoji-grid-container"
          >
            {filteredEmojis.map((item, idx) => (
              <div
                key={`${item.emoji}-${idx}`}
                onClick={() => {
                  handleInspect(item);
                  setActiveEmoji(item);
                }}
                onMouseEnter={() => handleInspect(item)}
                className={`group aspect-square rounded-full bg-white border border-stone-200 hover:border-stone-950 shadow-sm hover:shadow-md hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center cursor-pointer select-none relative ${
                  inspectedEmoji?.emoji === item.emoji ? 'ring-2 ring-stone-900 scale-102 border-stone-950 bg-stone-50' : ''
                }`}
                id={`emoji-card-${idx}`}
                title={`${item.name}`}
              >
                <span className="text-3xl md:text-4xl transition-transform duration-200 group-hover:scale-110">
                  {item.emoji}
                </span>
                
                {/* Micro Category Dot Indicators for visual elegance */}
                <span className="absolute bottom-2.5 w-1 h-1 rounded-full bg-stone-300 group-hover:bg-stone-800 transition-colors"></span>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 px-4 bg-stone-100/50 rounded-2xl border border-dashed border-stone-200 max-w-lg mx-auto">
            <HelpCircle className="w-12 h-12 text-stone-300 mx-auto mb-3" />
            <h3 className="font-display font-bold text-stone-800 mb-1">No Emojis Found</h3>
            <p className="text-sm text-stone-500 mb-4">
              We couldn't find any emojis matching "{searchQuery}" in our {selectedCategory} tab.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
              className="text-xs bg-stone-900 text-white font-bold py-2 px-4 rounded-full uppercase tracking-wider hover:bg-stone-800"
            >
              Clear Search Filters
            </button>
          </div>
        )}


      </div>

      {/* FOOTER */}
      <footer className="mt-auto py-12 border-t border-stone-200 bg-stone-100 text-stone-500 select-none">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="font-display font-medium text-xs md:text-sm tracking-widest uppercase text-stone-900">
            EMOJICTIONARY
          </p>
          <p className="text-xs font-sans text-stone-400 mt-2">
            Perfectly curated standard Unicode emoji library. Optimized for all modern mobile, tablet, and desktop screens.
          </p>
          <div className="flex justify-center gap-4 mt-4 text-xs font-semibold font-display tracking-widest uppercase text-stone-400">
            <span>Clean Codebase</span>
            <span>•</span>
            <span>Offline First</span>
            <span>•</span>
            <span>Unicode Compliant</span>
          </div>
        </div>
      </footer>

      {/* 8. Floating Detail Lookup Drawer (Modal Detail Sheet) */}
      {activeEmoji && (
        <div 
          className="fixed inset-0 bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-fade-in"
          id="emoji-detail-modal"
          onClick={() => {
            setActiveEmoji(null);
            setCopiedType(null);
          }}
        >
          {/* Prevent click propagation inside white card */}
          <div 
            className="bg-white rounded-3xl border-3 border-stone-950 p-6 md:p-8 max-w-md w-full shadow-2xl relative animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => {
                setActiveEmoji(null);
                setCopiedType(null);
              }}
              className="absolute right-4 top-4 w-9 h-9 bg-stone-100 hover:bg-stone-900 hover:text-white rounded-full flex items-center justify-center text-stone-700 transition-all active:scale-90 cursor-pointer"
              id="modal-close-btn"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Giant Graphic Circle */}
            <div className="flex flex-col items-center text-center">
              <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-stone-50 border border-stone-200 shadow-inner flex items-center justify-center text-6xl md:text-7xl mb-6 select-none select-none">
                {activeEmoji.emoji}
              </div>

              {/* Tag Details */}
              <span className="text-[10px] tracking-widest font-display font-extrabold uppercase bg-stone-900 text-white rounded-full py-1 px-4 mb-3">
                {activeEmoji.category}
              </span>

              {/* Title Header */}
              <h2 className="font-display font-extrabold text-2xl md:text-3xl tracking-wide text-stone-900 uppercase">
                {activeEmoji.name}
              </h2>

              <div className="w-12 h-0.5 bg-stone-300 my-4 rounded-full"></div>

              {/* 1-Line Meanings */}
              <p className="text-stone-700 text-sm md:text-base leading-relaxed mb-6 font-sans">
                "{activeEmoji.meaning}"
              </p>

              {/* Metadata Details Accordion */}
              <div className="w-full bg-stone-50 rounded-xl border border-stone-200 p-4 mb-6">
                <div className="grid grid-cols-2 gap-y-3 gap-x-2 text-left font-sans">
                  <div>
                    <span className="block text-[10px] font-bold font-display text-stone-400 uppercase tracking-wider">
                      Unicode Point
                    </span>
                    <span className="text-xs font-mono text-stone-800 font-bold">
                      U+{activeEmoji.emoji.codePointAt(0)?.toString(16).toUpperCase()}
                    </span>
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold font-display text-stone-400 uppercase tracking-wider">
                      HTML Entity
                    </span>
                    <span className="text-xs font-mono text-stone-800 font-bold">
                      &amp;#{activeEmoji.emoji.codePointAt(0)};
                    </span>
                  </div>
                  <div className="col-span-2">
                    <span className="block text-[10px] font-bold font-display text-stone-400 uppercase tracking-wider">
                      Search Tags / Keywords
                    </span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {activeEmoji.tags.map((tag, idx) => (
                        <span key={`${tag}-${idx}`} className="text-[10px] bg-stone-200/70 text-stone-600 px-2 py-0.5 rounded-md font-medium">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Clipboard Action buttons */}
              <div className="grid grid-cols-2 gap-3 w-full">
                {/* Copy Emoji */}
                <button
                  onClick={() => copyToClipboard(activeEmoji.emoji, "emoji")}
                  className={`py-3 px-4 rounded-xl font-display font-bold text-xs tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-2 border cursor-pointer active:scale-95 ${
                    copiedType === "emoji"
                      ? "bg-green-50 border-green-600 text-green-700"
                      : "bg-stone-900 border-stone-900 text-white hover:bg-stone-800"
                  }`}
                  id="modal-copy-emoji-btn"
                >
                  {copiedType === "emoji" ? (
                    <>
                      <Check className="w-4 h-4 text-green-600" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Clipboard className="w-4 h-4" />
                      Copy Emoji
                    </>
                  )}
                </button>

                {/* Copy HTML Code */}
                <button
                  onClick={() => copyToClipboard(`&#${activeEmoji.emoji.codePointAt(0)};`, "html")}
                  className={`py-3 px-4 rounded-xl font-display font-bold text-xs tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-2 border cursor-pointer active:scale-95 ${
                    copiedType === "html"
                      ? "bg-green-50 border-green-600 text-green-700"
                      : "bg-white border-stone-300 text-stone-700 hover:border-stone-950"
                  }`}
                  id="modal-copy-html-btn"
                >
                  {copiedType === "html" ? (
                    <>
                      <Check className="w-4 h-4 text-green-600" />
                      Entity Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      Copy Code
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
