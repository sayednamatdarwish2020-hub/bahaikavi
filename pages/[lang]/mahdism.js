import MahdismPage from '../../components/pages/MahdismPage';
import { LOCALES } from '../../lib/i18n';

export default function MahdismRoute({ locale }) {
  return <MahdismPage locale={locale} />;
}

export async function getStaticPaths() {
  return { paths: LOCALES.map((lang) => ({ params: { lang } })), fallback: false };
}

export async function getStaticProps({ params }) {
  return { props: { locale: params.lang } };
}
