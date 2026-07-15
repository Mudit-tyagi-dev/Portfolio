import React from "react";
// import { motion } from "framer-motion";
import "./Experience.css";

function Experience() {
  const experiences = [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      company: "Tech Innovations Inc.",
      period: "Jan 2023 - Present",
      description: "Led development of scalable web applications using React and Node.js. Mentored junior developers and implemented best practices.",
      skills: ["React", "Node.js", "MongoDB", "AWS"],
    },
    {
      id: 2,
      title: "Full Stack Developer",
      company: "Digital Solutions Ltd.",
      period: "Jun 2021 - Dec 2022",
      description: "Developed and maintained multiple client projects. Optimized application performance and implemented responsive designs.",
      skills: ["React", "Express.js", "PostgreSQL", "Tailwind CSS"],
    },
    {
      id: 3,
      title: "Junior Web Developer",
      company: "StartupHub",
      period: "Jan 2021 - May 2021",
      description: "Built responsive websites and web applications. Collaborated with design and backend teams to deliver quality solutions.",
      skills: ["HTML", "CSS", "JavaScript", "React"],
    },
  ];

  const education = [
    {
      id: 1,
      degree: "Bachelor of Technology",
      field: "Computer Science",
      institution: "University of Technology",
      year: "2020",
      details: "Graduated with honors. Specialized in Web Development and Data Structures.",
    },
    {
      id: 2,
      degree: "Web Development Bootcamp",
      field: "Full Stack Web Development",
      institution: "Code Academy",
      year: "2020",
      details: "Intensive 12-week program focusing on modern web development practices.",
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
    <section id="Experience" className="experience-section">
      <div className="experience-container">
        <motion.h1
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Experience & Education
        </motion.h1>

        <div className="experience-grid">
          {/* Experience Column */}
          <div className="experience-column">
            <motion.h2
              className="column-title"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Professional Experience
            </motion.h2>

            <motion.div
              className="experience-items"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {experiences.map((exp, ) => (
                <motion.div
                  key={exp.id}
                  className="experience-card"
                  variants={itemVariants}
                  whileHover={{ translateX: 10 }}
                >
                  <div className="card-header">
                    <h3 className="job-title">{exp.title}</h3>
                    <span className="company-name">{exp.company}</span>
                  </div>
                  <p className="period">{exp.period}</p>
                  <p className="description">{exp.description}</p>
                  <div className="skills-badge">
                    {exp.skills.map((skill, i) => (
                      <span key={i} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Education Column */}
          <div className="experience-column">
            <motion.h2
              className="column-title"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Education
            </motion.h2>

            <motion.div
              className="education-items"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {education.map((edu) => (
                <motion.div
                  key={edu.id}
                  className="education-card"
                  variants={itemVariants}
                  whileHover={{ translateX: -10 }}
                >
                  <div className="card-header">
                    <h3 className="degree">{edu.degree}</h3>
                    <span className="institution">{edu.institution}</span>
                  </div>
                  <p className="field">{edu.field}</p>
                  <p className="year">{edu.year}</p>
                  <p className="details">{edu.details}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
