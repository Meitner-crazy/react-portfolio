import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  CalendarIcon,
  FlagIcon,
  HandRaisedIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import heroImage from '../images/bg.jpg';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import profilepic from '../images/profile.jpg';
import testimonialImage from '../images/testmonial.jpg';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  HighlightSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: "Qing's Resume",
  description: '',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Highlights: 'hilights',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Welcome`,
  description: (
    <div className="text-left px-20">
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Hello, I'm <strong className="text-stone-100">Qing Chen</strong> 🌷
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        A Software Engineer and Master's student at Northeastern University (Seattle), I enjoy exploring ideas, building
        fun projects, and learning new things every day.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Welcome to my little corner of the internet — always open to interesting conversations and collaborations! ✨
      </p>
    </div>
  ),
  actions: [
    {
      href: '/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I'm interested in software development and have relevant industrial experience with both frontend and
        backend development. I'm familiar with modern technologies like java, JavaScript/TypeScript, Python, React,
        node, databases, AWS, etc,.`,
  aboutItems: [
    {label: 'Location', text: 'Seattle, WA', Icon: MapIcon},
    {label: 'Age', text: '25', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Chinese / China', Icon: FlagIcon},
    {label: 'Interests', text: 'Swimming, Hiking, Travel ', Icon: SparklesIcon},
    {label: 'Study', text: 'Northeastern University', Icon: AcademicCapIcon},
    {label: 'OpenTo', text: '2025&2026 internship | co-op | NG', Icon: HandRaisedIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Chinese / Mandarin',
        level: 10,
      },
      {
        name: 'French',
        level: 4,
      },
    ],
  },
  {
    name: 'Programming languages',
    skills: [
      {
        name: 'Java',
        level: 10,
      },
      {
        name: 'Javascript / Typescript',
        level: 9,
      },
      {
        name: 'Python',
        level: 8,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'MySQL',
        level: 8,
      },
      {
        name: 'AWS',
        level: 7,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React Native',
        level: 8,
      },
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Figma',
        level: 9,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Asteroids Game',
    description: 'A playable Asteroids game. Built with Processing Python and tested with Pytest.',
    url: 'https://github.com/Meitner-crazy/asteroids/tree/main/asteroids_game_hw10',
    image: porfolioImage1,
  },
  {
    title: 'Word Ladder',
    description: 'Implemented Word Ladder puzzle solver with Python, using BFS and recursion algorithms.',
    url: 'https://github.com/Meitner-crazy/word_ladder',
    image: porfolioImage2,
  },
  {
    title: 'Checker Game',
    description: 'Interactive Checkers game built with Processing Python, featuring AI opponent logic.',
    url: 'https://github.com/Meitner-crazy/checker',
    image: porfolioImage3,
  },
  {
    title: 'Data Labeling Platform',
    description: 'Web platform for labeling datasets, built with React, TypeScript, Node.js, and MySQL.',
    url: 'https://github.com/Meitner-crazy/da2024',
    image: porfolioImage4,
  },
  {
    title: 'Distributed System',
    description:
      'Designed a distributed system using Java, AWS and RabbitMQ, supporting parallel processing and fault tolerance.',
    url: 'https://github.com/Meitner-crazy/distibuted-system-project/blob/master/README.pdf',
    image: porfolioImage5,
  },
  {
    title: 'E-commerce Website',
    description: 'Full Stack Django E-commerce Website.',
    url: 'https://github.com/Meitner-crazy/ecommerce-django',
    image: porfolioImage6,
  },
  {
    title: "Conways's life Game",
    description:
      "Conway's Game of Life simulation built with JavaScript, HTML/CSS and React, supporting custom grid sizes and heat map.",
    url: 'https://xiyu-qing-assignment2.onrender.com/',
    image: porfolioImage7,
  },
  {
    title: 'Password Management System',
    description: 'Secure password manager using React, javaScript, Node.js, Express, and MongoDB.',
    url: 'https://github.com/Xiyu-Serena-Wan/Xiyu-Qing-Assignment3',
    image: porfolioImage8,
  },
  {
    title: 'Mine Sweeper',
    description: 'Classic Minesweeper game implemented with Python.',
    url: 'https://github.com/Meitner-crazy/-mine_sweeper',
    image: porfolioImage10,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'January 2023 - December 2025',
    location: 'Northeastern University',
    title: 'Masters in Computer Science',
    content: (
      <div>
        <p>
          <strong>GPA</strong>: 3.93/4.0
        </p>
        <p className="prose-sm sm:prose-base">
          <strong>Courses</strong>: algorithm, web developement(React, Node), databases(MySQL, MongoDB, DynamoDB,
          Redis), cloud computing, distributed system, Machine Learning, computer system, network, AI
        </p>
      </div>
    ),
  },
  {
    date: 'September 2017 - June 2021',
    location: 'Wuhan University of Technology',
    title: 'Bachelors in English and French',
    content: (
      <p>
        <strong>GPA</strong>: 3.76/4.0
      </p>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'May 2025 – August 2025',
    location: 'Xiaomi Technology',
    title: '🚀 Frontend Engineer Intern',
    content: (
      <ul className="list-disc list-inside space-y-1">
        <li>
          Developed AI platform with <strong>TypeScript</strong>, <strong>React</strong>, <strong>Ant Design</strong>{' '}
          and <strong>aHooks</strong>, leveraging built-in hooks to accelerate development.
        </li>
        <li>
          Optimized <strong>Webpack</strong> configuration through advanced code splitting, dynamic imports, lazy
          loading, reducing initial load time.
        </li>
        <li>
          Architected scalable state management with <strong>Valtio</strong> for reactive UI updates and{' '}
          <strong>useSWR</strong> for intelligent data fetching with auto caching and revalidation, boosting API call
          performance.
        </li>
        <li>
          Reached 90% end-to-end test coverage with <strong>Playwright</strong> by integrating parallel test execution,
          cross-browser testing and snapshot testing. Integrated into CI/CD using <strong>GitLab Actions</strong>,
          reducing test cycles duration while maintaining UI stability.
        </li>
        <li>
          Improved release efficiency with <strong>Docker</strong> containerization for <strong>Node.js</strong>{' '}
          applications, <strong>Kubernetes</strong> orchestration with auto-scaling, rolling updates, health checks, and
          container registry management.
        </li>
      </ul>
    ),
  },
  {
    date: 'July 2024 – January 2025',
    location: 'Peking University Institute for Computing and Digital Economy',
    title: '🚀 Software Engineer Intern',
    content: (
      <ul className="list-disc list-inside space-y-1">
        <li>
          Developed AI-powered content generation platform with <strong>React</strong>, <strong>TypeScript</strong>, and{' '}
          <strong>Next.js</strong>, leveraging server-side rendering, static site generation, API routes, and middleware
          supporting 10+ daily active users for data labeling.
        </li>
        <li>
          Established reusable component library with 15+ encapsulated <strong>React</strong> components, reducing
          duplicate code by 40%.
        </li>
        <li>
          Implemented streaming LLM responses via <strong>WebSocket</strong>, enabling real-time content preview as AI
          generates output.
        </li>
        <li>
          Improved <strong>MySQL</strong> efficiency by implementing composite indexing, query optimization, read
          replicas and database sharding, reducing query execution time by 20%.
        </li>
        <li>
          Configured <strong>Nginx</strong> reverse proxy with caching layer and dual-environment routing for
          staging/production deployments.
        </li>
      </ul>
    ),
  },
  {
    date: 'December 2023 – March 2024',
    location: 'A Round Entertainment',
    title: '🚀 Software Engineer Intern',
    content: (
      <ul className="list-disc list-inside space-y-2">
        <li>
          Implemented <strong>Mapbox</strong>-based map view allowing users to browse properties by location and apply
          real-time filters.
        </li>
        <li>
          Integrated <strong>Whisper AI</strong>-powered voice search functionality with advanced speech-to-text
          processing, <strong>NLP</strong> for query understanding, intent recognition algorithms, and semantic search
          capabilities.
        </li>
        <li>
          Designed scalable <strong>Google Firebase</strong> backend with microservices architecture, handling real-time
          updates for 500+ concurrent users with <strong>Firebase Authentication</strong> and{' '}
          <strong>Firebase Realtime Database</strong>.
        </li>
      </ul>
    ),
  },
];

export const HighlightSections: HighlightSection = {
  imageSrc: testimonialImage,
  highlights: [
    {
      name: 'Highlights',
      text: 'Collaborated in a team environment using Git workflows with feature branches and pull requests. Conducted code reviews, resolved merge conflicts, and maintained clean commit history. Integrated CI/CD pipelines that automated testing and deployment processes.',
    },
    {
      name: 'DevOps & Testing',
      text: 'Improved release efficiency with Docker and Kubernetes, while achieving 90% end-to-end test coverage with Playwright integrated into CI/CD pipelines.',
    },
    {
      name: 'Collaboration & Communication',
      text: 'Collaborated with cross-functional teams in an agile environment, conducted code reviews, and improved code on frontend best practices. Experienced in technical documentation and presenting solutions.',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch',
  description: "Questions, ideas, or just a friendly hello — I'm always happy to hear from you ✨ 💌 🌷 👋",
  items: [
    {
      type: ContactType.Email,
      text: 'camilleching0317@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Seattle, WA, USA',
      href: 'https://maps.app.goo.gl/mN8zAwqvQ264fyKW6',
    },
    {
      type: ContactType.LinkedIn,
      text: '@Qing (Camille) Chen',
      href: 'https://www.linkedin.com/in/qing-chen-camille/',
    },
    {
      type: ContactType.Github,
      text: 'Meitner Crazy',
      href: 'https://github.com/Meitner-crazy',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/qing-chen-camille/'},
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/Meitner-crazy'},
  {label: 'LeetCode', Icon: StackOverflowIcon, href: 'https://leetcode.com/u/Camille_Ching/'},
];
