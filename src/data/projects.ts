export type PortfolioProject = {
  slug: string;
  href: string;
  tag: string;
  title: string;
  cardTitle: string;
  cardSubtitle: string;
  description: string;
  problemSolved: string;
  image: string;
  gradient: string;
  tech: string[];
  features: string[];
  recruiterFocus: string;
  githubUrl: string;
  liveDemoUrl?: string;
};

export const projects: PortfolioProject[] = [
  {
    slug: 'ecommerce',
    href: '/projects/ecommerce',
    tag: 'Full-Stack · E-Commerce',
    title: 'MERN E-Commerce Platform',
    cardTitle: 'MERN E-Commerce',
    cardSubtitle: 'Platform',
    description:
      'A MERN e-commerce application built to practice real product workflows, including product browsing, shopping cart behavior, authentication, checkout, and responsive UI development.',
    problemSolved:
      'Many small businesses need a simple platform to sell products online. This project solves that problem by providing a complete storefront and admin management system.',
    image: '/projects/e-commerce.png',
    gradient:
      'linear-gradient(135deg,rgba(137,170,204,0.42),rgba(78,133,191,0.18))',
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Stripe'],
    features: [
      'Responsive product browsing experience with clean product presentation.',
      'Shopping cart and checkout flow designed around practical user journeys.',
      'User authentication foundation for customer-specific interactions.',
      'Stripe-powered payment flow for real-world e-commerce behavior.',
      'Full-stack architecture connecting React UI with Node, Express, and MongoDB.',
    ],
    recruiterFocus:
      'This project demonstrates internship-relevant full-stack practice: connecting frontend and backend systems, managing application state, integrating payments, and thinking through customer-facing product flows.',
    githubUrl: 'https://github.com/AhamedhFarajeen/E_Commerce_Webapp',
    liveDemoUrl: 'https://e-commerce-frontend-wheat-ten.vercel.app/',
  },
  {
    slug: 'lms',
    href: '/projects/lms',
    tag: 'Full-Stack',
    title: 'Learning Management System',
    cardTitle: 'Learning Management',
    cardSubtitle: 'System',
    description:
      'A MERN learning platform built to explore course discovery, learning content workflows, authentication, media handling, and clean educational product design.',
    problemSolved:
      'This platform helps educators publish courses online and allows students to enroll, watch lessons, and track their learning progress.',
    image: '/projects/LMS.png',
    gradient:
      'linear-gradient(135deg,rgba(120,95,220,0.32),rgba(137,170,204,0.2))',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Clerk', 'Cloudinary'],
    features: [
      'Course discovery interface designed for a modern learning platform.',
      'Learning content management flow for organizing educational material.',
      'Authentication powered by Clerk for secure user access.',
      'Cloudinary integration for media and asset handling.',
      'MERN stack structure with a scalable separation between UI, API, and data.',
    ],
    recruiterFocus:
      'This project highlights my growing ability to design platform-style web applications with authentication, media management, and structured content flows using full-stack JavaScript.',
    githubUrl: 'https://github.com/AhamedhFarajeen/LMS',
    liveDemoUrl: 'https://lms-frontend-seven-eta.vercel.app/',
  },
  {
    slug: 'starvote',
    href: '/projects/starvote',
    tag: 'Backend · Java',
    title: 'StarVote Reality Voting System',
    cardTitle: 'StarVote Reality',
    cardSubtitle: 'Voting System',
    description:
      'A Java Servlet and JSP voting system built to practice server-rendered web development, SQL-backed data handling, voting workflows, leaderboards, and role-aware application logic.',
    problemSolved:
      'This system helps reality show organizers manage contestants, collect audience votes, and display voting results in a structured and transparent way.',
    image: '/projects/starvote.png',
    gradient:
      'linear-gradient(135deg,rgba(78,133,191,0.28),rgba(53,211,153,0.16))',
    tech: ['Java', 'Servlet', 'JSP', 'Bootstrap', 'SQL'],
    features: [
      'Contestant voting flow for reality-show style competitions.',
      'Live leaderboard experience for tracking vote results.',
      'Contest management features for organizing voting events.',
      'SQL-backed data persistence for users, contestants, and voting records.',
      'Java Servlet and JSP implementation with Bootstrap-based responsive UI.',
    ],
    recruiterFocus:
      'This project shows internship-relevant backend practice with Java web technologies, including SQL database design, request handling, session-style workflows, and structured application logic beyond JavaScript stacks.',
    githubUrl: 'https://github.com/AhamedhFarajeen/StarVote_Voting_System',
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
