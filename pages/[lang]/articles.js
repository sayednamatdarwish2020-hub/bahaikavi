import ArticlesPage from '../../components/pages/ArticlesPage';
import { LOCALES } from '../../lib/i18n';

export default function ArticlesRoute({ locale }) {
  return <ArticlesPage locale={locale} />;
}

export async function getStaticPaths() {
  return { paths: LOCALES.map((lang) => ({ params: { lang } })), fallback: false };
}

export async function getStaticProps({ params }) {
  return { props: { locale: params.lang } };
}
