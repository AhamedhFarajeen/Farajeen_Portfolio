'use client';

import type { FormEvent } from 'react';
import styles from './Contact.module.css';

const quickLinks = [
  {
    label: 'Email',
    value: 'ahamedhfarajeen@gmail.com',
    href: 'mailto:ahamedhfarajeen@gmail.com',
  },
  {
    label: 'LinkedIn',
    value: 'ahamedhfarajeen',
    href: 'https://linkedin.com/in/ahamedhfarajeen',
  },
  {
    label: 'GitHub',
    value: 'AhamedhFarajeen',
    href: 'https://github.com/AhamedhFarajeen',
  },
];

export default function Contact() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get('name') ?? '');
    const email = String(formData.get('email') ?? '');
    const message = String(formData.get('message') ?? '');

    const body = [`Name: ${name}`, `Email: ${email}`, '', message].join('\n');

    window.location.href = `mailto:ahamedhfarajeen@gmail.com?subject=${encodeURIComponent(
      'Portfolio contact'
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.orbit} aria-hidden="true">
        <span></span>
        <span></span>
      </div>

      <div className={styles['section-inner']}>
        <header className={styles.hero}>
          
          
        </header>

        <div className={styles.panel}>
          <aside className={styles.sidebar}>
            <div className={styles.status}>
              <span></span>
              Open to Internships
            </div>

            <p className={styles.intro}>
              For internships, junior roles, freelance work, or collaboration.
            </p>

            <div className={styles.links}>
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  <span>{link.label}</span>
                  <strong>{link.value}</strong>
                </a>
              ))}
            </div>

            <div className={styles.location}>
              <span>Based in</span>
              <strong>Sri Lanka</strong>
            </div>
          </aside>

          <form className={styles.form} onSubmit={handleSubmit}>
            <label className={styles.field}>
              <span>Name</span>
              <input name="name" type="text" placeholder="Your name" required />
            </label>

            <label className={styles.field}>
              <span>Email</span>
              <input name="email" type="email" placeholder="you@example.com" required />
            </label>

            <label className={styles.field}>
              <span>Message</span>
              <textarea
                name="message"
                rows={6}
                placeholder="Share an internship opportunity, project context, or how I can help..."
                required
              ></textarea>
            </label>

            <button type="submit" className={styles['submit-btn']}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
