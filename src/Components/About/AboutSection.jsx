import React from "react";
import { motion } from "framer-motion";
import "./AboutSection.css";

function AboutSection() {
  const values = [
    {
      id: 1,
      title: "Innovation",
      description: "Constantly exploring new technologies and methodologies to deliver cutting-edge solutions.",
      icon: "💡",
    },
    {
      id: 2,
      title: "Quality",
      description: "Committed to writing clean, maintainable code with comprehensive testing and documentation.",
      icon: "✨",
    },
    {
      id: 3,
      title: "Collaboration",
      description: "Believing in the power of teamwork and open communication to achieve better outcomes.",
      icon: "🤝",
    },
    {
      id: 4,
      title: "Continuous Learning",
      description: "Dedicated to growing my skills and staying updated with industry trends and best practices.",
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
            <h2 className="about-heading">Full Stack Developer & Tech Enthusiast</h2>

            <p className="about-paragraph">
              Hello! I&apos;m Mudit Tyagi, a passionate full stack developer with a deep love for creating innovative web solutions.
              With over 3+ years of professional experience, I&apos;ve built a diverse portfolio of projects ranging from e-commerce
              platforms to real-time analytics dashboards.
            </p>

            <p className="about-paragraph">
              My journey in web development started with a curiosity to understand how things work on the internet. What began as
              a hobby has evolved into a fulfilling career where I get to solve complex problems and create applications that make
              a real difference. I specialize in building scalable, user-friendly applications using modern technologies like React,
              Node.js, and cloud platforms.
            </p>

            <p className="about-paragraph">
              When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing
              knowledge with the community. I believe in the power of continuous learning and staying updated with the ever-evolving
              landscape of web development.
            </p>

            <div className="about-stats">
              <div className="stat-item">
                <h3 className="stat-number">2+</h3>
                <p className="stat-label">Years of Experience</p>
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
