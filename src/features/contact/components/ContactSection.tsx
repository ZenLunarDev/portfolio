import { useState } from 'react';
import { motion } from 'framer-motion';
import { MagneticButton } from '../../../shared/ui/MagneticButton.tsx';
import { GlassCard } from '../../../shared/ui/GlassCard.tsx';
import { theme } from '../../../config/theme.ts';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[20%] left-[10%] w-[300px] h-[300px] rounded-full blur-[100px] opacity-10"
          style={{ background: theme.colors.accent }}
        />
        <div
          className="absolute bottom-[20%] right-[10%] w-[250px] h-[250px] rounded-full blur-[80px] opacity-10"
          style={{ background: theme.colors.primary }}
        />
      </div>

      <div className="max-w-3xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2
              className="text-4xl lg:text-6xl font-extrabold mb-4 tracking-tight"
              style={{ color: theme.colors.text }}
            >
              Let's work together
            </h2>
            <p
              className="text-lg max-w-xl leading-relaxed"
              style={{ color: theme.colors.textSecondary }}
            >
              Have a project in mind? I'd love to hear about it. Send me a message
              and let's create something amazing.
            </p>
            <motion.div
              className="mt-5 h-1 rounded-full"
              style={{
                background: `linear-gradient(90deg, ${theme.colors.primary}, ${theme.colors.accent})`,
                width: '100px',
              }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            />
          </motion.div>

          <GlassCard className="p-8 lg:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    className="block text-xs font-bold uppercase tracking-[0.12em] mb-2.5"
                    style={{ color: theme.colors.text }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Your name"
                    className="w-full px-5 py-3.5 rounded-2xl outline-none transition-all duration-300 text-sm placeholder:text-sm"
                    style={{
                      backgroundColor: theme.colors.surface,
                      color: theme.colors.text,
                      border: `1px solid ${theme.colors.border}`,
                      boxShadow: `inset 0 2px 4px rgba(0,0,0,0.2)`,
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = theme.colors.primary;
                      e.target.style.boxShadow = `inset 0 2px 4px rgba(0,0,0,0.2), 0 0 0 3px ${theme.colors.primary}25`;
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = theme.colors.border;
                      e.target.style.boxShadow = `inset 0 2px 4px rgba(0,0,0,0.2)`;
                    }}
                    required
                  />
                </div>

                <div>
                  <label
                    className="block text-xs font-bold uppercase tracking-[0.12em] mb-2.5"
                    style={{ color: theme.colors.text }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="you@example.com"
                    className="w-full px-5 py-3.5 rounded-2xl outline-none transition-all duration-300 text-sm placeholder:text-sm"
                    style={{
                      backgroundColor: theme.colors.surface,
                      color: theme.colors.text,
                      border: `1px solid ${theme.colors.border}`,
                      boxShadow: `inset 0 2px 4px rgba(0,0,0,0.2)`,
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = theme.colors.primary;
                      e.target.style.boxShadow = `inset 0 2px 4px rgba(0,0,0,0.2), 0 0 0 3px ${theme.colors.primary}25`;
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = theme.colors.border;
                      e.target.style.boxShadow = `inset 0 2px 4px rgba(0,0,0,0.2)`;
                    }}
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  className="block text-xs font-bold uppercase tracking-[0.12em] mb-2.5"
                  style={{ color: theme.colors.text }}
                >
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Tell me about your project..."
                  rows={6}
                  className="w-full px-5 py-3.5 rounded-2xl outline-none transition-all duration-300 resize-none text-sm placeholder:text-sm leading-relaxed"
                  style={{
                    backgroundColor: theme.colors.surface,
                    color: theme.colors.text,
                    border: `1px solid ${theme.colors.border}`,
                    boxShadow: `inset 0 2px 4px rgba(0,0,0,0.2)`,
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = theme.colors.primary;
                    e.target.style.boxShadow = `inset 0 2px 4px rgba(0,0,0,0.2), 0 0 0 3px ${theme.colors.primary}25`;
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = theme.colors.border;
                    e.target.style.boxShadow = `inset 0 2px 4px rgba(0,0,0,0.2)`;
                  }}
                  required
                />
              </div>

              <div className="pt-2">
                <MagneticButton variant="primary" onClick={() => {}}>
                  Send Message
                </MagneticButton>
              </div>
            </form>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
