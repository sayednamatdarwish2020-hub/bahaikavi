import Link from 'next/link';
import Layout from '../Layout';
import Breadcrumb from '../Breadcrumb';
import { nav } from '../../lib/i18n';

export default function HistoryPage({ locale }) {
  const tNav = nav[locale];
  const href = (slug) => `/${locale}${slug === '/' ? '' : slug}`;

  const copy = {
    fa: {
      title: 'تاریخچه و رهبران',
      hero: 'نمای کلی تاریخی و معرفی چهره‌های اصلی به صورت آموزشی.',
      crumbs: [{ label: tNav.home, href: href('/') }, { label: 'تاریخچه و رهبران' }],
      cta: 'رفتن به نقد علمی',
      timeline: [
        { title: 'باب', meta: 'آغاز بابیه', body: 'مرور کوتاهِ ادعاها، رخدادها و تأثیر اولیه.' },
        { title: 'بهاءالله', meta: 'شکل‌گیری بهائیت', body: 'تبیین ادعا و توسعه نهادها و متون.' },
        { title: 'عبدالبهاء', meta: 'گسترش و تثبیت', body: 'نقش در سازمان‌دهی و روایت‌سازی اجتماعی.' },
      ],
    },
    ps: {
      title: 'تاريخچه او مشران',
      hero: 'ښوونيزه تاريخي کتنه او د مهمو څېرو پېژندنه.',
      crumbs: [{ label: tNav.home, href: href('/') }, { label: 'تاريخچه او مشران' }],
      cta: 'علمي نقد ته ولاړ شئ',
      timeline: [
        { title: 'باب', meta: 'د بابيت پيل', body: 'ادعاوې، پېښې او لومړنی اغېز.' },
        { title: 'بهاءالله', meta: 'د بهائيت جوړېدل', body: 'ادعا، متون او اداري جوړښت.' },
        { title: 'عبدالبهاء', meta: 'پراختيا او تثبيت', body: 'د سازمان او ټولنيزې روايت جوړونې رول.' },
      ],
    },
    en: {
      title: 'History & Leaders',
      hero: 'A high-level historical overview and key figures in an educational tone.',
      crumbs: [{ label: tNav.home, href: href('/') }, { label: 'History & Leaders' }],
      cta: 'Go to Academic Critique',
      timeline: [
        { title: 'The Báb', meta: 'Beginnings of the Bábí movement', body: 'Key claims, events, and early impact (placeholder).' },
        { title: 'Bahá’u’lláh', meta: 'Formation of the Bahá’í identity', body: 'Core claim, texts, and institutional development (placeholder).' },
        { title: '‘Abdu’l‑Bahá', meta: 'Expansion and consolidation', body: 'Role in organization and public narrative (placeholder).' },
      ],
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
                <Link className="btn btn-primary" href={href('/critique')}>{copy.cta}</Link>
                <Link className="btn btn-outline" href={href('/what-is-bahai')}>{tNav.what}</Link>
              </div>
            </div>
            <div className="visual" aria-label="History visual">
              <div className="label">{locale === 'en' ? 'Timeline' : locale === 'ps' ? 'مهالويش' : 'زمان‌بندی'}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">{locale === 'en' ? 'Vertical Timeline' : locale === 'ps' ? 'عمودي مهالوېش' : 'خط زمانی عمودی'}</h2>
          <p className="section-sub">{locale === 'en' ? 'A structured overview to prepare for deeper critique.' : locale === 'ps' ? 'منظم کتنه د ژور نقد لپاره.' : 'نمای کلی منظم برای ورود به نقد عمیق.'}</p>
          <div className="timeline">
            {copy.timeline.map((t) => (
              <div key={t.title} className="t-item">
                <div className="t-title">{t.title}</div>
                <div className="t-meta">{t.meta}</div>
                <div className="card-body" style={{ marginTop: 0 }}>{t.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="banner">
            <div>
              <h3>{locale === 'en' ? 'Continue with evidence-based critique' : locale === 'ps' ? 'له مستندو سرچينو سره نقد ته دوام ورکړئ' : 'ادامه با نقد مستند'}</h3>
              <p>{locale === 'en' ? 'Next: arguments, references, and structured analysis.' : locale === 'ps' ? 'راتلونکی: استدلال، حوالې او منظم تحليل.' : 'گام بعد: استدلال، ارجاع‌ها و تحلیل ساختاری.'}</p>
            </div>
            <Link className="btn btn-primary" href={href('/critique')}>{copy.cta}</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
