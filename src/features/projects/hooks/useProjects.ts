import { useQuery } from '@tanstack/react-query';
import { fetchProjects } from '../services/projects.ts';
import type { Project, ProjectFilter } from '../types/index.ts';

export function useProjects(filter: ProjectFilter = 'all') {
  const { data, isLoading, error } = useQuery({
    queryKey: ['projects'],
    queryFn: fetchProjects,
  });

  const projects = data?.filter((p: Project) =>
    filter === 'all' ? true : p.featured
  ) ?? [];

  return { projects, isLoading, error };
}
