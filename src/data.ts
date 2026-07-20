import { Project, Skill, Experience, Education, Service, WhyHire, Testimonial, Certification } from './types';

export const AVATAR_IMAGE = 'src/assets/images/zunaira_avatar_1784287165715.jpg';

export const STATS = [
  { value: '18+', label: 'Projects Completed', description: 'Web, Flutter & IoT' },
  { value: '15+', label: 'Technologies', description: 'Full stack development' },
  { value: '10+', label: 'Certifications', description: 'Google, IBM & others' },
  { value: '3.5', label: 'University CGPA', description: 'Academic excellence' },
  { value: '4+', label: 'Years Coding', description: 'Passionate learning' },
];

export const SKILLS: Skill[] = [
  // Frontend
  { name: 'React', level: 90, category: 'Frontend' },
  { name: 'Next.js', level: 85, category: 'Frontend' },
  { name: 'Tailwind CSS', level: 95, category: 'Frontend' },
  { name: 'HTML5/CSS3', level: 95, category: 'Frontend' },
  { name: 'JavaScript (ES6+)', level: 90, category: 'Frontend' },
  { name: 'Bootstrap', level: 85, category: 'Frontend' },

  // Backend
  { name: 'Supabase', level: 85, category: 'Backend' },
  { name: 'Firebase', level: 85, category: 'Backend' },
  { name: 'PHP', level: 80, category: 'Backend' },
  { name: 'Node.js', level: 75, category: 'Backend' },

  // Databases
  { name: 'SQL', level: 85, category: 'Databases' },
  { name: 'MySQL', level: 85, category: 'Databases' },
  { name: 'Oracle Database', level: 80, category: 'Databases' },
  { name: 'Firestore', level: 85, category: 'Databases' },

  // Programming
  { name: 'C++', level: 85, category: 'Programming' },
  { name: 'Python', level: 80, category: 'Programming' },
  { name: 'Dart', level: 85, category: 'Programming' },
  { name: 'Flutter', level: 90, category: 'Programming' },

  // Tools
  { name: 'Git & GitHub', level: 90, category: 'Tools' },
  { name: 'VS Code', level: 95, category: 'Tools' },
  { name: 'Figma', level: 80, category: 'Tools' },
  { name: 'XAMPP', level: 85, category: 'Tools' },
  { name: 'Oracle SQL Developer', level: 80, category: 'Tools' },
  { name: 'ESP-32 (IoT)', level: 75, category: 'Tools' },
];

