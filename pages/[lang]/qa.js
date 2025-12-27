import QaPage from '../../components/pages/QaPage';
import { LOCALES } from '../../lib/i18n';

export default function QaRoute({ locale }) {
  return <QaPage locale={locale} />;
}

export async function getStaticPaths() {
  return { paths: LOCALES.map((lang) => ({ params: { lang } })), fallback: false };
}

export async function getStaticProps({ params }) {
  return { props: { locale: params.lang } };
}
