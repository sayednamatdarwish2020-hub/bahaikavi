import Link from 'next/link';
import Layout from '../Layout';
import Breadcrumb from '../Breadcrumb';
import { nav } from '../../lib/i18n';

export default function CritiquePage({ locale }) {
  const tNav = nav[locale];
  const href = (slug) => `/${locale}${slug === '/' ? '' : slug}`;

  const copy = {
    fa: {
      title: 'نقد علمی',
      hero: 'نقد اعتقادی، تاریخی و اجتماعی با رویکرد مستند و قابل‌ارجاع.',
      crumbs: [{ label: tNav.home, href: href('/') }, { label: 'نقد علمی' }],
      cards: [
        { title: 'نقد اعتقادی', body: 'تحلیل ادعاها با معیارهای الهیاتی و اصول معرفت‌شناسی.' },
        { title: 'نقد تاریخی', body: 'بررسی روایت‌ها در پرتو اسناد، تاریخ‌نگاری و منابع دست‌اول.' },
        { title: 'نقد اجتماعی', body: 'بررسی پیامدهای اجتماعی، فرهنگی و هویتی در بافت افغانستان.' },
      ],
      cta: 'رفتن به مقالات و منابع',
    },
    ps: {
      title: 'علمي نقد',
      hero: 'اعتقادي، تاريخي او ټولنيز نقد د مستندو سرچينو پر بنسټ.',
      crumbs: [{ label: tNav.home, href: href('/') }, { label: 'علمي نقد' }],
      cards: [
        { title: 'اعتقادي نقد', body: 'د ادعاوو شننه د الهیاتي معيارونو او معرفت پوهنې له مخې.' },
        { title: 'تاريخي نقد', body: 'د اسنادو، تاريخ‌ليکنې او لومړنيو سرچينو په رڼا کې ارزونه.' },
        { title: 'ټولنيز نقد', body: 'په افغانستان کې د ټولنيزو او فرهنګي اغېزو کتنه.' },
      ],
      cta: 'مقالو او سرچينو ته',
    },
    en: {
      title: 'Academic Critique',
      hero: 'Doctrinal, historical, and social critique with clear references and structured reasoning.',
      crumbs: [{ label: tNav.home, href: href('/') }, { label: 'Academic Critique' }],
      cards: [
        { title: 'Doctrinal critique', body: 'Evaluate claims using theological criteria and epistemic standards.' },
        { title: 'Historical critique', body: 'Compare narratives against documents, historiography, and primary sources.' },
        { title: 'Social critique', body: 'Discuss social and cultural implications within Afghanistan’s context.' },
      ],
      cta: 'Go to Articles & Resources',
    },
  }[locale];

  return (
    <Layout locale={locale} title={copy.title}>
      <div className="container" style={{ paddingTop: 18 }}>
        <Breadcrumb locale={locale} items={copy.crumbs} />
      </div>

      <section className="hero" style={{ paddingTop: 26 }}>
        <div className="container">
          <div className="hero-grid" style={{ gridTemplateColumns: '1.2fr 0.8fr' }}>
            <div>
              <h1 className="h1" style={{ fontSize: 40 }}>{copy.title}</h1>
              <p className="lead">{copy.hero}</p>
              <div className="cta-row">
                <Link className="btn btn-primary" href={href('/articles')}>{copy.cta}</Link>
                <Link className="btn btn-outline" href={href('/qa')}>{tNav.qa}</Link>
              </div>
            </div>
            <div className="visual" aria-label="Critique visual">
              <div className="label">{locale === 'en' ? 'Evidence' : locale === 'ps' ? 'سند' : 'سند'}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">{locale === 'en' ? 'Focus areas' : locale === 'ps' ? 'د نقد برخې' : 'محورهای نقد'}</h2>
          <p className="section-sub">{locale === 'en' ? 'Choose a category to start.' : locale === 'ps' ? 'يوه برخه وټاکئ او پيل وکړئ.' : 'یک دسته را انتخاب کنید و شروع نمایید.'}</p>
          <div className="grid grid-3" style={{ marginTop: 18 }}>
            {copy.cards.map((c) => (
              <div key={c.title} className="card">
                <div className="card-title">{c.title}</div>
                <div className="card-body">{c.body}</div>
                <Link className="card-link" href={href('/articles')}>
                  {locale === 'en' ? 'Browse' : locale === 'ps' ? 'کتنه' : 'مشاهده'} <span aria-hidden="true">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
