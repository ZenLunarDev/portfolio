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
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-2xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: theme.colors.text }}
          >
            Let's work together
          </h2>
          <p
            className="text-lg mb-12"
            style={{ color: theme.colors.textSecondary }}
          >
            Have a project in mind? I'd love to hear about it. Send me a message
            and let's create something amazing.
          </p>

          <GlassCard className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  className="block text-sm font-medium mb-2"
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
                  className="w-full px-4 py-3 rounded-xl outline-none transition-all duration-200"
                  style={{
                    backgroundColor: theme.colors.surface,
                    color: theme.colors.text,
                    border: `1px solid ${theme.colors.border}`,
                  }}
                  onFocus={(e) =>
                    (e.target.style.borderColor = theme.colors.primary)
                  }
                  onBlur={(e) =>
                    (e.target.style.borderColor = theme.colors.border)
                  }
                  required
                />
              </div>

              <div>
                <label
                  className="block text-sm font-medium mb-2"
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
                  className="w-full px-4 py-3 rounded-xl outline-none transition-all duration-200"
                  style={{
                    backgroundColor: theme.colors.surface,
                    color: theme.colors.text,
                    border: `1px solid ${theme.colors.border}`,
                  }}
                  onFocus={(e) =>
                    (e.target.style.borderColor = theme.colors.primary)
                  }
                  onBlur={(e) =>
                    (e.target.style.borderColor = theme.colors.border)
                  }
                  required
                />
              </div>

              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  style={{ color: theme.colors.text }}
                >
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl outline-none transition-all duration-200 resize-none"
                  style={{
                    backgroundColor: theme.colors.surface,
                    color: theme.colors.text,
                    border: `1px solid ${theme.colors.border}`,
                  }}
                  onFocus={(e) =>
                    (e.target.style.borderColor = theme.colors.primary)
                  }
                  onBlur={(e) =>
                    (e.target.style.borderColor = theme.colors.border)
                  }
                  required
                />
              </div>

              <MagneticButton variant="primary" onClick={() => {}}>
                Send Message
              </MagneticButton>
            </form>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
