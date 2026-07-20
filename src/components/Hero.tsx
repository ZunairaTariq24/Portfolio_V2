import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, Linkedin, Globe, Mail, MapPin, ArrowRight, Code, Sparkles, Terminal, CheckCircle } from 'lucide-react';
import { AVATAR_IMAGE } from '../data';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
  onCopyEmail: () => void;
}

export default function Hero({ onNavigate, onCopyEmail }: HeroProps) {
  const titles = [
    'Full Stack Developer',
    'Frontend Engineer',
    'Flutter Developer',
    'Computer Science Student',
    'UI/UX Enthusiast',
    'Problem Solver'
  ];

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const socialLinks = [
    { icon: Github, href: 'https://github.com/zunairatariq985', label: 'GitHub', color: 'hover:text-zinc-900 dark:hover:text-white' },
    { icon: Linkedin, href: 'https://linkedin.com/in/zunaira-tariq', label: 'LinkedIn', color: 'hover:text-blue-600 dark:hover:text-blue-400' },
    { icon: Globe, href: '#home', label: 'Portfolio', color: 'hover:text-indigo-600 dark:hover:text-indigo-400' },
    { icon: Mail, onClick: onCopyEmail, label: 'Copy Email', color: 'hover:text-emerald-600 dark:hover:text-emerald-400' },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-zinc-50 dark:bg-[#09090B]"
    >
      {/* Glow Rings background */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Copywriting */}
        <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
          
          {/* Availability Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold tracking-wide"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Available for Freelance &amp; Internships</span>
          </motion.div>

          {/* Heading intro */}
          <div className="space-y-2">
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[#6366F1] font-mono text-sm tracking-widest uppercase mb-1"
            >
              Hi, I'm
            </motion.h2>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl sm:text-6xl font-sans font-extrabold tracking-tighter text-zinc-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-br dark:from-white dark:via-zinc-200 dark:to-zinc-500"
            >
              Zunaira Tariq
            </motion.h1>

            {/* Rotating Titles */}
            <div className="h-12 sm:h-16 flex items-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentTitleIndex}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -30, opacity: 0 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                  className="text-2xl sm:text-4xl font-sans font-bold bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#06B6D4] bg-clip-text text-transparent block"
                >
                  {titles[currentTitleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-xl leading-relaxed font-sans"
          >
            I build responsive websites, scalable applications, and intuitive user experiences that help businesses and people solve real-world problems.
          </motion.p>

          {/* Badges / Location info */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex flex-wrap gap-4 text-xs text-zinc-500 dark:text-zinc-400 font-sans"
          >
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/60 shadow-xs">
              <MapPin size={14} className="text-red-500" />
              <span>Rawalpindi, Pakistan</span>
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/60 shadow-xs">
              <CheckCircle size={14} className="text-indigo-500" />
              <span>FJWU Student (CGPA 3.5)</span>
            </span>
          </motion.div>

          {/* CTA Button Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4 w-full"
          >
            <button
              onClick={() => onNavigate('contact')}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] hover:from-[#4F46E5] hover:to-[#7C3AED] text-white font-semibold text-sm transition-all duration-300 shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/35 hover:-translate-y-0.5 cursor-pointer select-none"
            >
              <span>Hire Me Now</span>
              <ArrowRight size={16} />
            </button>

            <button
              onClick={() => onNavigate('projects')}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-900 dark:text-zinc-200 font-semibold text-sm transition-all duration-300 border border-zinc-200 dark:border-zinc-800 hover:-translate-y-0.5 cursor-pointer select-none"
            >
              <span>View Projects</span>
            </button>
          </motion.div>

          {/* Social Icons row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center gap-4 pt-4"
          >
            <span className="text-xs text-zinc-400 dark:text-zinc-500 font-mono">Connect:</span>
            <div className="flex items-center gap-2">
              {socialLinks.map((link, idx) => {
                const IconComp = link.icon;
                return link.href ? (
                  <a
                    key={idx}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`p-2 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 transition-colors ${link.color}`}
                    title={link.label}
                  >
                    <IconComp size={16} />
                  </a>
                ) : (
                  <button
                    key={idx}
                    onClick={link.onClick}
                    className={`p-2 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 transition-colors ${link.color} cursor-pointer`}
                    title={link.label}
                  >
                    <IconComp size={16} />
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* Elegant Dark Theme - Minimalist Metrics Row */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex gap-8 items-center border-t border-zinc-200/50 dark:border-zinc-800/50 pt-6 mt-4 w-full select-none"
          >
            <div>
              <div className="text-2xl font-bold text-zinc-900 dark:text-white font-sans">3.5</div>
              <div className="text-[10px] text-zinc-400 dark:text-zinc-500 uppercase tracking-widest font-mono">CGPA</div>
            </div>
            <div className="h-8 w-[1px] bg-zinc-200 dark:bg-zinc-800"></div>
            <div>
              <div className="text-2xl font-bold text-zinc-900 dark:text-white font-sans">15+</div>
              <div className="text-[10px] text-zinc-400 dark:text-zinc-500 uppercase tracking-widest font-mono">Projects</div>
            </div>
            <div className="h-8 w-[1px] bg-zinc-200 dark:bg-zinc-800"></div>
            <div>
              <div className="text-2xl font-bold text-[#06B6D4] font-sans">Flutter</div>
              <div className="text-[10px] text-zinc-400 dark:text-zinc-500 uppercase tracking-widest font-mono font-bold">Specialty</div>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Creative Mockup Terminal & Avatar Workspace */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: 'spring' }}
          className="lg:col-span-5 relative flex justify-center lg:justify-end select-none"
        >
          {/* Main frame / Laptop terminal structure */}
          <div className="relative w-full max-w-sm sm:max-w-md bg-zinc-950 rounded-2xl border border-zinc-800 shadow-2xl shadow-black/80 overflow-hidden transform hover:rotate-1 hover:scale-101 transition-transform duration-500 group">
            
            {/* Window title bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-zinc-900 border-b border-zinc-800/80">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              </div>
              <span className="text-[10px] text-zinc-500 font-mono tracking-wide flex items-center gap-1">
                <Terminal size={10} />
                <span>zunaira_tariq.sh</span>
              </span>
              <span className="w-8 h-1" />
            </div>

            {/* Simulated Live Workspace Screen */}
            <div className="p-5 font-mono text-xs text-zinc-400 space-y-4 bg-zinc-950/95 relative">
              
              {/* Profile Headshot integrated into the IDE display */}
              <div className="flex items-center gap-4 p-3 rounded-xl bg-zinc-900/40 border border-zinc-800/50 backdrop-blur-xs">
                <img
                  src={AVATAR_IMAGE}
                  alt="Zunaira Tariq circular graphic avatar"
                  referrerPolicy="no-referrer"
                  className="w-14 h-14 rounded-full border border-zinc-700 object-cover shadow-inner pointer-events-none"
                />
                <div className="text-left font-sans">
                  <h4 className="text-zinc-200 text-sm font-bold tracking-tight">Zunaira Tariq</h4>
                  <p className="text-zinc-500 text-[11px] leading-tight">Computer Science &amp; Full Stack</p>
                  <span className="inline-flex items-center gap-1 mt-1 text-[10px] text-indigo-400 font-mono bg-indigo-500/5 px-2 py-0.5 rounded border border-indigo-500/10">
                    <Sparkles size={8} /> Active Workspace
                  </span>
                </div>
              </div>

              {/* Code Typing simulation panel */}
              <div className="space-y-1.5 text-left text-[11px] bg-zinc-900/15 p-3 rounded-lg border border-zinc-900/30 font-mono text-zinc-400">
                <p className="text-zinc-500">// System initialization</p>
                <p>
                  <span className="text-purple-400">const</span> developer = {'{'}
                </p>
                <p className="pl-4">
                  name: <span className="text-green-300">"Zunaira Tariq"</span>,
                </p>
                <p className="pl-4">
                  education: <span className="text-green-300">"FJWU, BCS"</span>,
                </p>
                <p className="pl-4">
                  grade: <span className="text-purple-400">3.5</span>,
                </p>
                <p className="pl-4">
                  stack: [<span className="text-amber-300">"React"</span>, <span className="text-amber-300">"Flutter"</span>, <span className="text-amber-300">"Supabase"</span>],
                </p>
                <p className="pl-4">
                  motto: <span className="text-green-300">"Build things that matter."</span>
                </p>
                <p>{'};'}</p>
              </div>

              {/* Real-time statistics badge overlay */}
              <div className="grid grid-cols-2 gap-2 text-center text-zinc-500 text-[10px] pt-1">
                <div className="p-2 rounded border border-zinc-900 bg-zinc-900/10 flex flex-col items-center">
                  <span className="text-indigo-400 font-bold font-sans text-xs">99%</span>
                  <span>UI Accuracy</span>
                </div>
                <div className="p-2 rounded border border-zinc-900 bg-zinc-900/10 flex flex-col items-center">
                  <span className="text-purple-400 font-bold font-sans text-xs">&lt;1.5s</span>
                  <span>Lighthouse Loading</span>
                </div>
              </div>
            </div>

            {/* IDE bottom feedback bar */}
            <div className="px-4 py-2 bg-zinc-900/60 border-t border-zinc-800 text-[9px] text-zinc-500 flex justify-between items-center font-mono">
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                <span>main.tsx</span>
              </span>
              <span>UTF-8 • TSX</span>
            </div>
          </div>

          {/* Creative absolute floating decorative panels */}
          <div className="absolute -top-6 -right-6 p-2 rounded-xl bg-zinc-900/60 border border-indigo-500/20 shadow-lg shadow-black/50 backdrop-blur-xs text-left hidden sm:block animate-bounce" style={{ animationDuration: '6s' }}>
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded bg-indigo-500/10 text-indigo-400">
                <Code size={12} />
              </div>
              <div className="font-sans text-[10px] leading-tight pr-2">
                <p className="text-zinc-200 font-bold">Pixel Perfect</p>
                <p className="text-zinc-500">Tailwind &amp; Motion</p>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-6 -left-6 p-2.5 rounded-xl bg-zinc-900/60 border border-purple-500/20 shadow-lg shadow-black/50 backdrop-blur-xs text-left hidden sm:block animate-pulse" style={{ animationDuration: '4s' }}>
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded bg-purple-500/10 text-purple-400">
                <Sparkles size={12} />
              </div>
              <div className="font-sans text-[10px] leading-tight pr-2">
                <p className="text-zinc-200 font-bold">Cross Platform</p>
                <p className="text-zinc-500">Flutter Master</p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
