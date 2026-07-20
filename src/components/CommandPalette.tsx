import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Command, CornerDownLeft, User, Code, FileText, Mail, Github, Linkedin, ExternalLink, Briefcase, GraduationCap, X } from 'lucide-react';
interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (sectionId: string) => void;
  onCopyEmail: () => void;
}

export default function CommandPalette({ isOpen, onClose, onNavigate, onCopyEmail }: CommandPaletteProps) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const commands = [
    { id: 'home', label: 'Go to Home Section', category: 'Navigation', icon: Command, action: () => onNavigate('home') },
    { id: 'about', label: 'Go to About Section', category: 'Navigation', icon: User, action: () => onNavigate('about') },
    { id: 'skills', label: 'Go to Technical Skills', category: 'Navigation', icon: Code, action: () => onNavigate('skills') },
    { id: 'projects', label: 'Go to Portfolio Projects', category: 'Navigation', icon: Code, action: () => onNavigate('projects') },
    { id: 'experience', label: 'Go to Experience History', category: 'Navigation', icon: Briefcase, action: () => onNavigate('experience') },
    { id: 'certifications', label: 'Go to Certifications', category: 'Navigation', icon: GraduationCap, action: () => onNavigate('certifications') },
    { id: 'contact', label: 'Go to Contact Form', category: 'Navigation', icon: Mail, action: () => onNavigate('contact') },
    { id: 'copy-email', label: 'Copy Email Address', category: 'Utility', icon: Mail, action: () => { onCopyEmail(); onClose(); } },
    { id: 'github', label: 'Visit GitHub Profile', category: 'External', icon: Github, action: () => { window.open('https://github.com/ZunairaTariq24/', '_blank'); onClose(); } },
    { id: 'linkedin', label: 'Visit LinkedIn Profile', category: 'External', icon: Linkedin, action: () => { window.open('https://www.linkedin.com/in/zunaira-tariq-926b1b33a/', '_blank'); onClose(); } },
  ];

  const filteredCommands = commands.filter((cmd) =>
    cmd.label.toLowerCase().includes(query.toLowerCase()) ||
    cmd.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        if (isOpen) onClose();
        else onClose(); // Wait, let App.tsx handle it, but we can call parent's toggle too.
      }

      if (!isOpen) return;

      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % filteredCommands.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % filteredCommands.length);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredCommands[selectedIndex]) {
          filteredCommands[selectedIndex].action();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, selectedIndex, filteredCommands, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-[10vh] px-4">
          {/* Backdrop blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-md"
          />

          {/* Dialog Body */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ type: 'spring', duration: 0.3 }}
            className="relative w-full max-w-xl rounded-2xl bg-zinc-950 border border-zinc-800 shadow-2xl shadow-black overflow-hidden flex flex-col max-h-[70vh]"
          >
            {/* Search Input Bar */}
            <div className="flex items-center gap-3 px-4 py-4 border-b border-zinc-800">
              <Search className="text-zinc-500 shrink-0" size={20} />
              <input
                ref={inputRef}
                type="text"
                placeholder="Type a command or navigate..."
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                className="w-full bg-transparent border-none text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-0 text-sm"
              />
              <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[10px] text-zinc-400 font-mono select-none">
                <span>ESC</span>
              </div>
              <button
                onClick={onClose}
                className="p-1 rounded-lg hover:bg-zinc-900 text-zinc-400 hover:text-zinc-200 transition-colors cursor-pointer"
              >
                <X size={16} />
              </button>
            </div>

            {/* List items */}
            <div className="flex-1 overflow-y-auto py-2 px-2 custom-scrollbar">
              {filteredCommands.length === 0 ? (
                <div className="py-12 text-center text-zinc-500 text-sm">
                  No commands found for "{query}"
                </div>
              ) : (
                <div>
                  {/* Group items by category */}
                  {Array.from(new Set(filteredCommands.map((c) => c.category))).map((category) => {
                    const categoryCommands = filteredCommands.filter((c) => c.category === category);
                    return (
                      <div key={category} className="mb-2">
                        <div className="px-3 py-1.5 text-[11px] font-semibold text-zinc-500 tracking-wider uppercase font-sans">
                          {category}
                        </div>
                        <div className="space-y-0.5">
                          {categoryCommands.map((cmd) => {
                            // Find correct index in global filtered list
                            const globalIndex = filteredCommands.indexOf(cmd);
                            const isSelected = globalIndex === selectedIndex;
                            const IconComponent = cmd.icon;

                            return (
                              <button
                                key={cmd.id}
                                onClick={cmd.action}
                                onMouseEnter={() => setSelectedIndex(globalIndex)}
                                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-left text-xs transition-all duration-150 cursor-pointer ${
                                  isSelected
                                    ? 'bg-indigo-600/10 text-indigo-400 border border-indigo-500/20 shadow-xs'
                                    : 'text-zinc-400 border border-transparent'
                                }`}
                              >
                                <div className="flex items-center gap-3">
                                  <IconComponent
                                    size={16}
                                    className={isSelected ? 'text-indigo-400' : 'text-zinc-500'}
                                  />
                                  <span>{cmd.label}</span>
                                </div>
                                {isSelected && (
                                  <div className="flex items-center gap-1 text-[10px] text-indigo-400/80 font-mono">
                                    <span>Select</span>
                                    <CornerDownLeft size={10} />
                                  </div>
                                )}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Bottom help bar */}
            <div className="px-4 py-3 bg-zinc-900/50 border-t border-zinc-800 flex items-center justify-between text-[11px] text-zinc-500 select-none">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 font-mono">↑↓</kbd> to navigate
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 font-mono">Enter</kbd> to select
                </span>
              </div>
              <span className="text-zinc-500">Zunaira Tariq OS v1.0</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
