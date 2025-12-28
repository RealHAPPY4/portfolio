import React, { useState, useEffect, useRef } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  ExternalLink, 
  Cpu, 
  Code, 
  Layers, 
  Zap,
  Menu,
  X,
  BookOpen,
  Award,
  Briefcase,
  User,
  Send,
  ChevronRight,
  Terminal,
  Activity,
  Download,
  ChevronDown,
  ChevronUp,
  MapPin
} from 'lucide-react';

// --- Data ---

const profile = {
  name: "Saptarshi Banerjee",
  role: "Electronics & Communication Engineer",
  tagline: "Architecting the future with Robotics, Industrial Automation, and FPGA Design.",
  email: "saptarshi.bnj@gmail.com",
  phone: "+91 6291693915",
  linkedin: "https://www.linkedin.com/in/saptarshi-banerjee-012b13285",
  github: "https://github.com/RealHAPPY4",
  location: "Kolkata, India",
  about: "I am an Electronics and Communication Engineering student passionate about robotics and industrial automation, with strong expertise in EDA tools, embedded systems, and circuit simulation. Skilled in FPGA prototyping, PCB design, and automation projects, I combine technical know-how with hands-on problem solving to build efficient hardware-software systems."
};

const experience = [
  {
    company: "Kolkata Metro Railway",
    role: "Intern - Telecom & Signaling",
    period: "June 2025 - July 2025",
    description: "Worked on metro signaling and telecommunication systems, studying relays, gears, and key components while understanding their coordination in large-scale railway control. Gained practical exposure to real-time fault detection, system reliability, and operational behavior across interconnected subsystems."
  },
  {
    company: "Jadavpur University",
    role: "Intern - VLSI/EDA Design Lab",
    period: "May 2024 - June 2024",
    description: "Created reusable FPGA/VLSI libraries and strengthened skills in circuit design, EDA workflows, and collaborative chip-design practices. Improved productivity in design, simulation, and debugging by working with FPGA tools, reusable modules, and structured verification flows."
  }
];

const projects = [
  {
    title: "Solenoid-Powered V8 Engine",
    category: "Simulation / Robotics",
    year: "2025",
    description: "Developed an electromechanical V8 engine model in Fusion 360 using solenoid actuation and multivibrator logic to simulate realistic piston-crankshaft dynamics. Published at IEEE Xplore.",
    tech: ["Fusion 360", "Solenoids", "Multivibrator Logic"],
    color: "from-cyan-500 to-blue-500"
  },
  {
    title: "Ultra-Fast Settling Bit Synchronizer",
    category: "FPGA / Verilog",
    year: "2025",
    description: "Designed a high-speed Verilog-based bit synchronizer optimized for asynchronous clock domains, achieving reduced settling time and improved timing reliability on FPGA platforms. Published at IEEE Xplore.",
    tech: ["Verilog", "FPGA", "Timing Optimization"],
    color: "from-pink-500 to-rose-500"
  },
  {
    title: "AI-Driven ICU Emergency Protocols",
    category: "IoT / AI",
    year: "2025",
    description: "Built an edge-AI framework for generating patient-specific emergency response protocols, integrating MQTT for low-latency communication and real-time visualization. Published at IEEE Xplore.",
    link: "https://github.com/RealHAPPY4/impunity-protocol-sim",
    tech: ["Edge AI", "MQTT", "Streamlit"],
    color: "from-violet-500 to-purple-500"
  },
  {
    title: "3D EM/MPM Simulation",
    category: "Simulation / Medical",
    year: "2025",
    description: "Developed an FPGA-accelerated EM/MPM-based multiphysics simulation framework integrated with MATLAB to enable accurate medical image segmentation, specifically targeting cancer cell detection. Published at IEEE Xplore.",
    tech: ["FPGA", "MATLAB", "EM/MPM"],
    color: "from-indigo-500 to-blue-600"
  },
  {
    title: "Financial Forecasting LLMs",
    category: "AI / Finance",
    year: "2025",
    description: "Conducted a comparative study on LLMs (ChatGPT, Claude, Grok) for stock prediction and financial interpretation, evaluating accuracy and hallucination rates. Published at IEEE Xplore.",
    tech: ["LLMs", "Data Analysis", "Financial Modeling"],
    color: "from-emerald-500 to-teal-500"
  },
  {
    title: "2-Axis Portable CNC Plotter",
    category: "Robotics",
    year: "2023",
    description: "Created a low-cost CNC plotter using stepper motors and microcontroller-based G-code interpretation for precise 2D vector drawing.",
    tech: ["Microcontrollers", "G-Code", "Motors"],
    color: "from-orange-500 to-amber-500"
  }
];

