import React from 'react';
import { motion } from 'motion/react';
import { Award, BarChart3, Sparkles, ExternalLink } from 'lucide-react';
import { CERTIFICATIONS } from '../data';

export default function Certifications() {
  const getIcon = (name: string) => {
    switch (name) {
      case 'BarChart3':
        return <BarChart3 className="text-indigo-500" size={24} />;
      case 'Sparkles':
        return <Sparkles className="text-purple-500" size={24} />;
      default:
        return <Award className="text-indigo-500" size={24} />;
    }
  };

  return (
    <section
      id="certifications"
      className="py-24 bg-white dark:bg-[#0c0c0e] border-b border-zinc-100 dark:border-zinc-900 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-500 bg-indigo-500/5 dark:bg-indigo-500/10 px-3 py-1.5 rounded-full border border-indigo-500/20"
          >
            Verified Credentials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-sans font-extrabold text-zinc-900 dark:text-white tracking-tight"
          >
            Professional Certifications
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed"
          >
            Committed to continuous growth. Supplementing foundational university learning with professional tech-industry training.
          </motion.p>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto text-left">
          {CERTIFICATIONS.map((cert) => (
            <motion.div
              key={cert.id}
              whileHover={{ y: -4, scale: 1.01 }}
              className="p-6 rounded-2xl bg-zinc-50 dark:bg-[#18181B] border border-zinc-200/50 dark:border-zinc-800/80 hover:border-indigo-500/30 dark:hover:border-indigo-500/20 shadow-xs hover:shadow-lg transition-all duration-300 flex items-start gap-4"
            >
              <div className="p-3.5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200/40 dark:border-zinc-800/60 shadow-xs shrink-0">
                {getIcon(cert.iconName)}
              </div>

              <div className="space-y-2 flex-1">
                <div className="flex justify-between items-start gap-2">
                  <span className="text-[10px] font-mono font-bold uppercase text-zinc-500 dark:text-zinc-500">
                    {cert.issuer}
                  </span>
                  <span className="text-[10px] font-mono text-zinc-400">{cert.date}</span>
                </div>

                <h3 className="text-sm font-sans font-extrabold text-zinc-900 dark:text-zinc-100 leading-snug">
                  {cert.title}
                </h3>

                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-[10px] font-bold text-indigo-500 hover:text-indigo-600 dark:text-indigo-400 dark:hover:text-indigo-300 pt-1 group"
                  >
                    <span>Verify Credential</span>
                    <ExternalLink size={10} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
