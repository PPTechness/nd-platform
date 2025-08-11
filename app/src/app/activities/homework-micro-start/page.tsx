'use client';

import Timer from '@/components/Timer';
import Tabs from '@/components/Tabs';
import AudioSay from '@/components/AudioSay';
import { printWithWatermark } from '@/lib/print';
import { useState } from 'react';

export default function HomeworkMicroStartPage() {
  const [choice, setChoice] = useState<string>('');

  return (
    <main className="min-h-screen bg-slate-100 text-slate-900 p-6">
      <div className="mx-auto max-w-3xl bg-white rounded-xl shadow-md p-6">
        <h1 className="text-2xl font-semibold">Homework micro-start</h1>
        <p className="mt-1 text-slate-700">Start with a tiny, timed first step to beat overwhelm.</p>

        <section className="mt-4 space-y-2">
          <h2 className="text-lg font-medium">Why this helps</h2>
          <p className="text-slate-700">
            Short, timed starts reduce avoidance and build confidence to begin work. Starting is the hard part.
          </p>
        </section>

        <section className="mt-4 space-y-2">
          <h2 className="text-lg font-medium">Real-world scenario</h2>
          <p className="text-slate-700">
            It is 17:00. Homework sits untouched. Agree a three-minute start. When the timer ends, stop and choose the next step together.
          </p>
        </section>

        <section className="mt-6">
          <Timer seconds={180} label="3-minute start" />
        </section>

        <section className="mt-6">
          <h2 className="text-lg font-medium mb-2">Choose the next step</h2>
          <div className="flex flex-wrap gap-2">
            {['Continue this task', 'Switch task', 'Take a short break'].map((opt) => (
              <button
                key={opt}
                className={`rounded-lg border px-3 py-2 ${choice === opt ? 'bg-[#1FB6A6] text-white border-[#1FB6A6]' : 'bg-white border-slate-200'}`}
                onClick={() => setChoice(opt)}
              >
                {opt}
              </button>
            ))}
          </div>
          {choice && <p className="mt-3 text-slate-700">You chose: <strong>{choice}</strong></p>}
        </section>

        <section className="mt-6">
          <h2 className="text-lg font-medium mb-2">How to say it</h2>
          <Tabs
            tabs={[
              {
                id: '3-6',
                label: 'Ages 3–6',
                content: (
                  <div className="space-y-3">
                    <p>“We will do three lines. Then sticker time.”</p>
                    <AudioSay text="We will do three lines. Then sticker time." />
                  </div>
                ),
              },
              {
                id: '7-11',
                label: 'Ages 7–11',
                content: (
                  <div className="space-y-3">
                    <p>“Three minutes on the timer. We stop when it buzzes and choose what’s next.”</p>
                    <AudioSay text="Three minutes on the timer. We stop when it buzzes and choose what's next." />
                  </div>
                ),
              },
              {
                id: '12-16',
                label: 'Ages 12–16',
                content: (
                  <div className="space-y-3">
                    <p>“Let’s start for three minutes. When the timer ends, you decide to continue or switch.”</p>
                    <AudioSay text="Let's start for three minutes. When the timer ends, you decide to continue or switch." />
                  </div>
                ),
              },
            ]}
          />
        </section>

        <section className="mt-6">
          <button
            className="rounded-md bg-slate-900 text-white px-3 py-2 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            onClick={() => printWithWatermark({ name: 'Parent', email: 'parent@example.com' })}
          >
            Print card (watermarked)
          </button>
        </section>

        <footer className="mt-6 text-xs text-slate-500">
          Evidence tag: brief, low-stakes starts support task initiation.
        </footer>
      </div>
    </main>
  );
}