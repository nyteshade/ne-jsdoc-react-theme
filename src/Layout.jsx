import { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import {
  Box,
  Flex,
  Text,
  ScrollArea,
  Dialog,
  TextField,
  Kbd,
  Badge,
  Separator,
  IconButton,
} from '@radix-ui/themes';
import {
  MagnifyingGlassIcon,
  HamburgerMenuIcon,
  Cross1Icon,
  HomeIcon,
  SunIcon,
  MoonIcon,
} from '@radix-ui/react-icons';
import { KIND_COLORS } from './constants.js';

const MIN_SIDEBAR = 200;
const MAX_SIDEBAR = 480;
const DEFAULT_SIDEBAR = 280;

function truncateHtml(html, maxLen) {
  const plain = html.replace(/<[^>]*>/g, '');
  return plain.length > maxLen ? plain.slice(0, maxLen) + '\u2026' : plain;
}

export function Layout({ docs, currentSlug, onNavigate, appearance, onToggleAppearance, children }) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(() => {
    try {
      const saved = localStorage.getItem('jsdoc-sidebar-width');
      if (saved) return Math.min(Math.max(Number(saved), MIN_SIDEBAR), MAX_SIDEBAR);
    } catch (_) {}
    return DEFAULT_SIDEBAR;
  });
  const [isResizing, setIsResizing] = useState(false);
  const searchInputRef = useRef(null);
  const sidebarScrollRef = useRef(null);

  // Persist sidebar width
  useEffect(() => {
    try { localStorage.setItem('jsdoc-sidebar-width', String(sidebarWidth)); } catch (_) {}
  }, [sidebarWidth]);

  // Sidebar resize handling
  const handleResizeStart = useCallback((e) => {
    e.preventDefault();
    setIsResizing(true);

    const startX = e.clientX;
    const startWidth = sidebarWidth;

    const onMouseMove = (e) => {
      const newWidth = Math.min(Math.max(startWidth + (e.clientX - startX), MIN_SIDEBAR), MAX_SIDEBAR);
      setSidebarWidth(newWidth);
    };

    const onMouseUp = () => {
      setIsResizing(false);
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
    };

    document.body.style.cursor = 'col-resize';
    document.body.style.userSelect = 'none';
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  }, [sidebarWidth]);

  // Cmd+K shortcut
  useEffect(() => {
    const handler = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, []);

  // Search using DocContent.search()
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    return docs.search(searchQuery).slice(0, 15);
  }, [searchQuery, docs]);

  const handleSearchKeyDown = useCallback((e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex(i => Math.min(i + 1, searchResults.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex(i => Math.max(i - 1, 0));
    } else if (e.key === 'Enter' && searchResults[activeIndex]) {
      const result = searchResults[activeIndex];
      onNavigate(result.pageSlug);
      setSearchOpen(false);
      setSearchQuery('');
      if (result.anchor) {
        setTimeout(() => {
          document.getElementById(result.anchor)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [searchResults, activeIndex, onNavigate]);

  const handleNavClick = useCallback((slug) => {
    onNavigate(slug);
    setMobileOpen(false);
  }, [onNavigate]);

  // Scroll sidebar to a section
  const scrollToSection = useCallback((title) => {
    const el = document.getElementById('nav-section-' + title.replace(/\s+/g, '-'));
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  // Auto-scroll sidebar to the active nav item when slug changes
  useEffect(() => {
    if (!currentSlug || currentSlug === 'home') return;
    const el = document.getElementById('nav-item-' + currentSlug);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [currentSlug]);

  // Section jump titles
  const sectionTitles = useMemo(() => {
    return docs.nav.map(g => g.title);
  }, [docs.nav]);

  return (
    <Flex className={`app-layout ${isResizing ? 'app-layout--resizing' : ''}`}>
      {/* Mobile toggle */}
      <IconButton
        className="mobile-toggle"
        variant="ghost"
        color="gray"
        size="3"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? <Cross1Icon /> : <HamburgerMenuIcon />}
      </IconButton>

      {/* Sidebar */}
      <Box
        className={`sidebar ${mobileOpen ? 'sidebar--open' : ''}`}
        style={{ width: sidebarWidth, minWidth: sidebarWidth }}
      >
        <Flex direction="column" height="100%">
          {/* Brand */}
          <Flex className="sidebar-brand" align="center" justify="between" p="4">
            <Flex align="center" gap="3">
              <Box className="sidebar-logo">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Box>
              <Flex direction="column" gap="0">
                <Text size="2" weight="bold" className="sidebar-title">
                  {docs.packageInfo?.name || 'API Docs'}
                </Text>
                {docs.packageInfo?.version && (
                  <Text size="1" color="gray">{docs.packageInfo.version}</Text>
                )}
              </Flex>
            </Flex>
            <IconButton
              variant="ghost"
              color="gray"
              size="2"
              onClick={onToggleAppearance}
              title={appearance === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              className="theme-toggle"
            >
              {appearance === 'dark' ? <SunIcon /> : <MoonIcon />}
            </IconButton>
          </Flex>

          {/* Search trigger */}
          <Box px="3" pb="3">
            <button
              className="search-trigger"
              onClick={() => setSearchOpen(true)}
            >
              <MagnifyingGlassIcon />
              <span>Search docs...</span>
              <Kbd size="1">⌘K</Kbd>
            </button>
          </Box>

          {/* Section jump links */}
          {sectionTitles.length > 0 && (
            <Box px="3" pb="2">
              <Flex wrap="wrap" gap="1">
                {sectionTitles.map((title) => (
                  <button
                    key={title}
                    className="section-jump"
                    onClick={() => scrollToSection(title)}
                  >
                    {title.toUpperCase()}
                  </button>
                ))}
              </Flex>
            </Box>
          )}

          <Separator size="4" />

          {/* Navigation */}
          <ScrollArea className="sidebar-scroll" ref={sidebarScrollRef}>
            <Box p="3">
              <a
                href="#home"
                className={`nav-link ${currentSlug === 'home' ? 'nav-link--active' : ''}`}
                onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}
              >
                <HomeIcon />
                <Text size="2">Overview</Text>
              </a>

              {docs.nav.map((group) => (
                <Box key={group.title} mt="4" id={'nav-section-' + group.title.replace(/\s+/g, '-')}>
                  <div className="nav-group-title">
                    {group.title}
                    <span className="nav-group-count">{group.items.length}</span>
                  </div>
                  <Flex direction="column" gap="0" mt="1">
                    {group.items.map((item) => {
                      const isActive = currentSlug === item.slug;
                      return (
                        <a
                          key={item.slug}
                          id={`nav-item-${item.slug}`}
                          href={`#${item.slug}`}
                          className={`nav-link ${isActive ? 'nav-link--active' : ''}`}
                          onClick={(e) => {
                            e.preventDefault();
                            handleNavClick(item.slug);
                          }}
                        >
                          <Text size="2">{item.name}</Text>
                        </a>
                      );
                    })}
                  </Flex>
                </Box>
              ))}
            </Box>
          </ScrollArea>
        </Flex>

        {/* Resize handle */}
        <div
          className="sidebar-resize-handle"
          onMouseDown={handleResizeStart}
          onDoubleClick={() => setSidebarWidth(DEFAULT_SIDEBAR)}
        />
      </Box>

      {/* Main content */}
      <Box className="main-content">
        <ScrollArea className="main-scroll">
          <Box className="content-inner" p="5" pb="9">
            {children}
          </Box>
        </ScrollArea>
      </Box>

      {/* Search dialog */}
      <Dialog.Root open={searchOpen} onOpenChange={setSearchOpen}>
        <Dialog.Content className="search-dialog" size="3">
          <Flex align="center" gap="2" className="search-header">
            <MagnifyingGlassIcon width="18" height="18" />
            <TextField.Root
              ref={searchInputRef}
              placeholder="Search documentation..."
              value={searchQuery}
              onChange={(e) => { setSearchQuery(e.target.value); setActiveIndex(0); }}
              onKeyDown={handleSearchKeyDown}
              size="3"
              variant="surface"
              className="search-input"
            />
            <Kbd size="1">esc</Kbd>
          </Flex>
          <Separator size="4" />
          <Box className="search-results" py="2">
            {!searchQuery.trim() ? (
              <Text size="2" color="gray" align="center" className="search-hint">
                Type to search across all documentation...
              </Text>
            ) : searchResults.length === 0 ? (
              <Text size="2" color="gray" align="center" className="search-hint">
                No results found.
              </Text>
            ) : (
              searchResults.map((result, i) => (
                <a
                  key={`${result.pageSlug}-${result.entry.name}-${i}`}
                  href={`#${result.pageSlug}`}
                  className={`search-result ${i === activeIndex ? 'search-result--active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(result.pageSlug);
                    setSearchOpen(false);
                    setSearchQuery('');
                    if (result.anchor) {
                      setTimeout(() => {
                        document.getElementById(result.anchor)?.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    }
                  }}
                  onMouseEnter={() => setActiveIndex(i)}
                >
                  <Flex align="center" gap="2">
                    <Badge
                      variant="surface"
                      color={KIND_COLORS[result.entry.kind] || 'gray'}
                      size="1"
                    >
                      {result.entry.kind}
                    </Badge>
                    <Text size="2" weight="medium">{result.entry.name}</Text>
                  </Flex>
                  {result.entry.description && (
                    <Text size="1" color="gray" className="search-result-desc">
                      {truncateHtml(result.entry.description, 100)}
                    </Text>
                  )}
                </a>
              ))
            )}
          </Box>
        </Dialog.Content>
      </Dialog.Root>
    </Flex>
  );
}
