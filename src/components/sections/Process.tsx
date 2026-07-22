'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';
import styles from './Process.module.css';

const steps = [
  {
    step: '01',
    icon: '🔍',
    title: 'Discover',
    description: 'Understand business goals, user needs, and technical constraints through stakeholder interviews and research.',
  },
  {
    step: '02',
    icon: '🎯',
    title: 'Define',
    description: 'Synthesize insights into clear problem statements, success metrics, and design principles.',
  },
  {
    step: '03',
    icon: '✏️',
    title: 'Design',
    description: 'Explore solutions through wireframes, interaction patterns, and high-fidelity UI built in Figma.',
  },
  {
    step: '04',
    icon: '🧪',
    title: 'Validate',
    description: 'Test prototypes with real users, gather feedback, and iterate rapidly to reduce risk.',
  },
  {
    step: '05',
    icon: '🚀',
    title: 'Deliver',
    description: 'Hand off production-ready specs to engineering with design tokens, documentation, and support.',
  },
];

export default function Process() {
  const revealRef = useScrollReveal(0.1, 'scale');

  return (
    <section className={`section ${styles.process}`} aria-label="My product design process">
      <div className="container">
        <div className={styles.header}>
          <h2 className="section-title" style={{ marginBottom: '0.75rem' }}>My Product Design Process</h2>
          <p className={styles.subtitle}>
            A structured, human-centered approach that aligns business strategy with user needs at every step.
          </p>
        </div>
        <div className={styles.grid} ref={revealRef}>
          {steps.map((step) => (
            <article key={step.step} className={styles.card}>
              <div className={styles.iconWrap} aria-hidden="true">
                <span className={styles.icon} role="img" aria-label={step.title}>{step.icon}</span>
              </div>
              <div className={styles.stepLabel}>Step {step.step}</div>
              <h3 className={styles.title}>{step.title}</h3>
              <p className={styles.description}>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
