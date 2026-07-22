'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useParallax } from '@/hooks/useParallax';
import styles from './Hero.module.css';
import Link from 'next/link';

export default function Hero() {
  const revealRef = useScrollReveal();
  const parallaxRef = useParallax();

  return (
    <section className={styles.hero} id="hero" aria-label="Hero introduction">
      <div className={styles.background} ref={parallaxRef} aria-hidden="true">
        <div className={styles.blob1} />
        <div className={styles.blob2} />
        <div className={styles.blob3} />
      </div>

      <div className="container">
        <div className={styles.content} ref={revealRef}>
          <div className={styles.badgeRow}>
            <div className={styles.badge}>
              <span className={styles.badgeDot} aria-hidden="true" />
              Available for Remote Product Design Opportunities
            </div>
            <div className={styles.experienceBadge}>17+ Years Experience</div>
          </div>

          <h1 className={styles.title}>
            Designing{' '}
            <span className={styles.titleAccent}>AI-ready</span>{' '}
            digital products that feel calm, clear, and commercially sharp.
          </h1>

          <p className={styles.subtitle}>
            I’m a senior product designer with 17+ years of experience shaping enterprise software, SaaS, healthcare, FinTech, and AI-powered experiences. I help teams turn complex problems into elegant, high-impact products with strong product strategy, thoughtful systems, and measurable user value.
          </p>

          <div className={styles.actions}>
            <Link href="#work" className="btn btn-primary">
              View Projects
            </Link>
            <a
              href="/KK_Senthil_Royan_Resume.pdf"
              download="KK_Senthil_Royan_Resume.pdf"
              className="btn btn-secondary"
              aria-label="Download Senthil Royan resume PDF"
            >
              Download Resume
            </a>
            <Link href="#contact" className="btn btn-secondary">
              Let's Connect
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
