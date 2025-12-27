import { useState } from 'react';
import Link from 'next/link';
import Layout from '../Layout';
import Breadcrumb from '../Breadcrumb';
import Tabs from '../Tabs';
import { nav } from '../../lib/i18n';

export default function MahdismPage({ locale }) {
  const tNav = nav[locale];
  const href = (slug) => `/${locale}${slug === '/' ? '' : slug}`;

  const copy = {
    fa: {
      title: 'مهدویت',
      hero: 'آرام، معنوی، و هدایت‌محور: مسیر امید و شناخت امام زمان (عج).',
      crumbs: [{ label: tNav.home, href: href('/') }, { label: 'مهدویت' }],
      tabs: {
        quran: 'قرآن',
        hadith: 'سنت نبوی',
        shia: 'دیدگاه شیعه',
        doubts: 'شبهات',
        dev: 'انحرافات',
      },
      ctaH: 'می‌خواهید منظم شروع کنید؟',
      ctaP: 'از مبانی قرآنی آغاز کنید، سپس احادیث و دیدگاه شیعه را مرحله‌به‌مرحله دنبال نمایید.',
      ctaBtn: 'شروع از قرآن',
    },
    ps: {
      title: 'مهدويت',
      hero: 'ارام، معنوي او لارښود بڼه: د هيلې او د امام زمان (عج) د پېژندنې لاره.',
      crumbs: [{ label: tNav.home, href: href('/') }, { label: 'مهدويت' }],
      tabs: {
        quran: 'قرآن',
        hadith: 'نبوي سنت',
        shia: 'د شيعه نظر',
        doubts: 'شبهات',
        dev: 'انحرافات',
      },
      ctaH: 'منظم پيل غواړئ؟',
      ctaP: 'له قرآني بنسټونو پيل وکړئ، بيا احاديث او د شيعه نظر په ترتيب ولولئ.',
      ctaBtn: 'له قرآن څخه پيل',
    },
    en: {
      title: 'Mahdism',
      hero: 'Calm, spiritual, and guidance-focused: a path of hope and clarity.',
      crumbs: [{ label: tNav.home, href: href('/') }, { label: 'Mahdism' }],
      tabs: {
        quran: 'Qur’an',
        hadith: 'Prophetic Tradition',
        shia: 'Shi‘a View',
        doubts: 'Doubts',
        dev: 'Deviations',
      },
      ctaH: 'Want a structured start?',
      ctaP: 'Begin with Qur’anic foundations, then move through hadith and the Shi‘a scholarly view step-by-step.',
      ctaBtn: 'Start with Qur’an',
    },
  }[locale];

  const [tab, setTab] = useState('quran');

  const tabContent = {
    quran: locale === 'en'
      ? 'Key Qur’anic themes related to guidance, divine promise, and hope (placeholder content).'
      : locale === 'ps'
        ? 'د قرآن مهم موضوعات: هدايت، الهي وعده او هيله (ډيمو متن).'
        : 'محورهای قرآنی مرتبط با هدایت، وعده الهی و امید (محتوای نمونه).',
    hadith: locale === 'en'
      ? 'Prophetic and Imams’ narrations: how to read chains and meanings (placeholder content).'
      : locale === 'ps'
        ? 'نبوي او د اهل‌بيت روايات: د سند او معنا لوست (ډيمو متن).'
        : 'روایات نبوی و اهل‌بیت: روش فهم سند و معنا (محتوای نمونه).',
    shia: locale === 'en'
      ? 'A concise map of the Shi‘a view (sources, scholars, criteria) (placeholder content).'
      : locale === 'ps'
        ? 'د شيعه نظر لنډه نقشه: سرچينې، عالمان، معيارونه (ډيمو متن).'
        : 'نقشه‌ای کوتاه از دیدگاه شیعه: منابع، علما، معیارها (محتوای نمونه).',
    doubts: locale === 'en'
      ? 'Addressing common doubts with clear methodology (placeholder content).'
      : locale === 'ps'
        ? 'عام شبهات او روښانه تګلاره (ډيمو متن).'
        : 'پاسخ به شبهات با روش روشن (محتوای نمونه).',
    dev: locale === 'en'
      ? 'Modern deviations and how to recognize them (placeholder content).'
      : locale === 'ps'
        ? 'معاصرې انحرافات او د پېژندلو لارې (ډيمو متن).'
        : 'انحرافات معاصر و روش تشخیص (محتوای نمونه).',
  };

  const tabs = [
    { key: 'quran', label: copy.tabs.quran, content: <p style={{ margin: 0 }}>{tabContent.quran}</p> },
    { key: 'hadith', label: copy.tabs.hadith, content: <p style={{ margin: 0 }}>{tabContent.hadith}</p> },
    { key: 'shia', label: copy.tabs.shia, content: <p style={{ margin: 0 }}>{tabContent.shia}</p> },
    { key: 'doubts', label: copy.tabs.doubts, content: <p style={{ margin: 0 }}>{tabContent.doubts}</p> },
    { key: 'dev', label: copy.tabs.dev, content: <p style={{ margin: 0 }}>{tabContent.dev}</p> },
  ];

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
              <div className="badges">
                <span className="badge">{locale === 'en' ? 'Hope' : locale === 'ps' ? 'هيله' : 'امید'}</span>
                <span className="badge">{locale === 'en' ? 'Guidance' : locale === 'ps' ? 'لارښود' : 'هدایت'}</span>
                <span className="badge">{locale === 'en' ? 'Clarity' : locale === 'ps' ? 'روښانتیا' : 'روشنی'}</span>
              </div>
            </div>
            <div className="visual" aria-label="Spiritual visual">
              <div className="label">{locale === 'en' ? 'Mahdism' : locale === 'ps' ? 'مهدويت' : 'مهدویت'}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">{locale === 'en' ? 'Core Sources' : locale === 'ps' ? 'اصلي سرچينې' : 'منابع محوری'}</h2>
          <p className="section-sub">{locale === 'en' ? 'Use the tabs to navigate the learning track.' : locale === 'ps' ? 'د ټبونو له لارې د مطالعې برخه وټاکئ.' : 'با تب‌ها مسیر مطالعه را انتخاب کنید.'}</p>
          <div style={{ marginTop: 14 }}>
            <Tabs tabs={tabs} activeKey={tab} onChange={setTab} />
          </div>
        </div>
      </section>

      <section className="section sticky-cta">
        <div className="container">
          <div className="banner">
            <div>
              <h3>{copy.ctaH}</h3>
              <p>{copy.ctaP}</p>
            </div>
            <Link className="btn btn-primary" href="#" onClick={(e) => e.preventDefault()}>
              {copy.ctaBtn}
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
