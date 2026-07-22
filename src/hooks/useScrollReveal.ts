'use client';

import { useEffect, useRef } from 'react';

type RevealType = 'up' | 'left' | 'right' | 'scale';

export function useScrollReveal(threshold = 0.1, type: RevealType = 'up') {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const currentRef = ref.current;
    if (!currentRef) return;

    const hiddenClass = type === 'left' || type === 'right' ? 'reveal-left' : type === 'scale' ? 'reveal-scale' : 'reveal-hidden';
    const visibleClass = type === 'left' || type === 'right' ? 'reveal-left-visible' : type === 'scale' ? 'reveal-scale-visible' : 'reveal-visible';

    currentRef.classList.add(hiddenClass);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          currentRef.classList.add(visibleClass);
          currentRef.classList.remove(hiddenClass);
          observer.unobserve(currentRef);
        }
      },
      { threshold, rootMargin: '0px 0px -50px 0px' }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [threshold, type]);

  return ref;
}
