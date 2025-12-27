export default function Tabs({ tabs, activeKey, onChange }) {
  // tabs: [{ key, label, content }]
  const active = tabs.find((t) => t.key === activeKey) || tabs[0];
  return (
    <div className="tabs">
      <div className="tablist" role="tablist">
        {tabs.map((t) => (
          <button
            key={t.key}
            type="button"
            className={`tab ${t.key === activeKey ? 'active' : ''}`}
            role="tab"
            aria-selected={t.key === activeKey}
            onClick={() => onChange(t.key)}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div className="tabpanel" role="tabpanel">
        {active?.content}
      </div>
    </div>
  );
}
