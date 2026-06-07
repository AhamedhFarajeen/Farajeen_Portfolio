import Image from 'next/image';
import Link from 'next/link';
import styles from './About.module.css';

const profileDetails = [
  ['Name', 'A F Ahamedh Farajeen'],
  ['Role', 'Software Engineering Intern'],
  ['University', 'SLIIT'],
  ['Degree', 'BSc Software Engineering'],
  ['Current', 'Year 3, Semester 1'],
  ['Location', 'Sri Lanka'],
  ['Status', 'Open to internship opportunities'],
];

const timeline = [
  {
    year: '2023',
    title: 'Completed A/L',
  },
  {
    year: '2024',
    title: 'Started Computing at SLIIT',
  },
  {
    year: '2025',
    title: 'Selected for Software Engineering Specialization',
  },
  {
    year: 'Present',
    title: 'Searching for Software Engineering Internships',
  },
];

const skillGroups = [
  {
    title: 'Frontend Development',
    skills: ['React.js', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'],
  },
  {
    title: 'Backend Development',
    skills: ['Node.js', 'Express.js', 'Java', 'JSP', 'Servlets'],
  },
  {
    title: 'Database',
    skills: ['MongoDB', 'MySQL'],
  },
  {
    title: 'Software Engineering Concepts',
    skills: [
      'REST APIs',
      'MVC Architecture',
      'Authentication',
      'CRUD Operations',
      'Session Handling',
      'Role-Based Access',
    ],
  },
  {
    title: 'Tools & Platforms',
    skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Stripe', 'Clerk', 'Cloudinary'],
  },
  {
    title: 'Currently Learning',
    skills: [
      'Next.js',
      
    ],
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

const certifications = [
  {
    title: 'Python for Beginners',
    issuer: 'E-Certificate',
    href: '/certificates/python-for-beginners-certificate.pdf',
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

            <h1 className={styles.heading}>Driven to<br />Achieve More</h1>

            <div className={styles.copy}>
              <p>
                I&apos;m A F Ahamedh Farajeen, a Software Engineering undergraduate
                at SLIIT focused on building practical web applications with clean
                interfaces, backend APIs, authentication, databases, and real
                product workflows.
              </p>
              
              <p>
                Worked with Java, JavaScript, Python, and related technologies through university and personal projects. I’m not someone who claims to know everything, but I’m always ready to learn, improve, and grow with every opportunity.
              </p>
            </div>

            <div className={styles.actions}>
              <Link href="/#projects" className={styles['primary-btn']}>
                Explore My Work
              </Link>
              <Link href="/#contact" className={styles['secondary-btn']}>
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
            I’m still growing as a student, but I care about building things
            with purpose. Every project I work on teaches me something new —
            from solving bugs and improving design to writing cleaner code and
            understanding how users interact with a system. I’m excited to learn
            from engineering teams, contribute with consistency, and keep building
            toward stronger real-world software products.
          </p>
        </section>

        <section id="skills" className={styles['credentials-panel']}>
          <div className={styles['credentials-header']}>
            <div className={styles['profile-block']}>
              <div className={styles['card-heading']}>
                <span>Profile</span>
                
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

            <div className={styles['timeline-block']}>
              
              <div className={styles.timeline}>
                {timeline.map((item) => (
                  <div key={item.year} className={styles['timeline-item']}>
                    <span>{item.year}</span>
                    <strong>{item.title}</strong>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={styles['skills-heading']}>
            <span>Skills</span>
            
          </div>

          <div className={styles['skill-groups']}>
            {skillGroups.map((group) => (
              <article key={group.title} className={styles['skill-group']}>
                <h3>{group.title}</h3>
                <div className={styles['skill-list']}>
                  {group.skills.map((skill) => (
                    <span key={skill} className={styles['skill-chip']}>
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles['certification-section']}>
          <div className={styles['card-heading']}>
            <span>Certifications</span>
          </div>
          <div className={styles['certification-list']}>
            {certifications.map((certification) => (
              <article key={certification.title} className={styles['certification-item']}>
                <div>
                  <span>{certification.issuer}</span>
                  <h3>{certification.title}</h3>
                </div>
                <a
                  href={certification.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Certificate
                </a>
              </article>
            ))}
          </div>
        </section>

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
          <h2>Looking for a Software Engineering Intern?</h2>
          <p>Explore my projects or reach out about internship opportunities where I can learn, contribute, and build practical software with a team.</p>
          <div className={styles.actions}>
            <Link href="/#projects" className={styles['primary-btn']}>
              View My Projects
            </Link>
            <Link href="/#contact" className={styles['secondary-btn']}>
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
