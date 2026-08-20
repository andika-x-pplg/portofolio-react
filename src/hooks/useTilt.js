import { useRef } from 'react';

/**
 * Lightweight mouse-driven 3D tilt effect.
 * Returns a ref to attach to the element you want to tilt.
 * Pure CSS transforms, no dependencies, disabled on touch devices.
 */
export function useTilt({ max = 10, scale = 1.03, glare = true } = {}) {
  const ref = useRef(null);

  const onMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rotateY = (x - 0.5) * max * 2;
    const rotateX = (0.5 - y) * max * 2;

    el.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`;

    if (glare) {
      const glareEl = el.querySelector('[data-tilt-glare]');
      if (glareEl) {
        glareEl.style.background = `radial-gradient(circle at ${x * 100}% ${y * 100}%, rgba(255,255,255,0.18), transparent 55%)`;
      }
    }
  };

  const onMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)';
    const glareEl = el.querySelector('[data-tilt-glare]');
    if (glareEl) glareEl.style.background = 'transparent';
  };

  const bind = {
    ref,
    onMouseMove,
    onMouseLeave,
    style: { transition: 'transform 0.35s cubic-bezier(0.22, 1, 0.36, 1)', willChange: 'transform' },
  };

  return bind;
}
