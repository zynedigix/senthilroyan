'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';
import styles from './Leadership.module.css';

const leadership = [
  'Cross-functional leadership', 'Stakeholder management', 'Design reviews',
  'Mentoring designers', 'Discovery workshops', 'Product strategy',
  'Design governance', 'Scalable design systems', 'Business collaboration',
  'AI workflow adoption'
];

const whyWorkWithMe = [
  '17+ years of experience', 'Enterprise product thinking', 'Business-first UX',
  'Human-centered design', 'Strong collaboration with engineering', 'Accessibility-first approach',
  'AI-assisted product development', 'Product strategy mindset', 'Design leadership', 'Calm execution under pressure'
];

export default function Leadership() {
  const revealRef = useScrollReveal();

  return (
    <section className={`section ${styles.leadership}`} id="leadership">
      <div className="container">
        <div className={styles.grid} ref={revealRef}>
          <div>
            <h2 className="section-title">Leadership</h2>
            <p className={styles.intro}>
              I lead with clarity, empathy, and a strong bias for outcomes that matter to both users and business teams.
            </p>
          </div>
          <div className={styles.lists}>
            <div className={styles.listColumn}>
              <h3>Leadership focus</h3>
              <ul className={styles.list}>
                {leadership.map((item, index) => (
                  <li key={index} className={styles.listItem}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.listColumn}>
              <h3>Why work with me</h3>
              <ul className={styles.list}>
                {whyWorkWithMe.map((item, index) => (
                  <li key={index} className={styles.listItem}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