export const PROJECTS: Project[] = [
  {
    id: 'studenthub',
    title: 'StudentHub',
    description: 'A premium peer-to-peer campus marketplace facilitating safe transactions, listing management, and analytics.',
    category: 'web',
    tags: ['React', 'Tailwind', 'Supabase', 'Bootstrap', 'JavaScript'],
    features: [
      'Comprehensive Seller Dashboard for item listings, pricing, and availability management.',
      'Intuitive Buyer Interface with smart filters, category browsing, and instant search.',
      'Robust Supabase Authentication & Real-time Database integration.',
      'Built-in analytics showing views, inquiries, and popular listings.',
      'Responsive, modern, glassmorphic UI tailored for mobile & desktop campus users.'
    ],
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
    demoUrl: '#demo',
    githubUrl: 'https://github.com/zunairatariq985/StudentHub',
    longDescription: 'StudentHub redefines how college students buy, sell, and trade books, electronics, and dorm essentials. By matching a clean, high-performance web interface styled with Tailwind and Bootstrap to a secure Supabase backend, StudentHub handles real-time listings, buyer-seller messaging, and item views analytics. The platform bridges the trust gap inside the university community, offering student-only secure email signups and verified listings.'
  },
  {
    id: 'decision-app',
    title: 'Decision Making App',
    description: 'An interactive mobile application designed to help children evaluate scenarios and improve daily decision-making skills.',
    category: 'mobile',
    tags: ['Flutter', 'Dart', 'Mobile UX', 'Educational Tech'],
    features: [
      'Dynamic educational scenario pathways that adapt based on previous user answers.',
      'Immersive daily life modules (school, home, social) teaching critical choice evaluation.',
      'Colorful, highly interactive gamified interface with custom sound effects & animations.',
      'Offline-first architecture storing child progression state locally.',
      'Parent dashboard to track choices, improvement rates, and logical reasoning scores.'
    ],
    image: 'https://images.unsplash.com/photo-1484662021336-7d45049dfd4f?auto=format&fit=crop&w=800&q=80',
    demoUrl: '#demo',
    githubUrl: 'https://github.com/zunairatariq985/decision-making-app',
    longDescription: 'Developed as a specialized educational aid, this Flutter-based application guides young learners through animated real-life dilemmas (e.g., managing a budget, sharing, handling conflict). By utilizing a branching state-tree, the application teaches children the direct consequences of actions in a fun, pressure-free environment, promoting cognitive maturity and confidence.'
  },
  {
    id: 'transport-system',
    title: 'University Transport Management System',
    description: 'A full-stack tracking and scheduling platform for campus shuttle networks, reducing student wait times.',
    category: 'web',
    tags: ['PHP', 'MySQL', 'Admin Dashboard', 'AJAX', 'Bootstrap'],
    features: [
      'Dynamic scheduling panel updating route timings and shuttle assignments live.',
      'Interactive student panel to locate active shuttle routes and view dynamic ETA updates.',
      'Comprehensive Admin Panel with driver rosters, vehicle logs, and feedback loops.',
      'Role-based access controls protecting administrative, driver, and student directories.',
      'Performance analytics measuring schedule adherence and passenger loads.'
    ],
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80',
    demoUrl: '#demo',
    githubUrl: 'https://github.com/zunairatariq985/TransportManagement',
    longDescription: 'A classic, robust PHP & MySQL enterprise application built to optimize campus transport. By digitalizing driver lists, bus rotas, and student feedback, this system replaced slow manual scheduling. Students get transparency on departure timetables, while fleet managers can log fuel consumption, maintenance, and route delays.'
  },
  {
    id: 'shortest-path',
    title: 'Shortest Path Visualizer',
    description: 'An educational visualizer graphing search algorithms (Dijkstra) across customized, interactive maps.',
    category: 'other',
    tags: ['Python', 'Dijkstra', 'Graph Theory', 'Tkinter', 'Matplotlib'],
    features: [
      'Interactive map canvas allowing users to draw nodes, edges, and roadblocks in real time.',
      'Step-by-step algorithmic speed throttle showing node exploration and distance relaxation.',
      'Accurate pathfinding using Dijkstra, explaining visual cost calculations clearly.',
      'Instant metrics displaying final path weight, explored nodes, and total execution time.',
      'Preloaded presets of famous city grids for immediate visualization experiments.'
    ],
    image: 'https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8?auto=format&fit=crop&w=800&q=80',
    demoUrl: '#demo',
    githubUrl: 'https://github.com/zunairatariq985/ShortestPathVisualizer',
    longDescription: 'This tool makes abstract computer science graph theory tactile and understandable. Built with Python, users can click to set "Start" and "End" nodes, block off areas with mouse strokes to construct maze obstacles, and watch the algorithm "flood fill" search directions until the absolute shortest route is computed.'
  },
  {
    id: 'courier-management',
    title: 'Courier Management System',
    description: 'A modern desktop tracking utility with rich GUI interfaces, structured transaction registers, and status logs.',
    category: 'desktop',
    tags: ['Java', 'Oracle Database', 'JavaFX', 'JDBC', 'SQL Developer'],
    features: [
      'Interactive dispatch register tracking package sender, recipient, weight, and price.',
      'Real-time courier status updating (Dispatched, In-Transit, Delivered, Delayed).',
      'Secure Oracle SQL connection layer managing transaction logs safely.',
      'Robust receipt compiler outputting printable invoice slips automatically.',
      'Data validations preventing negative weight logs or invalid recipient fields.'
    ],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
    demoUrl: '#demo',
    githubUrl: 'https://github.com/zunairatariq985/CourierManagement',
    longDescription: 'Combining JavaFX desktop designs with enterprise Oracle SQL Database triggers, this courier portal handles high-throughput operations for logistics firms. Features automatic shipping fee calculations based on package weights, real-time driver dispatcher assignments, and transactional tables with primary/foreign key consistency.'
  },
  {
    id: 'iot-home',
    title: 'IoT Home Automation Platform',
    description: 'An embedded systems project deploying smart relays, sensors, and remote web control for physical appliances.',
    category: 'iot',
    tags: ['ESP32', 'C++', 'Sensors', 'Web Sockets', 'IoT Cloud'],
    features: [
      'Microcontroller code interfacing temperature (DHT11), motion (PIR), and relay switches.',
      'Lightweight local HTTP web server compiled directly onto the ESP32 chip.',
      'Real-time web control dashboard accessible from any phone or computer on the local network.',
      'Automated fallback conditions trigger physical alarm lights when thresholds breach.',
      'Ultra-low power sleep cycles optimizing battery durability on standalone nodes.'
    ],
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80',
    demoUrl: '#demo',
    githubUrl: 'https://github.com/zunairatariq985/IoTHomeAutomation',
    longDescription: 'Bridging software and physical hardware, this automation suite runs on the ESP-32 SoC. Users can command light fixtures, monitor micro-climates, and inspect motion detection alerts. The system connects over secure Wi-Fi, using responsive AJAX loops on the local panel for instant appliance switching without delay.'
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'freelance-dev',
    role: 'Freelance Web Developer',
    company: 'Self-Employed (Local Businesses & Global Clients)',
    duration: 'Sep 2024 - Present',
    description: 'Empowering local merchants, startups, and remote clients with modern web storefronts and digital workflows.',
    bulletPoints: [
      'Designed and coded responsive business websites using React and Tailwind CSS, increasing client customer retention rates by an average of 40%.',
      'Built custom landing pages optimized for fast performance, responsive layout, and clean typography.',
      'Consulted directly with small business stakeholders to audit UX flows, streamlining checkout funnels and driving higher visitor conversions.',
      'Integrated lightweight content management and serverless databases like Supabase to give clients autonomous control of their inventories.',
      'Secured and optimized legacy PHP/MySQL portals, patching SQL injection gaps and boosting server response speeds by 30%.'
    ]
  }
];

