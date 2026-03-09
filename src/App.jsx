import { useState, useEffect, useCallback } from 'react';
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

export function App({ docs }) {
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

  const currentPage = docs.page(currentSlug) || docs.page('home');

  const content = (!currentPage || currentPage.kind === 'home')
    ? <HomePage readme={docs.readme} packageInfo={docs.packageInfo} />
    : <EntityPage key={currentSlug} entry={currentPage} docs={docs} onNavigate={navigate} />;

  return (
    <Theme
      appearance={appearance}
      accentColor="iris"
      grayColor="slate"
      radius="medium"
      scaling="100%"
    >
      <Layout
        docs={docs}
        currentSlug={currentSlug}
        onNavigate={navigate}
        appearance={appearance}
        onToggleAppearance={toggleAppearance}
      >
        {content}
      </Layout>
    </Theme>
  );
}
