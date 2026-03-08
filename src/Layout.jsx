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
  FileTextIcon,
  CubeIcon,
  ComponentInstanceIcon,
  MixIcon,
  GlobeIcon,
  SunIcon,
  MoonIcon,
  LayersIcon,
  StackIcon,
  ListBulletIcon,
} from '@radix-ui/react-icons';

const KIND_ICONS = {
  module: FileTextIcon,
  class: CubeIcon,
  interface: ComponentInstanceIcon,
  namespace: MixIcon,
  mixin: MixIcon,
  global: GlobeIcon,
};

const MIN_SIDEBAR = 200;
const MAX_SIDEBAR = 480;
const DEFAULT_SIDEBAR = 280;

const VIEW_MODES = [
  { id: 'default', label: 'Default', icon: ListBulletIcon },
  { id: 'type', label: 'By Type', icon: LayersIcon },
  { id: 'file', label: 'By File', icon: StackIcon },
];

const TYPE_ORDER = {
  class: { title: 'Classes', order: 0 },
  function: { title: 'Functions', order: 1 },
  constant: { title: 'Constants', order: 2 },
  member: { title: 'Members', order: 3 },
  typedef: { title: 'Type Definitions', order: 4 },
  module: { title: 'Modules', order: 5 },
  interface: { title: 'Interfaces', order: 6 },
  namespace: { title: 'Namespaces', order: 7 },
  mixin: { title: 'Mixins', order: 8 },
  event: { title: 'Events', order: 9 },
};

function collectAllNavItems(nav) {
  const items = [];
  for (const group of nav) {
    // For the global group, use globalItems for individual entries
    if (group.globalItems) {
      for (const gi of group.globalItems) {
        items.push(gi);
      }
    }
    for (const item of group.items) {
      if (item.kind !== 'global') {
        items.push(item);
      }
    }
  }
  return items;
}

function buildNavByType(nav) {
  const allItems = collectAllNavItems(nav);
  const groups = {};

  for (const item of allItems) {
    const kind = item.kind || 'member';
    const info = TYPE_ORDER[kind] || { title: kind.charAt(0).toUpperCase() + kind.slice(1), order: 99 };
    if (!groups[kind]) {
      groups[kind] = { title: info.title, order: info.order, items: [] };
    }
    groups[kind].items.push(item);
  }

  return Object.values(groups)
    .sort((a, b) => a.order - b.order)
    .map(g => ({
      title: g.title,
      items: g.items.sort((a, b) => a.name.localeCompare(b.name)),
    }))
    .filter(g => g.items.length > 0);
}

function buildNavByFile(nav) {
  const allItems = collectAllNavItems(nav);
  const groups = {};

  for (const item of allItems) {
    const fname = item.filename || 'Unknown';
    if (!groups[fname]) {
      groups[fname] = { title: fname, items: [] };
    }
    groups[fname].items.push(item);
  }

  return Object.values(groups)
    .sort((a, b) => a.title.localeCompare(b.title))
    .map(g => ({
      ...g,
      items: g.items.sort((a, b) => a.name.localeCompare(b.name)),
    }))
    .filter(g => g.items.length > 0);
}

function buildNavDefault(nav) {
  // Sort items alphabetically within each group
  return nav.map(group => ({
    ...group,
    items: [...group.items].sort((a, b) => a.name.localeCompare(b.name)),
  }));
}

