import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProject, projects } from '@/data/projects';
import styles from './ProjectDetails.module.css';

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const techLogos: Record<string, string> = {
  Bootstrap: 'B',
  Clerk: 'C',
  Cloudinary: '☁',
  'Express.js': 'ex',
  Java: '☕',
  JSP: 'JSP',
  MongoDB: 'M',
  'Next.js': 'N',
  'Node.js': '⬢',
  PostgreSQL: 'PG',
  Prisma: 'P',
  React: '⚛',
  'React.js': '⚛',
  Servlet: 'S',
  SQL: 'DB',
  Stripe: 'S',
  'Tailwind CSS': 'TW',
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailsPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className={styles.page}>
      <div className={styles.inner}>
        <Link href="/#projects" className={styles['back-link']}>
          ← Back to projects
        </Link>

        <section className={styles.hero}>
          <div>
            <span className={styles.eyebrow}>{project.tag}</span>
            <h1 className={styles.title}>{project.title}</h1>
            <p className={styles.description}>{project.description}</p>

            <div className={styles.actions}>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className={styles.button}
              >
                GitHub
              </a>
              {project.liveDemoUrl ? (
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={styles['button-secondary']}
                >
                  Visit Page
                </a>
              ) : null}
            </div>
          </div>

          <div className={styles.thumbnail}>
            <Image
              src={project.image}
              alt={`${project.title} preview`}
              fill
              sizes="(max-width: 860px) 100vw, 50vw"
              className={styles.image}
              priority
              quality={95}
              style={{ objectPosition: project.imagePosition ?? 'center' }}
            />
          </div>
        </section>

        <section className={styles['content-grid']}>
          <div className={`${styles.panel} ${styles['problem-panel']}`}>
            <h2>Problem Solved</h2>
            <p className={styles['problem-copy']}>{project.problemSolved}</p>
          </div>

          <div className={styles.panel}>
            <h2>Key Features</h2>
            <ul className={styles['feature-list']}>
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className={styles.panel}>
            <h2>Technologies Used</h2>
            <div className={styles['tech-list']}>
              {project.tech.map((tech) => (
                <span key={tech} className={styles['tech-chip']}>
                  <span className={styles['tech-logo']}>
                    {techLogos[tech] ?? tech.slice(0, 2)}
                  </span>
                  <span>{tech}</span>
                </span>
              ))}
            </div>
          </div>

          <div className={styles.panel}>
            <h2>What This Demonstrates</h2>
            <p className={styles['recruiter-copy']}>{project.recruiterFocus}</p>
          </div>
        </section>
      </div>
    </main>
  );
}
