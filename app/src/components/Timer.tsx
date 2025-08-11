'use client';

import { useEffect, useRef, useState } from 'react';

type TimerProps = {
  seconds: number;
  label?: string;
  onComplete?: () => void;
};

export default function Timer({ seconds, label = 'Timer', onComplete }: TimerProps) {
  const [remaining, setRemaining] = useState(seconds);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (!running) return;
    intervalRef.current = window.setInterval(() => {
      setRemaining((r) => {
        if (r <= 1) {
          window.clearInterval(intervalRef.current!);
          intervalRef.current = null;
          setRunning(false);
          onComplete?.();
          return 0;
        }
        return r - 1;
      });
    }, 1000);
    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
    };
  }, [running, onComplete]);

  const minutes = Math.floor(remaining / 60).toString().padStart(2, '0');
  const secs = (remaining % 60).toString().padStart(2, '0');

  return (
    <div className="rounded-xl border border-slate-200 p-4 bg-white">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium">{label}</h3>
        <span className="text-sm text-slate-600">Space: start/pause • Enter: reset</span>
      </div>

      <div className="mt-3 flex items-center gap-3">
        <div
          aria-live="polite"
          className="text-4xl font-semibold tabular-nums tracking-tight"
        >
          {minutes}:{secs}
        </div>
        <div className="flex gap-2">
          <button
            className="rounded-md bg-[#1FB6A6] text-white px-3 py-2 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            onClick={() => setRunning((r) => !r)}
          >
            {running ? 'Pause' : 'Start'}
          </button>
          <button
            className="rounded-md bg-slate-100 text-slate-900 px-3 py-2 hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            onClick={() => {
              setRunning(false);
              setRemaining(seconds);
            }}
          >
            Reset
          </button>
        </div>
      </div>

      {/* Keyboard controls */}
      <div
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.code === 'Space') {
            e.preventDefault();
            setRunning((r) => !r);
          }
          if (e.code === 'Enter') {
            e.preventDefault();
            setRunning(false);
            setRemaining(seconds);
          }
        }}
        aria-label="Timer keyboard controls"
        className="sr-only"
      />
    </div>
  );
}