import Link from 'next/link';

export default function Breadcrumb({ locale, items }) {
  // items: [{ label, href }]
  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      {items.map((it, idx) => (
        <span className="crumb" key={`${it.href}-${idx}`}>
          {it.href ? <Link href={it.href}>{it.label}</Link> : <span>{it.label}</span>}
          {idx < items.length - 1 ? <span aria-hidden="true">/</span> : null}
        </span>
      ))}
    </nav>
  );
}
