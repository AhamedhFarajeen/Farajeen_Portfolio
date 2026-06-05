import Image from 'next/image';
import Link from 'next/link';
import styles from './About.module.css';

const profileDetails = [
  ['Name', 'A F Ahamedh Farajeen'],
  ['Role', 'Full-Stack Developer'],
  ['University', 'SLIIT'],
  ['Degree', 'BSc Software Engineering'],
  ['Current', 'Year 2, Semester 2'],
  ['Location', 'Sri Lanka'],
  ['Status', 'Open to work'],
];

const skills = [
  {
    name: 'React.js',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
  {
    name: 'JavaScript',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  },
  {
    name: 'Node.js',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  },
  {
    name: 'Express.js',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    darkLogo: true,
  },
  {
    name: 'MongoDB',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  },
  {
    name: 'SQL',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  },
  {
    name: 'Java',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
  },
  {
    name: 'JSP / Servlets',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tomcat/tomcat-original.svg',
  },
  {
    name: 'Bootstrap',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
  },
  {
    name: 'Git & GitHub',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    darkLogo: true,
  },
  {
    name: 'Cloudinary',
    logo: 'https://cdn.simpleicons.org/cloudinary/3448C5',
  },
  {
    name: 'Clerk',
    logo: 'https://cdn.simpleicons.org/clerk/6C47FF',
  },
];

const activities = [
  {
    title: 'Leo Club of SLIIT',
    role: 'Member',
    period: 'Oct 2024 - Present',
  },
  {
    title: 'AIESEC of SLIIT',
    role: 'Member',
    period: 'Feb 2025 - Jan 2026',
  },
];

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles['section-inner']}>
        <div className={styles.hero}>
          <div className={styles['image-card']}>
            <Image
              src="/about-photo.jpg"
              alt="A F Ahamedh Farajeen"
              fill
              sizes="(max-width: 900px) 100vw, 42vw"
              className={styles.photo}
              priority
            />
          </div>

          <div className={styles.content}>
            <div className={styles['section-eyebrow']}>
              <div className={styles['eyebrow-line']}></div>
              <span className={styles['eyebrow-text']}>About Me</span>
            </div>

            <h1 className={styles.heading}>Driven to Achieve More</h1>

            <div className={styles.copy}>
              <p>
                I&apos;m A F Ahamedh Farajeen, a Software Engineering undergraduate
                at SLIIT focused on building practical web applications with clean
                interfaces, backend APIs, authentication, databases, and deployment.
              </p>
              
              <p>
                Worked with Java, JavaScript, Python, and related technologies
                through university and personal projects. I’m not someone who
                claims to know everything, but I’m always ready to learn,
                improve, and grow with every opportunity.
              </p>
            </div>

            <div className={styles.actions}>
              <Link href="/projects" className={styles['primary-btn']}>
                View Projects
              </Link>
              <Link href="/contact" className={styles['secondary-btn']}>
                Contact Me
              </Link>
            </div>
          </div>
          
        </div>

        <section className={styles['beyond-section']}>
          <div className={styles['beyond-heading']}>
         
            <h2>Beyond the Code</h2>
          </div>
          <p>
            I’m still growing as a developer, but I care about building things
            with purpose. Every project I work on teaches me something new —
            from solving bugs and improving design to writing cleaner code and
            understanding how users interact with a system. I’m excited to keep
            learning, building, and sharing my journey as I grow in this field.
          </p>
        </section>

        <div className={styles['details-grid']}>
          <div className={styles['profile-card']}>
            <div className={styles['card-heading']}>
              <span>Profile</span>
              <strong>Open to Work</strong>
            </div>
            <div className={styles['profile-list']}>
              {profileDetails.map(([label, value]) => (
                <div key={label} className={styles['profile-row']}>
                  <span>{label}</span>
                  <strong>{value}</strong>
                </div>
              ))}
            </div>
          </div>

          <div className={styles['skills-card']}>
            <div className={styles['card-heading']}>
              <span>Skills</span>
              
            </div>
            <div className={styles['skill-list']}>
              {skills.map((skill) => (
                <span key={skill.name} className={styles['skill-chip']}>
                  <span className={styles['skill-logo-wrap']}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={skill.logo}
                      alt={`${skill.name} logo`}
                      className={skill.darkLogo ? styles['dark-logo'] : undefined}
                    />
                  </span>
                  <span>{skill.name}</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        <section className={styles['activity-section']}>
          <div className={styles['card-heading']}>
            <span>Extra-Curricular</span>
            
          </div>
          <div className={styles['activity-list']}>
            {activities.map((activity) => (
              <article key={activity.title} className={styles['activity-item']}>
                <span aria-hidden="true"></span>
                <div>
                  <h3>{activity.title}</h3>
                  <p>{activity.role}</p>
                  <strong>{activity.period}</strong>
                </div>
              </article>
            ))}
          </div>
        </section>

        <div className={styles.cta}>
          <h2>Want to see what I can build?</h2>
          <p>Explore my projects or reach out for internships, junior roles, and collaborations.</p>
          <div className={styles.actions}>
            <Link href="/projects" className={styles['primary-btn']}>
              Projects
            </Link>
            <Link href="/contact" className={styles['secondary-btn']}>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
