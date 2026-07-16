import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import "./ProjectsSection.css";

function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "PulseBI",
      description:
        "PulseBI is an AI-powered BI dashboard built for top-level executives who don't have a technical background. No SQL. No complex tools. Just ask a question in plain English PulseBI does the rest.",
      tags: [
        "React",
        "Node.js",
        "PostgreSQL",
        "WebSocket",
        "Tailwind CSS",
        "chart.js",
      ],
      image: "/Assets/1.webp",
      github: "https://github.com/Mudit-tyagi-dev/PulseBI",
      live: "https://bi-fast.vercel.app/",
      role: "Frontend Developer",
    },
    {
      id: 2,
      title: "Factlyai",
      description:
        "Factly AI is an intelligent information verification platform that instantly analyzes content using real-time web search and advanced AI reasoning.",
      tags: [
        "React",
        "Web Scraping",
        "WebSocket",
        " React Pdf Render",
        "Tailwind CSS",
        "Lucid React",
      ],
      image: "/Assets/2.webp",
      github: "https://github.com/Mudit-tyagi-dev/FactlyAi",
      live: "https://factlyai.vercel.app/",
      role: "Frontend Lead",
    },
    {
      id: 3,
      title: "Vipin Tyagi and Company (Law Firm)",
      description:
        "Designed and developed a modern, responsive website for a law firm to establish a strong online presence. The website highlights legal services, practice areas, attorney profiles, office locations, and contact information with a professional UI, optimized performance, and mobile-friendly experience.",
      tags: ["React", "Express.js", "GSAP", "Tailwind CSS", "Radix UI"],
      image: "/Assets/3.webp",
      github:
        "https://github.com/Mudit-tyagi-dev/Vipin-Tyagi-and-Company-law-Firm-",
      live: "https://vipin-tyagi-and-company-law-firm.vercel.app/",
      role: "Full Stack Developer",
    },
    {
      id: 4,
      title: "My Portfolio Website",
      description:
        "Developed a modern, responsive portfolio website to showcase my skills and projects. The website features a clean design, smooth animations, and a user-friendly interface to provide an excellent user experience.",
      tags: [
        "React",
        "Tailwind CSS",
        "React Icons",
        "Express.js",
        "GSAP",
        "Framer Motion",
        "Lenis",
      ],
      image: "/Assets/6.webp",
      github: "https://github.com/Mudit-tyagi-dev/Portfolio",
      live: "mudittyagi.vercel.app/",
      role: "Full Stack Developer",
    },
    {
      id: 5,
      title: "Library Management System",
      description:
        "Developed a Library Management System that integrates the Open Library API to search and fetch book information in real time. The system enables users to browse books, issue and return books, manage book inventory, track available copies, and monitor borrowing records through an intuitive and responsive interface.",
      tags: [
        "HTML",
        "CSS",
        "JavaScript",
        "PostgreSQL",
        "Express.js",
        "Node.js",
        "Drizzle ORM",
        "open Library API",
      ],
      image: "/Assets/4.webp",
      github: "https://github.com/Mudit-tyagi-dev/Library-Management",
      live: "https://library-management-frontend-nqit.onrender.com/",
      role: "Full Stack Developer",
    },
    {
      id: 6,
      title: "Lofisvilla",
      description:
        "Developed a responsive music player web application inspired by Spotify, featuring a modern and intuitive interface. Implemented core music player functionalities including play, pause, seek, volume control, track switching, and playlist management using locally stored audio files to deliver a smooth listening experience across desktop and mobile devices.",
      tags: ["HTML", "CSS", "JavaScript"],
      image: "/Assets/5.webp",
      github: "https://github.com/Mudit-tyagi-dev/lofisvilla",
      live: "https://lofisvilla.netlify.app/",
      role: "Full Stack Developer",
    },
    // {
    //   id: 6,
    //   title: "CMS Platform",
    //   description: "Headless CMS with dynamic content management, multi-language support, and REST API for content delivery.",
    //   tags: ["Next.js", "Strapi", "GraphQL", "PostgreSQL", "Vercel"],
    //   image: "project-6",
    //   github: "https://github.com",
    //   live: "https://example.com",
    //   role: "Full Stack Developer",
    // },
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
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-thumbnail"
                />
                <div
                  className={`overlay ${hoveredProject === project.id ? "active" : ""}`}
                >
                  <div className="overlay-buttons">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon-button"
                    >
                      <FiGithub size={24} />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon-button"
                    >
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
