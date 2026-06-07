'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './Hero.module.css';

const roles = [
  'Software Engineering Undergraduate',
  ' ',
  'Looking for Internships',
];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIdx((prev) => (prev + 1) % roles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles['hero-bg']}></div>
      <div className={styles['hero-orb']} style={{ '--delay': '0s' } as React.CSSProperties}></div>
      <div className={styles['hero-orb']} style={{ '--delay': '2s' } as React.CSSProperties}></div>
      <div className={styles['hero-orb']} style={{ '--delay': '4s' } as React.CSSProperties}></div>
      <div className={styles['star']} style={{ '--star-delay': '0s' } as React.CSSProperties}></div>
      <div className={styles['star']} style={{ '--star-delay': '3s' } as React.CSSProperties}></div>
      <div className={styles['star']} style={{ '--star-delay': '6s' } as React.CSSProperties}></div>
      <div className={styles['star']} style={{ '--star-delay': '9s' } as React.CSSProperties}></div>
      <div className={styles['star']} style={{ '--star-delay': '12s' } as React.CSSProperties}></div>
      <div className={styles['hero-grid']}></div>
      <div className={styles['hero-content']}>
        <div className={styles['hero-eyebrow']}>Software Engineer · SLIIT &apos;28</div>
        <h1 className={styles['hero-name']}>
          Ahamedh<br />
          Farajeen
        </h1>
        <p className={styles['hero-role']}>
          <span className={styles['hero-role-word']} key={roleIdx}>
            {roles[roleIdx]}
          </span>
        </p>
        <p className={styles['hero-desc']}>
          I&apos;m a Software Engineering undergraduate focused on building
          practical web applications, learning scalable software development,
          and growing through real-world projects that solve clear user needs.
        </p>
        <div className={styles['hero-btns']}>
          <Link
            href="/#projects"
            className={styles['btn-solid']}
          >
            View My Projects
          </Link>
          
          <a
            href="/Resume.pdf"
            download="Ahamedh_Farajeen_Resume.pdf"
            className={styles['btn-outline']}
            style={{ textDecoration: 'none', display: 'inline-block' }}
          >
            Download Resume
          </a>
        </div>
      </div>
      <div className={styles['hero-bottom']}>
       
        <div className={styles['scroll-line']}></div>
      </div>
      <div className={styles['hero-fade']}></div>
    </section>
  );
}
