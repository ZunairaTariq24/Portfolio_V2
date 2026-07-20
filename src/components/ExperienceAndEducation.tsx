import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, GraduationCap, Calendar, MapPin, Award, CheckCircle } from 'lucide-react';
import { EXPERIENCES, EDUCATIONS } from '../data';

export default function ExperienceAndEducation() {
  return (
    <section
      id="experience"
      className="py-24 bg-zinc-50 dark:bg-[#09090B] border-y border-zinc-100 dark:border-zinc-900 relative"
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
            History &amp; Growth
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-sans font-extrabold text-zinc-900 dark:text-white tracking-tight"
          >
            Experience &amp; Education Timelines
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed"
          >
            A high-performing track record combining real-world freelance web design with strict computer science academic standards.
          </motion.p>
        </div>

        {/* Dual Column Timeline Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Professional Experience */}
          <div className="lg:col-span-6 space-y-8">
            <div className="flex items-center gap-3 border-b border-zinc-200 dark:border-zinc-800 pb-3">
              <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-500">
                <Briefcase size={20} />
              </div>
              <h3 className="text-lg font-sans font-extrabold text-zinc-800 dark:text-zinc-100">
                Work Experience
              </h3>
            </div>

            <div className="space-y-8 text-left relative pl-6 border-l border-zinc-200 dark:border-zinc-800 ml-4">
              {EXPERIENCES.map((exp, idx) => (
                <div key={exp.id} className="relative space-y-3 group">
                  {/* Timeline bullet dot */}
                  <div className="absolute -left-10 top-1.5 w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-950 border-2 border-indigo-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="w-2.5 h-2.5 rounded-full bg-indigo-500" />
                  </div>

                  <div className="space-y-1">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-indigo-500/5 border border-indigo-500/10 text-[10px] font-mono text-indigo-500 font-bold">
                      <Calendar size={10} />
                      <span>{exp.duration}</span>
                    </span>
                    <h4 className="text-base font-sans font-bold text-zinc-900 dark:text-white pt-1">
                      {exp.role}
                    </h4>
                    <p className="text-xs text-zinc-500 dark:text-indigo-400 font-semibold font-sans">
                      {exp.company}
                    </p>
                  </div>

                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed font-sans">
                    {exp.description}
                  </p>

                  {/* Bullets lists */}
                  <ul className="space-y-2 pt-2 text-xs text-zinc-600 dark:text-zinc-400">
                    {exp.bulletPoints.map((point, pIdx) => (
                      <li key={pIdx} className="flex gap-2 items-start leading-relaxed">
                        <CheckCircle size={12} className="text-indigo-500 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Educational History */}
          <div className="lg:col-span-6 space-y-8">
            <div className="flex items-center gap-3 border-b border-zinc-200 dark:border-zinc-800 pb-3">
              <div className="p-2 rounded-xl bg-purple-500/10 text-purple-500">
                <GraduationCap size={20} />
              </div>
              <h3 className="text-lg font-sans font-extrabold text-zinc-800 dark:text-zinc-100">
                Education
              </h3>
            </div>

            <div className="space-y-8 text-left relative pl-6 border-l border-zinc-200 dark:border-zinc-800 ml-4">
              {EDUCATIONS.map((edu, idx) => (
                <div key={edu.id} className="relative space-y-2.5 group">
                  {/* Timeline bullet dot */}
                  <div className="absolute -left-10 top-1.5 w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-950 border-2 border-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="w-2.5 h-2.5 rounded-full bg-purple-500" />
                  </div>

                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-purple-500/5 border border-purple-500/10 text-[10px] font-mono text-purple-500 font-bold">
                        <Calendar size={10} />
                        <span>{edu.duration}</span>
                      </span>
                      {edu.grade && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-[9px] font-sans text-emerald-600 dark:text-emerald-400 font-extrabold uppercase">
                          {edu.grade}
                        </span>
                      )}
                    </div>
                    <h4 className="text-base font-sans font-bold text-zinc-900 dark:text-white pt-1">
                      {edu.degree}
                    </h4>
                    <p className="text-xs text-zinc-500 dark:text-purple-400 font-semibold font-sans">
                      {edu.institution}
                    </p>
                  </div>

                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed font-sans">
                    {edu.details}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