export const EDUCATIONS: Education[] = [
  {
    id: 'bcs',
    degree: 'Bachelor of Computer Science',
    institution: 'Fatima Jinnah Women University (FJWU)',
    duration: '2022 - 2026',
    grade: 'CGPA 3.5 / 4.00',
    details: 'Specializing in software architecture, database management, and interactive application design. Engaged as a top-performing student, leading academic project teams and mentoring peers.'
  },
  {
    id: 'fsc',
    degree: 'FSc Pre-Engineering',
    institution: 'Punjab Group of Colleges',
    duration: '2020 - 2022',
    details: 'Graduated with high honors, mastering core physics, advanced calculus, and structural mechanics, establishing a rigorous logical framework.'
  },
  {
    id: 'matric',
    degree: 'Matriculation (Science)',
    institution: 'Army Public School',
    duration: '2018 - 2020',
    details: 'Solidified early training in mathematics, physics, computer fundamentals, and scientific inquiry with exceptional grades.'
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'google-analytics',
    title: 'Google Data Analytics Professional Certificate',
    issuer: 'Google (Coursera)',
    date: '2025',
    iconName: 'BarChart3',
    credentialUrl: 'https://coursera.org/verify/google-analytics'
  },
  {
    id: 'prompt-engineering',
    title: 'ChatGPT Prompt Engineering for Developers',
    issuer: 'DeepLearning.AI',
    date: '2024',
    iconName: 'Sparkles',
    credentialUrl: 'https://deeplearning.ai/prompt-engineering'
  }
];

