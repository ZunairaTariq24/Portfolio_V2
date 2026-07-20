import React from 'react';
import { motion } from 'motion/react';
import { Zap, Brain, MonitorSmartphone, Settings, Target, MessageSquareText, Lightbulb, Check } from 'lucide-react';
import { WHY_HIRE_ME } from '../data';

export default function WhyHireMe() {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Zap':
        return <Zap size={20} className="text-amber-500" />;
      case 'Brain':
        return <Brain size={20} className="text-purple-500" />;
      case 'MonitorSmartphone':
        return <MonitorSmartphone size={20} className="text-cyan-500" />;
      case 'Settings':
        return <Settings size={20} className="text-indigo-500" />;
      case 'Target':
        return <Target size={20} className="text-red-500" />;
      default:
        return <MessageSquareText size={20} className="text-emerald-500" />;
    }
  };

  return (
    <section
      id="why-hire-me"
      className="py-24 bg-white dark:bg-[#0c0c0e] border-b border-zinc-100 dark:border-zinc-900 relative overflow-hidden"
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
            Value Offer
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-sans font-extrabold text-zinc-900 dark:text-white tracking-tight"
          >
            Why Collaborate with Me?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed"
          >
            I pair technical computer science fundamentals with direct commercial ownership, engineering features that actively drive product growth.
          </motion.p>
        </div>

        {/* Why Hire Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {WHY_HIRE_ME.map((trait) => (
            <motion.div
              key={trait.id}
              whileHover={{ y: -4, scale: 1.01 }}
              className="p-6 rounded-2xl bg-zinc-50 dark:bg-[#18181B] border border-zinc-200/50 dark:border-zinc-800/80 hover:border-indigo-500/30 dark:hover:border-indigo-500/20 shadow-xs hover:shadow-lg transition-all duration-300 flex gap-4"
            >
              <div className="p-3.5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200/40 dark:border-zinc-800/60 shadow-xs shrink-0 h-12 w-12 flex items-center justify-center">
                {getIcon(trait.iconName)}
              </div>

              <div className="space-y-1">
                <h3 className="text-sm font-sans font-extrabold text-zinc-900 dark:text-zinc-100 flex items-center gap-1.5">
                  <span>{trait.title}</span>
                </h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-xs sm:text-sm leading-relaxed font-sans">
                  {trait.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Highlight conversion block */}
        <div className="mt-16 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-transparent border border-indigo-500/20 max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-left">
          <div className="space-y-1 max-w-md">
            <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold text-indigo-500 uppercase">
              <Lightbulb size={12} /> Innovation Blueprint
            </span>
            <h4 className="text-zinc-800 dark:text-zinc-100 text-sm font-bold font-sans">
              Looking for a dedicated junior engineer with a startup mentality?
            </h4>
            <p className="text-zinc-500 dark:text-zinc-400 text-xs leading-relaxed">
              I love contributing high-coverage code, organizing clean DB triggers, and crafting highly responsive, user-tested interfaces.
            </p>
          </div>
          <button
            onClick={() => {
              const el = document.getElementById('contact');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-5 py-2.5 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 font-sans font-bold text-xs hover:bg-zinc-800 dark:hover:bg-zinc-100 shrink-0 transition-colors shadow-xs cursor-pointer"
          >
            Let's Talk Scope
          </button>
        </div>

      </div>
    </section>
  );
}
