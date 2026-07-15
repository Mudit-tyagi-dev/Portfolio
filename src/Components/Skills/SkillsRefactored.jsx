import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./SkillsRefactored.css";

export default function SkillsRefactored() {
  const [activeCategory, setActiveCategory] = useState("frontend");

  const skillsData = {
    frontend: {
      title: "Frontend",
      description: "UI/UX focused technologies",
      skills: [
        { name: "React" },
        { name: "JavaScript" },
        { name: "HTML/CSS" },
        { name: "Tailwind CSS" },
        { name: "Bootstrap" },
        { name: "Framer Motion" },
      ],
    },
    backend: {
      title: "Backend",
      description: "Server and API development",
      skills: [
        { name: "Node.js" },
        { name: "Express.js" },
        { name: "REST APIs" },
        { name: "Authentication" },
        { name: "Middleware" },
      ],
    },
    database: {
      title: "Database",
      description: "Data storage and management",
      skills: [
        { name: "MongoDB" },
        { name: "PostgreSQL" },
        { name: "Firebase" },
        { name: "Data Modeling" },
        { name: "Query Optimization" },
      ],
    },
    tools: {
      title: "Tools & DevOps",
      description: "Development and deployment tools",
      skills: [
        { name: "Git" },
        { name: "VS Code" },
        { name: "Docker" },
        { name: "Vercel" },
        { name: "npm/yarn" },
      ],
    },
    other: {
      title: "Other Technologies",
      description: "Additional languages and frameworks",
      skills: [
        { name: "Python" },
        { name: "C/C++" },
        { name: "Streamlit" },
        { name: "GraphQL" },
        { name: "Next.js" },
      ],
    },
  };

  const categories = Object.keys(skillsData);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section id="Skills" className="skills-section">
      <div className="skills-container">
        {/* Header */}
        <motion.div
          className="skills-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="skills-title">Skills & Technologies</h2>
          <p className="skills-subtitle">
            A diverse toolkit of technologies and frameworks I&apos;ve mastered
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="skills-tabs">
          {categories.map((category) => (
            <button
              key={category}
              className={`skills-tab ${activeCategory === category ? "active" : ""}`}
              onClick={() => setActiveCategory(category)}
              aria-selected={activeCategory === category}
              role="tab"
            >
              {skillsData[category].title}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          key={activeCategory}
        >
          {skillsData[activeCategory].skills.map((skill, index) => (
            <motion.div
              key={`${activeCategory}-${index}`}
              className="skill-card"
              variants={itemVariants}
              whileHover={{ y: -4 }}
            >
              <div className="skill-card-content">
                <h3 className="skill-name">{skill.name}</h3>
              </div>
              <div className="skill-indicator">
                <div className="indicator-dot"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Marquee Section - Animated scroll */}
        <div className="marquee-section">
          <h3 className="marquee-title">All Technologies</h3>
          <div className="marquee-container-new">
            <div className="marquee-track-new">
              <div className="marquee-content-new">
                {["React", "Node.js", "MongoDB", "PostgreSQL", "Express", "Tailwind", "JavaScript", "HTML/CSS", "Python", "Firebase", "Docker", "GraphQL"].map((tech, idx) => (
                  <span key={idx} className="marquee-tech">{tech}</span>
                ))}
              </div>
              <div className="marquee-content-new" aria-hidden="true">
                {["React", "Node.js", "MongoDB", "PostgreSQL", "Express", "Tailwind", "JavaScript", "HTML/CSS", "Python", "Firebase", "Docker", "GraphQL"].map((tech, idx) => (
                  <span key={idx} className="marquee-tech">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
