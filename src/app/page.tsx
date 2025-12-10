"use client";

import { motion } from "motion/react";
import { Github, Linkedin, Mail, ExternalLink, Code2, Database, Server, Layers, ChevronDown, Terminal, Briefcase, GraduationCap, MapPin } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const projects = [
  {
    title: "KM Bank App",
    description: "A comprehensive digital banking platform featuring secure JWT authentication, real-time account management, transaction processing, and an analytics dashboard. Built with a focus on security and user experience.",
    tech: ["React", "Vite", "Java", "Spring Boot", "PostgreSQL", "JWT", "Tailwind CSS"],
    features: ["User Authentication", "Account Management", "Transaction History", "Analytics Dashboard", "Fund Transfers"],
    gradient: "from-[#00f0ff] to-[#0080ff]",
    icon: "🏦",
    github: "https://github.com/ksahirani",
    demo: "#",
    inProgress: true,
  },
  {
    title: "Personal Portfolio Draft",
    description: "A responsive, mobile-first personal portfolio website showcasing projects and skills. Features interactive elements with smooth animations and a clean, professional design that works seamlessly across all devices.",
    tech: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    features: ["Mobile-First Design", "Project Gallery", "Lightbox Functionality", "Custom Animations", "Responsive Layout"],
    gradient: "from-[#a855f7] to-[#6366f1]",
    icon: "🎨",
    github: "https://github.com/ksahirani",
    demo: "https://ksahirani.github.io/MyPortfolio/",
  },
  {
    title: "TheColoring Bliss E-Commerce Workflow management",
    description: "A full-stack e-commerce platform with comprehensive workflow management. Features a dynamic product catalog, real-time search, seamless shopping cart, and a powerful admin dashboard with analytics and user management tools.",
    tech: ["MongoDB", "Express.js", "React", "Node.js", "REST API", "CSS3", "Lucide React"],
    features: ["Dynamic Product Catalog", "Real-Time Search", "Cart Management", "Secure Checkout", "Admin Dashboard", "User Management"],
    gradient: "from-[#10b981] to-[#06b6d4]",
    icon: "🛒",
    github: "https://github.com/ksahirani",
    demo: "https://the-coloring-bliss-front-end.vercel.app/",
  },
];

const skills = {
  frontend: {
    title: "Frontend",
    icon: Code2,
    items: ["React", "Next","Tailwind CSS", "Bootstrap", "Vite", "HTML/CSS"],
  },
  backend: {
    title: "Backend",
    icon: Server,
    items: ["Java", "Spring Boot", "Javascript", "Node.js", "Express.js", "REST APIs", "JWT Auth"],
  },
  database: {
    title: "Database",
    icon: Database,
    items: ["PostgreSQL", "MySQL", "MongoDB"],
  },
  tools: {
    title: "Tools & DevOps",
    icon: Layers,
    items: ["Git", "GitHub", "VS Code", "IntelliJ IDEA", "Postman"],
  },
};

