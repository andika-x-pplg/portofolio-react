import { useEffect, useState } from 'react';

/**
 * First-visit "engine start" boot animation: a tachometer needle revs
 * up, the ignition text ticks through boot messages, then the whole
 * overlay flashes and wipes away to reveal the site.
 */
const BOOT_LINES = [
  'Priming engine…',
  'Loading components…',
  'Calibrating UI…',
  'Ignition ready',
];

const EngineLoader = ({ onDone }) => {
  const [progress, setProgress] = useState(0);
  const [lineIndex, setLineIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setProgress(100);
      setLeaving(true);
      const t = setTimeout(() => onDone?.(), 250);
      return () => clearTimeout(t);
    }

    let raf;
    const duration = 1900;
    const start = performance.now();

    const tick = (now) => {
      const elapsed = now - start;
      // easeOutCubic revving curve
      const p = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const value = Math.floor(eased * 100);
      setProgress(value);
      setLineIndex(Math.min(BOOT_LINES.length - 1, Math.floor(p * BOOT_LINES.length)));

      if (p < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setLeaving(true);
        setTimeout(() => onDone?.(), 650);
      }
    };
    raf = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(raf);
  }, [onDone]);

  // Needle sweeps from -120deg to +120deg as progress goes 0 -> 100
  const needleAngle = -120 + (progress / 100) * 240;

  return (
    <div
      className={`fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#05070a] transition-all duration-700 ease-[cubic-bezier(0.65,0,0.35,1)] ${
        leaving ? 'opacity-0 scale-[1.06] pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* subtle radial glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(45,212,191,0.12),transparent_60%)]" />

      {/* Tachometer */}
      <div className="relative h-40 w-40 md:h-52 md:w-52">
        <svg viewBox="0 0 200 200" className="h-full w-full -rotate-0">
          <circle cx="100" cy="100" r="88" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="3" />
          <circle
            cx="100"
            cy="100"
            r="88"
            fill="none"
            stroke="#22d3ee"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray={2 * Math.PI * 88 * 0.75}
            strokeDashoffset={2 * Math.PI * 88 * 0.75 * (1 - progress / 100)}
            transform="rotate(135 100 100)"
          />
          {/* needle */}
          <g style={{ transform: `rotate(${needleAngle}deg)`, transformOrigin: '100px 100px', transition: 'transform 0.05s linear' }}>
            <line x1="100" y1="100" x2="100" y2="30" stroke="#22d3ee" strokeWidth="3" strokeLinecap="round" />
          </g>
          <circle cx="100" cy="100" r="6" fill="#22d3ee" />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl md:text-3xl font-bold text-white tabular-nums">{progress}%</span>
        </div>
      </div>

      <p className="mt-6 text-xs md:text-sm uppercase tracking-[0.3em] text-cyan-400/80 animate-pulse">
        {BOOT_LINES[lineIndex]}
      </p>

      <p className="mt-2 text-[10px] md:text-xs tracking-[0.4em] text-slate-500">ANDIKA · ESDA · SAPUTRA</p>
    </div>
  );
};

export default EngineLoader;
