import React from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Sparkles, Heart } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onCopyEmail: () => void;
}

export default function Footer({ onNavigate, onCopyEmail }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (id: string) => {
    onNavigate(id);
  };

  return (
    <footer className="bg-white dark:bg-[#09090B] border-t border-zinc-200/50 dark:border-zinc-900 pt-16 pb-8 text-left relative overflow-hidden">
      
      {/* Decorative background grid blur */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-500/5 dark:bg-indigo-500/2 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-zinc-200/60 dark:border-zinc-900">
          
          {/* Logo & Bio Column */}
          <div className="md:col-span-5 space-y-4">
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-2 font-sans font-extrabold text-2xl tracking-tighter text-zinc-900 dark:text-white cursor-pointer select-none group"
            >
              <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                ZT
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
            </button>
            
            <p className="text-zinc-500 dark:text-zinc-400 text-xs sm:text-sm leading-relaxed font-sans max-w-sm">
              Zunaira Tariq is a Computer Science student and Full Stack Developer crafting conversion-focused websites, robust databases, and cross-platform Flutter applications.
            </p>

            <div className="flex items-center gap-3">
              <a
                href="https://github.com/zunairatariq985"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-900/40"
                title="GitHub"
              >
                <Github size={14} />
              </a>
              <a
                href="https://linkedin.com/in/zunaira-tariq"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-500 hover:text-indigo-500 dark:hover:text-blue-400 transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-900/40"
                title="LinkedIn"
              >
                <Linkedin size={14} />
              </a>
              <button
                onClick={onCopyEmail}
                className="p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-500 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-900/40 cursor-pointer"
                title="Copy Email Address"
              >
                <Mail size={14} />
              </button>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
              // SITE INDEX
            </h4>
            <ul className="space-y-2 text-xs font-sans text-zinc-500 dark:text-zinc-400">
              <li>
                <button onClick={() => handleNavClick('home')} className="hover:text-indigo-500 dark:hover:text-white transition-colors cursor-pointer">
                  Back to Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('about')} className="hover:text-indigo-500 dark:hover:text-white transition-colors cursor-pointer">
                  Biography &amp; Stats
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('skills')} className="hover:text-indigo-500 dark:hover:text-white transition-colors cursor-pointer">
                  Technical Stack
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('experience')} className="hover:text-indigo-500 dark:hover:text-white transition-colors cursor-pointer">
                  Timelines
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('contact')} className="hover:text-indigo-500 dark:hover:text-white transition-colors cursor-pointer">
                  Contact Compiler
                </button>
              </li>
            </ul>
          </div>

          {/* Services / Deliverables Column */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
              // SOLUTIONS
            </h4>
            <ul className="space-y-2 text-xs font-sans text-zinc-500 dark:text-zinc-400">
              <li>
                <button onClick={() => handleNavClick('services')} className="hover:text-indigo-500 dark:hover:text-white transition-colors cursor-pointer">
                  Full-Stack Web Storefronts
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('services')} className="hover:text-indigo-500 dark:hover:text-white transition-colors cursor-pointer">
                  Cross-Platform Flutter Apps
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('services')} className="hover:text-indigo-500 dark:hover:text-white transition-colors cursor-pointer">
                  High-Conversion Landing Pages
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('services')} className="hover:text-indigo-500 dark:hover:text-white transition-colors cursor-pointer">
                  Analytical Admin Dashboards
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Credits / Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-sans text-zinc-400 select-none">
          <p>© {currentYear} Zunaira Tariq. All Rights Reserved.</p>
          <div className="flex items-center gap-1.5 font-mono text-[10px] text-zinc-500">
            <span>Built with React, Vite, Tailwind CSS, Framer Motion</span>
            <Heart size={10} className="text-red-500 shrink-0" />
          </div>
        </div>

      </div>
    </footer>
  );
}
