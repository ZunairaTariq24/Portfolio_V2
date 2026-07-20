import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp } from 'lucide-react';

export default function BackgroundEffects() {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      // Direct mouse tracking for the radial backdrop glow
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Compute scroll progress percentage
  const getScrollProgress = () => {
    if (typeof document === 'undefined') return 0;
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight === 0) return 0;
    return (scrollY / totalHeight) * 100;
  };

  const progress = getScrollProgress();

  return (
    <>
      {/* 1. Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-zinc-900/40 backdrop-blur-xs z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500"
          style={{ width: `${progress}%` }}
          layoutId="scrollProgress"
        />
      </div>

      {/* 2. Custom Ambient Cursor Spot-Glow (Desktop only) */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 hidden md:block"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(99, 102, 241, 0.06), transparent 80%)`,
        }}
      />

      {/* Elegant Dark Glows */}
      <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-[#6366F1]/10 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-[#8B5CF6]/10 rounded-full blur-[100px] pointer-events-none z-0" />
      
      {/* Radial White Dots Grid Layer */}
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04] pointer-events-none z-0" 
        style={{
          backgroundImage: 'radial-gradient(ellipse at center, #ffffff 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }}
      />

      {/* 3. Global Mesh Grid Backdrop */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f29370c_1px,transparent_1px),linear-gradient(to_bottom,#1f29370c_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-0" />

      {/* 4. Scroll To Top Widget */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            id="scroll-to-top-button"
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            whileHover={{ scale: 1.1, translateY: -4 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-6 right-6 z-40 p-3 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-indigo-400 hover:text-indigo-300 shadow-lg shadow-black/40 backdrop-blur-md cursor-pointer group"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
