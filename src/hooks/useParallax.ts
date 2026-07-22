'use client';

import { useEffect, useRef } from 'react';

export function useParallax() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let animFrameId: number;

    const handleScroll = () => {
      animFrameId = requestAnimationFrame(() => {
        if (!ref.current) return;
        const scrollY = window.scrollY;
        ref.current.style.transform = `translateY(${scrollY * 0.25}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animFrameId);
    };
  }, []);

  return ref;
}
