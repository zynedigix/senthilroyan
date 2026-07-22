'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Metrics.module.css';

interface Metric {
  value: string;
  numericValue: number;
  suffix: string;
  label: string;
}

const metrics: Metric[] = [
  { value: '17+', numericValue: 17, suffix: '+', label: 'Years Experience' },
  { value: '7+', numericValue: 7, suffix: '+', label: 'Companies' },
  { value: '5+', numericValue: 5, suffix: '+', label: 'Featured Projects' },
  { value: '100%', numericValue: 100, suffix: '%', label: 'Remote-Ready' },
  { value: '∞', numericValue: 0, suffix: '', label: 'AI Products Passion' },
];

function AnimatedNumber({ metric, isVisible }: { metric: Metric; isVisible: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible || metric.numericValue === 0) return;

    const duration = 1500;
    const steps = 40;
    const stepValue = metric.numericValue / steps;
    const stepDuration = duration / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current = Math.min(Math.round(stepValue * step), metric.numericValue);
      setCount(current);
      if (step >= steps) clearInterval(timer);
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isVisible, metric.numericValue]);

  if (metric.numericValue === 0) {
    return <span className={styles.number}>{metric.value}</span>;
  }

  return (
    <span className={styles.number}>
      {count}{metric.suffix}
    </span>
  );
}

export default function Metrics() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const currentRef = sectionRef.current;
    if (!currentRef) return;

    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(currentRef);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(currentRef);
    return () => observer.unobserve(currentRef);
  }, []);

  return (
    <section className={styles.metrics} ref={sectionRef} aria-label="Key metrics and statistics">
      <div className="container">
        <div className={styles.grid}>
          {metrics.map((metric, i) => (
            <div key={i} className={styles.item}>
              <AnimatedNumber metric={metric} isVisible={isVisible} />
              <div className={styles.label}>{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
