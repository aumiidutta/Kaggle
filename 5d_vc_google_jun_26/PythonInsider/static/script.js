// App State Management
let state = {
    notes: [],
    selectedNotes: new Set(),
    searchTerm: '',
    categoryFilter: 'all',
    isLoading: false
};

// DOM Elements
const searchInput = document.getElementById('search-input');
const clearSearchBtn = document.getElementById('clear-search');
const refreshBtn = document.getElementById('refresh-btn');
const resultsCount = document.getElementById('results-count');
const selectAllBtn = document.getElementById('select-all-btn');
const deselectAllBtn = document.getElementById('deselect-all-btn');
const notesContainer = document.getElementById('notes-container');
const loadingState = document.getElementById('loading-state');
const emptyState = document.getElementById('empty-state');
const resetFiltersBtn = document.getElementById('reset-filters-btn');

// Floating Drawer Elements
const floatingDrawer = document.getElementById('floating-drawer');
const selectedCountBadge = document.getElementById('selected-count');
const tweetSelectedBtn = document.getElementById('tweet-selected-btn');
const clearSelectedBtn = document.getElementById('clear-selected-btn');
const toastContainer = document.getElementById('toast-container');

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    fetchReleaseNotes();
    setupEventListeners();
});

// Setup Events
function setupEventListeners() {
    // Theme Toggle Handler
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            showToast(`Swapped to ${newTheme === 'light' ? 'Light' : 'Dark'} Mode`, 'info');
        });
    }

    // Search event with debounce
    let searchDebounceTimeout;
    searchInput.addEventListener('input', (e) => {
        state.searchTerm = e.target.value.trim().toLowerCase();
        
        // Toggle clear button visibility
        clearSearchBtn.style.display = state.searchTerm ? 'flex' : 'none';
        
        clearTimeout(searchDebounceTimeout);
        searchDebounceTimeout = setTimeout(() => {
            renderNotes();
        }, 150);
    });

    clearSearchBtn.addEventListener('click', () => {
        searchInput.value = '';
        state.searchTerm = '';
        clearSearchBtn.style.display = 'none';
        searchInput.focus();
        renderNotes();
    });

    // Refresh Button
    refreshBtn.addEventListener('click', () => {
        if (!state.isLoading) {
            fetchReleaseNotes(true);
        }
    });

    // Select Page/Deselect All buttons
    selectAllBtn.addEventListener('click', selectVisiblePage);
    deselectAllBtn.addEventListener('click', clearSelection);

    // Reset Filters inside empty state
    resetFiltersBtn.addEventListener('click', resetFilters);

    // Floating Drawer Tweet button
    tweetSelectedBtn.addEventListener('click', handleTweetSelected);
    clearSelectedBtn.addEventListener('click', clearSelection);
}

// Toast System
function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    
    let iconSvg = '';
    if (type === 'success') {
        iconSvg = `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`;
    } else if (type === 'error') {
        iconSvg = `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>`;
    } else {
        iconSvg = `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>`;
    }

    toast.innerHTML = `${iconSvg}<span>${message}</span>`;
    toastContainer.appendChild(toast);
    
    // Auto remove toast
    setTimeout(() => {
        toast.classList.add('fade-out');
        toast.addEventListener('animationend', () => {
            toast.remove();
        });
    }, 4000);
}

// Fetch notes from Flask API
async function fetchReleaseNotes(forceRefresh = false) {
    state.isLoading = true;
    toggleLoadingState(true);
    
    try {
        const url = `/api/release-notes${forceRefresh ? '?refresh=true' : ''}`;
        const response = await fetch(url);
        const result = await response.json();
        
        if (result.status === 'success' || result.status === 'partial_error') {
            state.notes = result.data || [];
            
            if (result.status === 'partial_error') {
                showToast(result.message, 'error');
            } else {
                showToast(forceRefresh ? 'Python updates updated successfully!' : 'Python updates loaded', 'success');
            }
            
            // Revalidate selection (remove selected notes that no longer exist)
            const noteIds = new Set(state.notes.map(n => n.id));
            state.selectedNotes = new Set([...state.selectedNotes].filter(id => noteIds.has(id)));
            
            renderCategoryFilters();
            renderNotes();
        } else {
            showToast(result.message || 'Error loading Python updates', 'error');
            renderNotes(); // Render empty
        }
    } catch (error) {
        console.error(error);
        showToast('Network error while fetching updates. Please check connection.', 'error');
    } finally {
        state.isLoading = false;
        toggleLoadingState(false);
    }
}

