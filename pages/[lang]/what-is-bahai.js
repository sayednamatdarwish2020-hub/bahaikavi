import WhatIsBahaiPage from '../../components/pages/WhatIsBahaiPage';
import { LOCALES } from '../../lib/i18n';

export default function WhatIsBahaiRoute({ locale }) {
  return <WhatIsBahaiPage locale={locale} />;
}

export async function getStaticPaths() {
  return { paths: LOCALES.map((lang) => ({ params: { lang } })), fallback: false };
}

export async function getStaticProps({ params }) {
  return { props: { locale: params.lang } };
}
