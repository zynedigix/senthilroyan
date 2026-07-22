'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';
import styles from './Expertise.module.css';

const coreExpertise = [
  {
    title: 'Product strategy',
    description: 'Framing opportunities, success metrics, and product direction with clarity and focus.',
  },
  {
    title: 'UX leadership',
    description: 'Guiding teams through discovery, systems, and execution without losing momentum.',
  },
  {
    title: 'Design systems',
    description: 'Building scalable foundations that accelerate delivery and keep experiences coherent.',
  },
  {
    title: 'AI product design',
    description: 'Designing intuitive AI experiences that remain useful, transparent, and human-centered.',
  },
];

const industryExperience = [
  'Enterprise software', 'SaaS platforms', 'Healthcare', 'FinTech', 'B2B products', 'AI experiences', 'Consumer digital products', 'eCommerce', 'Manufacturing', 'Digital transformation', 'Startups'
];

export default function Expertise() {
  const revealRef = useScrollReveal();

  return (
    <section className={`section ${styles.expertise}`} id="expertise">
      <div className="container">
        <div className={styles.grid} ref={revealRef}>
          <div>
            <h2 className="section-title">Expertise</h2>
            <p className={styles.intro}>
              I bring a senior product lens to every engagement, balancing user needs, product ambition, and operational reality.
            </p>
          </div>
          <div className={styles.content}>
            <div className={styles.sectionGroup}>
              <h3 className={styles.subTitle}>Core capabilities</h3>
              <div className={styles.cards}>
                {coreExpertise.map((item) => (
                  <div key={item.title} className={styles.card}>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.sectionGroup}>
              <h3 className={styles.subTitle}>Industry experience</h3>
              <div className={styles.cards}>
                {industryExperience.map((item) => (
                  <div key={item} className={styles.card}>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
