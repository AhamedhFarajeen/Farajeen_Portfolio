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
  const [pendingActiveLink, setPendingActiveLink] = useState<string | null>(null);
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

    const setActiveFromHash = () => {
      const hash = window.location.hash.replace('#', '');

      if (navItems.some((item) => item.id === hash)) {
        setActiveLink(hash);
        setPendingActiveLink(hash);
        window.setTimeout(() => setPendingActiveLink(null), 800);
        return true;
      }

      return false;
    };

    const getActiveSection = () => {
      if (pendingActiveLink) {
        return;
      }

      const sections = navItems
        .map((item) => document.getElementById(item.id))
        .filter((section): section is HTMLElement => Boolean(section));

      if (sections.length === 0) {
        return;
      }

      const marker = window.innerHeight * 0.38;
      const current =
        sections
          .filter((section) => section.getBoundingClientRect().top <= marker)
          .at(-1) ?? sections[0];

      if (current.id === pendingActiveLink) {
        setPendingActiveLink(null);
      }

      setActiveLink(current.id);
    };

    if (!setActiveFromHash()) {
      getActiveSection();
    }
    const frame = requestAnimationFrame(getActiveSection);
    const timeout = window.setTimeout(getActiveSection, 350);

    window.addEventListener('scroll', getActiveSection, { passive: true });
    window.addEventListener('resize', getActiveSection);
    window.addEventListener('hashchange', setActiveFromHash);

    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(timeout);
      window.removeEventListener('scroll', getActiveSection);
      window.removeEventListener('resize', getActiveSection);
      window.removeEventListener('hashchange', setActiveFromHash);
    };
  }, [pathname, pendingActiveLink]);

  const navigateTo = (id: string) => {
    setActiveLink(id);
    setPendingActiveLink(id);
    window.setTimeout(() => {
      setPendingActiveLink(null);
      setActiveLink(id);
    }, 800);

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
          <button
            type="button"
            className={styles['nav-logo-inner']}
            aria-label="Go to home section"
            onClick={() => navigateTo('hero')}
          >
            AF
          </button>
        </div>
        <div className={styles['nav-div']}></div>
        {navItems.slice(0, 3).map((item) => (
          <button
            key={item.id}
            className={`${styles['nav-link']} ${currentActiveLink === item.id ? styles.active : ''}`}
            aria-current={currentActiveLink === item.id ? 'page' : undefined}
            onClick={() => navigateTo(item.id)}
          >
            {item.label}
          </button>
        ))}
        <div className={styles['nav-div']}></div>
        <button
          className={`${styles['nav-cta']} ${currentActiveLink === 'contact' ? styles.active : ''}`}
          aria-current={currentActiveLink === 'contact' ? 'page' : undefined}
          onClick={() => navigateTo('contact')}
        >
          <span data-short-label="Contact">Contact Me</span>
        </button>
      </div>
    </nav>
  );
}
