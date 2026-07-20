import React from 'react';
import { motion } from 'motion/react';
import { Award, Code, GraduationCap, Laptop, Sparkles, Brain, Trophy } from 'lucide-react';
import { STATS } from '../data';

export default function About() {
  const highlightPoints = [
    { icon: GraduationCap, title: 'Computer Science Student', desc: 'Schooled in core theoretical computing: database structures, algorithms, and math bases at Fatima Jinnah Women University.' },
    { icon: Code, title: 'Full Stack Specialist', desc: 'Crafting responsive responsive web architectures with React, Next.js, and lightweight SQL/Supabase databases.' },
    { icon: Laptop, title: 'Flutter Developer', desc: 'Engineering native-feel cross-platform mobile apps for iOS and Android with unified Dart states.' },
    { icon: Brain, title: 'AI & Innovation Enthusiast', desc: 'Curating modern AI integrations and prompt engines to automate systems and solve complex, real-world tasks.' },
  ];

  return (
    <section
      id="about"
      className="py-24 bg-white dark:bg-[#0c0c0e] border-y border-zinc-100 dark:border-zinc-900 relative"
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
            About Me
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-sans font-extrabold text-zinc-900 dark:text-white tracking-tight"
          >
            Developing Solutions with a Startup Mindset
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed"
          >
            I blend academic Computer Science rigor with practical, modern development stacks to launch rapid, high-performance software.
          </motion.p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Narrative description */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <h3 className="text-xl sm:text-2xl font-sans font-bold text-zinc-800 dark:text-zinc-100 flex items-center gap-2">
              <Trophy size={20} className="text-indigo-500" />
              <span>Who is Zunaira Tariq?</span>
            </h3>
            
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm sm:text-base font-sans">
              As a dedicated **Computer Science Student** and **Full Stack Developer**, I build applications that bridge the gap between complex algorithms and highly polished user designs. I love turning empty screens into functional, responsive ecosystems that deliver immediate value to users.
            </p>

            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm sm:text-base font-sans">
              Whether coding custom mobile apps in **Flutter**, building full-stack web storefronts in **React &amp; PHP**, or deploying embedded systems on **ESP-32 microcontrollers**, I work with a startup-centric urgency. I focus on clean code structure, blazing fast page loads, and clear visitor conversion funnels.
            </p>

            {/* Quick list of highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {highlightPoints.map((point, index) => {
                const Icon = point.icon;
                return (
                  <div key={index} className="flex gap-3 p-4 rounded-xl border border-zinc-100 dark:border-zinc-900 bg-zinc-50/50 dark:bg-zinc-900/10 hover:bg-zinc-50 dark:hover:bg-zinc-900/30 transition-all duration-300">
                    <div className="p-2.5 rounded-lg bg-indigo-500/5 dark:bg-indigo-500/10 text-indigo-500 shrink-0 h-10 w-10 flex items-center justify-center border border-indigo-500/10">
                      <Icon size={18} />
                    </div>
                    <div className="text-left font-sans space-y-1">
                      <h4 className="text-zinc-800 dark:text-zinc-200 text-xs font-bold">{point.title}</h4>
                      <p className="text-zinc-500 dark:text-zinc-500 text-[10px] leading-relaxed">{point.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Achievements / Statistics Cards */}
          <div className="lg:col-span-6 flex flex-col justify-center h-full">
            <h3 className="text-lg font-sans font-bold text-zinc-500 dark:text-zinc-400 mb-6 text-left font-mono">
              // KEY METRICS
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {STATS.map((stat, index) => {
                const isSpecial = index === 0 || index === 3; // Highlight some metrics
                return (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className={`p-6 rounded-2xl border text-left flex flex-col justify-between transition-all duration-300 ${
                      isSpecial
                        ? 'bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-transparent border-indigo-500/20'
                        : 'bg-zinc-50/80 dark:bg-[#18181B]/80 border-zinc-200/50 dark:border-zinc-800/80 hover:border-zinc-300 dark:hover:border-zinc-700'
                    }`}
                  >
                    <div className="space-y-1">
                      <span className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#06B6D4] bg-clip-text text-transparent block">
                        {stat.value}
                      </span>
                      <h4 className="text-zinc-800 dark:text-zinc-100 text-xs font-bold tracking-tight pt-1">
                        {stat.label}
                      </h4>
                    </div>
                    <p className="text-zinc-500 dark:text-zinc-500 text-[10px] mt-2 leading-tight">
                      {stat.description}
                    </p>
                  </motion.div>
                );
              })}

              {/* Bonus CTA within stats block */}
              <div className="p-6 rounded-2xl border border-dashed border-zinc-200 dark:border-zinc-800 flex flex-col justify-center items-center text-center col-span-2 sm:col-span-1 bg-zinc-50/20 dark:bg-[#18181B]/10">
                <Sparkles size={20} className="text-indigo-500 animate-spin" style={{ animationDuration: '10s' }} />
                <h4 className="text-zinc-800 dark:text-zinc-200 text-xs font-bold mt-2">Conversion Ready</h4>
                <p className="text-[9px] text-zinc-500 leading-tight mt-1">Ready to solve business problems today.</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