export default function Home() {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-obsidian noise">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 glass"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.a 
            href="#"
            className="font-display font-bold text-2xl text-accent"
            whileHover={{ scale: 1.05 }}
          >
            Kenon Sahirani <span className="text-pearl">Portfolio</span>
          </motion.a>
          
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, i) => (
              <motion.a
                key={item.href}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i, duration: 0.5 }}
                className="text-ash hover:text-pearl transition-colors font-medium text-sm tracking-wide"
              >
                {item.label}
              </motion.a>
            ))}
          </div>
          
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-2 bg-accent text-obsidian font-semibold text-sm rounded-full hover:bg-accent-dim transition-colors"
          >
            Hire Me
          </motion.a>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden grid-pattern">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ 
              rotate: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{ 
              rotate: { duration: 60, repeat: Infinity, ease: "linear" },
              scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] rounded-full opacity-30"
            style={{
              background: "radial-gradient(circle, rgba(0,240,255,0.1) 0%, transparent 70%)",
            }}
          />
          <motion.div
            animate={{ 
              rotate: -360,
              scale: [1, 1.3, 1],
            }}
            transition={{ 
              rotate: { duration: 80, repeat: Infinity, ease: "linear" },
              scale: { duration: 10, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] rounded-full opacity-20"
            style={{
              background: "radial-gradient(circle, rgba(255,107,53,0.1) 0%, transparent 70%)",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-sm text-ash">
              <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
              Available for opportunities
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-6xl md:text-8xl font-bold mb-6 tracking-tight"
          >
            Hi, I&apos;m <span className="text-gradient glow-text">Kenon</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-ash max-w-2xl mx-auto mb-8 font-light"
          >
            Full-Stack Developer crafting modern, scalable web applications with 
            <span className="text-accent"> React, Next</span>, 
            <span className="text-highlight"> Springboot, Express</span>, and 
            <span className="text-success"> PostgreSQL, MongoDB</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center justify-center gap-4 mb-12"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0,240,255,0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-accent text-obsidian font-semibold rounded-full flex items-center gap-2 transition-all"
            >
              View My Work
              <ChevronDown className="w-4 h-4" />
            </motion.a>
            <motion.a
              href="https://github.com/ksahirani"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass rounded-full flex items-center gap-2 text-pearl hover:text-accent transition-colors"
            >
              <Github className="w-5 h-5" />
              GitHub
            </motion.a>
          </motion.div>

          {/* Floating tech icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex items-center justify-center gap-6 text-ash"
          >
            {["React", "Java", "PostgreSQL", "Springboot", "Javascript", "Express JS", "MongoDB"].map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 + i * 0.1 }}
                className="text-xs font-mono tracking-wider"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-ash"
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-16 items-center"
          >
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                About <span className="text-gradient">Me</span>
              </h2>
              <p className="text-ash text-lg leading-relaxed mb-6">
                I&apos;m a passionate full-stack developer with a focus on building modern, 
                user-centric web applications. I specialize in creating seamless experiences 
                that bridge beautiful frontend interfaces with robust backend systems.
              </p>
              <p className="text-ash text-lg leading-relaxed mb-8">
                My expertise spans the entire development stack—from crafting responsive 
                React applications with contemporary design aesthetics to architecting 
                secure, scalable backend services with Java Spring Boot and PostgreSQL.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3 text-ash">
                  <Briefcase className="w-5 h-5 text-accent" />
                  <span>Full-Stack Developer</span>
                </div>
                <div className="flex items-center gap-3 text-ash">
                  <GraduationCap className="w-5 h-5 text-accent" />
                  <span>Continuous Learner</span>
                </div>
                <div className="flex items-center gap-3 text-ash">
                  <Terminal className="w-5 h-5 text-accent" />
                  <span>Problem Solver</span>
                </div>
                <div className="flex items-center gap-3 text-ash">
                  <MapPin className="w-5 h-5 text-accent" />
                  <span>Remote Ready</span>
                </div>
              </div>
            </div>

            {/* Stats/Terminal Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass rounded-2xl p-6 glow"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-highlight" />
                <div className="w-3 h-3 rounded-full bg-warning" />
                <div className="w-3 h-3 rounded-full bg-success" />
                <span className="ml-2 text-xs text-ash font-mono">about.tsx</span>
              </div>
              <pre className="font-mono text-sm text-ash leading-relaxed">
                <code>
{`const developer = {
  name: "Kenon",
  role: "Full-Stack Developer",
  skills: {
    frontend: ["React", "Next.js"],
    backend: ["SpringBoot", "Node.js", "Express.js"],
    database: ["PostgreSQL", "MongoDB", "MySQL"],
  },
  passion: "Building impactful applications",
  currentFocus: "Banking & FinTech",
  available: true,
};`}
                </code>
              </pre>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 relative">
        <div className="absolute inset-0 grid-pattern opacity-50" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-ash text-lg max-w-2xl mx-auto">
              A showcase of my recent work in full-stack development, 
              featuring modern banking applications with secure authentication and intuitive interfaces.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                onMouseEnter={() => setActiveProject(index)}
                onMouseLeave={() => setActiveProject(null)}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <div className="glass rounded-3xl p-8 h-full relative overflow-hidden transition-all duration-500 group-hover:border-accent/20">
                  {/* In Progress Badge */}
                  {"inProgress" in project && project.inProgress && (
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 text-xs font-semibold bg-highlight/20 text-highlight rounded-full border border-highlight/30">
                        In Progress
                      </span>
                    </div>
                  )}
                  
                  {/* Project Icon */}
                  <div className="text-5xl mb-6">{project.icon}</div>
                  
                  {/* Title */}
                  <h3 className="font-display text-2xl font-bold mb-3 text-pearl group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-ash mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-silver mb-3">Key Features</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-3 py-1 text-xs bg-slate rounded-full text-ash"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-silver mb-3">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-mono bg-charcoal border border-steel rounded-lg text-accent"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Actions */}
                  <div className="flex items-center gap-4 pt-4 border-t border-steel">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-2 text-sm text-ash hover:text-accent transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        View Code
                      </motion.a>
                    )}
                    {project.demo && (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-2 text-sm text-ash hover:text-accent transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </motion.a>
                    )}
                  </div>
                  
                  {/* Hover accent line */}
                  <motion.div
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient}`}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: activeProject === index ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Technical <span className="text-gradient">Skills</span>
            </h2>
            <p className="text-ash text-lg max-w-2xl mx-auto">
              A comprehensive toolkit for building modern, full-stack applications 
              from concept to deployment.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(skills).map(([key, category], index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="glass rounded-2xl p-6 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-slate flex items-center justify-center mb-4 group-hover:bg-accent/10 transition-colors">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  
                  <h3 className="font-display text-lg font-semibold mb-4 text-pearl">
                    {category.title}
                  </h3>
                  
                  <div className="space-y-2">
                    {category.items.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2 text-sm text-ash"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-accent/50" />
                        {item}
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
              Let&apos;s <span className="text-gradient">Connect</span>
            </h2>
            <p className="text-ash text-xl mb-12 max-w-2xl mx-auto">
              I&apos;m always open to discussing new projects, creative ideas, 
              or opportunities to be part of your vision.
            </p>
            
            <motion.a
              href="mailto:kenonsahirani07@gmail.com"
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(0,240,255,0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-10 py-5 bg-accent text-obsidian font-semibold text-lg rounded-full transition-all"
            >
              <Mail className="w-5 h-5" />
              Get In Touch
            </motion.a>
            
            {/* Social Links */}
            <div className="flex items-center justify-center gap-6 mt-12">
              {[
                { icon: Github, href: "https://github.com/ksahirani", label: "GitHub" },
                { icon: Linkedin, href: "www.linkedin.com/in/kenon-sahirani-5a7422307", label: "LinkedIn" },
                { icon: Mail, href: "mailto:kenonsahirani07@gmail.com", label: "Email" },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, color: "#00f0ff" }}
                  className="p-4 glass rounded-full text-ash hover:text-accent transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-steel">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-ash text-sm">
            © {new Date().getFullYear()} Kenon Sahirani Porfolio. Built with Next.js & Tailwind CSS.
          </p>
          <p className="text-ash text-sm font-mono">
            Crafted with <span className="text-highlight">♥</span> and lots of Coffee ☕
          </p>
        </div>
      </footer>
    </main>
  );
}