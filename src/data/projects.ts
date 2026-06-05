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
      'A full-stack e-commerce web application built with the MERN stack. It includes product browsing, shopping cart, authentication, checkout flow, and a clean responsive UI.',
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
      'This project demonstrates my ability to build a complete customer-facing product, connect frontend and backend systems, manage application state, and integrate third-party payment services. It shows practical full-stack thinking across UI, API design, data persistence, authentication, and deployment.',
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
      'A modern LMS platform built using the MERN stack. It allows users to explore courses, manage learning content, and provides a clean educational platform experience.',
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
      'This project highlights my ability to design platform-style web applications with authentication, media management, and structured content flows. It demonstrates comfort with full-stack JavaScript, third-party service integration, and building clean user experiences for education-focused products.',
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
      'A reality show voting system built with Java Servlet, JSP, Bootstrap, and SQL. It allows users to vote for contestants, view live leaderboards, manage contests, and provides a secure voting experience.',
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
      'This project shows my backend and server-rendered Java web development skills, including SQL database design, request handling, session-style workflows, and practical application logic. It demonstrates that I can work beyond JavaScript stacks and build structured systems using traditional enterprise web technologies.',
    githubUrl: 'https://github.com/AhamedhFarajeen/StarVote_Voting_System',
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