export function Layout({ nav, currentSlug, onNavigate, packageInfo, pages, children, appearance, onToggleAppearance }) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [viewMode, setViewMode] = useState(() => {
    try {
      const saved = localStorage.getItem('jsdoc-nav-view');
      if (saved && VIEW_MODES.some(m => m.id === saved)) return saved;
    } catch (_) {}
    return 'default';
  });
  const [sidebarWidth, setSidebarWidth] = useState(() => {
    try {
      const saved = localStorage.getItem('jsdoc-sidebar-width');
      if (saved) return Math.min(Math.max(Number(saved), MIN_SIDEBAR), MAX_SIDEBAR);
    } catch (_) {}
    return DEFAULT_SIDEBAR;
  });
  const [isResizing, setIsResizing] = useState(false);
  const searchInputRef = useRef(null);

  // Persist sidebar width
  useEffect(() => {
    try { localStorage.setItem('jsdoc-sidebar-width', String(sidebarWidth)); } catch (_) {}
  }, [sidebarWidth]);

  // Persist view mode
  useEffect(() => {
    try { localStorage.setItem('jsdoc-nav-view', viewMode); } catch (_) {}
  }, [viewMode]);

  // Compute nav groups based on view mode
  const computedNav = useMemo(() => {
    switch (viewMode) {
      case 'type': return buildNavByType(nav);
      case 'file': return buildNavByFile(nav);
      default: return buildNavDefault(nav);
    }
  }, [nav, viewMode]);

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

  // ⌘K shortcut
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

  // Build search index from all pages
  const searchIndex = useMemo(() => {
    const index = [];
    for (const page of pages) {
      if (page.kind === 'home') continue;
      index.push({
        name: page.title,
        slug: page.slug,
        kind: page.kind,
        description: page.doclet?.description || page.doclet?.classdesc || '',
      });
      if (page.members) {
        for (const [category, items] of Object.entries(page.members)) {
          for (const item of items) {
            index.push({
              name: `${page.title}.${item.name}`,
              slug: page.slug,
              anchor: item.name,
              kind: item.kind,
              description: item.description || '',
              parent: page.title,
            });
          }
        }
      }
    }
    return index;
  }, [pages]);

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase();
    return searchIndex
      .filter(item =>
        item.name.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q)
      )
      .slice(0, 15);
  }, [searchQuery, searchIndex]);

  const handleSearchKeyDown = useCallback((e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex(i => Math.min(i + 1, searchResults.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex(i => Math.max(i - 1, 0));
    } else if (e.key === 'Enter' && searchResults[activeIndex]) {
      const result = searchResults[activeIndex];
      onNavigate(result.slug);
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
                  {packageInfo?.name || 'API Docs'}
                </Text>
                {packageInfo?.version && (
                  <Text size="1" color="gray">{packageInfo.version}</Text>
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

          <Separator size="4" />

          {/* View mode selector */}
          <Flex className="view-mode-bar" px="3" py="2" gap="1">
            {VIEW_MODES.map((mode) => {
              const Icon = mode.icon;
              return (
                <button
                  key={mode.id}
                  className={`view-mode-btn ${viewMode === mode.id ? 'view-mode-btn--active' : ''}`}
                  onClick={() => setViewMode(mode.id)}
                  title={mode.label}
                >
                  <Icon width="14" height="14" />
                  <span>{mode.label}</span>
                </button>
              );
            })}
          </Flex>

          <Separator size="4" />

          {/* Navigation */}
          <ScrollArea className="sidebar-scroll">
            <Box p="3">
              <a
                href="#home"
                className={`nav-link ${currentSlug === 'home' ? 'nav-link--active' : ''}`}
                onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}
              >
                <HomeIcon />
                <Text size="2">Overview</Text>
              </a>

              {computedNav.map((group) => (
                <Box key={group.title} mt="4">
                  <Text size="1" weight="medium" color="gray" className="nav-group-title">
                    {group.title}
                  </Text>
                  <Flex direction="column" gap="1" mt="2">
                    {group.items.map((item) => {
                      const Icon = KIND_ICONS[item.kind] || FileTextIcon;
                      return (
                        <a
                          key={item.slug}
                          href={`#${item.slug}`}
                          className={`nav-link ${currentSlug === item.slug ? 'nav-link--active' : ''}`}
                          onClick={(e) => { e.preventDefault(); handleNavClick(item.slug); }}
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
                  key={`${result.slug}-${result.name}`}
                  href={`#${result.slug}`}
                  className={`search-result ${i === activeIndex ? 'search-result--active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(result.slug);
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
                      color={result.kind === 'class' ? 'red' : result.kind === 'function' ? 'green' : 'gray'}
                      size="1"
                    >
                      {result.kind}
                    </Badge>
                    <Text size="2" weight="medium">{result.name}</Text>
                  </Flex>
                  {result.description && (
                    <Text
                      size="1"
                      color="gray"
                      className="search-result-desc"
                      dangerouslySetInnerHTML={{ __html: result.description.slice(0, 100) }}
                    />
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
