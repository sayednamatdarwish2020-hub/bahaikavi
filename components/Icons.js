export function IconMenu(props) {
  return (
    <svg className={props.className || 'icon'} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </svg>
  );
}

export function IconClose(props) {
  return (
    <svg className={props.className || 'icon'} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 6l12 12" />
      <path d="M18 6L6 18" />
    </svg>
  );
}

export function IconSearch(props) {
  return (
    <svg className={props.className || 'icon'} viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-3.5-3.5" />
    </svg>
  );
}

export function IconBook(props) {
  return (
    <svg className={props.className || 'icon'} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 19a2 2 0 0 0 2 2h13" />
      <path d="M6 3h13v18H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
    </svg>
  );
}

export function IconStar(props) {
  return (
    <svg className={props.className || 'icon'} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3l2.6 5.7 6.2.6-4.7 4.1 1.4 6.1L12 16.9 6.5 19.6l1.4-6.1L3.2 9.3l6.2-.6L12 3z" />
    </svg>
  );
}
