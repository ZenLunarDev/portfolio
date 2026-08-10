import { motion } from 'framer-motion';
import { useProjects } from '../../features/projects/hooks/useProjects';
import { ProjectCard } from '../../features/projects/components/ProjectCard';
import { theme } from '../../config/theme';

export default function Projects() {
  const { projects, isLoading } = useProjects('all');

  return (
    <main className="min-h-screen px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1
            className="text-5xl lg:text-7xl font-extrabold mb-5 tracking-tight"
            style={{ color: theme.colors.text }}
          >
            Selected Work
          </h1>
          <p
            className="text-lg max-w-2xl leading-relaxed"
            style={{ color: theme.colors.textSecondary }}
          >
            A curated selection of projects that showcase my approach to solving
            complex problems with elegant, performant solutions.
          </p>
          <motion.div
            className="mt-6 h-1 rounded-full"
            style={{
              background: `linear-gradient(90deg, ${theme.colors.primary}, ${theme.colors.accent})`,
              width: '120px',
            }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
        </motion.div>

        {isLoading ? (
          <div className="grid md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="h-64 rounded-3xl animate-pulse"
                style={{
                  backgroundColor: theme.colors.surface,
                  border: `1px solid ${theme.colors.border}`,
                }}
              />
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
