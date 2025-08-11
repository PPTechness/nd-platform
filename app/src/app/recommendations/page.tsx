'use client';

import { useState } from 'react';
import { IntakeInputs, recommend } from '@/content/intake-rules.v1';

export default function RecommendationsPage() {
  const [inputs, setInputs] = useState<IntakeInputs>({});
  const [result, setResult] = useState<ReturnType<typeof recommend> | null>(null);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setResult(recommend(inputs));
  };

  return (
    <main className="min-h-screen bg-slate-100 text-slate-900 p-6">
      <div className="mx-auto max-w-3xl bg-white rounded-xl shadow-md p-6">
        <h1 className="text-2xl font-semibold">Get suggestions</h1>
        <p className="mt-1 text-slate-700">Quick intake → three items and a clear “why”.</p>

        <form onSubmit={submit} className="mt-4 grid gap-3 sm:grid-cols-2">
          <label className="flex flex-col gap-1">
            <span className="text-sm">Age band</span>
            <select className="rounded-md border border-slate-300 p-2"
              value={inputs.ageBand ?? ''} onChange={(e) => setInputs({ ...inputs, ageBand: e.target.value as '3-6' | '7-11' | '12-16' | undefined })}>
              <option value="">Select</option>
              <option value="3-6">3–6</option>
              <option value="7-11">7–11</option>
              <option value="12-16">12–16</option>
            </select>
          </label>

          <label className="flex flex-col gap-1">
            <span className="text-sm">Main challenge</span>
            <select className="rounded-md border border-slate-300 p-2"
              value={inputs.challenge ?? ''} onChange={(e) => setInputs({ ...inputs, challenge: e.target.value as 'morningTransitions' | 'homeworkRefusal' | 'publicMeltdowns' | 'bedtimeAnxiety' | 'earlySigns' | undefined })}>
              <option value="">Select</option>
              <option value="morningTransitions">Morning transitions</option>
              <option value="homeworkRefusal">Homework refusal</option>
              <option value="publicMeltdowns">Public meltdowns</option>
              <option value="bedtimeAnxiety">Bedtime anxiety</option>
              <option value="earlySigns">Early signs before upset</option>
            </select>
          </label>

          <label className="flex flex-col gap-1">
            <span className="text-sm">Confidence today</span>
            <select className="rounded-md border border-slate-300 p-2"
              value={inputs.confidence ?? ''} onChange={(e) => setInputs({ ...inputs, confidence: Number(e.target.value) as 1 | 2 | 3 | undefined })}>
              <option value="">Select</option>
              <option value="1">1 (low)</option>
              <option value="2">2</option>
              <option value="3">3 (high)</option>
            </select>
          </label>

          <label className="flex flex-col gap-1">
            <span className="text-sm">Trigger (optional)</span>
            <select className="rounded-md border border-slate-300 p-2"
              value={inputs.trigger ?? ''} onChange={(e) => setInputs({ ...inputs, trigger: e.target.value as 'noise' | 'lights' | 'crowd' | 'none' | undefined })}>
              <option value="">None</option>
              <option value="noise">Noise</option>
              <option value="lights">Lights</option>
              <option value="crowd">Crowd</option>
            </select>
          </label>

          <label className="flex flex-col gap-1">
            <span className="text-sm">What helps you?</span>
            <select className="rounded-md border border-slate-300 p-2"
              value={inputs.parentPrefers ?? ''} onChange={(e) => setInputs({ ...inputs, parentPrefers: e.target.value as 'visuals' | 'text' | 'audio' | 'none' | undefined })}>
              <option value="">No preference</option>
              <option value="visuals">Visuals</option>
              <option value="text">Text</option>
              <option value="audio">Audio</option>
            </select>
          </label>

          <div className="sm:col-span-2">
            <button className="rounded-md bg-[#1FB6A6] text-white px-4 py-2">Get my mini plan</button>
          </div>
        </form>

        {result && (
          <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4">
            <p className="font-medium">Why these:</p>
            <p className="text-slate-700 mt-1">{result.why}</p>
            <ul className="mt-4 list-disc pl-5 space-y-1">
              {result.activities.map((a) => (
                <li key={a.key}>
                  <a className="text-[#4C5FD7] underline" href={a.href}>{a.title}</a>
                </li>
              ))}
            </ul>
            <div className="mt-4 rounded-lg bg-white border border-slate-200 p-3">
              <p className="text-sm font-medium">Data used</p>
              <pre className="text-xs text-slate-700 mt-1 overflow-auto">{JSON.stringify(result.dataUsed, null, 2)}</pre>
              <p className="text-xs text-slate-600 mt-2">
                You can switch off personalisation or delete this data in Settings (coming soon).
              </p>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}