const skills = [
  { 
    name: "Robotics & Automation", 
    items: ["PLC Programming", "Sensor-Actuator Systems", "PID Control", "SCADA (Basics)", "Industrial Tool Handling", "Motion Control", "IoT Systems", "Arduino/MCU", "Drone Analytics", "Raspberry Pi Prototyping"], 
    icon: Cpu 
  },
  { 
    name: "EDA & Simulation", 
    items: ["MATLAB", "Simulink (Basics)", "CST Studio Suite", "Proteus", "LTSpice", "Circuit Simulation", "PCB Design"], 
    icon: Activity 
  },
  { 
    name: "FPGA & Prototyping", 
    items: ["Vivado", "Quartus", "RTL Basics", "FPGA Prototyping", "Debugging", "Chip Design Workflows"], 
    icon: Layers 
  },
  { 
    name: "3D Design & Modeling", 
    items: ["Fusion 360", "Blender", "Electromechanical Design", "3D EM/MPM Simulation"], 
    icon: Layers 
  },
  { 
    name: "Programming & Core", 
    items: ["Python", "Core Java (Basics)", "MySQL (Basics)", "Multidisciplinary Collaboration", "Rapid Prototyping"], 
    icon: Terminal 
  }
];

const education = [
  {
    inst: "Institute of Engineering and Management",
    degree: "B.Tech in ECE",
    year: "2022 - 2026",
    score: "GPA: 8.26"
  },
  {
    inst: "Hariyana Vidya Mandir",
    degree: "Class 12 (CBSE)",
    year: "2021",
    score: "78.8%"
  },
  {
    inst: "Hariyana Vidya Mandir",
    degree: "Class 10 (CBSE)",
    year: "2019",
    score: "90%"
  }
];

const publications = [
  { title: "FPGA-Based 3D EM/MPM Simulation Framework for Medical Image Segmentation Applications", status: "Published at IEEE Xplore, 2025", link: "https://ieeexplore.ieee.org/document/10959571" },
  { title: "Optimized FPGA-Based Simulation Framework for Efficient Image Data Processing", status: "On print for IEEE, 2026" },
  { title: "Electromechanical Simulation and 3D Visualization of a Solenoid-Powered V8 Engine", status: "On print for IEEE, 2026" },
  { title: "Context-Aware MQTT Framework for Autonomous Medical Actuation in Emergency Scenarios", status: "On print for IEEE, 2026" },
  { title: "Large Language Models in the Market: A Study on Financial Forecasting and Stock Interpretation", status: "On print for IEEE, 2026" },
  { title: "Expectations-Driven Inflation in India: Reconstructing the Phillips Curve through Artificial Intelligence", status: "On print for IEEE, 2026" },
  { title: "Dynamic Budgeting with AI: Balancing Health Outcomes and Inflation", status: "On print for IEEE, 2026" },
  { title: "Breaking Development Traps: Synthetic Household Simulations for Poverty Alleviation in Rural West Bengal", status: "On print for IEEE, 2026" },
  { title: "District-Level Economic Forecasting in West Bengal using a Proxy-Enhanced Cobb–Douglas Framework", status: "On print for IEEE, 2026" }
];

