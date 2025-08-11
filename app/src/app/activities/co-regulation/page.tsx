'use client';
import Timer from '@/components/Timer';
import Tabs from '@/components/Tabs';
import AudioSay from '@/components/AudioSay';
import { printWithWatermark } from '@/lib/print';

export default function CoRegulationPage() {
  return (
    <main className="min-h-screen bg-slate-100 text-slate-900 p-6">
      <div className="mx-auto max-w-3xl bg-white rounded-xl shadow-md p-6">
        <h1 className="text-2xl font-semibold">Co-regulation in tough moments</h1>
        <p className="mt-1 text-slate-700">Help your child’s body calm by borrowing your calm.</p>

        {/* Explainer */}
        <section className="mt-4 space-y-2">
          <h2 className="text-lg font-medium">Why this helps</h2>
          <p className="text-slate-700">
            When you slow your breathing and voice, your child’s stress response starts to settle. Calm spreads from you to them.
          </p>

        </section>

        {/* Real world scenario */}
        <section className="mt-4 space-y-2">
          <h2 className="text-lg font-medium">Real-world scenario</h2>
          <p className="text-slate-700">
            Supermarket aisle. Your child is crying. Step back half a step, drop your voice, breathe in for 3 and out for 4 together,
            then offer two simple choices.
          </p>
        </section>

        {/* Timer */}
        <section className="mt-6">
          <Timer seconds={60} label="60-second calm timer" />
        </section>

        {/* Scripts */}
        <section className="mt-6">
          <h2 className="text-lg font-medium mb-2">How to say it</h2>
          <Tabs
            tabs={[
              {
                id: '3-6',
                label: 'Ages 3–6',
                content: (
                  <div className="space-y-3">
                    <p>“You are safe. Breathe with me. In for three, out for four. Then we choose trolley or basket.”</p>
                    <AudioSay text="You are safe. Breathe with me. In for three, out for four. Then we choose trolley or basket." />
                  </div>
                ),
              },
              {
                id: '7-11',
                label: 'Ages 7–11',
                content: (
                  <div className="space-y-3">
                    <p>“Pause with me. Three slow breaths. Then we pick one next step.”</p>
                    <AudioSay text="Pause with me. Three slow breaths. Then we pick one next step." />
                  </div>
                ),
              },
              {
                id: '12-16',
                label: 'Ages 12–16',
                content: (
                  <div className="space-y-3">
                    <p>“I’m going quiet to make space. Three slow breaths. Then your call. Exit the aisle or wait at the end.”</p>
                    <AudioSay text="I'm going quiet to make space. Three slow breaths. Then your call. Exit the aisle or wait at the end." />
                  </div>
                ),
              },
            ]}
          />
        </section>

        {/* Print */}
        <section className="mt-6 flex gap-2">
          <button
            className="rounded-md bg-slate-900 text-white px-3 py-2 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            onClick={() => printWithWatermark({ name: 'Parent', email: 'parent@example.com' })}
          >
            Print card (watermarked)
          </button>
        </section>

        <footer className="mt-6 text-xs text-slate-500">
          Evidence tag: parent-mediated co-regulation supports self-regulation development.
        </footer>
      </div>
    </main>
  );
}