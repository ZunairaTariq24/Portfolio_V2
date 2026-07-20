import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, Layers, ArrowRight, Play, Eye, Sparkles, X, Server, Database, Smartphone, Laptop, Cpu, CheckCircle } from 'lucide-react';
import { PROJECTS } from '../data';
import { Project } from '../types';

export default function Projects() {
  const categories = ['all', 'web', 'mobile', 'desktop', 'iot', 'other'];

  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [simulatingProject, setSimulatingProject] = useState<Project | null>(null);

  // Dijkstra shortest path solver state (for interactive simulator)
  const [dijkstraGrid, setDijkstraGrid] = useState<string[][]>(() => {
    const grid = Array(6).fill(null).map(() => Array(10).fill('empty'));
    grid[2][1] = 'start';
    grid[2][8] = 'end';
    return grid;
  });
  const [dijkstraStatus, setDijkstraStatus] = useState('Draw walls and click Solve!');

  // IoT simulator state
  const [iotLivingLight, setIotLivingLight] = useState(false);
  const [iotTemp, setIotTemp] = useState(24);
  const [iotFanSpeed, setIotFanSpeed] = useState('Off');

  // Decision App state
  const [decisionStep, setDecisionStep] = useState(0);
  const [decisionPoints, setDecisionPoints] = useState(0);

  // StudentHub marketplace cart
  const [marketplaceCart, setMarketplaceCart] = useState<string[]>([]);
  const [marketplaceBalance, setMarketplaceBalance] = useState(1500);

  const filteredProjects = filter === 'all'
    ? PROJECTS
    : PROJECTS.filter((proj) => proj.category === filter);

  const handleOpenReadMore = (project: Project) => {
    setSelectedProject(project);
  };

  const handleOpenSimulator = (project: Project) => {
    setSimulatingProject(project);
    // Reset specific states
    if (project.id === 'shortest-path') {
      const grid = Array(6).fill(null).map(() => Array(10).fill('empty'));
      grid[2][1] = 'start';
      grid[2][8] = 'end';
      setDijkstraGrid(grid);
      setDijkstraStatus('Click cells to build wall blockers, then click Solve!');
    } else if (project.id === 'decision-app') {
      setDecisionStep(0);
      setDecisionPoints(0);
    } else if (project.id === 'iot-home') {
      setIotLivingLight(false);
      setIotTemp(24);
      setIotFanSpeed('Off');
    } else if (project.id === 'studenthub') {
      setMarketplaceCart([]);
      setMarketplaceBalance(1500);
    }
  };

  // Shortest path node grid click
  const handleDijkstraCellClick = (r: number, c: number) => {
    if (dijkstraGrid[r][c] === 'start' || dijkstraGrid[r][c] === 'end') return;
    const newGrid = [...dijkstraGrid.map(row => [...row])];
    newGrid[r][c] = newGrid[r][c] === 'wall' ? 'empty' : 'wall';
    setDijkstraGrid(newGrid);
  };

  // Simulated Dijkstra execution
  const solveDijkstra = () => {
    setDijkstraStatus('Running Dijkstra search routing...');
    let tempGrid = [...dijkstraGrid.map(row => [...row])];
    
    // Simulate radial explosion / node checking
    setTimeout(() => {
      tempGrid[2][2] = 'visited';
      tempGrid[2][3] = 'visited';
      tempGrid[1][3] = 'visited';
      tempGrid[3][3] = 'visited';
      setDijkstraGrid([...tempGrid]);
    }, 400);

    setTimeout(() => {
      tempGrid[2][4] = 'visited';
      tempGrid[2][5] = 'visited';
      tempGrid[1][5] = 'visited';
      tempGrid[3][5] = 'visited';
      tempGrid[4][5] = 'visited';
      setDijkstraGrid([...tempGrid]);
    }, 800);

    setTimeout(() => {
      tempGrid[2][6] = 'path';
      tempGrid[2][7] = 'path';
      tempGrid[1][4] = 'path';
      tempGrid[1][5] = 'path';
      tempGrid[2][5] = 'path';
      tempGrid[2][8] = 'end';
      setDijkstraGrid([...tempGrid]);
      setDijkstraStatus('Shortest Path Found! Cost: 7 nodes. Dijkstra solved.');
    }, 1300);
  };

  return (
    <section
      id="projects"
      className="py-24 bg-white dark:bg-[#0c0c0e] border-b border-zinc-100 dark:border-zinc-900 relative"
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
            My Work
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-sans font-extrabold text-zinc-900 dark:text-white tracking-tight"
          >
            Featured Engineering Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed"
          >
            A collection of production-grade campus systems, cross-platform mobile apps, algorithms, and microchip designs. Click "Live Demo" to play with active interactive models!
          </motion.p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center items-center gap-1.5 mb-12 bg-zinc-100/80 dark:bg-zinc-900/40 p-1 rounded-2xl border border-zinc-200/50 dark:border-zinc-800/50 max-w-lg mx-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold capitalize transition-all duration-300 relative cursor-pointer select-none ${
                filter === cat
                  ? 'text-zinc-900 dark:text-white'
                  : 'text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200'
              }`}
            >
              {filter === cat && (
                <motion.div
                  layoutId="activeProjectFilterBackground"
                  className="absolute inset-0 bg-white dark:bg-zinc-800 rounded-xl shadow-xs border border-zinc-200/50 dark:border-zinc-700/50"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat === 'iot' ? 'IoT' : cat}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col bg-zinc-50 dark:bg-[#18181B] border border-zinc-200/50 dark:border-zinc-800/80 rounded-2xl overflow-hidden group shadow-xs hover:shadow-xl hover:shadow-indigo-500/2 hover:border-indigo-500/30 dark:hover:border-indigo-500/20 transition-all duration-300 text-left"
              >
                {/* Project Image Panel */}
                <div className="relative aspect-video w-full overflow-hidden bg-zinc-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Category Pill overlay */}
                  <span className="absolute top-3 left-3 text-[10px] font-mono tracking-widest uppercase bg-zinc-950/80 text-indigo-400 border border-zinc-800 px-2 py-0.5 rounded-md font-bold">
                    {project.category}
                  </span>
                </div>

                {/* Body Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-sans font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400 text-xs leading-relaxed font-sans line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tags.slice(0, 4).map((t) => (
                      <span key={t} className="text-[10px] font-sans font-medium px-2 py-0.5 rounded-md bg-zinc-200/50 dark:bg-zinc-900/80 border border-zinc-200/20 dark:border-zinc-800/40 text-zinc-600 dark:text-zinc-400">
                        {t}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="text-[9px] font-sans px-1.5 py-0.5 rounded bg-indigo-500/10 text-indigo-400 font-bold">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Actions Bar */}
                  <div className="flex items-center justify-between pt-4 border-t border-zinc-200/30 dark:border-zinc-800/50 w-full gap-2">
                    <button
                      onClick={() => handleOpenSimulator(project)}
                      className="flex items-center gap-1 text-[11px] font-bold text-indigo-500 hover:text-indigo-600 dark:text-indigo-400 dark:hover:text-indigo-300 cursor-pointer"
                    >
                      <Play size={12} />
                      <span>Live Demo</span>
                    </button>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => handleOpenReadMore(project)}
                        className="flex items-center gap-1 text-[11px] font-bold text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200 cursor-pointer"
                      >
                        <Eye size={12} />
                        <span>Read More</span>
                      </button>

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1 rounded-lg text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900"
                        title="GitHub Code"
                      >
                        <Github size={12} />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* 1. ARCHITECTURE "READ MORE" MODAL POPUP */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="fixed inset-0 bg-black/60 backdrop-blur-md"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 shadow-2xl rounded-2xl overflow-hidden flex flex-col max-h-[85vh] text-left"
              >
                {/* Modal Title Banner */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-200 dark:border-zinc-800">
                  <div className="flex items-center gap-2">
                    <Layers className="text-indigo-500" size={18} />
                    <h3 className="font-sans font-bold text-base text-zinc-900 dark:text-white">
                      {selectedProject.title} — System Architecture
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-1 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-900 text-zinc-500 cursor-pointer"
                  >
                    <X size={18} />
                  </button>
                </div>

                {/* Modal content body */}
                <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
                  {/* Hero image preview */}
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-48 object-cover rounded-xl"
                  />

                  {/* Complete Description */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-widest">// DETAILED OVERVIEW</h4>
                    <p className="text-zinc-600 dark:text-zinc-300 text-xs sm:text-sm leading-relaxed">
                      {selectedProject.longDescription}
                    </p>
                  </div>

                  {/* Specific Core Features bullet lists */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-widest">// CORE SPECIFICATIONS</h4>
                    <ul className="space-y-2 text-xs text-zinc-600 dark:text-zinc-300">
                      {selectedProject.features.map((feat, i) => (
                        <li key={i} className="flex gap-2.5 items-start">
                          <CheckCircle size={14} className="text-indigo-500 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack components used */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-widest">// APPLIED ARCHITECTURE STACK</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((t) => (
                        <span key={t} className="px-3 py-1 rounded-lg bg-indigo-500/5 border border-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-semibold">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Modal actions footer */}
                <div className="px-6 py-4 bg-zinc-50 dark:bg-zinc-900/40 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between gap-4">
                  <button
                    onClick={() => {
                      setSelectedProject(null);
                      handleOpenSimulator(selectedProject);
                    }}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 text-white text-xs font-semibold hover:bg-indigo-500 cursor-pointer"
                  >
                    <Play size={14} />
                    <span>Launch Interactive Demo</span>
                  </button>

                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-semibold hover:bg-zinc-100 dark:hover:bg-zinc-900"
                  >
                    <Github size={14} />
                    <span>Explore Repository</span>
                  </a>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* 2. THE HIGH-END INTERACTIVE MOCK SIMULATOR MODAL */}
        <AnimatePresence>
          {simulatingProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSimulatingProject(null)}
                className="fixed inset-0 bg-black/70 backdrop-blur-md"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 30 }}
                className="relative w-full max-w-xl bg-zinc-950 border border-zinc-800 shadow-2xl rounded-2xl overflow-hidden flex flex-col max-h-[85vh]"
              >
                {/* macOS Style Browser title bar */}
                <div className="flex items-center justify-between px-5 py-3.5 bg-zinc-900 border-b border-zinc-800">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                    <span className="text-[10px] text-zinc-500 font-mono pl-3">
                      sim://{simulatingProject.id}.local
                    </span>
                  </div>
                  <button
                    onClick={() => setSimulatingProject(null)}
                    className="p-1 rounded bg-zinc-800/80 hover:bg-zinc-800 text-zinc-400 cursor-pointer"
                  >
                    <X size={14} />
                  </button>
                </div>

                {/* Simulator frame display */}
                <div className="flex-1 p-6 overflow-y-auto min-h-[350px] bg-zinc-950 text-zinc-300 font-sans">
                  
                  {/* SIMULATOR 1: Shortest Path Dijkstra Visualizer */}
                  {simulatingProject.id === 'shortest-path' && (
                    <div className="space-y-4">
                      <div className="text-left space-y-1">
                        <h4 className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-widest">
                          // DIJKSTRA GRAPH EXPLORATION ENGINE
                        </h4>
                        <p className="text-[11px] text-zinc-500">
                          {dijkstraStatus}
                        </p>
                      </div>

                      {/* Map Grid */}
                      <div className="grid grid-cols-10 gap-1 bg-zinc-900 p-2 rounded-xl border border-zinc-800">
                        {dijkstraGrid.map((row, rIdx) =>
                          row.map((cell, cIdx) => (
                            <button
                              key={`${rIdx}-${cIdx}`}
                              onClick={() => handleDijkstraCellClick(rIdx, cIdx)}
                              className={`aspect-square rounded flex items-center justify-center transition-all duration-200 cursor-pointer text-[10px] ${
                                cell === 'start'
                                  ? 'bg-emerald-500 text-white font-bold'
                                  : cell === 'end'
                                  ? 'bg-red-500 text-white font-bold'
                                  : cell === 'wall'
                                  ? 'bg-zinc-600 border border-zinc-500'
                                  : cell === 'visited'
                                  ? 'bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 animate-pulse'
                                  : cell === 'path'
                                  ? 'bg-indigo-500 text-white shadow-md shadow-indigo-500/30'
                                  : 'bg-zinc-950 border border-zinc-900 hover:bg-zinc-900'
                              }`}
                            >
                              {cell === 'start' && 'S'}
                              {cell === 'end' && 'E'}
                              {cell === 'wall' && '█'}
                            </button>
                          ))
                        )}
                      </div>

                      <div className="flex justify-between items-center pt-2">
                        <span className="text-[10px] text-zinc-500 font-mono">
                          Green: Start (S) • Red: Goal (E) • Gray: Wall Blocks
                        </span>
                        <button
                          onClick={solveDijkstra}
                          className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs tracking-wide"
                        >
                          Run Dijkstra Solver
                        </button>
                      </div>
                    </div>
                  )}

                  {/* SIMULATOR 2: IoT Home Automation */}
                  {simulatingProject.id === 'iot-home' && (
                    <div className="space-y-5">
                      <div className="text-left space-y-1">
                        <h4 className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest">
                          // ESP-32 LOCAL WEB SERVER CONSOLE
                        </h4>
                        <p className="text-[11px] text-zinc-500">
                          Secure Wi-Fi link established. Ping: 12ms. Relays operational.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {/* Thermostat Widget */}
                        <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 flex flex-col justify-between items-center">
                          <span className="text-[10px] font-mono text-zinc-500 uppercase">Temp Sensory</span>
                          <span className="text-2xl font-bold font-mono text-cyan-400 my-2">{iotTemp}°C</span>
                          <div className="flex gap-1.5 w-full">
                            <button
                              onClick={() => setIotTemp(t => t - 1)}
                              className="flex-1 py-1 rounded bg-zinc-800 hover:bg-zinc-700 text-[10px] font-bold"
                            >
                              -
                            </button>
                            <button
                              onClick={() => setIotTemp(t => t + 1)}
                              className="flex-1 py-1 rounded bg-zinc-800 hover:bg-zinc-700 text-[10px] font-bold"
                            >
                              +
                            </button>
                          </div>
                        </div>

                        {/* Living Room Relay Switch */}
                        <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 flex flex-col justify-between items-center">
                          <span className="text-[10px] font-mono text-zinc-500 uppercase">Light Relay</span>
                          <span className={`text-sm font-bold my-3 ${iotLivingLight ? 'text-amber-400 shadow-amber-500' : 'text-zinc-600'}`}>
                            {iotLivingLight ? '💡 ACTIVE' : '💤 INACTIVE'}
                          </span>
                          <button
                            onClick={() => setIotLivingLight(!iotLivingLight)}
                            className={`w-full py-2 rounded-lg font-bold text-xs tracking-wide transition-colors ${
                              iotLivingLight ? 'bg-amber-500 text-zinc-950' : 'bg-zinc-800 text-zinc-300'
                            }`}
                          >
                            Toggle Relay
                          </button>
                        </div>

                        {/* AC Fan Speed Selector */}
                        <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 flex flex-col justify-between items-center">
                          <span className="text-[10px] font-mono text-zinc-500 uppercase">AC Fan State</span>
                          <span className="text-xs font-bold my-3 text-indigo-400">{iotFanSpeed}</span>
                          <select
                            value={iotFanSpeed}
                            onChange={(e) => setIotFanSpeed(e.target.value)}
                            className="w-full py-1.5 px-2 text-[10px] bg-zinc-800 border border-zinc-700 rounded text-zinc-300 focus:outline-none"
                          >
                            <option value="Off">Off</option>
                            <option value="Low (Sleep)">Low (Sleep)</option>
                            <option value="Medium">Medium</option>
                            <option value="Maximum High">Maximum High</option>
                          </select>
                        </div>
                      </div>

                      {/* Code monitor overlay */}
                      <div className="p-3 rounded-lg bg-zinc-950 border border-zinc-900 text-left text-[9px] font-mono text-zinc-500 space-y-1">
                        <p className="text-zinc-400">// ESP-32 Compiler Serial Output:</p>
                        <p>15:18:02 [LOG] GET /api/relay/livingroom?state={iotLivingLight ? '1' : '0'} 200 OK</p>
                        <p>15:18:02 [LOG] Analog Sensor DHT11 read completed: temperature={iotTemp}C</p>
                      </div>
                    </div>
                  )}

                  {/* SIMULATOR 3: StudentHub peer marketplace */}
                  {simulatingProject.id === 'studenthub' && (
                    <div className="space-y-4 text-left">
                      <div className="flex justify-between items-center border-b border-zinc-900 pb-2">
                        <div>
                          <h4 className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-widest">
                            // StudentHub Sandbox Portal
                          </h4>
                          <p className="text-[10px] text-zinc-500">Simulate browsing university trade listings.</p>
                        </div>
                        <span className="text-xs font-mono text-emerald-400">
                          Wallet: ${marketplaceBalance}
                        </span>
                      </div>

                      {/* Market Listings */}
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          { title: 'Data Structures Book', price: 45, category: 'Books' },
                          { title: 'Scientific Calculator', price: 25, category: 'Electronics' },
                          { title: 'Wireless Keyboard', price: 35, category: 'Electronics' },
                          { title: 'Calculus Study Guides', price: 15, category: 'Books' },
                        ].map((item, idx) => {
                          const isInCart = marketplaceCart.includes(item.title);
                          return (
                            <div key={idx} className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 flex flex-col justify-between space-y-3">
                              <div>
                                <span className="text-[8px] font-mono tracking-wider uppercase text-zinc-500">
                                  {item.category}
                                </span>
                                <h5 className="text-xs font-bold text-zinc-200 mt-0.5">{item.title}</h5>
                                <p className="text-xs font-bold text-indigo-400 mt-1">${item.price}</p>
                              </div>

                              <button
                                onClick={() => {
                                  if (isInCart) {
                                    setMarketplaceCart(cart => cart.filter(c => c !== item.title));
                                    setMarketplaceBalance(b => b + item.price);
                                  } else {
                                    if (marketplaceBalance >= item.price) {
                                      setMarketplaceCart(cart => [...cart, item.title]);
                                      setMarketplaceBalance(b => b - item.price);
                                    } else {
                                      alert('Insufficient balance inside sandbox!');
                                    }
                                  }
                                }}
                                className={`w-full py-1 rounded text-[10px] font-bold ${
                                  isInCart ? 'bg-red-950 text-red-300 border border-red-900' : 'bg-indigo-600 text-white'
                                }`}
                              >
                                {isInCart ? 'Remove / Refund' : 'Purchase Item'}
                              </button>
                            </div>
                          );
                        })}
                      </div>

                      {/* Sandbox summary */}
                      <div className="p-3.5 rounded-xl bg-zinc-900/40 border border-zinc-800 text-xs text-zinc-400 flex items-center justify-between">
                        <span>Cart: <strong>{marketplaceCart.length}</strong> items purchased</span>
                        <span className="text-[10px] text-zinc-500 font-mono">Sandbox auto-resets on exit</span>
                      </div>
                    </div>
                  )}

                  {/* SIMULATOR 4: Decision Making App */}
                  {simulatingProject.id === 'decision-app' && (
                    <div className="space-y-4 text-left">
                      <div className="border-b border-zinc-900 pb-2">
                        <h4 className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-widest">
                          // FLUTTER SCREEN EMULATION: CHOICE MODULE
                        </h4>
                        <p className="text-[10px] text-zinc-500">Helping children weigh moral decisions logically.</p>
                      </div>

                      {decisionStep === 0 && (
                        <div className="space-y-4">
                          <p className="text-sm font-semibold text-zinc-200">
                            Scenario 1: You find a lost watch in the university playground. What do you do?
                          </p>
                          <div className="space-y-2.5">
                            <button
                              onClick={() => {
                                setDecisionStep(1);
                                setDecisionPoints(10);
                              }}
                              className="w-full p-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-xs text-left"
                            >
                              💼 Hand it in to the Campus Administrator's Lost &amp; Found department immediately.
                            </button>
                            <button
                              onClick={() => {
                                setDecisionStep(2);
                                setDecisionPoints(2);
                              }}
                              className="w-full p-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-xs text-left"
                            >
                              🎁 Keep it. Since nobody is around, it counts as a free present.
                            </button>
                          </div>
                        </div>
                      )}

                      {decisionStep === 1 && (
                        <div className="space-y-4">
                          <p className="text-sm font-semibold text-emerald-400">
                            Excellent Decision! (+10 points)
                          </p>
                          <p className="text-xs text-zinc-400 leading-relaxed">
                            By returning the watch to the admin counter, you showed high honesty and civic duty. The owner came back 10 minutes later and was thrilled to retrieve their watch!
                          </p>
                          <button
                            onClick={() => setDecisionStep(0)}
                            className="px-4 py-2 rounded bg-indigo-600 text-white text-xs font-semibold"
                          >
                            Restart Scenario
                          </button>
                        </div>
                      )}

                      {decisionStep === 2 && (
                        <div className="space-y-4">
                          <p className="text-sm font-semibold text-red-400">
                            Poor Choice! (+2 points)
                          </p>
                          <p className="text-xs text-zinc-400 leading-relaxed">
                            Keeping items belonging to others without searching for the owner damages trust. What if the watch was a special family heirloom that they are crying about?
                          </p>
                          <button
                            onClick={() => setDecisionStep(0)}
                            className="px-4 py-2 rounded bg-indigo-600 text-white text-xs font-semibold"
                          >
                            Try Again
                          </button>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Fallback for other files */}
                  {(simulatingProject.id === 'transport-system' || simulatingProject.id === 'courier-management') && (
                    <div className="space-y-4 text-center py-8">
                      <div className="p-3.5 rounded-full bg-indigo-500/10 text-indigo-400 inline-block">
                        <Laptop size={32} />
                      </div>
                      <h4 className="text-sm font-bold text-zinc-200">Simulating Desktop Management Interface</h4>
                      <p className="text-xs text-zinc-400 max-w-sm mx-auto">
                        This Java/Oracle/PHP portal compiles SQL registers dynamically on dispatch registers. Database transactions require localized host queries. Run the system directly or view raw schemas inside GitHub!
                      </p>
                      <a
                        href={simulatingProject.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded bg-indigo-600 text-white text-xs font-semibold mt-2"
                      >
                        <Github size={14} />
                        <span>View Source Code on GitHub</span>
                      </a>
                    </div>
                  )}

                </div>

                {/* macOS Style footer status */}
                <div className="px-5 py-3 bg-zinc-900 border-t border-zinc-800 flex items-center justify-between text-[9px] text-zinc-500 font-mono">
                  <span>SANDBOX COMPILER v1.2</span>
                  <span>CPU: 4% • MEM: 18MB</span>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
