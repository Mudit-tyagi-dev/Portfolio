import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import "./Certifications.css";

// Reusable scroll-triggered counter item
const StatItem = ({ number, label }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [displayNum, setDisplayNum] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const numericMatch = number.match(/^(\d+)(.*)$/);
    if (!numericMatch) return;

    const targetVal = parseInt(numericMatch[1], 10);
    const duration = 1500; // 1.5 seconds
    const startTime = performance.now();

    let animationFrame;
    const animate = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing out quad
      const easeProgress = progress * (2 - progress);
      const current = Math.floor(easeProgress * targetVal);
      
      setDisplayNum(current);
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, number]);

  const hasDigits = /^\d+/.test(number);

  return (
    <motion.div
      ref={ref}
      className="stat-item"
      initial={{ opacity: 0, y: 15 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <h3 className="stat-number">
        {hasDigits ? (
          <>
            {displayNum}
            <span className="stat-suffix">{number.replace(/^\d+/, "")}</span>
          </>
        ) : (
          number
        )}
      </h3>
      <p className="stat-label">{label}</p>
    </motion.div>
  );
};

function Certifications() {
  const certifications = [
    {
      id: 1,
      title: "Web Design and Development",
      issuer: "ICC Computer Education",
      date: "Issued: 2025",
      icon: "🎨",
      
    },
    {
      id: 2,
      title: "Node.js - Beginner to Advance Course with Projects",
      issuer: "Udemy",
      date: "Issued: 2025",
      
      icon: "💻",
      // Linked to Udemy homepage as demonstration
    },
  ];

  const achievements = [
    {
      id: 1,
      title: "Worked with Real Clients",
      description:
        "Successfully delivered client-focused web development projects, transforming business requirements into responsive, user-friendly, and high-performance websites with an emphasis on UI/UX, reliability, and maintainability.",
      tag: "Client Work",
      icon: "🤝",
    },
    {
      id: 2,
      title: "Hackathon Winner",
      description:
        "Secured 1st place in the GeeksforGeeks HackFest 2026 by developing an innovative software solution that demonstrated strong problem-solving, teamwork, and full-stack development skills under competitive time constraints.",
      tag: "Hackathon",
      icon: "🏆",
    },
    {
      id: 3,
      title: "Student Chairman",
      description:
        "Serving as the Student Chairman of the college Coding Club, organizing technical events, coding sessions, and hackathons while fostering collaboration and helping students strengthen their programming and development skills.",
      tag: "Leadership",
      icon: "👑",
    },
    {
      id: 4,
      title: "Organized College Hackathon – PieceCode 1.0",
      description:
        "Successfully organized PieceCode 1.0, a college-level hackathon that brought together student developers to collaborate, solve real-world challenges, and showcase innovative projects. Contributed to planning, coordination, participant management, and the overall execution.",
      tag: "Event",
      icon: "⚡",
    },
  ];

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
    <section id="Certifications" className="certifications-section">
      <div className="certifications-container">
        {/* Title */}
        <motion.h1
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Certifications & Achievements
        </motion.h1>

        {/* Dynamic Statistic Cards Grid */}
        <div className="cert-stats-grid">
          <StatItem number="2+" label="Professional Certifications" />
          <StatItem number="4+" label="Major Achievements" />
          <StatItem number="10+" label="Projects" />
          <StatItem number="5+" label="Client & College Projects" />
        </div>

        {/* Content Columns */}
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
                >
                  <div className="cert-icon">{cert.icon}</div>
                  <div className="cert-content">
                    <h3 className="cert-title">{cert.title}</h3>
                    <p className="cert-issuer">{cert.issuer}</p>
                    <p className="cert-date">{cert.date}</p>
                    
                    {cert.url && (
                      <div style={{ marginTop: "12px" }}>
                        {/* <a
                          href={cert.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="achievement-tag"
                          style={{
                            display: "inline-block",
                            cursor: "pointer",
                            fontSize: "0.7rem",
                            textDecoration: "none",
                            transition: "all 0.3s ease",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = "#00ffcc";
                            e.currentTarget.style.color = "#030303";
                            e.currentTarget.style.boxShadow = "0 0 10px rgba(0, 255, 204, 0.4)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = "rgba(0, 255, 204, 0.08)";
                            e.currentTarget.style.color = "#00ffcc";
                            e.currentTarget.style.boxShadow = "none";
                          }}
                        >
                          View Credential ↗
                        </a> */}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Achievements Column */}
          <div className="cert-column">
            <motion.h2
              className="column-title achievements-column-title"
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
                <div key={achievement.id} className="achievement-wrapper">
                  {/* Vertical Timeline Dot */}
                  <div className="achievement-dot" />

                  <motion.div
                    className="achievement-card"
                    variants={itemVariants}
                  >
                    <div className="achievement-icon">{achievement.icon}</div>
                    <div className="achievement-content">
                      <div className="achievement-header">
                        <h3 className="achievement-title">{achievement.title}</h3>
                        {achievement.tag && (
                          <span className="achievement-tag">{achievement.tag}</span>
                        )}
                      </div>
                      <p className="achievement-description">
                        {achievement.description}
                      </p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Certifications;
