import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/data/projects';
import styles from './Projects.module.css';

type Project = (typeof projects)[number];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Link
      href={project.href}
      className={styles['proj-card']}
      aria-label={`View ${project.title} project details`}
    >
      <div className={styles['proj-visual']}>
        <Image
          src={project.image}
          alt={`${project.title} thumbnail`}
          fill
          sizes="(max-width: 699px) calc(100vw - 2rem), (max-width: 999px) calc(50vw - 2rem), 356px"
          className={styles['proj-image']}
          priority={index === 0}
          quality={95}
          style={{ objectPosition: project.imagePosition ?? 'center' }}
        />
        <div
          className={styles['proj-tint']}
          style={{ background: project.gradient }}
        />
      </div>

      <div className={styles['proj-info']}>
        <div className={styles['proj-meta']}>
          <span>{project.tag}</span>
          <span className={styles['proj-arrow']} aria-hidden="true">
            ↗
          </span>
        </div>
        <h3 className={styles['proj-title']}>
          <span>{project.cardTitle}</span>
          <span>{project.cardSubtitle}</span>
        </h3>
        <div className={styles['proj-tech']}>
          {project.tech.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>
      </div>
    </Link>
  );
}

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles['section-inner']}>
        <div className={styles['section-header-row']}>
          <div className={styles['header-copy']}>
            <div className={styles['section-eyebrow']}>
              <div className={styles['eyebrow-line']}></div>
              <span className={styles['eyebrow-text']}>Selected Work</span>
            </div>
            <h2 className={styles['section-heading']}>
              Featured <em>projects</em>
            </h2>
            <p className={styles['section-sub']}>
              Practical software projects built while strengthening my frontend,
              backend, database, and product problem-solving skills.
            </p>
          </div>
          <Link href="/#contact" className={styles['view-all']}>
            Internship contact →
          </Link>
        </div>

        <div className={styles['projects-grid']}>
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
