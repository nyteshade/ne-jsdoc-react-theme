import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { Box, Flex, Heading, Text, Badge, Separator } from '@radix-ui/themes';
import { ChevronDownIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import { DocEntry } from './DocEntry';
import { SourceView, SourceRef } from './SourceView';

const KIND_COLORS = {
  class: 'red',
  interface: 'orange',
  mixin: 'plum',
  namespace: 'green',
  function: 'green',
  object: 'cyan',
  constant: 'blue',
  property: 'blue',
  typedef: 'orange',
  event: 'plum',
};

// ── Section component with anchored ID ───────────────────

function Section({ id, title, items, onViewSource }) {
  if (!items || items.length === 0) return null;
  return (
    <Box className="doc-section" mt="6" id={id}>
      <Heading size="4" mb="4" className="section-title">
        {title}
      </Heading>
      <Flex direction="column" gap="3">
        {items.map((item, i) => (
          <div key={item.longname || (item.name + '-' + i)} id={item.name}>
            <DocEntry doclet={item} onViewSource={onViewSource} />
          </div>
        ))}
      </Flex>
    </Box>
  );
}

// ── Page TOC (right-hand navigation) ─────────────────────

function PageToc({ sections, activeMember, siblings, currentSlug, onNavigate }) {
  const [collapsed, setCollapsed] = useState({});

  const toggleSection = useCallback((id) => {
    setCollapsed(prev => ({ ...prev, [id]: !prev[id] }));
  }, []);

  const scrollTo = useCallback((id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  if (sections.length === 0 && siblings.length === 0) return null;

  return (
    <Box className="page-toc">
      {sections.length > 0 && (
        <>
          <Text size="1" weight="bold" className="page-toc-title">
            ON THIS PAGE
          </Text>
          <Flex direction="column" gap="0" mt="2">
            {sections.map(({ id, title, items }) => (
              <Box key={id}>
                <button
                  className="page-toc-section"
                  onClick={() => toggleSection(id)}
                >
                  <Flex align="center" gap="1">
                    {collapsed[id]
                      ? <ChevronRightIcon width="12" height="12" />
                      : <ChevronDownIcon width="12" height="12" />
                    }
                    <span className="page-toc-section-text">{title}</span>
                  </Flex>
                  <span className="page-toc-count">{items.length}</span>
                </button>
                {!collapsed[id] && (
                  <Flex direction="column" gap="0" className="page-toc-items">
                    {items.map((item) => (
                      <button
                        key={item.name}
                        className={`page-toc-item ${activeMember === item.name ? 'page-toc-item--active' : ''}`}
                        onClick={() => scrollTo(item.name)}
                      >
                        {item.name}
                      </button>
                    ))}
                  </Flex>
                )}
              </Box>
            ))}
          </Flex>
        </>
      )}

      {siblings.length > 0 && (
        <>
          <Text size="1" weight="bold" className="page-toc-title" mt={sections.length > 0 ? '4' : '0'}>
            ALSO IN THIS FILE
          </Text>
          <Flex direction="column" gap="0" mt="2" className="page-toc-items">
            {siblings.map((sib) => (
              <a
                key={sib.slug}
                href={`#${sib.slug}`}
                className={`page-toc-sibling ${sib.slug === currentSlug ? 'page-toc-sibling--current' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  if (onNavigate) onNavigate(sib.slug);
                }}
              >
                <Badge
                  variant="surface"
                  color={KIND_COLORS[sib.kind] || 'gray'}
                  size="1"
                  style={{ flexShrink: 0 }}
                >
                  {sib.kind === 'function' ? 'fn' : sib.kind === 'constant' ? 'const' : sib.kind.slice(0, 3)}
                </Badge>
                <span className="page-toc-sibling-name">{sib.name}</span>
              </a>
            ))}
          </Flex>
        </>
      )}
    </Box>
  );
}

// ── Main EntityPage ──────────────────────────────────────

export function EntityPage({ entry, docs, onNavigate }) {
  const m = entry.members || {};
  const kindColor = KIND_COLORS[entry.kind] || 'gray';
  const kindLabel = entry.kind.charAt(0).toUpperCase() + entry.kind.slice(1);
  const [activeMember, setActiveMember] = useState(null);
  const contentRef = useRef(null);

  // Source viewer state
  const [sourceViewFile, setSourceViewFile] = useState(null);
  const [sourceViewLine, setSourceViewLine] = useState(null);

  const handleViewSource = useCallback((file, line) => {
    setSourceViewFile(file);
    setSourceViewLine(line || null);
  }, []);

  const handleCloseSource = useCallback(() => {
    setSourceViewFile(null);
    setSourceViewLine(null);
  }, []);

  // Build sections array for both rendering and TOC
  const sections = useMemo(() => {
    const result = [];
    const add = (id, title, items) => {
      if (items && items.length > 0) result.push({ id, title, items });
    };
    add('section-properties', 'Properties', m.properties);
    add('section-static-properties', 'Static Properties', m.staticProperties);
    add('section-methods', 'Methods', m.methods);
    add('section-static-methods', 'Static Methods', m.staticMethods);
    add('section-events', 'Events', m.events);
    add('section-typedefs', 'Type Definitions', m.typedefs);
    add('section-classes', 'Classes', m.classes);
    return result;
  }, [m]);

  // Find sibling pages from the same source file
  const siblings = useMemo(() => {
    if (!docs || !entry.source || !entry.source.file) return [];
    const file = entry.source.file;
    const result = [];
    const slugs = Object.keys(docs.pages);
    for (let i = 0; i < slugs.length; i++) {
      const page = docs.pages[slugs[i]];
      if (page.kind === 'home') continue;
      if (page.source && page.source.file === file) {
        result.push({ name: page.name, slug: page.slug, kind: page.kind });
      }
    }
    result.sort((a, b) => a.name.localeCompare(b.name));
    return result;
  }, [docs, entry]);

  // Intersection observer to track which member is visible
  useEffect(() => {
    const allItems = sections.flatMap(s => s.items);
    if (allItems.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setActiveMember(e.target.id);
            break;
          }
        }
      },
      { rootMargin: '-80px 0px -60% 0px', threshold: 0 }
    );

    // Observe all doc-entry cards by their ID
    for (const item of allItems) {
      const el = document.getElementById(item.name);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [sections]);

  return (
    <Flex className="entity-page-layout">
      {/* Main content */}
      <Box className="entity-page-content" ref={contentRef}>
        {/* Header */}
        <Flex align="center" gap="3" mb="2">
          <Badge variant="solid" color={kindColor} size="2">
            {kindLabel}
          </Badge>
          <Heading size="7" className="entity-title">{entry.name}</Heading>
        </Flex>

        {/* Source */}
        {entry.source && (
          <SourceRef
            file={entry.source.file}
            line={entry.source.line}
            onClick={handleViewSource}
          />
        )}

        {/* Extends / Implements */}
        {entry.augments && entry.augments.length > 0 && (
          <Flex gap="2" mt="2" align="center">
            <Text size="2" color="gray">extends</Text>
            {entry.augments.map(a => (
              <Badge key={a} variant="outline" color="gray">{a}</Badge>
            ))}
          </Flex>
        )}
        {entry.implements && entry.implements.length > 0 && (
          <Flex gap="2" mt="2" align="center">
            <Text size="2" color="gray">implements</Text>
            {entry.implements.map(i => (
              <Badge key={i} variant="outline" color="gray">{i}</Badge>
            ))}
          </Flex>
        )}

        {/* Deprecated notice */}
        {entry.deprecated && (
          <Box className="deprecated-notice" mt="3">
            <Text size="2" weight="medium" color="red">
              Deprecated{typeof entry.deprecated === 'string' ? `: ${entry.deprecated}` : ''}
            </Text>
          </Box>
        )}

        {/* Description */}
        {entry.description && (
          <Box className="entity-description" mt="4">
            <div dangerouslySetInnerHTML={{ __html: entry.description }} />
          </Box>
        )}

        <Separator size="4" my="5" />

        {/* Signature (for callable items) */}
        {entry.signature && (
          <Box className="doc-section" mt="2">
            {entry.kind === 'class' && entry.signature.params?.length > 0 ? (
              <Heading size="4" mb="4" className="section-title">Constructor</Heading>
            ) : null}
            <DocEntry doclet={entry} isConstructor={entry.kind === 'class'} onViewSource={handleViewSource} />
          </Box>
        )}

        {/* Member sections (always flat, with anchored IDs) */}
        {sections.map(({ id, title, items }) => (
          <Section key={id} id={id} title={title} items={items} onViewSource={handleViewSource} />
        ))}
      </Box>

      {/* Right-hand page TOC */}
      {(sections.length > 0 || siblings.length > 1) && (
        <PageToc
          sections={sections}
          activeMember={activeMember}
          siblings={siblings.length > 1 ? siblings : []}
          currentSlug={entry.slug}
          onNavigate={onNavigate}
        />
      )}

      {/* Source code viewer */}
      <SourceView
        open={!!sourceViewFile}
        onClose={handleCloseSource}
        file={sourceViewFile}
        highlightedHtml={sourceViewFile && docs ? docs.source(sourceViewFile) : null}
        targetLine={sourceViewLine}
      />
    </Flex>
  );
}