// Render category filter chips dynamically from notes data
function renderCategoryFilters() {
    const container = document.getElementById('filter-chips-container');
    if (!container) return;
    
    // Get unique categories from notes
    const categories = new Set();
    state.notes.forEach(note => {
        if (note.category) {
            categories.add(note.category);
        }
    });
    
    // Sort categories alphabetically
    const sortedCategories = Array.from(categories).sort();
    
    container.innerHTML = '';
    
    // Add "All" chip
    const allChip = document.createElement('button');
    allChip.className = `filter-chip${state.categoryFilter === 'all' ? ' active' : ''}`;
    allChip.setAttribute('data-category', 'all');
    allChip.textContent = 'All Updates';
    allChip.addEventListener('click', () => handleCategoryFilterClick('all'));
    container.appendChild(allChip);
    
    // Add dynamic chips
    sortedCategories.forEach(cat => {
        const chip = document.createElement('button');
        chip.className = `filter-chip${state.categoryFilter === cat ? ' active' : ''}`;
        chip.setAttribute('data-category', cat);
        chip.textContent = cat;
        chip.addEventListener('click', () => handleCategoryFilterClick(cat));
        container.appendChild(chip);
    });
}

function handleCategoryFilterClick(category) {
    state.categoryFilter = category;
    
    // Update active class manually
    const chips = document.querySelectorAll('.filter-chip');
    chips.forEach(chip => {
        if (chip.getAttribute('data-category') === category) {
            chip.classList.add('active');
        } else {
            chip.classList.remove('active');
        }
    });
    
    renderNotes();
}

// Toggle loading state on UI elements
function toggleLoadingState(loading) {
    if (loading) {
        refreshBtn.classList.add('loading');
        loadingState.style.display = 'grid';
        notesContainer.style.display = 'none';
        emptyState.style.display = 'none';
    } else {
        refreshBtn.classList.remove('loading');
        loadingState.style.display = 'none';
    }
}

// Get the notes matching current filters
function getFilteredNotes() {
    return state.notes.filter(note => {
        // Category Filter match
        const matchesCategory = state.categoryFilter === 'all' || 
            note.category.toLowerCase() === state.categoryFilter.toLowerCase();
            
        // Search Term match
        const matchesSearch = !state.searchTerm || 
            note.category.toLowerCase().includes(state.searchTerm) ||
            note.date.toLowerCase().includes(state.searchTerm) ||
            note.content_text.toLowerCase().includes(state.searchTerm);
            
        return matchesCategory && matchesSearch;
    });
}

// Render release notes to DOM
function renderNotes() {
    const filteredNotes = getFilteredNotes();
    resultsCount.textContent = `Showing ${filteredNotes.length} update${filteredNotes.length === 1 ? '' : 's'}`;
    
    // Toggle Select Page / Deselect All button visibility
    const visibleSelectedCount = filteredNotes.filter(n => state.selectedNotes.has(n.id)).length;
    if (filteredNotes.length > 0) {
        selectAllBtn.style.display = (visibleSelectedCount === filteredNotes.length) ? 'none' : 'inline-flex';
        deselectAllBtn.style.display = (state.selectedNotes.size > 0) ? 'inline-flex' : 'none';
    } else {
        selectAllBtn.style.display = 'none';
        deselectAllBtn.style.display = (state.selectedNotes.size > 0) ? 'inline-flex' : 'none';
    }

    if (filteredNotes.length === 0) {
        notesContainer.style.display = 'none';
        if (!state.isLoading) {
            emptyState.style.display = 'flex';
        }
        return;
    }
    
    emptyState.style.display = 'none';
    notesContainer.style.display = 'grid';
    
    notesContainer.innerHTML = '';
    
    filteredNotes.forEach(note => {
        const isSelected = state.selectedNotes.has(note.id);
        const card = document.createElement('div');
        card.className = `note-card${isSelected ? ' selected' : ''}`;
        card.setAttribute('data-id', note.id);
        
        // Badge color class helper
        const badgeClass = `badge-${note.category.toLowerCase()}`;
        
        card.innerHTML = `
            <div class="note-select-container">
                <div class="custom-checkbox">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                    </svg>
                </div>
            </div>
            <div class="note-content-wrapper">
                <div class="note-header">
                    <div class="note-meta">
                        <span class="badge ${badgeClass}">${note.category}</span>
                        <span class="note-date">${note.date}</span>
                    </div>
                </div>
                <div class="note-body">
                    ${note.content_html}
                </div>
                <div class="note-actions">
                    <a href="${note.link}" class="btn-card-link" target="_blank" rel="noopener" title="Read the full article">
                        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                            <polyline points="15 3 21 3 21 9"/>
                            <line x1="10" y1="14" x2="21" y2="3"/>
                        </svg>
                        <span>Read Post</span>
                    </a>
                    <button class="btn-card-tweet" title="Share this update on X">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                        <span>Tweet</span>
                    </button>
                </div>
            </div>
        `;
        
        // Toggle selection on card clicking, avoiding link/button triggers
        card.addEventListener('click', (e) => {
            if (e.target.closest('a') || e.target.closest('.btn-card-tweet')) {
                return;
            }
            toggleNoteSelection(note.id);
        });
        
        // Single Tweet button click
        const tweetBtn = card.querySelector('.btn-card-tweet');
        tweetBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            tweetSingle(note);
        });
        
        notesContainer.appendChild(card);
    });
}

