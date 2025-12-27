import Link from 'next/link';
import Layout from '../Layout';
import { homeCopy, nav, sampleArticles } from '../../lib/i18n';
import { IconBook, IconSearch, IconStar } from '../Icons';

export default function HomePage({ locale }) {
  const t = homeCopy[locale];
  const tNav = nav[locale];
  const href = (slug) => `/${locale}${slug === '/' ? '' : slug}`;
  const articles = sampleArticles[locale];

  const learningCards = {
    fa: [
      { icon: <IconBook />, title: 'شناخت بهائیت', body: 'مرور منظم و آموزشیِ تاریخچه، باورها و ساختار تشکیلاتی.', cta: 'ورود به بخش' },
      { icon: <IconSearch />, title: 'نقد علمی', body: 'نقد اعتقادی، تاریخی و اجتماعی با رویکرد مستند و قابل‌ارجاع.', cta: 'مشاهده نقدها' },
      { icon: <IconStar />, title: 'مهدویت', body: 'شناخت امام زمان (عجل‌الله‌تعالی‌فرجه‌الشریف) و انتظارِ آگاهانه.', cta: 'مطالعه مهدویت', accent: true },
    ],
    ps: [
      { icon: <IconBook />, title: 'د بهائيت پېژندنه', body: 'ښوونيز او منظم مرور: تاريخچه، باورونه او تشکيلاتي جوړښت.', cta: 'برخه پرانېزئ' },
      { icon: <IconSearch />, title: 'علمي نقد', body: 'اعتقادي، تاريخي او ټولنيز نقد د مستندو سرچينو پر بنسټ.', cta: 'نقدونه وګورئ' },
      { icon: <IconStar />, title: 'مهدويت', body: 'د امام زمان (عجل‌الله‌تعالی‌فرجه‌الشریف) پېژندنه او پوه انتظار.', cta: 'مهدويت ولولئ', accent: true },
    ],
    en: [
      { icon: <IconBook />, title: 'Understanding', body: 'A structured introduction to history, teachings, and institutions.', cta: 'Explore' },
      { icon: <IconSearch />, title: 'Academic Critique', body: 'Doctrinal, historical, and social critique with clear references.', cta: 'View critiques' },
      { icon: <IconStar />, title: 'Mahdism', body: 'Knowing the Imam of the Age (may God hasten his reappearance) and active hope.', cta: 'Read Mahdism', accent: true },
    ],
  }[locale];

  const featured = {
    fa: [
      { title: 'تاریخچه و رهبران', body: 'باب، بهاءالله، عبدالبهاء و تحلیل مستند.' },
      { title: 'پاسخ به شبهات', body: 'پرسش‌های رایج با پاسخ‌های روشن و مرحله‌ای.' },
      { title: 'جامعه افغانستان', body: 'بررسی بومی و اجتماعی در بافت افغانستان.' },
      { title: 'مقالات و منابع', body: 'کتابخانه مقالات، PDF و ارجاعات پژوهشی.' },
    ],
    ps: [
      { title: 'تاريخچه او مشران', body: 'باب، بهاءالله، عبدالبهاء او مستند تحليل.' },
      { title: 'د شبهاتو ځواب', body: 'عامې پوښتنې له روښانه ځوابونو سره.' },
      { title: 'افغانستان', body: 'په افغانستان کې ټولنيز او بومي بحث.' },
      { title: 'مقالې او سرچينې', body: 'مقالې، PDF او څېړنيزې حوالې.' },
    ],
    en: [
      { title: 'History & Leaders', body: 'Key figures and evidence-based review.' },
      { title: 'Q&A', body: 'Common questions with step-by-step answers.' },
      { title: 'Afghanistan', body: 'Context-aware discussion for Afghan society.' },
      { title: 'Publications', body: 'Articles, PDFs, and research references.' },
    ],
  }[locale];

  const banner = {
    fa: { h: 'مهدویت؛ راه روشن انتظار', p: 'اگر در جست‌وجوی حقیقت و هدایت هستید، از این بخش آغاز کنید و قدم‌به‌قدم پیش بروید.', btn: 'بخش مهدویت' },
    ps: { h: 'مهدويت؛ د انتظار روښانه لار', p: 'که د حق او هدايت په لټه کې ياست، له دې برخې پيل وکړئ او ګام په ګام مخکې لاړ شئ.', btn: 'مهدويت' },
    en: { h: 'Mahdism: a clear path of hope', p: 'If you’re seeking clarity and guidance, begin here and continue step by step.', btn: 'Mahdism' },
  }[locale];

  return (
    <Layout locale={locale} title={locale === 'en' ? "Baha'i-Kavi" : locale === 'ps' ? 'بهائي‌کاوي' : 'بهائی‌کاوی'}>
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div>
              <h1 className="h1">{t.title}</h1>
              <p className="lead">{t.lead}</p>
              <div className="cta-row">
                <a className="btn btn-primary" href="#start">{t.cta1}</a>
                <a className="btn btn-outline" href="#mahdi">{t.cta2}</a>
              </div>
              <div className="badges">
                {t.badges.map((b) => (
                  <span className="badge" key={b}>{b}</span>
                ))}
              </div>
            </div>
            <div className="visual" aria-label="Hero visual placeholder">
              <div className="label">{t.visualLabel}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="start">
        <div className="container">
          <h2 className="section-title">{locale === 'en' ? 'Learning Path' : locale === 'ps' ? 'د مطالعې لاره' : 'مسیر مطالعه'}</h2>
          <p className="section-sub">{locale === 'en' ? 'Move step-by-step: understanding, critical review, then guided Mahdism.' : locale === 'ps' ? 'له پېژندنې تر نقد او بيا تر مهدوي لارښود پورې، ګام په ګام ولاړ شئ.' : 'از شناخت تا نقد و سپس هدایت مهدوی، مرحله‌به‌مرحله پیش بروید.'}</p>
          <div className="grid grid-3" style={{ marginTop: '18px' }}>
            {learningCards.map((c) => (
              <div key={c.title} className={`card ${c.accent ? 'card-accent' : ''}`}>
                <div className="card-icon">{c.icon}</div>
                <div className="card-title">{c.title}</div>
                <div className="card-body">{c.body}</div>
                <Link className="card-link" href={c.title === (locale === 'en' ? 'Mahdism' : locale === 'ps' ? 'مهدويت' : 'مهدویت') ? href('/mahdism') : c.title === (locale === 'en' ? 'Academic Critique' : locale === 'ps' ? 'علمي نقد' : 'نقد علمی') ? href('/critique') : href('/what-is-bahai')}>
                  {c.cta} <span aria-hidden="true">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">{locale === 'en' ? 'Featured Topics' : locale === 'ps' ? 'ځانګړي موضوعات' : 'موضوعات برجسته'}</h2>
          <p className="section-sub">{locale === 'en' ? 'Quick access to key sections.' : locale === 'ps' ? 'د ويب‌سايټ مهمو برخو ته چټک لاسرسی.' : 'دسترسی سریع به بخش‌های کلیدی سایت.'}</p>
          <div className="grid grid-4" style={{ marginTop: '18px' }}>
            {featured.map((f) => (
              <div key={f.title} className="card" style={{ padding: '18px' }}>
                <div className="card-title" style={{ fontSize: '16px' }}>{f.title}</div>
                <div className="card-body" style={{ fontSize: '13px', marginTop: '6px' }}>{f.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <h2 className="section-title">{locale === 'en' ? 'Latest Publications' : locale === 'ps' ? 'وروستي خپرونې' : 'تازه‌ترین نشرات'}</h2>
              <p className="section-sub">{locale === 'en' ? 'Fresh reads and recent posts.' : locale === 'ps' ? 'د لوست لپاره نوي مطالب.' : 'مقالات و نوشته‌های تازه برای مطالعه.'}</p>
            </div>
            <Link className="btn btn-outline" href={href('/articles')}>{locale === 'en' ? 'All Articles' : locale === 'ps' ? 'ټولې مقالې' : 'همه مقالات'}</Link>
          </div>
          <div className="grid grid-3">
            {articles.map((a) => (
              <div key={a.title} className="card article-card">
                <div className="thumb" aria-hidden="true" />
                <h3 className="article-title">{a.title}</h3>
                <div className="meta"><span>{a.date}</span><span>•</span><span>{a.read}</span></div>
                <div className="excerpt">{a.excerpt}</div>
                <Link className="card-link" href={href('/articles')} style={{ marginTop: '14px', display: 'inline-flex' }}>
                  {locale === 'en' ? 'Read' : locale === 'ps' ? 'ادامه' : 'ادامه'} <span aria-hidden="true">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="mahdi">
        <div className="container">
          <div className="banner">
            <div>
              <h3>{banner.h}</h3>
              <p>{banner.p}</p>
            </div>
            <Link className="btn btn-primary" href={href('/mahdism')}>{banner.btn}</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
