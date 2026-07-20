import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote, ShieldCheck } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  return (
    <section
      id="testimonials"
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
            Endorsements
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-sans font-extrabold text-zinc-900 dark:text-white tracking-tight"
          >
            Client &amp; Mentor Reviews
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed"
          >
            Trust is built on results. Here is what business founders, managers, and academic supervisors say about collaborating with me.
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {TESTIMONIALS.map((test) => (
            <motion.div
              key={test.id}
              whileHover={{ y: -5, scale: 1.01 }}
              className="p-6 rounded-2xl bg-white dark:bg-[#18181B] border border-zinc-200/50 dark:border-zinc-800/80 hover:border-indigo-500/20 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between relative group"
            >
              {/* Floating Quote graphic */}
              <div className="absolute top-6 right-6 text-zinc-100 dark:text-zinc-900 group-hover:text-indigo-500/5 transition-colors duration-300">
                <Quote size={40} className="stroke-[1.5px]" />
              </div>

              <div className="space-y-4 relative z-10">
                {/* Stars */}
                <div className="flex gap-0.5 text-amber-400">
                  {Array.from({ length: test.stars }).map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>

                <p className="text-zinc-600 dark:text-zinc-300 text-xs sm:text-sm leading-relaxed italic font-sans">
                  "{test.content}"
                </p>
              </div>

              {/* Author bio segment */}
              <div className="flex items-center gap-3 pt-6 border-t border-zinc-100 dark:border-zinc-800/60 mt-6 relative z-10">
                <img
                  src={test.avatarUrl}
                  alt={test.name}
                  referrerPolicy="no-referrer"
                  className="w-10 h-10 rounded-full border border-zinc-200 dark:border-zinc-800 pointer-events-none"
                />
                <div className="text-left font-sans leading-snug">
                  <h4 className="text-zinc-800 dark:text-zinc-100 text-xs font-bold flex items-center gap-1">
                    <span>{test.name}</span>
                    <ShieldCheck size={12} className="text-emerald-500" />
                  </h4>
                  <p className="text-[10px] text-zinc-500 leading-normal">
                    {test.role}, <span className="font-semibold text-zinc-400">{test.company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