const certifications = [
  "Robotics Engineering & Applications - L&T EduTech",
  "Microsoft AI Product Manager - Microsoft",
  "Overview of Automotive SPICE - EDUCBA",
  "Interfacing with the Raspberry Pi - Univ. of California, Irvine",
  "Product Design and UX/UI Fundamentals - Microsoft",
  "Product Launch and Post-Launch Management - Microsoft",
  "Prompt Engineering for ChatGPT - Vanderbilt University",
  "Product Strategy and Roadmapping - Microsoft",
  "3D Modeling for 3D Printing and Laser Cutting on Fusion 360 - Packt",
  "Cadence Design Systems: Essential Guide - Coursera",
  "Enterprise Product Management Fundamentals - Microsoft",
  "Fundamentals of Digital Design for VLSI Chip Design - L&T EduTech",
  "Fundamentals of Robotics & Industrial Automation - L&T EduTech",
  "Introduction to Networking - NVIDIA",
  "Market Research and Competitive Analysis - Microsoft",
  "Motors and Motor Control Circuits - Univ. of Colorado Boulder",
  "Sensors and Sensor Circuit Design - Univ. of Colorado Boulder",
  "VLSI Chip Design and Simulation with Electric VLSI EDA Tool - L&T EduTech"
];

// --- Specialized Components ---

// 1. Mouse-Tracking Spotlight Card
const SpotlightCard = ({ children, className = "", spotlightColor = "rgba(6, 182, 212, 0.25)" }) => {
  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative rounded-2xl border border-white/10 bg-black overflow-hidden ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 40%)`,
        }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  );
};

// 2. Glitch Text Effect (Always Active)
const GlitchText = ({ text }) => {
  return (
    <div className="relative inline-block">
      <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
        {text}
      </span>
      <span className="absolute top-0 left-0 -z-10 w-full h-full text-cyan-400 opacity-40 animate-pulse translate-x-[2px] blur-[1px]">
        {text}
      </span>
      <span className="absolute top-0 left-0 -z-10 w-full h-full text-pink-500 opacity-40 animate-pulse delay-75 -translate-x-[2px] blur-[1px]">
        {text}
      </span>
    </div>
  );
};

// 3. Dynamic Background
const AnimatedBackground = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none -z-20">
    <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-900/20 rounded-full blur-[120px] animate-blob" />
    <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] bg-cyan-900/20 rounded-full blur-[120px] animate-blob animation-delay-2000" />
    <div className="absolute bottom-[-20%] left-[20%] w-[50%] h-[50%] bg-blue-900/20 rounded-full blur-[120px] animate-blob animation-delay-4000" />
    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
  </div>
);

// 4. Reveal on Scroll (Unchanged)
const RevealOnScroll = ({ children, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => { if (ref.current) observer.unobserve(ref.current); };
  }, []);

  return (
    <div ref={ref} className={`transition-all duration-1000 transform ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"} ${className}`}>
      {children}
    </div>
  );
};

const SectionHeading = ({ children, icon: Icon }) => (
  <div className="flex items-center gap-4 mb-12">
    <div className="relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg blur opacity-40"></div>
        <div className="relative p-3 rounded-lg bg-black border border-white/10 text-white">
            {Icon && <Icon size={28} />}
        </div>
    </div>
    <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
      {children}
    </h2>
  </div>
);

