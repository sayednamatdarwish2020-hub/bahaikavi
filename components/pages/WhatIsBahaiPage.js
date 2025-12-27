import Link from 'next/link';
import Layout from '../Layout';
import Breadcrumb from '../Breadcrumb';
import Accordion from '../Accordion';
import { nav } from '../../lib/i18n';

export default function WhatIsBahaiPage({ locale }) {
  const tNav = nav[locale];
  const href = (slug) => `/${locale}${slug === '/' ? '' : slug}`;

  const copy = {
    fa: {
      title: 'بهائیت چیست؟',
      hero: 'یک معرفی آموزشی، بی‌طرفانه از نظر بیان، و دقیق از نظر ساختار.',
      defH: 'تعریف سریع',
      defP: 'در این صفحه، چارچوبی برای فهم پیدایش، آموزه‌ها و ساختار بهائیت ارائه می‌شود تا سپس وارد نقد مستند شوید.',
      modulesH: 'ماژول‌های یادگیری',
      timelineH: 'نمای کلی زمانی',
      cta: 'رفتن به نقد علمی',
      crumbs: [{ label: tNav.home, href: href('/') }, { label: 'بهائیت چیست؟' }],
      modules: [
        { id: 'm1', q: '1) آغاز تاریخی (بابیه تا بهائیت)', a: 'مرور کوتاهِ زمینه‌های اجتماعی و سیاسی قرن نوزدهم، و پیوند بابیه با شکل‌گیری بهائیت.' },
        { id: 'm2', q: '2) منابع اصلی و متون', a: 'شناخت دسته‌بندی متون و ادعاهای اصلی، و روش درستِ ارجاع‌دهی به منابع.' },
        { id: 'm3', q: '3) آموزه‌های کلیدی', a: 'مرور ادعاهای محوری؛ سپس تعیین معیارهای سنجش برای بررسی علمی.' },
        { id: 'm4', q: '4) ساختار تشکیلاتی', a: 'نمای کلیِ نهادها، سلسله‌مراتب و مدیریت داخلی (با نگاه آموزشی).' },
        { id: 'm5', q: '5) حضور اجتماعی و روایت‌ها', a: 'چگونه روایت‌های تبلیغی شکل می‌گیرد و چه تفاوتی با داده‌های تاریخی دارد.' },
      ],
      timeline: [
        { title: 'آغاز بابیه', meta: 'میانه قرن ۱۹', body: 'شروع جریان و نخستین ادعاها.' },
        { title: 'ادعای بهاءالله', meta: 'پس از باب', body: 'توسعه روایت و شکل‌گیری هویت جدید.' },
        { title: 'نهادینه‌سازی تشکیلات', meta: 'قرن ۲۰', body: 'شکل‌گیری ساختارهای اداری و گسترش جهانی.' },
      ],
    },
    ps: {
      title: 'بهائيت څه دی؟',
      hero: 'ښوونيزه پېژندنه: منظم، روښانه او د مطالعې لپاره مناسب.',
      defH: 'چټک تعريف',
      defP: 'دلته د بهائيت د پيدايښت، باورونو او جوړښت عمومي چوکاټ وړاندې کېږي، ترڅو وروسته علمي نقد ته ولاړ شئ.',
      modulesH: 'د زده‌کړې ماژولونه',
      timelineH: 'لنډ مهالويش',
      cta: 'علمي نقد ته ولاړ شئ',
      crumbs: [{ label: tNav.home, href: href('/') }, { label: 'بهائيت څه دی؟' }],
      modules: [
        { id: 'm1', q: '1) تاريخي پيل (بابيت تر بهائيت)', a: 'د ۱۹مې پېړۍ ټولنيز/سياسي شاليد او د بابيت له لارې د بهائيت جوړېدل.' },
        { id: 'm2', q: '2) اصلي سرچينې او متون', a: 'د متونو پېژندنه، د ادعاوو ډولونه او د حوالې ورکولو ساده اصول.' },
        { id: 'm3', q: '3) مهم باورونه', a: 'محوري ادعاوې او د علمي ارزونې معيارونه.' },
        { id: 'm4', q: '4) تشکيلاتي جوړښت', a: 'نهادونه او اداري سيستم په ښوونيزه بڼه.' },
        { id: 'm5', q: '5) ټولنيز حضور او روايتونه', a: 'تبليغي روايت څنګه جوړېږي او له تاريخي معلوماتو سره يې توپير.' },
      ],
      timeline: [
        { title: 'د بابيت پيل', meta: '۱۹مه پېړۍ', body: 'لومړنۍ ادعاوې او بهير.' },
        { title: 'د بهاءالله ادعا', meta: 'وروسته مرحله', body: 'نوې هويت او روايت.' },
        { title: 'تشکيلاتي نهادينه کېدل', meta: '۲۰مه پېړۍ', body: 'اداري جوړښت او پراختيا.' },
      ],
    },
    en: {
      title: 'What is the Baha’i Faith?',
      hero: 'An educational overview: structured, calm, and ready for deeper critique.',
      defH: 'Quick Definition',
      defP: 'This page provides a learning framework (origins, teachings, institutions) as a foundation before moving into evidence-based critique.',
      modulesH: 'Learning Modules',
      timelineH: 'Timeline Overview',
      cta: 'Go to Academic Critique',
      crumbs: [{ label: tNav.home, href: href('/') }, { label: 'What is the Baha’i Faith?' }],
      modules: [
        { id: 'm1', q: '1) Historical origins (Bábí movement → Bahá’í)', a: 'A brief look at the 19th‑century context and how the movement evolved.' },
        { id: 'm2', q: '2) Core texts and sources', a: 'How to identify primary sources and cite them properly in research.' },
        { id: 'm3', q: '3) Key teachings', a: 'A map of central claims and the criteria used for evaluation.' },
        { id: 'm4', q: '4) Institutions and administration', a: 'A high-level overview of governance and organizational structure.' },
        { id: 'm5', q: '5) Social narrative vs historical record', a: 'How public narratives form and how to compare them with documented history.' },
      ],
      timeline: [
        { title: 'Rise of the Bábí movement', meta: 'mid‑19th century', body: 'Early claims and momentum.' },
        { title: 'Bahá’u’lláh’s claim', meta: 'later 19th century', body: 'Consolidation of a new identity and direction.' },
        { title: 'Institutional development', meta: '20th century', body: 'Administrative structures and global expansion.' },
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
                <Link className="btn btn-outline" href={href('/qa')}>{tNav.qa}</Link>
              </div>
            </div>
            <div className="visual" aria-label="Educational visual">
              <div className="label">{locale === 'en' ? 'Learning' : locale === 'ps' ? 'زده‌کړه' : 'یادگیری'}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">{copy.defH}</h2>
          <p className="section-sub">{copy.defP}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">{copy.modulesH}</h2>
          <p className="section-sub">{locale === 'en' ? 'Expand each module to read a concise guide.' : locale === 'ps' ? 'هر ماژول خلاصه لارښود لري.' : 'هر ماژول را باز کنید تا خلاصه راهنما را بخوانید.'}</p>
          <div style={{ marginTop: 14 }}>
            <Accordion items={copy.modules} defaultOpen={copy.modules[0].id} />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">{copy.timelineH}</h2>
          <div className="timeline">
            {copy.timeline.map((t) => (
              <div key={t.title} className="t-item">
                <div className="t-title">{t.title}</div>
                <div className="t-meta">{t.meta}</div>
                <div className="card-body" style={{ marginTop: 0 }}>{t.body}</div>
              </div>
            ))}
          </div>
          <div className="banner" style={{ marginTop: 18 }}>
            <div>
              <h3>{locale === 'en' ? 'Ready for deeper critique?' : locale === 'ps' ? 'اوس ژور نقد ته چمتو ياست؟' : 'آماده نقد عمیق‌تر هستید؟'}</h3>
              <p>{locale === 'en' ? 'Move to the Academic Critique section with references and structured arguments.' : locale === 'ps' ? 'د حوالو او منظم استدلال سره علمي نقد ته ولاړ شئ.' : 'به بخش نقد علمی با ارجاعات و استدلال منظم بروید.'}</p>
            </div>
            <Link className="btn btn-primary" href={href('/critique')}>{copy.cta}</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