// Toggle single note selection state
function toggleNoteSelection(id) {
    if (state.selectedNotes.has(id)) {
        state.selectedNotes.delete(id);
    } else {
        state.selectedNotes.add(id);
    }
    
    renderNotes();
    updateFloatingDrawer();
}

// Select all notes currently visible on the page
function selectVisiblePage() {
    const filteredNotes = getFilteredNotes();
    filteredNotes.forEach(note => {
        state.selectedNotes.add(note.id);
    });
    renderNotes();
    updateFloatingDrawer();
    showToast(`Selected all ${filteredNotes.length} visible updates`, 'info');
}

// Clear all selections
function clearSelection() {
    state.selectedNotes.clear();
    renderNotes();
    updateFloatingDrawer();
}

// Reset filters to defaults
function resetFilters() {
    searchInput.value = '';
    state.searchTerm = '';
    clearSearchBtn.style.display = 'none';
    state.categoryFilter = 'all';
    
    renderCategoryFilters();
    renderNotes();
}

// Update the bottom drawer count and display state
function updateFloatingDrawer() {
    const count = state.selectedNotes.size;
    selectedCountBadge.textContent = count;
    
    if (count > 0) {
        floatingDrawer.classList.add('active');
    } else {
        floatingDrawer.classList.remove('active');
    }
}

// Generate single tweet layout and open Twitter Web Intent
function tweetSingle(note) {
    const tweetText = generateSingleTweetText(note);
    launchTwitterIntent(tweetText);
}

// Generate multi tweet / combined thread and launch intent
function handleTweetSelected() {
    const selectedList = state.notes.filter(note => state.selectedNotes.has(note.id));
    if (selectedList.length === 0) return;
    
    const tweetText = generateMultiTweetText(selectedList);
    launchTwitterIntent(tweetText);
}

// Open X Intent popup
function launchTwitterIntent(text) {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer,width=600,height=400');
    showToast('Redirected to Twitter / X!', 'success');
}

// Helper to format text for single updates
function generateSingleTweetText(note) {
    const emojiMap = {
        'releases': '🐍',
        'security': '🔒',
        'community': '👥',
        'jit': '⚡',
        'performance': '🚀',
        'rust': '🦀',
        'python': '🐍',
        'general': '💡'
    };
    
    const emoji = emojiMap[note.category.toLowerCase()] || '📝';
    const header = `${emoji} Python Core (${note.category}) Update [${note.date}]:\n\n`;
    const footer = `\n\nRead details: ${note.link}`;
    const maxContentLength = 280 - header.length - 25; // 25 chars buffer for link and ellipsis
    
    let content = note.content_text;
    if (content.length > maxContentLength) {
        content = content.substring(0, maxContentLength - 3).trim() + '...';
    }
    
    return `${header}${content}${footer}`;
}

// Helper to combine multiple selected updates into a structured summary
function generateMultiTweetText(selectedNotes) {
    if (selectedNotes.length === 1) {
        return generateSingleTweetText(selectedNotes[0]);
    }
    
    const header = `🐍 Python Core Updates Recap:\n\n`;
    const footer = `\n\nCheck official blog: https://blog.python.org/`;
    const maxEntriesLength = 280 - header.length - footer.length;
    
    let entriesText = '';
    let appendedCount = 0;
    
    for (let i = 0; i < selectedNotes.length; i++) {
        const note = selectedNotes[i];
        const emojiMap = {
            'releases': '🐍',
            'security': '🔒',
            'community': '👥',
            'jit': '⚡',
            'performance': '🚀',
            'rust': '🦀',
            'python': '🐍',
            'general': '💡'
        };
        const emoji = emojiMap[note.category.toLowerCase()] || '•';
        
        let desc = note.content_text;
        if (desc.length > 80) {
            desc = desc.substring(0, 77) + '...';
        }
        
        const row = `${emoji} [${note.category}] ${desc}\n`;
        
        if ((entriesText + row).length > maxEntriesLength - 25) { // 25 chars buffer
            const remainingCount = selectedNotes.length - appendedCount;
            entriesText += `...and ${remainingCount} more updates!\n`;
            break;
        }
        
        entriesText += row;
        appendedCount++;
    }
    
    return `${header}${entriesText}${footer}`;
}
