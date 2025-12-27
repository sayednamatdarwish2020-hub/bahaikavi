import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { LOCALES, brand, nav } from '../lib/i18n';
import { IconClose, IconMenu, IconSearch } from './Icons';

function replaceLocale(pathname, nextLocale) {
  // Replace the first path segment if it's a locale.
  const parts = pathname.split('?')[0].split('#')[0].split('/').filter(Boolean);
  if (parts.length === 0) return `/${nextLocale}`;
  if (LOCALES.includes(parts[0])) parts[0] = nextLocale;
  else parts.unshift(nextLocale);
  return `/${parts.join('/')}`;
}

export default function Header({ locale }) {
  const router = useRouter();
  const tNav = nav[locale];
  const tBrand = brand[locale];

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [chips, setChips] = useState({ articles: true, qa: false, resources: false });

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        setDrawerOpen(false);
        setSearchOpen(false);
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, []);

  const currentAsPath = useMemo(() => router.asPath || `/${locale}`, [router.asPath, locale]);

  const onChangeLocale = (e) => {
    const nextLocale = e.target.value;
    router.push(replaceLocale(currentAsPath, nextLocale));
  };

  const toggleChip = (key) => setChips((prev) => ({ ...prev, [key]: !prev[key] }));

  const href = (slug) => `/${locale}${slug === '/' ? '' : slug}`;

  return (
    <>
      <a className="skip-link" href="#content">
        {locale === 'en' ? 'Skip to content' : locale === 'ps' ? 'منځپانګې ته ورتلل' : 'رفتن به محتوا'}
      </a>

      <header className="header">
        <div className="container">
          <div className="row">
            <button className="icon-btn mobile-only" aria-label="Menu" onClick={() => setDrawerOpen(true)}>
              <IconMenu />
            </button>

            <Link href={href('/')} className="brand" aria-label={tBrand.name}>
              <div className="logo" aria-hidden="true" />
              <div>
                <div className="name">{tBrand.name}</div>
                <div className="tag">{tBrand.tag}</div>
              </div>
            </Link>

            <nav className="nav desktop-only" aria-label="Primary">
              <Link href={href('/')} aria-current={router.pathname === `/${locale}` ? 'page' : undefined}>{tNav.home}</Link>
              <Link href={href('/what-is-bahai')}>{tNav.what}</Link>
              <Link href={href('/history')}>{tNav.history}</Link>
              <Link href={href('/critique')}>{tNav.critique}</Link>
              <Link href={href('/qa')}>{tNav.qa}</Link>
              <Link href={href('/mahdism')}>{tNav.mahdism}</Link>
              <Link href={href('/articles')}>{tNav.articles}</Link>
              <Link href={href('/media')}>{tNav.media}</Link>
              <Link href={href('/contact')}>{tNav.contact}</Link>
            </nav>

            <div className="header-actions">
              <button className="icon-btn" aria-label="Search" onClick={() => setSearchOpen(true)}>
                <IconSearch />
              </button>
              <select className="lang" aria-label="Language" value={locale} onChange={onChangeLocale}>
                <option value="fa">FA</option>
                <option value="ps">PS</option>
                <option value="en">EN</option>
              </select>
            </div>
          </div>
        </div>
      </header>

      {/* Drawer */}
      <div
        className={`drawer-backdrop ${drawerOpen ? 'open' : ''}`}
        aria-hidden={!drawerOpen}
        onClick={() => setDrawerOpen(false)}
      />
      <aside className={`drawer ${drawerOpen ? 'open' : ''}`} aria-label="Menu">
        <div className="top">
          <select className="lang" aria-label="Language" value={locale} onChange={onChangeLocale}>
            <option value="fa">FA</option>
            <option value="ps">PS</option>
            <option value="en">EN</option>
          </select>
          <button className="icon-btn" aria-label="Close" onClick={() => setDrawerOpen(false)}>
            <IconClose />
          </button>
        </div>
        <nav className="menu">
          <Link href={href('/')}>{tNav.home}</Link>
          <Link href={href('/what-is-bahai')}>{tNav.what}</Link>
          <Link href={href('/history')}>{tNav.history}</Link>
          <Link href={href('/critique')}>{tNav.critique}</Link>
          <Link href={href('/qa')}>{tNav.qa}</Link>
          <Link href={href('/mahdism')}>{tNav.mahdism}</Link>
          <Link href={href('/articles')}>{tNav.articles}</Link>
          <Link href={href('/media')}>{tNav.media}</Link>
          <Link href={href('/contact')}>{tNav.contact}</Link>
        </nav>
      </aside>

      {/* Search */}
      <div
        className={`search-overlay ${searchOpen ? 'open' : ''}`}
        aria-hidden={!searchOpen}
        onClick={() => setSearchOpen(false)}
      />
      <div className={`search-modal ${searchOpen ? 'open' : ''}`} role="dialog" aria-modal="true" aria-label="Search">
        <div className="search-row">
          <input
            className="search-input"
            placeholder={locale === 'en' ? 'Search…' : locale === 'ps' ? 'لټون…' : 'جستجو…'}
          />
          <button className="icon-btn" aria-label="Close" onClick={() => setSearchOpen(false)}>
            <IconClose />
          </button>
        </div>
        <div className="search-filters" aria-label="Filters">
          <button className="chip" aria-pressed={chips.articles} onClick={() => toggleChip('articles')}>
            {locale === 'en' ? 'Articles' : locale === 'ps' ? 'مقالې' : 'مقالات'}
          </button>
          <button className="chip" aria-pressed={chips.qa} onClick={() => toggleChip('qa')}>
            {locale === 'en' ? 'Q&A' : locale === 'ps' ? 'شبهات' : 'شبهات'}
          </button>
          <button className="chip" aria-pressed={chips.resources} onClick={() => toggleChip('resources')}>
            {locale === 'en' ? 'Resources' : locale === 'ps' ? 'سرچينې' : 'منابع'}
          </button>
        </div>
      </div>
    </>
  );
}
