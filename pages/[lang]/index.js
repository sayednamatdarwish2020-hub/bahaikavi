import HomePage from '../../components/pages/HomePage';
import { LOCALES } from '../../lib/i18n';

export default function LangHome({ locale }) {
  return <HomePage locale={locale} />;
}

export async function getStaticPaths() {
  return {
    paths: LOCALES.map((lang) => ({ params: { lang } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  return { props: { locale: params.lang } };
}
