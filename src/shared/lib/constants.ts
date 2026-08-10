export const SITE_CONFIG = {
  name: 'Portfolio',
  description: 'Creative Developer Portfolio',
  author: 'ZenLunarDev',
  url: 'https://lunadev.github.io',
  social: {
    github: 'https://github.com/lunadev',
    linkedin: 'https://linkedin.com/in/lunadev',
    twitter: 'https://twitter.com/lunadev',
  },
} as const;

export const NAVIGATION = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
] as const;

export const SKILLS = [
  'React',
  'TypeScript',
  'Next.js',
  'Node.js',
  'GraphQL',
  'PostgreSQL',
  'Docker',
  'AWS',
  'Framer Motion',
  'Tailwind CSS',
] as const;

export const PROJECTS = [
  {
    id: 1,
    title: 'Enterprise Dashboard',
    description: 'Real-time analytics platform with interactive data visualizations',
    tech: ['React', 'TypeScript', 'D3.js'],
    year: '2024',
    featured: true,
  },
  {
    id: 2,
    title: 'E-Commerce Platform',
    description: 'Full-stack marketplace with payment integration and inventory management',
    tech: ['Next.js', 'Prisma', 'Stripe'],
    year: '2024',
    featured: true,
  },
  {
    id: 3,
    title: 'AI Chat Interface',
    description: 'Conversational UI with streaming responses and context awareness',
    tech: ['React', 'OpenAI', 'WebSocket'],
    year: '2023',
    featured: false,
  },
  {
    id: 4,
    title: 'Mobile Banking App',
    description: 'Secure fintech application with biometric authentication',
    tech: ['React Native', 'Node.js', 'PostgreSQL'],
    year: '2023',
    featured: false,
  },
] as const;
