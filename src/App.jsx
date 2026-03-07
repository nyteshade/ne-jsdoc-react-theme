import { useState, useEffect, useCallback, useMemo } from 'react';
import { Theme } from '@radix-ui/themes';
import { Layout } from './Layout';
import { HomePage } from './HomePage';
import { EntityPage } from './EntityPage';

function getHash() {
  return window.location.hash.slice(1) || 'home';
}

export function App({ data }) {
  const [currentSlug, setCurrentSlug] = useState(getHash);

  useEffect(() => {
    const handler = () => setCurrentSlug(getHash());
    window.addEventListener('hashchange', handler);
    return () => window.removeEventListener('hashchange', handler);
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
      appearance="dark"
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
      >
        {content}
      </Layout>
    </Theme>
  );
}
