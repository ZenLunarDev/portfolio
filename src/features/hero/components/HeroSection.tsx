import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MagneticButton } from '../../../shared/ui/MagneticButton.tsx';
import { AnimatedText } from '../../../shared/ui/AnimatedText.tsx';
import { GlassCard } from '../../../shared/ui/GlassCard.tsx';
import { theme } from '../../../config/theme.ts';
import { NAVIGATION, SKILLS } from '../../../shared/lib/constants.ts';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.p
              className="text-sm font-medium tracking-widest uppercase mb-4"
              style={{ color: theme.colors.accent }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Creative Developer
            </motion.p>

            <AnimatedText
              text="Building digital experiences that matter"
              tag="h1"
              className="text-5xl lg:text-6xl font-bold leading-tight mb-6"
              style={{ color: theme.colors.text }}
              delay={0.2}
            />

            <motion.p
              className="text-lg leading-relaxed mb-8"
              style={{ color: theme.colors.textSecondary }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              I craft performant, accessible, and beautifully designed web applications
              with modern technologies. Every pixel has purpose, every interaction has intent.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <MagneticButton variant="primary" onClick={() => {}}>
                View Projects
              </MagneticButton>
              <MagneticButton variant="secondary" onClick={() => {}}>
                Get in Touch
              </MagneticButton>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <GlassCard className="p-8">
              <div className="space-y-6">
                <div>
                  <h3
                    className="text-sm font-medium uppercase tracking-wider mb-4"
                    style={{ color: theme.colors.textMuted }}
                  >
                    Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {SKILLS.map((skill, i) => (
                      <motion.span
                        key={skill}
                        className="text-sm px-3 py-1.5 rounded-lg"
                        style={{
                          backgroundColor: `${theme.colors.surfaceHover}`,
                          color: theme.colors.text,
                        }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1 + i * 0.05 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div
                  className="pt-6 border-t"
                  style={{ borderColor: theme.colors.border }}
                >
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div
                        className="text-2xl font-bold"
                        style={{ color: theme.colors.primary }}
                      >
                        5+
                      </div>
                      <div
                        className="text-xs mt-1"
                        style={{ color: theme.colors.textMuted }}
                      >
                        Years Experience
                      </div>
                    </div>
                    <div>
                      <div
                        className="text-2xl font-bold"
                        style={{ color: theme.colors.primary }}
                      >
                        50+
                      </div>
                      <div
                        className="text-xs mt-1"
                        style={{ color: theme.colors.textMuted }}
                      >
                        Projects Delivered
                      </div>
                    </div>
                    <div>
                      <div
                        className="text-2xl font-bold"
                        style={{ color: theme.colors.primary }}
                      >
                        30+
                      </div>
                      <div
                        className="text-xs mt-1"
                        style={{ color: theme.colors.textMuted }}
                      >
                        Happy Clients
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>

        <motion.nav
          className="fixed bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <GlassCard className="px-2 py-2">
            <div className="flex gap-1">
              {NAVIGATION.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="px-4 py-2 text-sm rounded-lg transition-colors duration-200"
                  style={{
                    color: theme.colors.textSecondary,
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = theme.colors.primary)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = theme.colors.textSecondary)
                  }
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </GlassCard>
        </motion.nav>
      </div>
    </section>
  );
}
