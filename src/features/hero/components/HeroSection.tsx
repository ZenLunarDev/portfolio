import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MagneticButton } from '../../../shared/ui/MagneticButton.tsx';
import { AnimatedText } from '../../../shared/ui/AnimatedText.tsx';
import { GlassCard } from '../../../shared/ui/GlassCard.tsx';
import { theme } from '../../../config/theme.ts';
import { NAVIGATION, SKILLS } from '../../../shared/lib/constants.ts';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full blur-[120px] opacity-20"
          style={{ background: theme.colors.primary }}
        />
        <div
          className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full blur-[100px] opacity-15"
          style={{ background: theme.colors.accent }}
        />
      </div>

      <div className="max-w-6xl w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-8">
            <motion.p
              className="text-sm font-semibold tracking-[0.2em] uppercase"
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
              className="text-5xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight"
              style={{ color: theme.colors.text }}
              delay={0.2}
            />

            <motion.p
              className="text-lg leading-relaxed max-w-xl"
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
            className="lg:col-span-5"
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <GlassCard className="p-8">
              <div className="space-y-6">
                <div>
                  <h3
                    className="text-xs font-bold uppercase tracking-[0.15em] mb-4"
                    style={{ color: theme.colors.textMuted }}
                  >
                    Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {SKILLS.map((skill, i) => (
                      <motion.span
                        key={skill}
                        className="text-xs font-medium px-3 py-2 rounded-xl border"
                        style={{
                          backgroundColor: theme.colors.surfaceHover,
                          color: theme.colors.text,
                          borderColor: theme.colors.border,
                        }}
                        initial={{ opacity: 0, scale: 0.8, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ delay: 1 + i * 0.05, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
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
                        className="text-3xl font-extrabold"
                        style={{ color: theme.colors.primary }}
                      >
                        5+
                      </div>
                      <div
                        className="text-[0.7rem] mt-1 font-medium uppercase tracking-wider"
                        style={{ color: theme.colors.textMuted }}
                      >
                        Years Experience
                      </div>
                    </div>
                    <div>
                      <div
                        className="text-3xl font-extrabold"
                        style={{ color: theme.colors.primary }}
                      >
                        50+
                      </div>
                      <div
                        className="text-[0.7rem] mt-1 font-medium uppercase tracking-wider"
                        style={{ color: theme.colors.textMuted }}
                      >
                        Projects Delivered
                      </div>
                    </div>
                    <div>
                      <div
                        className="text-3xl font-extrabold"
                        style={{ color: theme.colors.primary }}
                      >
                        30+
                      </div>
                      <div
                        className="text-[0.7rem] mt-1 font-medium uppercase tracking-wider"
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
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
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
                  className="px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200"
                  style={{
                    color: theme.colors.textSecondary,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = theme.colors.primary;
                    e.currentTarget.style.backgroundColor = theme.colors.surfaceHover;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = theme.colors.textSecondary;
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
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
