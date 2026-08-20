import { useMemo } from 'react';

const SPARKLES = [
  { top: '8%', left: '14%', size: 'sm', delay: '0s', depth: -14 },
  { top: '18%', left: '76%', size: 'md', delay: '0.5s', depth: 18 },
  { top: '34%', left: '10%', size: 'xs', delay: '1.1s', depth: -8 },
  { top: '30%', left: '86%', size: 'sm', delay: '1.7s', depth: 10 },
  { top: '52%', left: '7%', size: 'lg', delay: '0.8s', depth: -16 },
  { top: '60%', left: '90%', size: 'xs', delay: '1.4s', depth: 12 },
  { top: '78%', left: '18%', size: 'md', delay: '2.1s', depth: -6 },
  { top: '82%', left: '76%', size: 'sm', delay: '0.3s', depth: 16 },
  { top: '44%', left: '50%', size: 'xs', delay: '1.9s', depth: 0 },
];

const HeroSparkles = () => {
  const sparkles = useMemo(() => SPARKLES, []);

  return (
    <div className="pointer-events-none absolute -inset-12 z-20 hidden transform-3d sm:block">
      <div className="hero-aura absolute inset-[14%] rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="hero-aura hero-aura-secondary absolute inset-[28%] rounded-full border border-cyan-400/15" />

      {sparkles.map((sparkle, index) => (
        <div
          key={`${sparkle.top}-${sparkle.left}-${index}`}
          className={`hero-sparkle hero-sparkle-${sparkle.size}`}
          style={{
            top: sparkle.top,
            left: sparkle.left,
            animationDelay: sparkle.delay,
            transform: `translateZ(${sparkle.depth}px)`,
          }}
        >
          <span className="hero-sparkle-cross" />
          <span className="hero-sparkle-glow" />
        </div>
      ))}

      <div className="hero-orbit hero-orbit-one absolute inset-[6%] rounded-full border border-cyan-400/10" />
      <div className="hero-orbit hero-orbit-two absolute inset-[18%] rounded-full border border-white/8" />
    </div>
  );
};

export default HeroSparkles;
