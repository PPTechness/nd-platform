'use client';

import { useState } from 'react';
import { printWithWatermark } from '@/lib/print';

type Step = { id: string; text: string; done: boolean };

export default function MorningRoutineChecklist() {
  const [steps, setSteps] = useState<Step[]>([
    { id: '1', text: 'Wash face', done: false },
    { id: '2', text: 'Brush teeth', done: false },
    { id: '3', text: 'Shoes on', done: false },
  ]);

  const toggle = (id: string) =>
    setSteps((s) => s.map((st) => (st.id === id ? { ...st, done: !st.done } : st)));

  const move = (index: number, dir: -1 | 1) => {
    setSteps((s) => {
      const next = [...s];
      const j = index + dir;
      if (j < 0 || j >= next.length) return next;
      [next[index], next[j]] = [next[j], next[index]];
      return next;
    });
  };

  const addStep = () => {
    const text = prompt('Add a step (short)');
    if (!text) return;
    setSteps((s) => [...s, { id: String(Date.now()), text, done: false }]);
  };

  return (
    <main className="min-h-screen bg-slate-100 text-slate-900 p-6">
      <div className="mx-auto max-w-3xl bg-white rounded-xl shadow-md p-6">
        <h1 className="text-2xl font-semibold">Morning routine checklist</h1>
        <p className="mt-1 text-slate-700">Short visual first-then checklist to reduce friction.</p>

        <div className="mt-4 rounded-xl border border-slate-200 p-4 bg-white">
          <ol className="space-y-2">
            {steps.map((s, i) => (
              <li key={s.id} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="h-5 w-5 accent-[#1FB6A6]"
                  checked={s.done}
                  onChange={() => toggle(s.id)}
                  aria-label={`Mark ${s.text} as ${s.done ? 'not done' : 'done'}`}
                />
                <span className={`flex-1 ${s.done ? 'line-through text-slate-400' : ''}`}>{s.text}</span>
                <div className="flex gap-1">
                  <button className="rounded-md border px-2 py-1" onClick={() => move(i, -1)} aria-label="Move up">↑</button>
                  <button className="rounded-md border px-2 py-1" onClick={() => move(i, 1)} aria-label="Move down">↓</button>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-3 flex gap-2">
            <button className="rounded-md bg-[#1FB6A6] text-white px-3 py-2" onClick={addStep}>Add step</button>
            <button
              className="rounded-md bg-slate-900 text-white px-3 py-2"
              onClick={() => printWithWatermark({ name: 'Parent', email: 'parent@example.com' })}
            >
              Print checklist (watermarked)
            </button>
          </div>
        </div>

        <footer className="mt-6 text-xs text-slate-500">
          Evidence tag: visuals and short sequences support morning transitions, especially for ages 3–6.
        </footer>
      </div>
    </main>
  );
}