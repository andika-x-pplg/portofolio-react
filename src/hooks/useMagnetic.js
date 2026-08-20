import { useRef } from 'react';

/**
 * Subtle magnetic-pull hover effect: the element nudges toward the
 * cursor within its own bounds, then springs back on leave.
 * Pure CSS transform, no dependencies, harmless on touch (no mousemove there).
 */
export function useMagnetic({ strength = 0.35 } = {}) {
  const ref = useRef(null);

  const onMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  };

  const onMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = 'translate(0px, 0px)';
  };

  return {
    ref,
    onMouseMove,
    onMouseLeave,
    style: { transition: 'transform 0.3s cubic-bezier(0.22, 1, 0.36, 1)', willChange: 'transform' },
  };
}
