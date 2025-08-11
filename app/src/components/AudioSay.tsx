'use client';

import { useEffect, useRef, useState } from 'react';

export default function AudioSay({ text }: { text: string }) {
  const [speaking, setSpeaking] = useState(false);
  const utterRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  const speak = () => {
    if (!('speechSynthesis' in window)) return alert('Speech not supported on this device.');
    window.speechSynthesis.cancel();
    utterRef.current = new SpeechSynthesisUtterance(text);
    utterRef.current.lang = 'en-GB';
    utterRef.current.rate = 1;
    utterRef.current.onend = () => setSpeaking(false);
    setSpeaking(true);
    window.speechSynthesis.speak(utterRef.current);
  };

  const stop = () => {
    window.speechSynthesis.cancel();
    setSpeaking(false);
  };

  return (
    <div className="flex gap-2">
      <button
        className="rounded-md bg-[#4C5FD7] text-white px-3 py-2 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        onClick={speaking ? stop : speak}
      >
        {speaking ? 'Stop audio' : 'Play audio'}
      </button>
    </div>
  );
}