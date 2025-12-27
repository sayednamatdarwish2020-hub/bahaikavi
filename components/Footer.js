import Link from 'next/link';
import { footer, nav } from '../lib/i18n';

export default function Footer({ locale }) {
  const tF = footer[locale];
  const tNav = nav[locale];
  const href = (slug) => `/${locale}${slug === '/' ? '' : slug}`;

  return (
    <footer className="footer">
      <div className="container">
        <div className="cols">
          <div>
            <h4>{tF.aboutTitle}</h4>
            <p>{tF.aboutText}</p>
          </div>
          <div>
            <h4>{tF.linksTitle}</h4>
            <div className="links">
              <Link href={href('/')}>{tNav.home}</Link>
              <Link href={href('/what-is-bahai')}>{tNav.what}</Link>
              <Link href={href('/qa')}>{tNav.qa}</Link>
              <Link href={href('/mahdism')}>{tNav.mahdism}</Link>
            </div>
          </div>
          <div>
            <h4>{tF.contactTitle}</h4>
            <div className="links">
              <a href="#">{tF.email}</a>
              <a href="#">{tF.telegram}</a>
              <Link href={href('/contact')}>{tNav.contact}</Link>
            </div>
          </div>
          <div>
            <h4>{tF.legalTitle}</h4>
            <div className="links">
              <a href="#">{tF.privacy}</a>
              <a href="#">{tF.terms}</a>
            </div>
          </div>
        </div>
        <div className="bottom">
          <span>© 2025 {locale === 'en' ? "Baha'i-Kavi" : locale === 'ps' ? 'بهائي‌کاوي' : 'بهائی‌کاوی'}</span>
          <span>{tF.share}</span>
        </div>
      </div>
    </footer>
  );
}
