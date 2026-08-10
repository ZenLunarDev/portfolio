import { motion } from 'framer-motion';
import { GlassCard } from '../../../shared/ui/GlassCard.tsx';
import { theme } from '../../../config/theme.ts';
import type { Project } from '../types/index.ts';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <GlassCard
      hover
      glow
      className="group p-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{
          duration: 0.6,
          delay: index * 0.1,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <div className="flex items-start justify-between mb-4">
          <span
            className="text-xs font-medium px-3 py-1 rounded-full"
            style={{
              backgroundColor: `${theme.colors.primary}20`,
              color: theme.colors.primary,
            }}
          >
            {project.year}
          </span>
          {project.featured && (
            <span
              className="text-xs font-medium px-3 py-1 rounded-full"
              style={{
                backgroundColor: `${theme.colors.accent}20`,
                color: theme.colors.accent,
              }}
            >
              Featured
            </span>
          )}
        </div>

        <h3
          className="text-xl font-bold mb-3 transition-colors duration-200"
          style={{ color: theme.colors.text }}
        >
          {project.title}
        </h3>

        <p
          className="text-sm leading-relaxed mb-4"
          style={{ color: theme.colors.textSecondary }}
        >
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-1 rounded-md"
              style={{
                backgroundColor: `${theme.colors.surfaceHover}`,
                color: theme.colors.textMuted,
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        <motion.div
          className="mt-4 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `linear-gradient(90deg, ${theme.colors.primary}, ${theme.colors.accent})`,
          }}
        />
      </motion.div>
    </GlassCard>
  );
}
