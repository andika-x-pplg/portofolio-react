import { useEffect, useRef, useState } from 'react';

/**
 * Bracket-only premium cursor.
 * - Normal: small [] around the pointer
 * - Hover interactive element: brackets expand and lock to that element's bounds
 * - Click: brackets tighten slightly
 *
 * This avoids the previous "double cursor" feel by removing the dot/label
 * layers entirely and by using a single follower shell.
 */
const CustomCursor = () => {
  const shellRef = useRef(null);
  const hoveredElRef = useRef(null);
  const [enabled] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(hover: hover) and (pointer: fine)').matches
  );
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!enabled) return;

    const pointer = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const shell = { x: pointer.x, y: pointer.y, w: 24, h: 24 };
    let rafId;

    const getHoverEl = (target) =>
      target?.closest?.('a, button, [data-cursor="hover"], input, textarea, label');

    const setHoverTarget = (target) => {
      const hoverEl = getHoverEl(target) || null;
      hoveredElRef.current = hoverEl;
      setHovering((prev) => (prev === Boolean(hoverEl) ? prev : Boolean(hoverEl)));
    };

    const onMove = (e) => {
      pointer.x = e.clientX;
      pointer.y = e.clientY;
      setVisible(true);
      setHoverTarget(e.target);
    };

    const onDown = () => setClicking(true);
    const onUp = () => setClicking(false);
    const onBlur = () => {
      hoveredElRef.current = null;
      setVisible(false);
      setHovering(false);
      setClicking(false);
    };
    const onMouseOut = (e) => {
      if (!e.relatedTarget && !e.toElement) onBlur();
    };
    const onMouseOver = () => setVisible(true);

    const loop = () => {
      const hoverEl = hoveredElRef.current;

      let targetX = pointer.x;
      let targetY = pointer.y;
      let targetW = 24;
      let targetH = 24;

      if (hoverEl?.isConnected) {
        const rect = hoverEl.getBoundingClientRect();
        const padX = rect.width < 56 ? 10 : 14;
        const padY = rect.height < 40 ? 8 : 12;

        targetX = rect.left + rect.width / 2;
        targetY = rect.top + rect.height / 2;
        targetW = Math.max(28, rect.width + padX);
        targetH = Math.max(28, rect.height + padY);
      }

      shell.x += (targetX - shell.x) * 0.18;
      shell.y += (targetY - shell.y) * 0.18;
      shell.w += (targetW - shell.w) * 0.18;
      shell.h += (targetH - shell.h) * 0.18;

      if (shellRef.current) {
        shellRef.current.style.transform = `translate3d(${shell.x}px, ${shell.y}px, 0) translate(-50%, -50%)`;
        shellRef.current.style.width = `${shell.w}px`;
        shellRef.current.style.height = `${shell.h}px`;
      }

      rafId = requestAnimationFrame(loop);
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('pointerdown', onDown);
    window.addEventListener('pointerup', onUp);
    window.addEventListener('mouseout', onMouseOut);
    window.addEventListener('mouseover', onMouseOver);
    window.addEventListener('blur', onBlur);

    rafId = requestAnimationFrame(loop);
    document.documentElement.classList.add('custom-cursor-active');

    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerdown', onDown);
      window.removeEventListener('pointerup', onUp);
      window.removeEventListener('mouseout', onMouseOut);
      window.removeEventListener('mouseover', onMouseOver);
      window.removeEventListener('blur', onBlur);
      cancelAnimationFrame(rafId);
      document.documentElement.classList.remove('custom-cursor-active');
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={shellRef}
      className={`cursor-bracket-shell pointer-events-none fixed left-0 top-0 z-9999 ${visible ? 'is-visible' : ''} ${hovering ? 'is-hovering' : ''} ${clicking ? 'is-clicking' : ''}`}
      aria-hidden="true"
    >
      <span className="cursor-corner cursor-corner-tl" />
      <span className="cursor-corner cursor-corner-tr" />
      <span className="cursor-corner cursor-corner-br" />
      <span className="cursor-corner cursor-corner-bl" />
    </div>
  );
};

export default CustomCursor;
