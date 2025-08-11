export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 text-slate-900 flex items-center justify-center p-6">
      <div className="max-w-2xl w-full bg-white rounded-xl shadow-md p-8">
        <h1 className="text-3xl md:text-4xl font-semibold">
          Neurodiversity Platform — Coming Soon
        </h1>

        <p className="mt-4 text-lg">
          You’re running locally. We’ll add the first activities next.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <a
            href="/activities/co-regulation"
            className="block rounded-lg border border-slate-200 p-4 hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo"
          >
            <h2 className="text-xl font-medium">Co-regulation</h2>
            <p className="mt-1 text-sm text-slate-600">
              60-second calm timer and simple scripts.
            </p>
          </a>

          <a
            href="/activities/homework-micro-start"
            className="block rounded-lg border border-slate-200 p-4 hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo"
          >
            <h2 className="text-xl font-medium">Homework micro-start</h2>
            <p className="mt-1 text-sm text-slate-600">
              Three-minute start to beat overwhelm.
            </p>
          </a>

          <a
            href="/activities/morning-routine-checklist"
            className="block rounded-lg border border-slate-200 p-4 hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo"
          >
            <h2 className="text-xl font-medium">Morning routine checklist</h2>
            <p className="mt-1 text-sm text-slate-600">
              2–4 visual steps with print view.
            </p>
          </a>

          <a
            href="/recommendations"
            className="block rounded-lg border border-slate-200 p-4 hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo"
          >
            <h2 className="text-xl font-medium">Get suggestions</h2>
            <p className="mt-1 text-sm text-slate-600">
              Quick intake → mini plan with a “why” line.
            </p>
          </a>
        </div>

        <footer className="mt-8 text-xs text-slate-500">
          Tip: edit this file at <code>src/app/page.tsx</code>. Save to refresh.
        </footer>
      </div>
    </main>
  );
}