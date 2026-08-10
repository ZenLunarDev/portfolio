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
      className="group p-8"
      onClick={() => {}}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{
          duration: 0.7,
          delay: index * 0.12,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <div className="flex items-start justify-between mb-5">
          <span
            className="text-xs font-bold px-3 py-1.5 rounded-full border"
            style={{
              backgroundColor: theme.colors.surfaceHover,
              color: theme.colors.primary,
              borderColor: theme.colors.border,
            }}
          >
            {project.year}
          </span>
          {project.featured && (
            <span
              className="text-xs font-bold px-3 py-1.5 rounded-full border"
              style={{
                backgroundColor: theme.colors.surfaceHover,
                color: theme.colors.accent,
                borderColor: theme.colors.border,
              }}
            >
              Featured
            </span>
          )}
        </div>

        <h3
          className="text-2xl font-extrabold mb-3 transition-colors duration-200 tracking-tight"
          style={{ color: theme.colors.text }}
        >
          {project.title}
        </h3>

        <p
          className="text-sm leading-relaxed mb-5"
          style={{ color: theme.colors.textSecondary }}
        >
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="text-xs font-medium px-2.5 py-1.5 rounded-lg"
              style={{
                backgroundColor: theme.colors.surface,
                color: theme.colors.textMuted,
                border: `1px solid ${theme.colors.border}`,
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        <motion.div
          className="mt-6 h-[3px] rounded-full"
          style={{
            background: `linear-gradient(90deg, ${theme.colors.primary}, ${theme.colors.accent})`,
          }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.12 + 0.2 }}
        />
      </motion.div>
    </GlassCard>
  );
}