export const SERVICES: Service[] = [
  {
    id: 'web-dev',
    title: 'Full-Stack Web Development',
    description: 'End-to-end engineered web platforms utilizing React, Next.js, PHP, or Supabase. Clean, scalable, fast-loading, and responsive.',
    iconName: 'Code'
  },
  {
    id: 'flutter-apps',
    title: 'Flutter Cross-Platform Mobile Apps',
    description: 'Native-feel iOS and Android applications written in Dart with unified state systems, fast transitions, and interactive modules.',
    iconName: 'Smartphone'
  },
  {
    id: 'landing-pages',
    title: 'High-Conversion Landing Pages',
    description: 'Custom, pixel-perfect layouts designed to capture attention and direct visitors to a clear call to action, perfect for products or services.',
    iconName: 'Layers'
  },
  {
    id: 'dashboard-dev',
    title: 'SaaS & Dashboard Architecture',
    description: 'Bespoke administrative consoles integrating analytical charts, database management pipelines, role permissions, and metrics.',
    iconName: 'LayoutDashboard'
  },
  {
    id: 'ui-ux',
    title: 'Interactive UI/UX Prototyping',
    description: 'High-fidelity layouts inside Figma translated directly into accessible code. Micro-interactions and grid rhythm built right in.',
    iconName: 'Palette'
  },
  {
    id: 'business-portals',
    title: 'Business Websites & Brand Systems',
    description: 'Polished portfolio systems, transport logs, and scheduling tools helping brick-and-mortar operations digitize safely.',
    iconName: 'Globe'
  }
];

export const WHY_HIRE_ME: WhyHire[] = [
  {
    id: 'fast-learner',
    title: 'Rapid Tech Adoption',
    description: 'A relentless self-starter. Able to pick up any framework, API, or language in days to execute project deliverables immediately.',
    iconName: 'Zap'
  },
  {
    id: 'problem-solver',
    title: 'CS First-Principles Thinker',
    description: 'Armed with strong algorithmic bases (C++, Dijkstra, SQL queries). I design clean system boundaries, not just cosmetic patches.',
    iconName: 'Brain'
  },
  {
    id: 'responsive',
    title: 'Frictionless Responsiveness',
    description: 'Pixel-perfect alignment on everything from tiny iPhone screens up to ultra-wide desktop monitors. Responsive flow is never an afterthought.',
    iconName: 'MonitorSmartphone'
  },
  {
    id: 'clean-code',
    title: 'Self-Documenting Code',
    description: 'Semantic tags, reusable React components, and TypeScript static validation. My codebases are built for handovers and expansion.',
    iconName: 'Settings'
  },
  {
    id: 'client-focus',
    title: 'Client-Centric Mindset',
    description: 'Every button, spacing, and loading bar is optimized for the visitor, transforming simple page views into high-value clicks.',
    iconName: 'Target'
  },
  {
    id: 'communication',
    title: 'Crisp & Timely Communication',
    description: 'Clear expectations, transparent project status reporting, and direct alignment. Collaborations are smooth, direct, and zero-stress.',
    iconName: 'MessageSquareText'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Asim Siddiqui',
    role: 'Founder & CEO',
    company: 'Siddiqui Digital Solutions',
    content: 'Zunaira delivered our business portal ahead of schedule. Her attention to detail and ability to turn our basic ideas into a modern, fast, responsive web interface was outstanding. Conversions on our services grew by 35% in the first month!',
    stars: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80'
  },
  {
    id: 't2',
    name: 'Dr. Maria Khan',
    role: 'Project Supervisor',
    company: 'Academic Tech Lab',
    content: 'In university, Zunaira stands out as a natural leader. Her shortest path visualizer and StudentHub projects showcased code organization, algorithmic capability, and UX polish that surpassed expectations for an undergraduate student.',
    stars: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80'
  },
  {
    id: 't3',
    name: 'Sanaullah Malik',
    role: 'Co-Founder',
    company: 'Apex Logistics Services',
    content: 'We contracted Zunaira to audit our booking flows. She not only spotted key inefficiencies but rebuilt the system with a sleek glassmorphic landing page. She communicates brilliantly, takes feedback constructively, and executes with rigor.',
    stars: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80'
  }
];
