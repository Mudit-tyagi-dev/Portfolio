import React from "react";
import { motion } from "framer-motion";
import "./Certifications.css";

function Certifications() {
  const certifications = [
    {
      id: 1,
      title: "Advanced React Patterns",
      issuer: "Udemy",
      date: "2023",
      credential: "Certificate",
    },
    {
      id: 2,
      title: "Full Stack Web Development",
      issuer: "Coursera",
      date: "2022",
      credential: "Certificate",
    },
    {
      id: 3,
      title: "AWS Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      credential: "Certificate",
    },
    {
      id: 4,
      title: "Node.js & Express.js Mastery",
      issuer: "Udemy",
      date: "2022",
      credential: "Certificate",
    },
  ];

  const achievements = [
    {
      id: 1,
      title: "Open Source Contributor",
      description: "Contributed to multiple open-source projects with 50+ merged pull requests",
    },
    {
      id: 2,
      title: "Tech Speaker",
      description: "Delivered talks on web development topics at 5+ local tech meetups and conferences",
    },
    {
      id: 3,
      title: "Hackathon Winner",
      description: "Won 1st place in a national web development hackathon with an innovative project",
    },
    {
      id: 4,
      title: "Community Leader",
      description: "Mentored 10+ junior developers and helped them launch their web development careers",
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
                    <p className="achievement-description">{achievement.description}</p>
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
