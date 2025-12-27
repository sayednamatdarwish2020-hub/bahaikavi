import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import { LOCALE_META } from '../lib/i18n';

export default function Layout({ locale, title, children }) {
  const meta = LOCALE_META[locale];
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Baha'i-Kavi" />
      </Head>
      <div dir={meta.dir} data-locale={locale}>
        <Header locale={locale} />
        <main id="content">{children}</main>
        <Footer locale={locale} />
      </div>
    </>
  );
}
