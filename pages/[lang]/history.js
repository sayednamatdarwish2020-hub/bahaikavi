import HistoryPage from '../../components/pages/HistoryPage';
import { LOCALES } from '../../lib/i18n';

export default function HistoryRoute({ locale }) {
  return <HistoryPage locale={locale} />;
}

export async function getStaticPaths() {
  return { paths: LOCALES.map((lang) => ({ params: { lang } })), fallback: false };
}

export async function getStaticProps({ params }) {
  return { props: { locale: params.lang } };
}