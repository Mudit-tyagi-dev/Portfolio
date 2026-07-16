import React from "react";
import { motion } from "framer-motion";
import "./AboutSection.css";

function AboutSection() {
  const values = [
    {
      id: 1,
      title: "Innovation",
      description:
        "Building practical solutions by continuously learning modern technologies and applying them to solve real-world problems.",
      icon: "💡",
    },
    {
      id: 2,
      title: "Quality",
      description:
        "Writing clean, maintainable, and scalable code with a strong focus on performance, responsiveness, and user experience.",
      icon: "✨",
    },
    {
      id: 3,
      title: "Collaboration",
      description:
        "Believing in teamwork, open communication, and knowledge sharing to achieve better results and grow together.",
      icon: "🤝",
    },
    {
      id: 4,
      title: "Continuous Learning",
      description:
        "Dedicated to growing my skills and staying updated with industry trends and best practices.",
      icon: "📚",
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
    <section id="About" className="about-section">
      <div className="about-container">
        <motion.h1
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h1>

        <div className="about-grid">
          {/* About Content */}
          <motion.div
            className="about-content"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="about-heading">
              Full Stack Developer & Problem Solver
            </h2>

            <p className="about-paragraph">
              Hello! I'm Mudit Tyagi, a Full Stack Developer passionate about
              building modern, scalable, and user-friendly web applications. I
              enjoy transforming ideas into real-world products using
              technologies like React, Node.js, Express.js, PostgreSQL, and
              Tailwind CSS
            </p>

            <p className="about-paragraph">
              I have built projects ranging from AI-powered dashboards and
              business websites to management systems and interactive web
              applications. Every project helps me strengthen my understanding
              of software architecture, APIs, databases, and clean code
              practices.
            </p>

            <p className="about-paragraph">
              Alongside development, I actively participate in hackathons,
              organize coding events through my college Coding Club, and
              continuously explore emerging technologies in AI and full-stack
              development. My goal is to build software that solves real
              problems and creates meaningful impact.
            </p>

            <div className="about-stats">
              <div className="stat-item">
                <h3 className="stat-number">5+</h3>
                <p className="stat-label">Client & College Projects</p>
              </div>
              <div className="stat-item">
                <h3 className="stat-number">10+</h3>
                <p className="stat-label">Projects Completed</p>
              </div>
              <div className="stat-item">
                <h3 className="stat-number">13+</h3>
                <p className="stat-label">Technologies</p>
              </div>
            </div>
          </motion.div>

          {/* Values Column */}
          <motion.div
            className="values-content"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="values-heading">My Core Values</h2>

            <motion.div
              className="values-grid"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {values.map((value) => (
                <motion.div
                  key={value.id}
                  className="value-card"
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                >
                  <div className="value-icon">{value.icon}</div>
                  <h3 className="value-title">{value.title}</h3>
                  <p className="value-description">{value.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
