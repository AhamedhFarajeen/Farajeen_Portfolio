'use client';

import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import styles from './Navbar.module.css';

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const activeLink = pathname.startsWith('/projects')
    ? 'projects'
    : pathname.startsWith('/about')
      ? 'about'
      : pathname.startsWith('/contact')
        ? 'contact'
        : 'home';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (href: string) => {
    if (pathname !== href) {
      router.push(href);
    }
  };

  return (
    <nav className={styles.nav} style={{ boxShadow: isScrolled ? '0 8px 22px rgba(17,17,17,0.08)' : 'none' }}>
      <div className={styles['nav-pill']}>
        <div className={styles['nav-logo']}>
          <div className={styles['nav-logo-inner']}>AF</div>
        </div>
        <div className={styles['nav-div']}></div>
        <button
          className={`${styles['nav-link']} ${activeLink === 'home' ? styles.active : ''}`}
          onClick={() => navigateTo('/')}
        >
          Home
        </button>
        <button
          className={`${styles['nav-link']} ${activeLink === 'projects' ? styles.active : ''}`}
          onClick={() => navigateTo('/projects')}
        >
          Projects
        </button>
        <button
          className={`${styles['nav-link']} ${activeLink === 'about' ? styles.active : ''}`}
          onClick={() => navigateTo('/about')}
        >
          About
        </button>
        <div className={styles['nav-div']}></div>
        <button
          className={`${styles['nav-cta']} ${activeLink === 'contact' ? styles.active : ''}`}
          onClick={() => navigateTo('/contact')}
        >
          <span>Contact Me</span>
        </button>
      </div>
    </nav>
  );
}
