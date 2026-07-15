import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import "./ProjectsSection.css";

function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with product catalog, shopping cart, and secure payment integration using Stripe.",
      tags: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
      image: "project-1",
      github: "https://github.com",
      live: "https://example.com",
      role: "Full Stack Developer",
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates, user authentication, and team workspace management.",
      tags: ["React", "Firebase", "Material-UI", "Redux"],
      image: "project-2",
      github: "https://github.com",
      live: "https://example.com",
      role: "Frontend Lead",
    },
    {
      id: 3,
      title: "AI Content Generator",
      description: "AI-powered content generation tool with multiple writing templates, SEO optimization, and batch processing capabilities.",
      tags: ["React", "Python", "FastAPI", "OpenAI", "PostgreSQL"],
      image: "project-3",
      github: "https://github.com",
      live: "https://example.com",
      role: "Full Stack Developer",
    },
    {
      id: 4,
      title: "Real-time Analytics Dashboard",
      description: "Data visualization dashboard with real-time metrics, custom charts, and automated reporting features.",
      tags: ["React", "D3.js", "Node.js", "PostgreSQL", "Socket.io"],
      image: "project-4",
      github: "https://github.com",
      live: "https://example.com",
      role: "Full Stack Developer",
    },
    {
      id: 5,
      title: "Mobile Fitness Tracker",
      description: "Cross-platform fitness tracking application with workout logging, progress analytics, and social features.",
      tags: ["React Native", "Firebase", "Redux", "MapBox"],
      image: "project-5",
      github: "https://github.com",
      live: "https://example.com",
      role: "Mobile Developer",
    },
    {
      id: 6,
      title: "CMS Platform",
      description: "Headless CMS with dynamic content management, multi-language support, and REST API for content delivery.",
      tags: ["Next.js", "Strapi", "GraphQL", "PostgreSQL", "Vercel"],
      image: "project-6",
      github: "https://github.com",
      live: "https://example.com",
      role: "Full Stack Developer",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="Projects" className="projects-section">
      <div className="projects-container">
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
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Showcasing my best work and technical expertise across various domains
        </motion.p>

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
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              whileHover={{ y: -8 }}
            >
              <div className="project-image">
                <div className={`placeholder-image ${project.image}`}>
                  <span>{project.id}</span>
                </div>
                <div className={`overlay ${hoveredProject === project.id ? "active" : ""}`}>
                  <div className="overlay-buttons">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="icon-button">
                      <FiGithub size={24} />
                    </a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="icon-button">
                      <FiExternalLink size={24} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-role">{project.role}</p>
                <p className="project-description">{project.description}</p>

                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="tag">
                      {tag}
                    </span>
                  ))}
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
