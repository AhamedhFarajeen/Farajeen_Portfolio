import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/data/projects';
import styles from './Projects.module.css';

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles['section-inner']}>
        <div className={styles['section-header-row']}>
          <div>
            <div className={styles['section-eyebrow']}>
              <div className={styles['eyebrow-line']}></div>
              <span className={styles['eyebrow-text']}>Selected Work</span>
            </div>
            <h2 className={styles['section-heading']}>
              Featured <em>projects</em>
            </h2>
            <p className={styles['section-sub']}>
              Real-world applications built from concept to deployment — spanning
              web development, system design, and full-stack engineering.
            </p>
          </div>
          <Link
            href="/contact"
            className={styles['view-all']}
          >
            Contact me →
          </Link>
        </div>

        <div className={styles['projects-grid']}>
          {projects.map((proj) => (
            <div key={proj.slug} className={styles['proj-card']}>
              <div className={styles['proj-visual']}>
                <div className={styles['proj-pattern']}></div>
                <div
                  className={styles['proj-gradient']}
                  style={{ background: proj.gradient }}
                ></div>
                <Image
                  src={proj.image}
                  alt={`${proj.title} thumbnail`}
                  fill
                  sizes="(max-width: 700px) 100vw, 50vw"
                  className={styles['proj-image']}
                />
              </div>
              <div className={styles['proj-info']}>
                <div className={styles['proj-tag']}>{proj.tag}</div>
                <div className={styles['proj-title']}>
                  {proj.cardTitle}
                  <br />
                  <em>{proj.cardSubtitle}</em>
                </div>
                <div className={styles['proj-tech']}>
                  {proj.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
              <div className={styles['proj-hover']}>
                <Link href={proj.href} className={styles['proj-hover-label']}>
                  View Details
                </Link>
              </div>
            </div>
          ))}

          <div className={styles['proj-card-coming']}>
            <div className={styles['proj-content']}>
              <div className={styles['proj-tag']}>Currently Building</div>
              <div className={styles['proj-title']} style={{ fontSize: '1.8rem' }}>
                More projects <em>coming soon</em>
              </div>
              <p className={styles['proj-desc']}>
                Pursuing BSc (Hons) in IT at SLIIT — expected 2028. Always
                building, learning, and shipping new ideas.
              </p>
              <div className={styles['availability']}>
                <div className={styles['avail-dot']}></div>
                <span>Available for internships & projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
