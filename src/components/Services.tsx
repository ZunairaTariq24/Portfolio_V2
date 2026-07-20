import React from 'react';
import { motion } from 'motion/react';
import { Code, Smartphone, Layers, LayoutDashboard, Palette, Globe, ArrowRight } from 'lucide-react';
import { SERVICES } from '../data';

export default function Services() {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Code':
        return <Code size={20} className="text-indigo-500" />;
      case 'Smartphone':
        return <Smartphone size={20} className="text-emerald-500" />;
      case 'Layers':
        return <Layers size={20} className="text-cyan-500" />;
      case 'LayoutDashboard':
        return <LayoutDashboard size={20} className="text-purple-500" />;
      case 'Palette':
        return <Palette size={20} className="text-pink-500" />;
      default:
        return <Globe size={20} className="text-blue-500" />;
    }
  };

  return (
    <section
      id="services"
      className="py-24 bg-zinc-50 dark:bg-[#09090B] border-b border-zinc-100 dark:border-zinc-900 relative"
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
            Capabilities
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-sans font-extrabold text-zinc-900 dark:text-white tracking-tight"
          >
            Tailored Digital Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed"
          >
            I engineer fast, reliable, secure platforms optimized to transform organic visitors into paying clients and users.
          </motion.p>
        </div>

        {/* Bento Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {SERVICES.map((serv) => (
            <motion.div
              key={serv.id}
              whileHover={{ y: -5, scale: 1.01 }}
              className="p-6 rounded-2xl bg-white dark:bg-[#18181B] border border-zinc-200/50 dark:border-zinc-800/80 hover:border-indigo-500/30 dark:hover:border-indigo-500/20 shadow-xs hover:shadow-lg transition-all duration-300 group flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                {/* Icon wrapper */}
                <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 w-fit shadow-xs group-hover:scale-105 transition-transform duration-300">
                  {getIcon(serv.iconName)}
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-base font-sans font-extrabold text-zinc-900 dark:text-zinc-100">
                    {serv.title}
                  </h3>
                  <p className="text-zinc-500 dark:text-zinc-400 text-xs sm:text-sm leading-relaxed font-sans">
                    {serv.description}
                  </p>
                </div>
              </div>

              {/* Simulated conversion cue link */}
              <div className="text-[11px] font-bold text-indigo-500 dark:text-indigo-400 flex items-center gap-1 opacity-80 group-hover:opacity-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-all duration-200 cursor-pointer w-fit">
                <span>Inquire About Service</span>
                <ArrowRight size={12} className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
