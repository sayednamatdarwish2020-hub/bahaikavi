import CritiquePage from '../../components/pages/CritiquePage';
import { LOCALES } from '../../lib/i18n';

export default function CritiqueRoute({ locale }) {
  return <CritiquePage locale={locale} />;
}

export async function getStaticPaths() {
  return { paths: LOCALES.map((lang) => ({ params: { lang } })), fallback: false };
}

export async function getStaticProps({ params }) {
  return { props: { locale: params.lang } };
}
