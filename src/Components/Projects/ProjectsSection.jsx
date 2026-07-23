import React, { useRef } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiBookOpen } from "react-icons/fi";
import "./ProjectsSection.css";

function ProjectsSection() {
  const sectionRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "PulseBI",
      category: "AI Platform",
      role: "Frontend Developer",
      problem: "Non-technical leaders struggle to extract SQL database insights.",
      solution: "Conversational AI translates plain English into visual charts.",
      value: "Empowers instant, code-free business intelligence dashboards.",
      highlights: ["Conversational BI", "Real-time Analytics", "No-SQL Queries"],
      tags: ["React", "Node.js", "PostgreSQL", "WebSocket", "Tailwind CSS", "Chart.js"],
      image: "/Assets/1.webp",
      github: "https://github.com/Mudit-tyagi-dev/PulseBI",
      live: "https://bi-fast.vercel.app/",
    },
    {
      id: 2,
      title: "Factlyai",
      category: "SaaS",
      role: "Frontend Lead",
      problem: "Online misinformation is hard to analyze and verify instantly.",
      solution: "Real-time search scraping combined with LLM reasoning.",
      value: "Delivers automated, credible content audits in seconds.",
      highlights: ["Real-time Verify", "Deep Search AI", "Automated Reports"],
      tags: ["React", "Web Scraping", "WebSocket", "React PDF Render", "Tailwind CSS"],
      image: "/Assets/2.webp",
      github: "https://github.com/Mudit-tyagi-dev/FactlyAi",
      live: "https://factlyai.vercel.app/",
    },
    {
      id: 3,
      title: "Vipin Tyagi and Company (Law Firm)",
      category: "Business Website",
      role: "Full Stack Developer",
      problem: "Local law firms lack a high-performance digital identity.",
      solution: "Custom web platform detailing attorneys, locations, and practices.",
      value: "Establishes digital credibility and increases client inquiries.",
      highlights: ["SEO Optimized", "Professional UI", "Responsive Layout"],
      tags: ["React", "Express.js", "GSAP", "Tailwind CSS", "Radix UI"],
      image: "/Assets/3.webp",
      github: "https://github.com/Mudit-tyagi-dev/Vipin-Tyagi-and-Company-law-Firm-",
      live: "https://vipin-tyagi-and-company-law-firm.vercel.app/",
    },
    {
      id: 4,
      title: "My Portfolio Website",
      category: "Creative UI",
      role: "Full Stack Developer",
      problem: "Developers struggle to stand out with static portfolio pages.",
      solution: "Interactive 3D workspace showcasing key engineering projects.",
      value: "Increases recruiter engagement with premium animations.",
      highlights: ["GSAP & Motion", "Interactive 3D", "Fast Page Speed"],
      tags: ["React", "Tailwind CSS", "GSAP", "Framer Motion", "Lenis Scroll"],
      image: "/Assets/6.webp",
      github: "https://github.com/Mudit-tyagi-dev/Portfolio",
      live: "https://mudittyagi.vercel.app/",
    },
    {
      id: 5,
      title: "Library Management System",
      category: "Library System",
      role: "Full Stack Developer",
      problem: "Libraries struggle with complex, slow inventory cataloging.",
      solution: "Open Library API integration with Drizzle ORM inventory tracking.",
      value: "Streamlines borrowing workflows and member audit records.",
      highlights: ["Open Library API", "Drizzle SQL Schema", "Inventory Tracker"],
      tags: ["PostgreSQL", "Express.js", "Node.js", "Drizzle ORM", "JavaScript"],
      image: "/Assets/4.webp",
      github: "https://github.com/Mudit-tyagi-dev/Library-Management",
      live: "https://library-management-frontend-nqit.onrender.com/",
    },
    {
      id: 6,
      title: "Lofisvilla",
      category: "Web App",
      role: "Full Stack Developer",
      problem: "Web-based music players are often slow and unresponsive on mobile.",
      solution: "A Spotify-inspired player with custom local track handling.",
      value: "Delivers zero-latency audio playback and playlist controls.",
      highlights: ["Custom Audio API", "Mobile Responsive", "Local Playlists"],
      tags: ["HTML", "CSS", "JavaScript"],
      image: "/Assets/5.webp",
      github: "https://github.com/Mudit-tyagi-dev/lofisvilla",
      live: "https://lofisvilla.netlify.app/",
    },
  ];

  const handleMouseMove = (e) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    sectionRef.current.style.setProperty("--mouse-x", `${x}px`);
    sectionRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      id="Projects"
      className="projects-section"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
    >
      <div className="projects-container">
        {/* Title */}
        <motion.h1
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h1>

        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
        >
          Showcasing production-ready SaaS systems, Web3 utilities, and interactive web apps
        </motion.p>

        {/* 3-Column Grid */}
        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="project-card"
              variants={itemVariants}
            >
              {/* Product Screenshot */}
              <div className="project-image">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-thumbnail"
                  loading="lazy"
                />
              </div>

              {/* Card Body */}
              <div className="project-content">
                {/* Meta Header */}
                <div className="project-header-meta">
                  <span className="project-category">{project.category}</span>
                  <span className="project-role-chip">{project.role}</span>
                </div>

                <h3 className="project-title">{project.title}</h3>

                {/* Problem-Solution-Value Block */}
                <div className="project-psv">
                  <p className="psv-line">
                    <strong>Problem:</strong> {project.problem}
                  </p>
                  <p className="psv-line">
                    <strong>Solution:</strong> {project.solution}
                  </p>
                  <p className="psv-line">
                    <strong>Value:</strong> {project.value}
                  </p>
                </div>

                {/* Checkmark Highlights */}
                <div className="project-highlights">
                  {project.highlights.map((highlight, index) => (
                    <span key={index} className="highlight-tag">
                      ✓ {highlight}
                    </span>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="project-actions">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-btn live-btn"
                    >
                      Live Demo <FiExternalLink size={14} />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-btn github-btn"
                    >
                      GitHub <FiGithub size={14} />
                    </a>
                  )}
                  {project.caseStudy && (
                    <a
                      href={project.caseStudy}
                      className="project-btn case-btn"
                    >
                      Case Study <FiBookOpen size={14} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default ProjectsSection;
