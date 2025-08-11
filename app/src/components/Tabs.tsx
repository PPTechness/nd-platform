'use client';

import { useState } from 'react';

type Tab = { id: string; label: string; content: React.ReactNode };

export default function Tabs({ tabs, initialId }: { tabs: Tab[]; initialId?: string }) {
  const [active, setActive] = useState<string>(initialId ?? tabs[0]?.id);

  return (
    <div>
      <div role="tablist" className="flex gap-2">
        {tabs.map((t) => (
          <button
            key={t.id}
            role="tab"
            aria-selected={active === t.id}
            className={`rounded-lg px-3 py-2 border text-sm ${
              active === t.id ? 'bg-slate-900 text-white border-slate-900' : 'bg-white border-slate-200'
            }`}
            onClick={() => setActive(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div className="mt-3 rounded-xl border border-slate-200 bg-white p-4">
        {tabs.find((t) => t.id === active)?.content}
      </div>
    </div>
  );
}