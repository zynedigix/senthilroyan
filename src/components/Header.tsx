'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Experience', href: '#experience' },
  { label: 'Work', href: '#work' },
  { label: 'Leadership', href: '#leadership' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setIsScrolled(currentScroll > 20);
      const doc = document.documentElement;
      const totalScrollable = doc.scrollHeight - doc.clientHeight;
      const progress = totalScrollable > 0 ? (currentScroll / totalScrollable) * 100 : 0;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href) as HTMLElement | null)
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        if (!visibleEntries.length) return;

        visibleEntries.sort((a, b) => {
          if (a.intersectionRatio !== b.intersectionRatio) {
            return b.intersectionRatio - a.intersectionRatio;
          }
          return a.boundingClientRect.top - b.boundingClientRect.top;
        });

        const topEntry = visibleEntries[0];
        if (topEntry?.target?.id) {
          setActiveSection(topEntry.target.id);
        }
      },
      {
        threshold: [0.45, 0.55, 0.65],
        rootMargin: '-30% 0px -45% 0px',
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`${styles.header} ${isScrolled ? styles.headerScrolled : ''}`}
      role="banner"
    >
      <div className={`container ${styles.nav}`}>
        <Link href="/" className={styles.logo} aria-label="Senthil Royan — Home">
          Senthil Royan<span className={styles.logoDot}>.</span>
        </Link>
        <div className={styles.progressBar} aria-hidden="true">
          <div className={styles.progressFill} style={{ width: `${scrollProgress}%` }} />
        </div>
        <nav className={styles.navLinks} aria-label="Main navigation">
          {navLinks.map((link) => {
            const sectionId = link.href.replace('#', '');
            const isActive = activeSection === sectionId;

            return (
              <Link
                key={link.label}
                href={link.href}
                className={`${styles.navLink} ${isActive ? styles.navLinkActive : ''}`}
                aria-current={isActive ? 'page' : undefined}
              >
                {link.label}
              </Link>
            );
          })}
          <Link href="#contact" className={styles.navCta} aria-label="Get in touch with Senthil">
            Let's Connect
          </Link>
        </nav>
      </div>
    </header>
  );
}
