import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Code, Server, Database, Brain, Settings, Sparkles, Sliders } from 'lucide-react';
import { SKILLS } from '../data';

export default function Skills() {
  const categories = [
    { name: 'All', icon: Sliders },
    { name: 'Frontend', icon: Code },
    { name: 'Backend', icon: Server },
    { name: 'Databases', icon: Database },
    { name: 'Programming', icon: Brain },
    { name: 'Tools', icon: Settings },
  ];

  const [activeCategory, setActiveCategory] = useState('All');

  const filteredSkills = activeCategory === 'All'
    ? SKILLS
    : SKILLS.filter((skill) => skill.category === activeCategory);

  // Helper to fetch matching icon for categories
  const getCategoryIcon = (catName: string) => {
    switch (catName) {
      case 'Frontend': return <Code className="text-indigo-500" size={16} />;
      case 'Backend': return <Server className="text-emerald-500" size={16} />;
      case 'Databases': return <Database className="text-cyan-500" size={16} />;
      case 'Programming': return <Brain className="text-purple-500" size={16} />;
      default: return <Settings className="text-amber-500" size={16} />;
    }
  };

  return (
    <section
      id="skills"
      className="py-24 bg-zinc-50 dark:bg-[#09090B] relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/5 dark:bg-indigo-500/2 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-500 bg-indigo-500/5 dark:bg-indigo-500/10 px-3 py-1.5 rounded-full border border-indigo-500/20"
          >
            Technical Stack
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-sans font-extrabold text-zinc-900 dark:text-white tracking-tight"
          >
            A Robust, Future-Ready Toolkit
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed"
          >
            From fluid, responsive user interfaces to complex server architectures and microcontrollers, I develop across the entire layer.
          </motion.p>
        </div>

        {/* Categories Selector Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12 bg-zinc-100/80 dark:bg-zinc-900/40 p-1.5 rounded-2xl border border-zinc-200/50 dark:border-zinc-800/50 max-w-2xl mx-auto">
          {categories.map((cat) => {
            const CatIcon = cat.icon;
            const isSelected = activeCategory === cat.name;
            return (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(cat.name)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium tracking-wide transition-all duration-300 relative cursor-pointer select-none ${
                  isSelected
                    ? 'text-zinc-900 dark:text-white'
                    : 'text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200'
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="activeSkillCategoryBackground"
                    className="absolute inset-0 bg-white dark:bg-zinc-800 rounded-xl shadow-xs border border-zinc-200/50 dark:border-zinc-700/50"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <CatIcon size={14} className="relative z-10" />
                <span className="relative z-10">{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Bento Grid / Cards */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                layout
                key={skill.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="p-5 rounded-2xl bg-white dark:bg-[#18181B] border border-zinc-200/60 dark:border-zinc-800/70 hover:border-indigo-500/30 dark:hover:border-indigo-500/20 shadow-xs hover:shadow-lg hover:shadow-indigo-500/2 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="p-1.5 rounded-lg bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 group-hover:bg-indigo-500/5 dark:group-hover:bg-indigo-500/10 group-hover:border-indigo-500/20 transition-all duration-300">
                      {getCategoryIcon(skill.category)}
                    </div>
                    <span className="text-zinc-800 dark:text-zinc-100 text-sm font-bold tracking-tight">
                      {skill.name}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-zinc-400 group-hover:text-indigo-400 transition-colors">
                    {skill.level}%
                  </span>
                </div>

                {/* Progress bar */}
                <div className="w-full h-1.5 bg-zinc-100 dark:bg-zinc-800/80 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="h-full bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#06B6D4] rounded-full"
                  />
                </div>

                <div className="flex items-center justify-between mt-3 text-[10px] text-zinc-400 font-mono">
                  <span>{skill.category}</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-indigo-400 flex items-center gap-0.5">
                    <Sparkles size={8} /> Production Ready
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
