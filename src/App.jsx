import { useState, useEffect, useCallback, useMemo } from 'react';
import { Theme } from '@radix-ui/themes';
import { Layout } from './Layout';
import { HomePage } from './HomePage';
import { EntityPage } from './EntityPage';

function getHash() {
  return window.location.hash.slice(1) || 'home';
}

function getInitialAppearance() {
  try {
    const saved = localStorage.getItem('jsdoc-appearance');
    if (saved === 'light' || saved === 'dark') return saved;
  } catch (_) {}
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    return 'light';
  }
  return 'dark';
}

export function App({ data }) {
  const [currentSlug, setCurrentSlug] = useState(getHash);
  const [appearance, setAppearance] = useState(getInitialAppearance);

  useEffect(() => {
    const handler = () => setCurrentSlug(getHash());
    window.addEventListener('hashchange', handler);
    return () => window.removeEventListener('hashchange', handler);
  }, []);

  useEffect(() => {
    try { localStorage.setItem('jsdoc-appearance', appearance); } catch (_) {}
  }, [appearance]);

  const toggleAppearance = useCallback(() => {
    setAppearance(a => a === 'dark' ? 'light' : 'dark');
  }, []);

  const navigate = useCallback((slug) => {
    window.location.hash = slug;
  }, []);

  const currentPage = useMemo(
    () => data.pages.find(p => p.slug === currentSlug) || data.pages[0],
    [data.pages, currentSlug]
  );

  const content = currentPage.kind === 'home'
    ? <HomePage readme={data.readme} packageInfo={data.packageInfo} />
    : <EntityPage page={currentPage} />;

  return (
    <Theme
      appearance={appearance}
      accentColor="red"
      grayColor="slate"
      radius="medium"
      scaling="100%"
    >
      <Layout
        nav={data.nav}
        currentSlug={currentSlug}
        onNavigate={navigate}
        packageInfo={data.packageInfo}
        pages={data.pages}
        appearance={appearance}
        onToggleAppearance={toggleAppearance}
      >
        {content}
      </Layout>
    </Theme>
  );
}
