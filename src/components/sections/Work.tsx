'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';
import Image from 'next/image';
import styles from './Work.module.css';

interface Project {
  id: number;
  title: string;
  category: string;
  role: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Aatral Yoga',
    category: 'Wellness Platform',
    role: 'Lead Designer & Developer',
    description: 'Designed and developed a modern yoga and wellness platform focused on user engagement, trust, and conversion. Built with performance and mobile-first design in mind.',
    tags: ['UX Design', 'UI Design', 'Next.js', 'Wellness'],
    image: '/images/pro-01.jpg',
    link: 'https://aatralyoga.vercel.app/'
  },
  {
    id: 2,
    title: 'Aurelix3D',
    category: 'Premium Product Experience',
    role: 'Product Designer',
    description: 'Designed an elegant interactive product experience showcasing a premium smartwatch with modern storytelling and clean product presentation.',
    tags: ['Interaction Design', '3D Experience', 'Product Design'],
    image: '/images/pro-02.jpg',
    link: 'https://aurelix3d.vercel.app/'
  },
  {
    id: 3,
    title: 'E-Shop Computers',
    category: 'eCommerce Platform',
    role: 'UX & UI Designer',
    description: 'Designed a responsive shopping experience focused on usability, product discovery, and customer engagement across mobile and desktop.',
    tags: ['eCommerce', 'UX Design', 'Responsive', 'React'],
    image: '/images/project-03.jpg',
    link: 'https://eshop-computers.vercel.app/'
  },
  {
    id: 4,
    title: 'CA Sachin Associates',
    category: 'Corporate Website',
    role: 'Lead Designer',
    description: 'Professional business website designed to establish trust, credibility, and service clarity for a chartered accounting firm.',
    tags: ['Corporate', 'Branding', 'Web Design', 'SEO'],
    image: '/images/project-04.jpg',
    link: 'https://ca-sachin-associates.vercel.app/'
  },
  {
    id: 5,
    title: 'PyroShield',
    category: 'Fire & Safety',
    role: 'Lead Designer',
    description: 'Corporate website focused on enterprise branding, service communication, and lead generation for a fire and safety company.',
    tags: ['Corporate', 'B2B', 'Enterprise', 'Lead Gen'],
    image: '/images/project-05.jpg',
    link: 'https://pyroshield.vercel.app/'
  },
];

export default function Work() {
  const revealRef = useScrollReveal();

  return (
    <section className={`section ${styles.work}`} id="work" aria-label="Featured projects">
      <div className="container">
        <div ref={revealRef}>
          <h2 className="section-title">Selected Work</h2>
          <div className={styles.grid}>
            {projects.map((project) => (
              <a
                href={project.link}
                key={project.id}
                className={styles.card}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} project`}
              >
                <div className={styles.imageContainer}>
                  <Image
                    src={project.image}
                    alt={`${project.title} — ${project.category} screenshot`}
                    fill
                    className={styles.image}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    loading="lazy"
                  />
                  <div className={styles.overlay} aria-hidden="true">
                    <span className={styles.overlayText}>
                      Visit Website
                      <svg className={styles.overlayArrow} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M7 17L17 7M17 7H7M17 7v10"/>
                      </svg>
                    </span>
                  </div>
                </div>
                <div className={styles.meta}>
                  <div className={styles.metaTop}>
                    <span className={styles.category}>{project.category}</span>
                    <span className={styles.role}>{project.role}</span>
                  </div>
                  <h3 className={styles.title}>{project.title}</h3>
                  <p className={styles.description}>{project.description}</p>
                  <div className={styles.tags} aria-label="Technologies used">
                    {project.tags.map((tag) => (
                      <span key={tag} className={styles.tag}>{tag}</span>
                    ))}
                  </div>
                  <span className={styles.visitBtn} aria-hidden="true">
                    Visit Website
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M7 17L17 7M17 7H7M17 7v10"/>
                    </svg>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
