import { useState } from 'react';
import Layout from '../Layout';
import Breadcrumb from '../Breadcrumb';
import { nav } from '../../lib/i18n';

export default function ContactPage({ locale }) {
  const tNav = nav[locale];
  const href = (slug) => `/${locale}${slug === '/' ? '' : slug}`;

  const copy = {
    fa: {
      title: 'تماس',
      hero: 'برای ارتباط، پیشنهاد یا گزارش خطا پیام بفرستید. (فرم امن و ساده)',
      crumbs: [{ label: tNav.home, href: href('/') }, { label: 'تماس' }],
      name: 'نام',
      email: 'ایمیل',
      subject: 'موضوع',
      message: 'پیام',
      send: 'ارسال پیام',
      privacy: 'یادداشت محرمانگی: اطلاعات شما فقط برای پاسخ‌گویی استفاده می‌شود. از ارسال اطلاعات حساس خودداری کنید.',
      ok: 'پیام شما دریافت شد. ممنون!',
      fail: 'ارسال ناموفق بود. لطفاً بعداً دوباره تلاش کنید.',
    },
    ps: {
      title: 'اړيکه',
      hero: 'د اړیکې، وړاندیز یا خطا راپور لپاره پیغام ولېږئ. (ساده او خوندي فورم)',
      crumbs: [{ label: tNav.home, href: href('/') }, { label: 'اړيکه' }],
      name: 'نوم',
      email: 'برېښنالیک',
      subject: 'موضوع',
      message: 'پیغام',
      send: 'پیغام ولېږئ',
      privacy: 'د محرمیت یادونه: ستاسې معلومات یوازې د ځواب لپاره کارېږي. مهرباني وکړئ حساس معلومات مه لېږئ.',
      ok: 'ستاسې پیغام ترلاسه شو. مننه!',
      fail: 'لېږل ناکام شول. وروسته بیا هڅه وکړئ.',
    },
    en: {
      title: 'Contact',
      hero: 'Send a message for feedback, suggestions, or error reports. (Simple, secure form)',
      crumbs: [{ label: tNav.home, href: href('/') }, { label: 'Contact' }],
      name: 'Name',
      email: 'Email',
      subject: 'Subject',
      message: 'Message',
      send: 'Send Message',
      privacy: 'Privacy note: Your information is used only to respond. Please avoid sending sensitive data.',
      ok: 'Message received. Thank you!',
      fail: 'Send failed. Please try again later.',
    },
  }[locale];

  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle');

  const onChange = (key) => (e) => setForm((p) => ({ ...p, [key]: e.target.value }));

  async function onSubmit(e) {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, locale }),
      });
      if (!res.ok) throw new Error('bad');
      setStatus('ok');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch {
      setStatus('fail');
    }
  }

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
          <div className="grid" style={{ gridTemplateColumns: '1fr', gap: 18, maxWidth: 760 }}>
            <form className="card form" onSubmit={onSubmit}>
              <div className="field">
                <div className="label">{copy.name}</div>
                <input className="input" value={form.name} onChange={onChange('name')} autoComplete="name" maxLength={80} />
              </div>
              <div className="field">
                <div className="label">{copy.email}</div>
                <input className="input" type="email" value={form.email} onChange={onChange('email')} autoComplete="email" maxLength={120} required />
              </div>
              <div className="field">
                <div className="label">{copy.subject}</div>
                <input className="input" value={form.subject} onChange={onChange('subject')} maxLength={120} required />
              </div>
              <div className="field">
                <div className="label">{copy.message}</div>
                <textarea className="textarea" value={form.message} onChange={onChange('message')} maxLength={2000} required />
              </div>

              <button className="btn btn-primary" type="submit" disabled={status === 'loading'}>
                {copy.send}
              </button>

              {status === 'ok' && <div className="note">✅ {copy.ok}</div>}
              {status === 'fail' && <div className="note">⚠️ {copy.fail}</div>}
              <div className="note">{copy.privacy}</div>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}
