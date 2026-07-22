'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';
import styles from './Workflow.module.css';

const workflowPhases = [
  {
    title: 'Discover',
    description: 'Translate business context and user needs into a clear product opportunity and measured outcomes.',
  },
  {
    title: 'Frame',
    description: 'Shape the problem space, content structure, and design principles before exploring solutions.',
  },
  {
    title: 'Prototype',
    description: 'Rapidly iterate concepts through flows, states, and interface patterns that can be tested quickly.',
  },
  {
    title: 'Validate',
    description: 'Refine based on feedback, accessibility, and technical reality to reduce risk and improve confidence.',
  },
];

const toolGroups = [
  {
    group: 'Design',
    tools: ['Figma', 'FigJam', 'Framer', 'Adobe CC'],
  },
  {
    group: 'Research',
    tools: ['Miro', 'Notion', 'Google Workspace', 'Jira'],
  },
  {
    group: 'Development',
    tools: ['React', 'Next.js', 'Tailwind CSS', 'Vercel'],
  },
  {
    group: 'AI',
    tools: ['ChatGPT', 'Claude', 'Cursor AI', 'Gemini'],
  },
];

export default function Workflow() {
  const revealRef = useScrollReveal();

  return (
    <section className={`section ${styles.workflow}`} id="workflow" aria-label="Design workflow and tools">
      <div className="container">
        <div className={styles.grid} ref={revealRef}>
          <div>
            <h2 className="section-title">Design Workflow</h2>
            <p className={styles.intro}>
              A structured approach that balances creativity, rigor, and momentum from first insight to final handoff.
            </p>
          </div>
          <div className={styles.content}>
            <div className={styles.phaseGrid}>
              {workflowPhases.map((phase, index) => (
                <article key={phase.title} className={styles.phaseCard}>
                  <span className={styles.step}>0{index + 1}</span>
                  <h3>{phase.title}</h3>
                  <p>{phase.description}</p>
                </article>
              ))}
            </div>
            <div className={styles.toolSection}>
              {toolGroups.map((group) => (
                <div key={group.group} className={styles.toolGroup}>
                  <h3>{group.group}</h3>
                  <div className={styles.toolPills}>
                    {group.tools.map((tool) => (
                      <span key={tool} className={styles.toolPill}>{tool}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
