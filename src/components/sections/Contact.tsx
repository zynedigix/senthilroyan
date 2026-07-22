'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';
import styles from './Contact.module.css';

const contactInfo = [
  {
    icon: '📧',
    label: 'Email',
    value: 'senthilroyan.work@gmail.com',
    href: 'mailto:senthilroyan.work@gmail.com',
    isLink: true,
  },
  {
    icon: '📍',
    label: 'Location',
    value: 'Bengaluru, India',
    isLink: false,
  },
  {
    icon: '💼',
    label: 'Availability',
    value: 'Immediate Joiner',
    isLink: false,
  },
];

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/senthilroyan',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: 'https://github.com/zynedigix/',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
  },
  {
    label: 'Email',
    href: 'mailto:senthilroyan.work@gmail.com',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
  },
];

export default function Contact() {
  const revealRef = useScrollReveal();

  return (
    <section className={styles.contact} id="contact" aria-label="Contact Senthil Royan">
      <div className="container">
        <div className={styles.inner} ref={revealRef}>
          <div className={styles.header}>
            <h2 className={styles.title}>Let's Build Better Digital Products Together</h2>
            <p className={styles.description}>
              I'm currently open to Lead Product Designer, Senior Product Designer, Product Design Manager, and UX Strategy opportunities across global teams. If you're building meaningful products and looking for someone who can bridge business goals, user needs, and technology, I'd love to connect.
            </p>
          </div>

          <div className={styles.card}>
            {/* Contact Info */}
            <div className={styles.infoGrid}>
              {contactInfo.map((item) => (
                <div key={item.label} className={styles.infoItem}>
                  <span className={styles.infoIcon} aria-hidden="true">{item.icon}</span>
                  <span className={styles.infoLabel}>{item.label}</span>
                  {item.isLink ? (
                    <a href={item.href} className={styles.infoValueLink}>{item.value}</a>
                  ) : (
                    <span className={styles.infoValue}>{item.value}</span>
                  )}
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className={styles.actionButtons}>
              <a
                href="mailto:senthilroyan.work@gmail.com"
                className="btn btn-primary"
                aria-label="Send email to Senthil Royan"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                Email Me
              </a>
              <a
                href="/KK_Senthil_Royan_Resume.pdf"
                download="KK_Senthil_Royan_Resume.pdf"
                className="btn btn-secondary"
                aria-label="Download Senthil Royan resume"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Download Resume
              </a>
              <a
                href="https://www.linkedin.com/in/senthilroyan"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                aria-label="Connect with Senthil Royan on LinkedIn"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                Connect on LinkedIn
              </a>
              <a
                href="tel:+919591909721"
                className="btn btn-secondary"
                aria-label="Call Senthil Royan"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.12.81.38 1.6.78 2.34a2 2 0 0 1-.45 2.11L9.91 10.09a16 16 0 0 0 6 6l1.92-1.42a2 2 0 0 1 2.11-.45c.74.4 1.53.66 2.34.78A2 2 0 0 1 22 16.92z"/>
                </svg>
                +91-9591909721
              </a>
            </div>

            {/* Social Links */}
            <div className={styles.socialSection}>
              <p className={styles.socialLabel}>Find me on</p>
              <div className={styles.socialIcons}>
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith('mailto') ? undefined : '_blank'}
                    rel={s.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                    className={styles.socialBtn}
                    aria-label={s.label}
                  >
                    {s.icon}
                    <span className={styles.tooltip}>{s.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
