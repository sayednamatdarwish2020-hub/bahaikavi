import ContactPage from '../../components/pages/ContactPage';
import { LOCALES } from '../../lib/i18n';

export default function ContactRoute({ locale }) {
  return <ContactPage locale={locale} />;
}

export async function getStaticPaths() {
  return { paths: LOCALES.map((lang) => ({ params: { lang } })), fallback: false };
}

export async function getStaticProps({ params }) {
  return { props: { locale: params.lang } };
}
