import MediaPage from '../../components/pages/MediaPage';
import { LOCALES } from '../../lib/i18n';

export default function MediaRoute({ locale }) {
  return <MediaPage locale={locale} />;
}

export async function getStaticPaths() {
  return { paths: LOCALES.map((lang) => ({ params: { lang } })), fallback: false };
}

export async function getStaticProps({ params }) {
  return { props: { locale: params.lang } };
}
