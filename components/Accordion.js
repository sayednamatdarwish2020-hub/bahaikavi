import { useState } from 'react';

export default function Accordion({ items, defaultOpen = null }) {
  // items: [{ id, q, a }]
  const [openId, setOpenId] = useState(defaultOpen);

  return (
    <div className="accordion" role="region">
      {items.map((it) => {
        const open = openId === it.id;
        return (
          <div className="acc-item" key={it.id}>
            <button
              type="button"
              className="acc-btn"
              aria-expanded={open}
              onClick={() => setOpenId(open ? null : it.id)}
            >
              <span>{it.q}</span>
              <span aria-hidden="true">{open ? '−' : '+'}</span>
            </button>
            {open ? <div className="acc-panel">{it.a}</div> : null}
          </div>
        );
      })}
    </div>
  );
}
