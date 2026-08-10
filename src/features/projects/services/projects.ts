import type { Project } from '../types/index.ts';

export async function fetchProjects(): Promise<Project[]> {
  await new Promise((resolve) => setTimeout(resolve, 300));
  return [
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
  ];
}
