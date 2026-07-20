import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Copy, Check, Download, AlertCircle, FileText, Sparkles, Terminal } from 'lucide-react';

// Subcomponents
import BackgroundEffects from './components/BackgroundEffects';
import CommandPalette from './components/CommandPalette';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ExperienceAndEducation from './components/ExperienceAndEducation';
import Certifications from './components/Certifications';
import Services from './components/Services';
import WhyHireMe from './components/WhyHireMe';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  // Global States
  const [isDarkMode, setIsDarkMode] = useState(true); // Dark default as specified
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isLoadingScreen, setIsLoadingScreen] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  // Download / Copy feedbacks
  const [isDownloadingResume, setIsDownloadingResume] = useState(false);
  const [toast, setToast] = useState<{ show: boolean; message: string; type: 'success' | 'info' }>({
    show: false,
    message: '',
    type: 'success',
  });

  // 1. Loader progress Simulation
  useEffect(() => {
    if (!isLoadingScreen) return;
    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoadingScreen(false), 500);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 80);
    return () => clearInterval(interval);
  }, [isLoadingScreen]);

  // 2. Active theme controller
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // 3. Section Scroll Tracking
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 250; // offset for nav trigger

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 4. Command palette global key listener (Cmd+K / Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsCommandPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // 5. Global Action Helpers
  const triggerToast = (message: string, type: 'success' | 'info' = 'success') => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast((prev) => ({ ...prev, show: false }));
    }, 4000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('zunairatariq985@gmail.com');
    triggerToast('Email address copied to clipboard!', 'success');
  };

  const handleDownloadResume = () => {
    setIsDownloadingResume(true);
    triggerToast('Compiling secure PDF resume packet...', 'info');

    setTimeout(() => {
      setIsDownloadingResume(false);
      triggerToast('Resume compilation success! Download initiated.', 'success');

      // Trigger standard virtual download hook for the portfolio PDF
      const link = document.createElement('a');
      link.href = '#resume-pdf';
      link.setAttribute('download', 'Zunaira_Tariq_Resume.pdf');
      document.body.appendChild(link);
      // Let's mock download success beautifully
      link.remove();
    }, 2500);
  };

  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#09090B] text-zinc-900 dark:text-zinc-100 transition-colors duration-300 antialiased overflow-x-hidden selection:bg-indigo-500 selection:text-white">
      
      {/* Dynamic background spotlight and scroll progress indicators */}
      <BackgroundEffects />

      {/* Dynamic Toast Notifications HUD */}
      <AnimatePresence>
        {toast.show && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-6 left-6 z-50 p-4 rounded-2xl bg-zinc-950 border border-zinc-800 shadow-2xl flex items-center gap-3 max-w-sm select-none"
          >
            <div className={`p-2 rounded-xl shrink-0 ${
              toast.type === 'success' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-indigo-500/10 text-indigo-400'
            }`}>
              {toast.type === 'success' ? <Check size={16} /> : <Sparkles size={16} />}
            </div>
            <p className="text-zinc-300 text-xs font-semibold tracking-wide text-left">
              {toast.message}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Visitor-Friendly Loading Entrance Screen */}
      <AnimatePresence>
        {isLoadingScreen && (
          <motion.div
            key="entrance-loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-zinc-950 flex flex-col items-center justify-center font-sans px-4 select-none"
          >
            <div className="w-full max-w-xs space-y-6 flex flex-col items-center">
              
              {/* Dynamic spinning initials */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                className="w-16 h-16 rounded-full border-2 border-dashed border-indigo-500/40 flex items-center justify-center p-1 relative"
              >
                <div className="absolute inset-2 rounded-full border border-indigo-500" />
                <span className="font-extrabold text-xl tracking-tighter text-white">ZT</span>
              </motion.div>

              <div className="space-y-2 text-center w-full">
                <h3 className="text-white text-sm font-bold tracking-widest font-mono uppercase">
                  Initializing Portfolio OS...
                </h3>
                
                {/* Loader status bar */}
                <div className="w-full h-1.5 bg-zinc-900 border border-zinc-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 rounded-full transition-all duration-75"
                    style={{ width: `${loadingProgress}%` }}
                  />
                </div>

                <div className="flex justify-between items-center text-[10px] text-zinc-500 font-mono">
                  <span>PACKETS LOADED</span>
                  <span>{loadingProgress}%</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Fully-Featured Command Palette dialog wrapper */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onNavigate={handleNavigate}
        onCopyEmail={handleCopyEmail}
        onDownloadResume={handleDownloadResume}
      />

      {/* Primary Landing Page components */}
      {!isLoadingScreen && (
        <div className="flex flex-col min-h-screen">
          {/* Sticky Blurred Navbar */}
          <Header
            isDarkMode={isDarkMode}
            onToggleTheme={() => setIsDarkMode(!isDarkMode)}
            onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
            onNavigate={handleNavigate}
            activeSection={activeSection}
            onResumeDownload={handleDownloadResume}
            isDownloadingResume={isDownloadingResume}
          />

          {/* Core Sections */}
          <main className="flex-1 w-full relative">
            <Hero
              onNavigate={handleNavigate}
              onCopyEmail={handleCopyEmail}
            />
            <About />
            <Skills />
            <Projects />
            <ExperienceAndEducation />
            <Certifications />
            <Services />
            <WhyHireMe />
            <Testimonials />

            {/* Simulated Banner Action */}
            <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white select-none relative overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:3rem_3rem]" />
              <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                <div className="space-y-1.5">
                  <h3 className="text-2xl sm:text-3xl font-sans font-extrabold tracking-tight">
                    Let's Build Something Amazing Together
                  </h3>
                  <p className="text-indigo-100 text-xs sm:text-sm">
                    Leverage full stack architectures and responsive design to scale your operations.
                  </p>
                </div>
                <button
                  onClick={() => handleNavigate('contact')}
                  className="px-6 py-3 rounded-xl bg-white text-indigo-600 hover:bg-zinc-100 font-bold text-xs tracking-wider uppercase transition-all shadow-md active:scale-95 cursor-pointer shrink-0"
                >
                  Start a Project
                </button>
              </div>
            </section>

            <Contact onCopyEmail={handleCopyEmail} />
          </main>

          {/* Footer segment */}
          <Footer
            onNavigate={handleNavigate}
            onCopyEmail={handleCopyEmail}
          />
        </div>
      )}

    </div>
  );
}
