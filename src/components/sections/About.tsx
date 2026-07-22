'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';
import styles from './About.module.css';

const highlights = [
  {
    title: 'Design leadership',
    description: 'I guide product strategy, design direction, and cross-functional execution from discovery through launch.',
  },
  {
    title: 'Systems thinking',
    description: 'I create scalable design systems and clear interaction patterns that help teams move faster without losing quality.',
  },
  {
    title: 'AI product fluency',
    description: 'I shape AI-first experiences that are useful, trustworthy, and aligned with real user needs.',
  },
  {
    title: 'Commercial clarity',
    description: 'I connect thoughtful design decisions to business goals, adoption, and long-term product momentum.',
  },
];

export default function About() {
  const revealRef = useScrollReveal();

  return (
    <section className={`section ${styles.about}`} id="about">
      <div className="container">
        <div className={styles.grid} ref={revealRef}>
          <div>
            <h2 className="section-title">About</h2>
            <p className={styles.intro}>
              I help ambitious teams build products that feel premium, intuitive, and ready for the next stage of growth.
            </p>
          </div>
          <div className={styles.content}>
            <p>
              I’m a senior product designer with 17+ years of experience delivering enterprise-scale digital products across SaaS, healthcare, FinTech, eCommerce, manufacturing, and AI-led experiences.
            </p>
            <p>
              My work sits at the intersection of product strategy, UX leadership, and polished execution. I thrive when the brief is complex, the stakeholders are diverse, and the product needs to earn trust quickly.
            </p>
            <div className={styles.highlights}>
              {highlights.map((item) => (
                <article key={item.title} className={styles.card}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
