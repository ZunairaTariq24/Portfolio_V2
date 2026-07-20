import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sun, Moon, Search, FileDown, Briefcase } from 'lucide-react';

interface HeaderProps {
  isDarkMode: boolean;
  onToggleTheme: () => void;
  onOpenCommandPalette: () => void;
  onNavigate: (sectionId: string) => void;
  activeSection: string;
  onResumeDownload: () => void;
  isDownloadingResume: boolean;
}

export default function Header({
  isDarkMode,
  onToggleTheme,
  onOpenCommandPalette,
  onNavigate,
  activeSection,
  onResumeDownload,
  isDownloadingResume,
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Experience', id: 'experience' },
    { label: 'Certifications', id: 'certifications' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200/50 dark:border-zinc-800/50 shadow-sm'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Left Side: Logo & Live Badge */}
        <div className="flex items-center gap-6">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2 font-sans font-extrabold text-2xl tracking-tighter text-zinc-900 dark:text-white cursor-pointer select-none group"
          >
            <span className="bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#06B6D4] bg-clip-text text-transparent transition-transform duration-300 group-hover:scale-105">
              ZT
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#6366F1] animate-pulse" />
          </button>

          {/* Availability Badge (Elegant Dark Theme Style) */}
          <div className="hidden xl:flex items-center gap-2 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            <span className="text-[10px] uppercase tracking-wider font-bold text-emerald-600 dark:text-emerald-400 font-mono">
              Available for Internships
            </span>
          </div>
        </div>

        {/* Desktop Navigation links */}
        <nav className="hidden lg:flex items-center gap-1.5 bg-zinc-100/50 dark:bg-zinc-900/40 p-1.5 rounded-full border border-zinc-200/20 dark:border-zinc-800/30">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-300 relative cursor-pointer select-none ${
                  isActive
                    ? 'text-zinc-900 dark:text-white'
                    : 'text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavBackground"
                    className="absolute inset-0 bg-white dark:bg-zinc-800/80 rounded-full shadow-xs border border-zinc-200/40 dark:border-zinc-700/50"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Right Buttons / Actions */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Spotlight Search Toggle */}
          <button
            onClick={onOpenCommandPalette}
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200/80 dark:hover:bg-zinc-800 border border-zinc-200/50 dark:border-zinc-800/60 text-zinc-500 dark:text-zinc-400 transition-colors text-xs font-sans cursor-pointer group"
            title="Search Commands (Cmd+K)"
          >
            <Search size={14} className="group-hover:text-indigo-400" />
            <span className="text-[10px] tracking-widest font-mono text-zinc-400 dark:text-zinc-500">
              CMD K
            </span>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={onToggleTheme}
            className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 border border-zinc-200/50 dark:border-zinc-800/60 text-zinc-700 dark:text-zinc-300 transition-colors cursor-pointer"
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          {/* Resume Download */}
          <button
            onClick={onResumeDownload}
            disabled={isDownloadingResume}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 border border-zinc-200/50 dark:border-zinc-800/60 text-zinc-700 dark:text-zinc-300 text-xs font-semibold tracking-wide transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer group"
          >
            <FileDown size={14} className={isDownloadingResume ? 'animate-bounce' : 'transition-transform duration-200 group-hover:translate-y-0.5'} />
            <span>{isDownloadingResume ? 'Downloading...' : 'Resume'}</span>
          </button>

          {/* Hire Me CTA */}
          <button
            onClick={() => handleNavClick('contact')}
            className="flex items-center gap-1.5 px-4.5 py-2.5 rounded-xl bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] hover:from-[#4F46E5] hover:to-[#7C3AED] text-white text-xs font-semibold tracking-wide shadow-md shadow-indigo-500/10 hover:shadow-indigo-500/20 active:scale-95 transition-all duration-200 cursor-pointer select-none"
          >
            <Briefcase size={14} />
            <span>Hire Me</span>
          </button>
        </div>

        {/* Mobile controls (Grounded menu + Toggle buttons) */}
        <div className="flex lg:hidden items-center gap-2">
          {/* Spotlight Search Toggle Mobile */}
          <button
            onClick={onOpenCommandPalette}
            className="p-2 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/60 text-zinc-500"
            aria-label="Open Command Search"
          >
            <Search size={16} />
          </button>

          {/* Theme Toggle Mobile */}
          <button
            onClick={onToggleTheme}
            className="p-2 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/60 text-zinc-700 dark:text-zinc-300"
          >
            {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/60 text-zinc-700 dark:text-zinc-300 cursor-pointer"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-b border-zinc-200 dark:border-zinc-800 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-md overflow-hidden"
          >
            <div className="px-4 py-4 space-y-2 flex flex-col">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`px-4 py-2 rounded-xl text-left text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-zinc-100 dark:bg-zinc-900 text-indigo-500'
                        : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-50 dark:hover:bg-zinc-900/50'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}

              <div className="pt-4 border-t border-zinc-200/50 dark:border-zinc-800/50 flex flex-col gap-2">
                <button
                  onClick={onResumeDownload}
                  disabled={isDownloadingResume}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-300 text-xs font-semibold border border-zinc-200 dark:border-zinc-800"
                >
                  <FileDown size={14} className={isDownloadingResume ? 'animate-bounce' : ''} />
                  <span>{isDownloadingResume ? 'Downloading Resume...' : 'Download Resume'}</span>
                </button>
                <button
                  onClick={() => handleNavClick('contact')}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] hover:from-[#4F46E5] hover:to-[#7C3AED] text-white text-xs font-semibold"
                >
                  <Briefcase size={14} />
                  <span>Hire Me Now</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
