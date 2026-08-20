import { useEffect, useRef, useState } from 'react';

/**
 * Reveals children with a subtle 3D tilt + rise transition as they
 * scroll into view. Lightweight IntersectionObserver based, no deps.
 */
const Reveal = ({
  children,
  className = '',
  as: Tag = 'div',
  delay = 0,
  axis = 'x', // 'x' tilts up from below, 'y' tilts in from the side
  distance = 40,
}) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const hiddenTransform =
    axis === 'y'
      ? `perspective(1200px) rotateY(10deg) translateX(${distance}px)`
      : `perspective(1200px) rotateX(12deg) translateY(${distance}px)`;

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'perspective(1200px) rotateX(0) rotateY(0) translate(0,0)' : hiddenTransform,
        transition: `opacity 0.8s cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 0.8s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
        willChange: 'transform, opacity',
      }}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
