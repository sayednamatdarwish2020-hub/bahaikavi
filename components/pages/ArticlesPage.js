import { useMemo, useState } from 'react';
import Layout from '../Layout';
import Breadcrumb from '../Breadcrumb';
import Tabs from '../Tabs';
import { nav, sampleArticles } from '../../lib/i18n';

export default function ArticlesPage({ locale }) {
  const tNav = nav[locale];
  const href = (slug) => `/${locale}${slug === '/' ? '' : slug}`;

  const copy = {
    fa: {
      title: 'مقالات و منابع',
      hero: 'جستجو، فیلتر، و دسترسی به مقالات و PDF های منتخب.',
      crumbs: [{ label: tNav.home, href: href('/') }, { label: 'مقالات و منابع' }],
      searchPh: 'جستجو در عناوین…',
      tabs: { articles: 'مقالات', pdf: 'PDF ها' },
      filters: { all: 'همه', intro: 'معرفی', critique: 'نقد', mahdism: 'مهدویت' },
      pdfNote: 'در این نسخه، PDF ها نمونه هستند؛ بعداً لینک فایل‌های واقعی را اضافه کنید.',
    },
    ps: {
      title: 'مقالې او سرچينې',
      hero: 'لټون، فلټر او مقالې/ PDF سرچينې.',
      crumbs: [{ label: tNav.home, href: href('/') }, { label: 'مقالې او سرچينې' }],
      searchPh: 'په سرليکونو کې لټون…',
      tabs: { articles: 'مقالې', pdf: 'PDF' },
      filters: { all: 'ټولې', intro: 'پېژندنه', critique: 'نقد', mahdism: 'مهدويت' },
      pdfNote: 'دلته PDFونه د نمونې په توګه دي؛ وروسته واقعي لینکونه ورزیات کړئ.',
    },
    en: {
      title: 'Articles & Resources',
      hero: 'Search, filter, and access articles and PDF resources.',
      crumbs: [{ label: tNav.home, href: href('/') }, { label: 'Articles & Resources' }],
      searchPh: 'Search titles…',
      tabs: { articles: 'Articles', pdf: 'PDFs' },
      filters: { all: 'All', intro: 'Intro', critique: 'Critique', mahdism: 'Mahdism' },
      pdfNote: 'PDFs are placeholders in this UI. Add real file links later.',
    },
  }[locale];

  const [q, setQ] = useState('');
  const [filter, setFilter] = useState('all');
  const [tab, setTab] = useState('articles');

  const articles = useMemo(() => {
    const query = q.trim().toLowerCase();
    const raw = sampleArticles[locale].map((a, idx) => ({
      id: `a${idx}`,
      type: idx === 2 ? 'mahdism' : idx === 1 ? 'intro' : 'critique',
      ...a,
    }));
    return raw
      .filter((it) => (filter === 'all' ? true : it.type === filter))
      .filter((it) => (query ? it.title.toLowerCase().includes(query) : true));
  }, [filter, locale, q]);

  const pdfs = useMemo(() => {
    const base = [
      {
        id: 'p1',
        title: locale === 'en' ? 'PDF: Methodology & Sources' : locale === 'ps' ? 'PDF: د څېړنې تګلاره' : 'PDF: روش‌شناسی و منابع',
        meta: locale === 'en' ? '12 pages • 2025' : locale === 'ps' ? '۱۲ مخ • ۲۰۲۵' : '۱۲ صفحه • ۲۰۲۵',
      },
      {
        id: 'p2',
        title: locale === 'en' ? 'PDF: Timeline summary' : locale === 'ps' ? 'PDF: لنډ مهالوېش' : 'PDF: خلاصه خط زمانی',
        meta: locale === 'en' ? '8 pages • 2025' : locale === 'ps' ? '۸ مخ • ۲۰۲۵' : '۸ صفحه • ۲۰۲۵',
      },
    ];
    const query = q.trim().toLowerCase();
    return base.filter((it) => (query ? it.title.toLowerCase().includes(query) : true));
  }, [locale, q]);

  const tabs = [
    {
      key: 'articles',
      label: copy.tabs.articles,
      content: (
        <div className="grid grid-3">
          {articles.map((a) => (
            <div key={a.id} className="card article-card">
              <div className="thumb" aria-hidden="true" />
              <h3 className="article-title">{a.title}</h3>
              <div className="meta"><span>{a.date}</span><span>•</span><span>{a.read}</span></div>
              <div className="excerpt">{a.excerpt}</div>
              <a className="card-link" href="#" onClick={(e) => e.preventDefault()} style={{ marginTop: 14, display: 'inline-flex' }}>
                {locale === 'en' ? 'Open' : locale === 'ps' ? 'پرانېستل' : 'بازکردن'} <span aria-hidden="true">→</span>
              </a>
            </div>
          ))}
        </div>
      ),
    },
    {
      key: 'pdf',
      label: copy.tabs.pdf,
      content: (
        <div className="grid grid-2">
          {pdfs.map((p) => (
            <div key={p.id} className="card">
              <div className="card-title">{p.title}</div>
              <div className="card-body">{p.meta}</div>
              <a className="card-link" href="#" onClick={(e) => e.preventDefault()}>
                {locale === 'en' ? 'Download' : locale === 'ps' ? 'ډاونلوډ' : 'دانلود'} <span aria-hidden="true">→</span>
              </a>
            </div>
          ))}
          <div className="note">{copy.pdfNote}</div>
        </div>
      ),
    },
  ];

  return (
    <Layout locale={locale} title={copy.title}>
      <div className="container" style={{ paddingTop: 18 }}>
        <Breadcrumb locale={locale} items={copy.crumbs} />
      </div>

      <section className="hero" style={{ paddingTop: 26 }}>
        <div className="container">
          <h1 className="h1" style={{ fontSize: 40 }}>{copy.title}</h1>
          <p className="lead">{copy.hero}</p>
          <div style={{ marginTop: 16, display: 'grid', gap: 12 }}>
            <input className="search-input" value={q} onChange={(e) => setQ(e.target.value)} placeholder={copy.searchPh} />
            <div className="search-filters" aria-label="Filters">
              {Object.entries(copy.filters).map(([k, label]) => (
                <button
                  key={k}
                  type="button"
                  className="chip"
                  aria-pressed={filter === k}
                  onClick={() => setFilter(k)}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Tabs tabs={tabs} activeKey={tab} onChange={setTab} />
        </div>
      </section>
    </Layout>
  );
}
