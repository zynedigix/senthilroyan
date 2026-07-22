'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';
import styles from './Experience.module.css';

interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  date: string;
  description: string;
  highlights: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    role: 'Lead Product Designer',
    company: 'ZyneDigix, Bangalore',
    date: 'Jan 2025 – Present',
    description: 'Leading end-to-end product design across AI-powered digital products, SaaS platforms, and enterprise applications.',
    highlights: [
      'Delivered AI-powered digital experiences across multiple industries including healthcare, FinTech, and eCommerce',
      'Conducted UX Research and Product Discovery Workshops to align business goals with user needs',
      'Built and maintained scalable Design Systems accelerating engineering delivery',
      'Mentored junior designers and championed design best practices across the organization',
    ]
  },
  {
    id: 2,
    role: 'Senior UX Designer &  Consultant',
    company: 'Collabera Digital, Bangalore',
    date: 'May 2023 – Dec 2024',
    description: 'Led UX design for enterprise healthcare platforms with a focus on accessibility, usability, and design systems.',
    highlights: [
      'Improved patient engagement through intuitive dashboard redesigns for enterprise healthcare clients',
      'Reduced workflow completion time by simplifying complex clinical data flows',
      'Standardized enterprise design systems improving consistency across 10+ product teams',
      'Drove cross-functional collaboration between design, engineering, and product management',
    ]
  },
  {
    id: 3,
    role: 'Project Manager (UX)',
    company: 'VE3 UK, London',
    date: 'Oct 2022 – Nov 2022',
    description: 'Managed UX delivery and stakeholder alignment for a UK-based technology consultancy.',
    highlights: [
      'Coordinated UX deliverables and timelines across cross-functional teams',
      'Facilitated stakeholder reviews and design feedback sessions',
      'Ensured design quality and consistency across delivered products',
    ]
  },
  {
    id: 4,
    role: 'UX/UI Lead',
    company: 'RSAB IT India Pvt Ltd, Bangalore',
    date: 'Jun 2016 – Sep 2022',
    description: 'Led the entire UX/UI function for hospitality platforms, booking systems, and enterprise products.',
    highlights: [
      'Improved booking experience through user research and end-to-end redesign of the reservation flow',
      'Created scalable UX standards and a component library used across all product lines',
      'Collaborated directly with developers to ensure pixel-perfect implementation of designs',
      'Accelerated product delivery by introducing rapid prototyping workflows',
    ]
  },
  {
    id: 5,
    role: 'Web Developer',
    company: 'ACO Technology Centre, Bangalore',
    date: 'Jan 2016 – May 2016',
    description: 'Contributed to front-end development of web applications.',
    highlights: [
      'Built responsive user interfaces using HTML5, CSS3, and JavaScript',
      'Collaborated with design team to implement UI specifications accurately',
    ]
  },
  {
    id: 6,
    role: 'UX/UI Developer',
    company: 'RSAB IT India Pvt Ltd, Bangalore',
    date: 'Nov 2013 – Dec 2015',
    description: 'Designed and developed user interfaces for web applications, bridging the gap between design and engineering.',
    highlights: [
      'Designed and developed UI components for hospitality and enterprise platforms',
      'Introduced user-centered design principles to the product development process',
      'Built interactive prototypes for client presentations and stakeholder reviews',
    ]
  },
  {
    id: 7,
    role: 'Senior Web Designer',
    company: 'Strategic Outsourcing Services, Bangalore',
    date: 'Mar 2008 – Nov 2013',
    description: 'Delivered web design projects for a diverse portfolio of clients spanning multiple industries.',
    highlights: [
      'Designed websites and digital experiences for 20+ clients across retail, services, and B2B sectors',
      'Established design workflows and brand guidelines for client projects',
      'Built strong foundations in typography, visual hierarchy, and user interface design',
    ]
  },
];

export default function Experience() {
  const revealRef = useScrollReveal();

  return (
    <section className={`section ${styles.experience}`} id="experience" aria-label="Professional experience">
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.sideLabel} ref={revealRef}>
            <h2 className="section-title" style={{ marginBottom: '1rem' }}>Experience</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem', lineHeight: 1.6 }}>
              17+ years across enterprise software, SaaS, healthcare, FinTech, and AI products.
            </p>
          </div>
          <div className={styles.timeline} role="list">
            {experiences.map((exp) => (
              <div key={exp.id} className={styles.item} role="listitem">
                <div className={styles.dot} aria-hidden="true" />
                <div className={styles.card}>
                  <div className={styles.header}>
                    <div className={styles.roleWrap}>
                      <span className={styles.role}>{exp.role}</span>
                      <span className={styles.company}>{exp.company}</span>
                    </div>
                    <span className={styles.date}>{exp.date}</span>
                  </div>
                  <p className={styles.description}>{exp.description}</p>
                  <div className={styles.highlights}>
                    {exp.highlights.map((item, i) => (
                      <div key={i} className={styles.highlight}>
                        <span className={styles.highlightDot} aria-hidden="true" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
