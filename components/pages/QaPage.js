import { useMemo, useState } from 'react';
import Layout from '../Layout';
import Breadcrumb from '../Breadcrumb';
import Accordion from '../Accordion';
import { nav } from '../../lib/i18n';

export default function QaPage({ locale }) {
  const tNav = nav[locale];
  const href = (slug) => `/${locale}${slug === '/' ? '' : slug}`;

  const copy = {
    fa: {
      title: 'پاسخ به شبهات',
      hero: 'پرسش‌های رایج را جستجو کنید و پاسخ‌های مرحله‌ای ببینید.',
      crumbs: [{ label: tNav.home, href: href('/') }, { label: 'پاسخ به شبهات' }],
      searchPh: 'جستجو در پرسش‌ها…',
      filters: { all: 'همه', belief: 'اعتقادی', history: 'تاریخی', social: 'اجتماعی' },
      askH: 'سؤال خود را بپرسید',
      askP: 'اگر پرسش شما در فهرست نبود، پیام بگذارید تا در نسخه‌های بعدی پاسخ داده شود.',
      form: { name: 'نام (اختیاری)', question: 'متن سؤال', submit: 'ارسال' },
      questions: [
        { id: 'q1', tag: 'belief', q: 'آیا بهائیت ادامه اسلام است یا دین مستقل؟', a: 'در این بخش، ابتدا تعریف ادعا و سپس معیارهای بررسی (متون، تاریخ، و اصول اعتقادی) ارائه می‌شود.' },
        { id: 'q2', tag: 'history', q: 'پیوند بابیه با بهائیت چگونه شکل گرفت؟', a: 'مرور تاریخیِ ادعاها، رخدادها و منابع برای فهم مسیر تحول.' },
        { id: 'q3', tag: 'social', q: 'چرا زمینه افغانستان در تحلیل این موضوع مهم است؟', a: 'برای ارزیابی پیامدها و ادعاها، بافت فرهنگی و اجتماعی افغانستان نقش تعیین‌کننده دارد.' },
        { id: 'q4', tag: 'belief', q: 'روش درست مطالعه و ارجاع‌دهی چیست؟', a: 'برای پیشگیری از برداشت‌های سطحی، باید از منابع معتبر و شیوه ارجاع استاندارد استفاده کرد.' },
      ],
    },
    ps: {
      title: 'د شبهاتو ځواب',
      hero: 'عامې پوښتنې ولټوئ او ګام په ګام ځوابونه وګورئ.',
      crumbs: [{ label: tNav.home, href: href('/') }, { label: 'د شبهاتو ځواب' }],
      searchPh: 'په پوښتنو کې لټون…',
      filters: { all: 'ټولې', belief: 'اعتقادي', history: 'تاريخي', social: 'ټولنيز' },
      askH: 'خپل سوال وليکئ',
      askP: 'که ستاسو پوښتنه دلته نه وي، ثبت يې کړئ څو وروسته ځواب ورته چمتو شي.',
      form: { name: 'نوم (اختیاري)', question: 'پوښتنه', submit: 'لېږل' },
      questions: [
        { id: 'q1', tag: 'belief', q: 'بهائيت د اسلام دوام دی که جلا دين؟', a: 'لومړی ادعا روښانه کېږي، بيا د ارزونې معيارونه (متون، تاريخ او عقيده) وړاندې کېږي.' },
        { id: 'q2', tag: 'history', q: 'بابيت څنګه تر بهائيت واوښت؟', a: 'تاريخي کتنه: ادعاوې، پېښې، او د سرچينو ډولونه.' },
        { id: 'q3', tag: 'social', q: 'ولې د افغانستان چاپېريال مهم دی؟', a: 'د ادعاوو او اغېزو د ارزونې لپاره ټولنيز/کلتوري بافت مهم رول لري.' },
        { id: 'q4', tag: 'belief', q: 'سمه مطالعه او حواله ورکول څنګه؟', a: 'له معتبره سرچينو او معياري حوالو کار واخلئ څو د سطحيت مخه ونيول شي.' },
      ],
    },
    en: {
      title: 'Q&A (Responding to Doubts)',
      hero: 'Search common questions and read step-by-step answers.',
      crumbs: [{ label: tNav.home, href: href('/') }, { label: 'Q&A' }],
      searchPh: 'Search questions…',
      filters: { all: 'All', belief: 'Doctrinal', history: 'Historical', social: 'Social' },
      askH: 'Ask a Question',
      askP: 'If your question is not listed, submit it and it can be addressed in later updates.',
      form: { name: 'Name (optional)', question: 'Your question', submit: 'Submit' },
      questions: [
        { id: 'q1', tag: 'belief', q: 'Is the Baha’i Faith a continuation of Islam or an independent religion?', a: 'We clarify the claim and then introduce evaluation criteria (texts, history, and theology).' },
        { id: 'q2', tag: 'history', q: 'How did the Bábí movement evolve into the Bahá’í Faith?', a: 'A historical walkthrough of claims, events, and source types.' },
        { id: 'q3', tag: 'social', q: 'Why does Afghanistan’s context matter?', a: 'Because social and cultural context shapes both claims and real-world implications.' },
        { id: 'q4', tag: 'belief', q: 'What is the right way to study and cite sources?', a: 'Use primary sources where possible and apply consistent citation standards.' },
      ],
    },
  }[locale];

  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('all');

  const items = useMemo(() => {
    const q = query.trim().toLowerCase();
    return copy.questions
      .filter((it) => (filter === 'all' ? true : it.tag === filter))
      .filter((it) => (q ? it.q.toLowerCase().includes(q) : true))
      .map((it) => ({ id: it.id, q: it.q, a: it.a }));
  }, [copy.questions, filter, query]);

  return (
    <Layout locale={locale} title={copy.title}>
      <div className="container" style={{ paddingTop: 18 }}>
        <Breadcrumb locale={locale} items={copy.crumbs} />
      </div>

      <section className="hero" style={{ paddingTop: 26 }}>
        <div className="container">
          <h1 className="h1" style={{ fontSize: 40 }}>{copy.title}</h1>
          <p className="lead">{copy.hero}</p>
          <div className="grid" style={{ marginTop: 16, gap: 12 }}>
            <div className="search-row">
              <input
                className="search-input"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={copy.searchPh}
              />
            </div>
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
          <h2 className="section-title">{locale === 'en' ? 'Questions' : locale === 'ps' ? 'پوښتنې' : 'پرسش‌ها'}</h2>
          <p className="section-sub">{locale === 'en' ? 'Open an item to read the answer.' : locale === 'ps' ? 'پر يوه توکي کليک وکړئ.' : 'روی هر مورد کلیک کنید تا پاسخ نمایش داده شود.'}</p>
          <div style={{ marginTop: 14 }}>
            <Accordion items={items.length ? items : [{ id: 'none', q: locale === 'en' ? 'No results' : locale === 'ps' ? 'پایله نشته' : 'نتیجه‌ای یافت نشد', a: locale === 'en' ? 'Try a different keyword or filter.' : locale === 'ps' ? 'بل کليمه يا فلټر وازمويه.' : 'کلیدواژه یا فیلتر دیگری را امتحان کنید.' }]} />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="banner">
            <div>
              <h3>{copy.askH}</h3>
              <p>{copy.askP}</p>
              <form
                style={{ marginTop: 12, display: 'grid', gap: 10, maxWidth: 720 }}
                onSubmit={(e) => e.preventDefault()}
              >
                <input className="input" placeholder={copy.form.name} />
                <textarea className="textarea" rows={4} placeholder={copy.form.question} />
                <button className="btn btn-primary" type="submit">{copy.form.submit}</button>
                <div className="note">
                  {locale === 'en'
                    ? 'Note: This demo UI does not send messages yet. Connect it to your backend or email service.'
                    : locale === 'ps'
                      ? 'یادونه: دا ډيمو UI اوس پيغام نه لېږي. وروسته يې له سرور/ايميل سره ونښلوئ.'
                      : 'یادداشت: این نسخه فعلاً پیام را ارسال نمی‌کند؛ بعداً به بک‌اند یا ایمیل سرویس وصل کنید.'}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