const NavLink = ({ href, children, onClick }) => (
  <a href={href} onClick={onClick} className="relative px-2 py-1 text-sm font-medium text-slate-400 hover:text-white transition-colors duration-300 group uppercase tracking-wider">
    {children}
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
  </a>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showAllCerts, setShowAllCerts] = useState(false);

  return (
    <div className="min-h-screen bg-black text-slate-300 font-sans selection:bg-cyan-500/30 overflow-x-hidden">
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob { animation: blob 10s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>

      <AnimatedBackground />

      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-black/50 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#home" className="text-2xl font-black tracking-tighter flex items-center gap-2 group">
            <Cpu className="text-cyan-400 group-hover:rotate-180 transition-transform duration-700" size={28} />
            <span className="text-white">SB<span className="text-cyan-500">.</span></span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {['About', 'Experience', 'Projects', 'Skills', 'Publications', 'Contact'].map((item) => (
              <NavLink key={item} href={`#${item.toLowerCase()}`}>{item}</NavLink>
            ))}
            <a href="/CVEDITED.pdf" download className="px-6 py-2.5 bg-white text-black font-bold text-sm rounded-full transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] flex items-center gap-2">
              <Download size={16} /> Resume
            </a>
          </div>

          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black border-b border-white/10 p-6 flex flex-col gap-6 absolute w-full backdrop-blur-xl z-50">
            {['About', 'Experience', 'Projects', 'Skills', 'Publications', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsMenuOpen(false)} className="text-slate-400 hover:text-white text-xl font-bold tracking-tight">
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center pt-20 relative px-6">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
          <RevealOnScroll className="space-y-8 relative z-10">
             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-950/30 border border-cyan-500/30 text-cyan-400 text-xs font-bold tracking-[0.2em] uppercase mb-4 animate-fade-in-up">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              System Architect
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.9]">
              Saptarshi <br />
              <GlitchText text="Banerjee" />
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-400 max-w-lg leading-relaxed font-light">
              Architecting the future with <span className="text-white font-medium">Robotics</span>, <span className="text-white font-medium">Industrial Automation</span>, and <span className="text-white font-medium">FPGA Design</span>.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#contact" className="px-8 py-4 bg-white text-black font-bold rounded-lg transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] flex items-center gap-2">
                Contact Me <ChevronRight size={18} />
              </a>
              <div className="flex gap-4">
                {[
                  { icon: Github, link: profile.github },
                  { icon: Linkedin, link: profile.linkedin }
                ].map((social, i) => (
                  <a key={i} href={social.link} target="_blank" rel="noreferrer" className="p-4 bg-white/5 text-white rounded-lg border border-white/10 transition-all shadow-[0_0_15px_rgba(6,182,212,0.15)] hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] hover:border-cyan-400 hover:text-cyan-400 hover:scale-110">
                    <social.icon size={24} />
                  </a>
                ))}
              </div>
            </div>
          </RevealOnScroll>

          {/* Hero Visual */}
          <RevealOnScroll className="relative hidden lg:block">
             <SpotlightCard className="p-8 backdrop-blur-xl bg-black/40">
                <div className="flex justify-between items-start mb-12">
                   <div className="p-4 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl border border-white/10">
                      <Zap size={32} className="text-cyan-400" />
                   </div>
                   <div className="text-right">
                       {/* System Status Removed */}
                   </div>
                </div>

                <div className="space-y-6">
                    {[
                        { label: "Research Papers", val: "5+", color: "bg-purple-500" },
                        { label: "Major Projects", val: "6+", color: "bg-cyan-500" },
                        { label: "CGPA Performance", val: "8.26", color: "bg-pink-500" }
                    ].map((stat, idx) => (
                        <div key={idx} className="space-y-2">
                            <div className="flex justify-between text-sm font-medium text-slate-400">
                                <span>{stat.label}</span>
                                <span className="text-white">{stat.val}</span>
                            </div>
                            {/* Logic to only show progress bar for CGPA */}
                            {stat.label === "CGPA Performance" ? (
                                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                                    <div className={`h-full ${stat.color} w-full animate-pulse shadow-[0_0_10px_rgba(236,72,153,0.5)]`} style={{ width: `82%` }}></div>
                                </div>
                            ) : (
                                <div className="h-px bg-white/10 w-full mt-2"></div>
                            )}
                        </div>
                    ))}
                </div>
                
                <div className="mt-8 pt-8 border-t border-white/10 flex justify-between items-center">
                    <div className="text-xs font-mono text-slate-500">EST. 2026</div>
                    <Cpu size={20} className="text-slate-600" />
                </div>
             </SpotlightCard>
          </RevealOnScroll>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative">
        <div className="max-w-6xl mx-auto px-6">
          <RevealOnScroll>
            <SectionHeading icon={User}>About Me</SectionHeading>
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div className="text-lg text-slate-300 leading-loose">
                 <p className="mb-6">
                   <span className="text-5xl font-black text-white float-left mr-4 -mt-2">I</span>
                   {profile.about}
                 </p>
                 <div className="flex items-center gap-4 p-4 bg-cyan-900/10 border-l-4 border-cyan-500 rounded-r-xl">
                    <Terminal size={24} className="text-cyan-400 flex-shrink-0" />
                    <p className="text-cyan-100 italic text-sm">
                      "Combining hardware precision with software intelligence to solve real-world problems."
                    </p>
                 </div>
              </div>

              <div className="space-y-6">
                <SpotlightCard className="p-8 bg-neutral-900/40">
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                    <Award className="text-yellow-400" size={24} /> Education
                  </h3>
                  <div className="space-y-8">
                    {education.map((edu, idx) => (
                      <div key={idx} className="relative pl-8 border-l border-white/10 last:pb-0 group">
                        <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-cyan-500 group-hover:scale-150 transition-transform shadow-[0_0_10px_#06b6d4]"></div>
                        <h4 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">{edu.degree}</h4>
                        <p className="text-slate-400 font-medium text-sm mb-1">{edu.inst}</p>
                        <div className="flex justify-between text-xs text-slate-500 font-mono mt-2">
                          <span>{edu.year}</span>
                          <span className="text-cyan-500/80">{edu.score}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </SpotlightCard>
                
                 {/* Certifications Block */}
                <SpotlightCard className="p-6 bg-neutral-900/40">
                   <div className="flex justify-between items-center mb-6 border-b border-white/5 pb-4">
                      <h3 className="text-lg font-bold text-white">Certifications</h3>
                      <span className="text-xs bg-white/10 px-2 py-1 rounded text-cyan-400">{certifications.length} Total</span>
                   </div>
                   
                   <ul className="space-y-4">
                      {(showAllCerts ? certifications : certifications.slice(0, 3)).map((cert, i) => (
                         <li key={i} className="flex gap-3 items-start text-sm group">
                            <span className="text-cyan-500 mt-0.5">▸</span> 
                            <span className="text-slate-300 group-hover:text-white transition-colors">{cert}</span>
                         </li>
                      ))}
                   </ul>
                   
                   <button 
                    onClick={() => setShowAllCerts(!showAllCerts)}
                    className="mt-6 w-full py-3 bg-white/5 hover:bg-white/10 rounded-xl text-cyan-400 text-sm font-bold transition-all flex items-center justify-center gap-2 hover:tracking-wide"
                   >
                     {showAllCerts ? (
                       <>Show Less <ChevronUp size={16} /></>
                     ) : (
                       <>Read {certifications.length - 3}+ more... <ChevronDown size={16} /></>
                     )}
                   </button>
                </SpotlightCard>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Projects Section - The "Spotlight" Showcase */}
      <section id="projects" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <RevealOnScroll>
            <SectionHeading icon={Code}>Projects</SectionHeading>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, idx) => (
                <SpotlightCard key={idx} className="h-full bg-neutral-900/20 group">
                  <div className="p-8 h-full flex flex-col">
                    <div className="flex justify-between items-start mb-6">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${project.color} bg-opacity-10 text-white shadow-lg`}>
                        <Layers size={24} />
                      </div>
                      {project.link && (
                        <a href={project.link} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-lg">
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-3 leading-tight group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-slate-400 mb-8 flex-grow leading-relaxed text-sm">
                      {project.description}
                    </p>
                    
                    <div className="pt-6 border-t border-white/5 flex flex-wrap gap-2">
                      {project.tech.map((t, i) => (
                        <span key={i} className="text-xs font-bold text-slate-300 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5 hover:border-white/20 transition-colors">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </SpotlightCard>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32">
        <div className="max-w-5xl mx-auto px-6">
          <RevealOnScroll>
            <SectionHeading icon={Briefcase}>Experience</SectionHeading>
            <div className="space-y-12">
              {experience.map((exp, idx) => (
                <div key={idx} className="group relative pl-8 md:pl-0">
                   {/* Connector Line for Desktop */}
                   <div className="hidden md:block absolute left-[8.5rem] top-16 bottom-[-3rem] w-px bg-gradient-to-b from-cyan-500/50 to-transparent"></div>
                  
                  <div className="flex gap-10 flex-col md:flex-row items-start">
                    {/* Date Bubble */}
                    <div className="md:w-32 flex-shrink-0 pt-2 relative">
                       <div className="hidden md:block absolute right-[-41px] top-4 w-3 h-3 rounded-full bg-cyan-500 shadow-[0_0_10px_#06b6d4] z-10"></div>
                      <span className="inline-block px-3 py-1 bg-cyan-900/20 text-cyan-400 text-xs font-bold rounded-lg border border-cyan-500/20">
                        {exp.period}
                      </span>
                    </div>

                    {/* Content Card */}
                    <SpotlightCard className="flex-grow p-8 bg-neutral-900/20 group-hover:bg-neutral-900/40 transition-colors">
                      <h3 className="text-2xl font-bold text-white mb-1">
                        {exp.role}
                      </h3>
                      <div className="text-lg text-cyan-400 font-medium mb-4 flex items-center gap-2">
                        <Briefcase size={16} /> {exp.company}
                      </div>
                      <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                        {exp.description}
                      </p>
                    </SpotlightCard>
                  </div>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Skills & Publications Separated */}
      <div className="relative">
        
        {/* Skills Section */}
        <section id="skills" className="py-32 relative z-10">
          <div className="max-w-6xl mx-auto px-6">
            <RevealOnScroll>
              <SectionHeading icon={Cpu}>Skills</SectionHeading>
              <div className="grid md:grid-cols-2 gap-8">
                  {skills.map((skillGroup, idx) => {
                      const Icon = skillGroup.icon;
                      return (
                      <SpotlightCard key={idx} className="p-8 bg-neutral-900/30 h-full">
                          <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl text-pink-400">
                                <Icon size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white">
                                {skillGroup.name}
                            </h3>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {skillGroup.items.map((skill, i) => (
                                <span key={i} className="px-3 py-1.5 bg-white/5 text-slate-300 text-sm font-medium rounded-lg hover:bg-white/10 hover:text-white transition-all cursor-default border border-white/5">
                                {skill}
                                </span>
                            ))}
                          </div>
                      </SpotlightCard>
                      );
                  })}
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* Publications Section */}
        <section id="publications" className="py-32 relative z-10 bg-black/30">
          <div className="max-w-6xl mx-auto px-6">
            <RevealOnScroll>
              <SectionHeading icon={BookOpen}>Publications</SectionHeading>
              <div className="grid md:grid-cols-2 gap-6">
                {publications.map((pub, idx) => (
                    <SpotlightCard key={idx} className="p-6 bg-neutral-900/20 hover:bg-neutral-900/40">
                        <div className="flex gap-4">
                            <div className="mt-1 min-w-[32px] h-8 flex items-center justify-center bg-cyan-500/10 text-cyan-400 rounded-lg text-sm font-bold border border-cyan-500/20">
                                {String(idx + 1).padStart(2, '0')}
                            </div>
                            <div className="flex-grow">
                                {pub.link ? (
                                    <a href={pub.link} target="_blank" rel="noreferrer" className="text-white font-bold leading-snug hover:text-cyan-400 transition-colors flex items-start gap-2 group text-lg">
                                        {pub.title} <ExternalLink size={16} className="mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </a>
                                ) : (
                                    <h4 className="text-white font-bold leading-snug text-lg">{pub.title}</h4>
                                )}
                                <p className="text-slate-500 text-sm mt-3 font-mono flex items-center gap-2">
                                    <span className={`w-2 h-2 rounded-full ${pub.status.includes('Published') ? 'bg-green-500 shadow-[0_0_8px_#22c55e]' : 'bg-yellow-500 shadow-[0_0_8px_#eab308]'}`}></span>
                                    {pub.status}
                                </p>
                            </div>
                        </div>
                    </SpotlightCard>
                ))}
              </div>
            </RevealOnScroll>
          </div>
        </section>

      </div>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative overflow-hidden">
         <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-cyan-950/20"></div>

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">Ready to Innovate?</h2>
              <p className="text-xl text-slate-400">
                Let's discuss how we can build the next generation of automation systems.
              </p>
            </div>
            
            <SpotlightCard className="p-1 rounded-3xl bg-gradient-to-br from-white/10 to-transparent">
              <div className="bg-black/80 rounded-[20px] p-8 md:p-12 backdrop-blur-xl">
                 <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                       <div className="space-y-2">
                          <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Name</label>
                          <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-cyan-500 focus:bg-white/10 transition-all placeholder:text-slate-600" placeholder="John Doe" />
                       </div>
                       <div className="space-y-2">
                          <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Email</label>
                          <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-purple-500 focus:bg-white/10 transition-all placeholder:text-slate-600" placeholder="john@example.com" />
                       </div>
                    </div>
                    <div className="space-y-2">
                       <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Message</label>
                       <textarea className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-cyan-500 focus:bg-white/10 transition-all placeholder:text-slate-600 min-h-[160px] resize-none" placeholder="Tell me about your project..."></textarea>
                    </div>
                    <button className="w-full py-5 bg-gradient-to-r from-cyan-600 to-purple-600 text-white font-bold text-lg rounded-xl hover:shadow-[0_0_40px_rgba(147,51,234,0.4)] hover:scale-[1.01] transition-all flex justify-center items-center gap-3">
                       <Send size={20} /> Send Transmission
                    </button>
                 </form>

                 <div className="mt-12 pt-12 border-t border-white/10 flex flex-wrap justify-center gap-8 md:gap-16">
                    <a href={`mailto:${profile.email}`} className="flex items-center gap-3 text-slate-400 hover:text-cyan-400 transition-colors group">
                       <div className="p-3 bg-white/5 rounded-full group-hover:bg-cyan-500/20 transition-colors">
                          <Mail size={20} />
                       </div>
                       <span className="font-medium">{profile.email}</span>
                    </a>
                    <a href={`tel:${profile.phone}`} className="flex items-center gap-3 text-slate-400 hover:text-purple-400 transition-colors group">
                       <div className="p-3 bg-white/5 rounded-full group-hover:bg-purple-500/20 transition-colors">
                          <Phone size={20} />
                       </div>
                       <span className="font-medium">{profile.phone}</span>
                    </a>
                    <div className="flex items-center gap-3 text-slate-400 hover:text-green-400 transition-colors group cursor-default">
                       <div className="p-3 bg-white/5 rounded-full group-hover:bg-green-500/20 transition-colors">
                          <MapPin size={20} />
                       </div>
                       <span className="font-medium">{profile.location}</span>
                    </div>
                 </div>
              </div>
            </SpotlightCard>

          </RevealOnScroll>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center border-t border-white/5 bg-black relative z-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
           <div className="flex items-center gap-2">
              <span className="text-2xl font-black text-white">SB.</span>
              <span className="text-slate-500 text-sm">© 2026</span>
           </div>
           <p className="text-slate-600 text-sm">
             Designed with React.
           </p>
        </div>
      </footer>
    </div>
  );
}