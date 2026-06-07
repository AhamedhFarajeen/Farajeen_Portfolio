'use client';

import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import styles from './Navbar.module.css';

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'projects', label: 'Projects' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact Me' },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('hero');
  const routeActiveLink = pathname.startsWith('/projects')
    ? 'projects'
    : pathname.startsWith('/about')
      ? 'about'
      : pathname.startsWith('/contact')
        ? 'contact'
        : 'hero';
  const currentActiveLink = pathname === '/' ? activeLink : routeActiveLink;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (pathname !== '/') {
      return;
    }

    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveLink(visible.target.id);
        }
      },
      {
        rootMargin: '-35% 0px -45% 0px',
        threshold: [0.1, 0.25, 0.5, 0.75],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [pathname]);

  const navigateTo = (id: string) => {
    if (pathname === '/') {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      window.history.replaceState(null, '', `#${id}`);
    } else {
      router.push(`/#${id}`);
    }
  };

  return (
    <nav className={styles.nav} style={{ boxShadow: isScrolled ? '0 8px 22px rgba(17,17,17,0.08)' : 'none' }}>
      <div className={styles['nav-pill']}>
        <div className={styles['nav-logo']}>
          <div className={styles['nav-logo-inner']}>AF</div>
        </div>
        <div className={styles['nav-div']}></div>
        {navItems.slice(0, 3).map((item) => (
          <button
            key={item.id}
            className={`${styles['nav-link']} ${currentActiveLink === item.id ? styles.active : ''}`}
            onClick={() => navigateTo(item.id)}
          >
            {item.label}
          </button>
        ))}
        <div className={styles['nav-div']}></div>
        <button
          className={`${styles['nav-cta']} ${currentActiveLink === 'contact' ? styles.active : ''}`}
          onClick={() => navigateTo('contact')}
        >
          <span data-short-label="Contact">Contact Me</span>
        </button>
      </div>
    </nav>
  );
}
