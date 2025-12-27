import { useState } from 'react';
import Layout from '../Layout';
import Breadcrumb from '../Breadcrumb';
import Tabs from '../Tabs';
import { nav } from '../../lib/i18n';

export default function MediaPage({ locale }) {
  const tNav = nav[locale];
  const href = (slug) => `/${locale}${slug === '/' ? '' : slug}`;

  const copy = {
    fa: {
      title: 'مرکز رسانه',
      hero: 'ویدئو، صوت، و اینفوگرافیک‌های آموزشی (در این نسخه نمونه‌ای/Placeholder).',
      crumbs: [{ label: tNav.home, href: href('/') }, { label: 'مرکز رسانه' }],
      tabs: {
        video: 'ویدئو',
        audio: 'صوت',
        info: 'اینفوگرافیک',
      },
      note: 'برای جلوگیری از مشکلات امنیتی و کپی‌رایت، این بخش فعلاً به‌صورت جای‌نما ساخته شده است؛ بعداً لینک‌های واقعی را اضافه کنید.',
      open: 'بازکردن',
    },
    ps: {
      title: 'رسنۍ',
      hero: 'وېډيو، آډيو او انفۆګرافیک (په دې نسخه کې یوازې نمونه/Placeholder).',
      crumbs: [{ label: tNav.home, href: href('/') }, { label: 'رسنۍ' }],
      tabs: {
        video: 'وېډيو',
        audio: 'آډيو',
        info: 'انفۆګرافیک',
      },
      note: 'د امنيت او کاپي‌رایټ د ستونزو د مخنیوي لپاره، دا برخه اوس د نمونې په ډول ده؛ وروسته واقعي لینکونه اضافه کړئ.',
      open: 'پرانېستل',
    },
    en: {
      title: 'Media Center',
      hero: 'Video, audio, and infographics (placeholders in this UI build).',
      crumbs: [{ label: tNav.home, href: href('/') }, { label: 'Media Center' }],
      tabs: {
        video: 'Video',
        audio: 'Audio',
        info: 'Infographic',
      },
      note: 'To avoid security and copyright issues, this section is built as a safe placeholder. Add real embeds/links later.',
      open: 'Open',
    },
  }[locale];

  const [active, setActive] = useState('video');

  const placeholderCard = (title, meta) => (
    <div className="card">
      <div className="thumb" aria-hidden="true" />
      <div className="card-title" style={{ marginTop: 0 }}>{title}</div>
      <div className="card-body">{meta}</div>
      <a className="card-link" href="#" onClick={(e) => e.preventDefault()}>
        {copy.open} <span aria-hidden="true">→</span>
      </a>
    </div>
  );

  const tabs = [
    {
      key: 'video',
      label: copy.tabs.video,
      content: (
        <div className="grid grid-3">
          {placeholderCard(locale === 'en' ? 'Intro: Learning Path' : locale === 'ps' ? 'پېل: د مطالعې لاره' : 'شروع: مسیر مطالعه', locale === 'en' ? 'MP4/Embed placeholder' : 'جای‌نما')}
          {placeholderCard(locale === 'en' ? 'History Overview' : locale === 'ps' ? 'تاريخچه لنډه کتنه' : 'مرور تاریخچه', locale === 'en' ? 'MP4/Embed placeholder' : 'جای‌نما')}
          {placeholderCard(locale === 'en' ? 'Mahdism Guidance' : locale === 'ps' ? 'مهدويت لارښود' : 'راهنمای مهدویت', locale === 'en' ? 'MP4/Embed placeholder' : 'جای‌نما')}
        </div>
      ),
    },
    {
      key: 'audio',
      label: copy.tabs.audio,
      content: (
        <div className="grid grid-2">
          {placeholderCard(locale === 'en' ? 'Audio: Q&A summary' : locale === 'ps' ? 'آډيو: د شبهاتو لنډيز' : 'صوت: خلاصه پاسخ‌ها', locale === 'en' ? 'Audio player placeholder' : 'جای‌نما')}
          {placeholderCard(locale === 'en' ? 'Audio: Methods & sources' : locale === 'ps' ? 'آډيو: تګلاره او سرچينې' : 'صوت: روش و منابع', locale === 'en' ? 'Audio player placeholder' : 'جای‌نما')}
          <div className="note">{copy.note}</div>
        </div>
      ),
    },
    {
      key: 'info',
      label: copy.tabs.info,
      content: (
        <div className="grid grid-3">
          {placeholderCard(locale === 'en' ? 'Infographic: Timeline' : locale === 'ps' ? 'انفۆګرافیک: مهالوېش' : 'اینفوگرافیک: خط زمانی', locale === 'en' ? 'Image placeholder' : 'جای‌نما')}
          {placeholderCard(locale === 'en' ? 'Infographic: Concepts' : locale === 'ps' ? 'انفۆګرافیک: مفاهيم' : 'اینفوگرافیک: مفاهیم', locale === 'en' ? 'Image placeholder' : 'جای‌نما')}
          {placeholderCard(locale === 'en' ? 'Infographic: Learning Path' : locale === 'ps' ? 'انفۆګرافیک: د مطالعې لاره' : 'اینفوگرافیک: مسیر مطالعه', locale === 'en' ? 'Image placeholder' : 'جای‌نما')}
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
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Tabs tabs={tabs} activeKey={active} onChange={setActive} />
        </div>
      </section>
    </Layout>
  );
}
