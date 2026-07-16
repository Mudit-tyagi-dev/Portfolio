import React from "react";
import { motion } from "framer-motion";
import "./Certifications.css";

function Certifications() {
  const certifications = [
    {
      id: 1,
      title: "Web Design and Development",
      issuer: "ICC Computer Education",
      date: " Issued: 2025",
      credential: "Certificate",
    },
    {
      id: 2,
      title: "Node.js- Beginner to Advance course with projects",
      issuer: "Udemy",
      date: " Issued: 2025",
      credential: "Certificate",
    },
    // {
    //   id: 3,
    //   title: "AWS Solutions Architect",
    //   issuer: "Amazon Web Services",
    //   date: "2023",
    //   credential: "Certificate",
    // },
    // {
    //   id: 4,
    //   title: "Node.js & Express.js Mastery",
    //   issuer: "Udemy",
    //   date: "2022",
    //   credential: "Certificate",
    // },
  ];

  const achievements = [
    {
      id: 1,
      title: " Worked with Real Clients",
      description: "Successfully delivered client-focused web development projects, transforming business requirements into responsive, user-friendly, and high-performance websites with an emphasis on UI/UX, reliability, and maintainability",
    },
     {
      id: 2,
      title: "Hackathon Winner",
      description:
        "Secured 1st place in the GeeksforGeeks HackFest 2026 by developing an innovative software solution that demonstrated strong problem-solving, teamwork, and full-stack development skills under competitive time constraints.",
    },
    {
      id: 3,
      title: "Student Chairmen",
      description:
        "Serving as the Student Chairman of the college Coding Club, organizing technical events, coding sessions, and hackathons while fostering collaboration and helping students strengthen their programming and development skills.",
    },
    {
      id: 4,
      title: "Organized College Hackathon – PieceCode 1.0",
      description:
        "Successfully organized PieceCode 1.0, a college-level hackathon that brought together student developers to collaborate, solve real-world challenges, and showcase innovative projects. Contributed to planning, coordination, participant management, and the overall execution of the event.",
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
    <section id="Certifications" className="certifications-section">
      <div className="certifications-container">
        <motion.h1
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Certifications & Achievements
        </motion.h1>

        <div className="cert-grid">
          {/* Certifications Column */}
          <div className="cert-column">
            <motion.h2
              className="column-title"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Professional Certifications
            </motion.h2>

            <motion.div
              className="certifications-list"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {certifications.map((cert) => (
                <motion.div
                  key={cert.id}
                  className="cert-card"
                  variants={itemVariants}
                  whileHover={{ translateX: 10 }}
                >
                  <div className="cert-icon">📜</div>
                  <div className="cert-content">
                    <h3 className="cert-title">{cert.title}</h3>
                    <p className="cert-issuer">{cert.issuer}</p>
                    <p className="cert-date">{cert.date}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Achievements Column */}
          <div className="cert-column">
            <motion.h2
              className="column-title"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Achievements
            </motion.h2>

            <motion.div
              className="achievements-list"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {achievements.map((achievement) => (
                <motion.div
                  key={achievement.id}
                  className="achievement-card"
                  variants={itemVariants}
                  whileHover={{ translateX: -10 }}
                >
                  <div className="achievement-icon">⭐</div>
                  <div className="achievement-content">
                    <h3 className="achievement-title">{achievement.title}</h3>
                    <p className="achievement-description">
                      {achievement.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Certifications;
