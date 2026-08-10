export interface Project {
  id: number;
  title: string;
  description: string;
  tech: readonly string[];
  year: string;
  featured: boolean;
}

export type ProjectFilter = 'all' | 'featured';
