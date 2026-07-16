import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./ProfessionalJourney.css";

function ProfessionalJourney() {
  const [activeTab, setActiveTab] = useState("freelance");

  const journeyData = {
    freelance: {
      title: "Freelance Projects",
      subtitle: "Building web solutions for clients",
      items: [
        {
          id: 1,
          name: "Vipin Tyagi and Company (law Firm)",
          description: "Developed a responsive website for a law firm, enhancing their online presence and client engagement.",
          year: "2026",
          technologies: ["React", "GSAP", "Tailwind CSS", "Framer Motion", "Express.js", "Node.js"],
          status: "Completed",
          contributions: [
            "Designed and developed a fully responsive React frontend with fluid GSAP animations",
            "Implemented a secure backend using Node.js and Express.js to handle client inquiries",
            "Optimized website assets and structure, achieving a perfect Google Lighthouse performance score",
            "Integrated a customized contact form with automated email notifications for new queries"
          ]
        }
      ],
    },
    hackathons: {
      title: "Hackathon Achievements",
      subtitle: "Competition and innovation experience",
      items: [
        {
          id: 1,
          name: "HackFest 2026",
          description: "Winner of GeeksforGeeks HackFest 2026, developed an innovative solution for real-time data visualization.",
          year: "2026",
          technologies: ["React", "Tailwind CSS", "Zustand", "chartjs", "FAST API"],
          status: "Ranked 1st",
          contributions: [
            "Architected and built the React frontend utilizing Chart.js for real-time visual analytics",
            "Implemented dynamic global state management using Zustand to handle streaming data",
            "Integrated FastAPI backend endpoints with minimal latency and high throughput",
            "Presented the project to industry leaders, securing 1st place among 100+ competing teams"
          ]
        },
      ],
    },
    leadership: {
      title: "College Coding Club",
      subtitle: "Community and mentorship experience",
      items: [
        {
          id: 1,
          name: "Student Chairman – Coding Club",
          description: "Conducted weekly workshops teaching modern web development to 50+ students.",
          year: "2025 – Present",
          technologies: ["Team Management", "Event Planning", "Technical Training"],
          status: "🟢Currently Active",
          contributions: [
           "Led the college Coding Club as Student Chairman",
            "Organized coding workshops and technical sessions",
            "Mentored students in web development and programming",
            "Planned and managed club activities and events",
          ]
        },
        {
          id: 2,
          name: "Organizer – PieceCode 1.0 Hackathon",
          description: "Successfully organized PieceCode 1.0, a college-level hackathon that brought together student developers to solve real-world challenges. Managed event planning, participant coordination, registrations, judging logistics, and overall execution while creating an engaging learning environment.",
          year: "2025",
          technologies: ["Hackathon", "Event Management","Leadership","Community"],
          status: "Completed",
          contributions: [
           " Organized PieceCode 1.0 from planning to execution",
           "Coordinated participants, mentors, and judges",
           "Managed registrations and event operations",
           "Promoted collaborative learning and innovation",
          ]
        },
      ],
    },
 
  };

  const tabs = [
    { id: "freelance", label: "Freelance", icon: "💼" },
    { id: "hackathons", label: "Hackathons", icon: "🚀" },
    { id: "leadership", label: "Leadership", icon: "👥" },
  ];

  const tabIconVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: {
      scale: 1.2,
      rotate: [0, -10, 10, -10, 0],
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 15,
      },
    },
    hover: {
      y: -6,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  };

  const dotVariants = {
    initial: {
      scale: 1,
      backgroundColor: "rgba(0, 0, 0, 1)",
      borderColor: "rgba(0, 255, 204, 0.4)",
      boxShadow: "0 0 0px rgba(0, 255, 204, 0)",
    },
    hover: {
      scale: 1.4,
      backgroundColor: "#00ffcc",
      borderColor: "#00ffcc",
      boxShadow: "0 0 12px rgba(0, 255, 204, 0.8)",
      transition: { duration: 0.3 },
    },
  };

  const lineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const contributionsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const contributionItemVariants = {
    hidden: { opacity: 0, x: -12 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <section id="Experience" className="journey-section">
      <div className="journey-container">
        {/* Header */}
        <motion.div
          className="journey-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="journey-title">Professional Journey</h2>
          <p className="journey-subtitle">
            My path through freelance projects, competitions, leadership, and continuous learning
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="journey-tabs-wrapper">
          <div className="journey-tabs" role="tablist" aria-label="Professional Journey Categories">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  className={`journey-tab ${isActive ? "active" : ""}`}
                  onClick={() => setActiveTab(tab.id)}
                  aria-selected={isActive}
                  role="tab"
                  tabIndex={0}
                  aria-controls={`panel-${tab.id}`}
                  id={`tab-${tab.id}`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-tab-bg"
                      className="active-tab-bg"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  
                  <motion.span
                    className="tab-icon"
                    variants={tabIconVariants}
                    animate={isActive ? "hover" : "initial"}
                    whileHover="hover"
                  >
                    {tab.icon}
                  </motion.span>
                  <span className="tab-label">{tab.label}</span>
                  
                  {isActive && (
                    <motion.div
                      layoutId="active-tab-underline"
                      className="active-tab-underline"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Content */}
        <div className="journey-content-wrapper">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              id={`panel-${activeTab}`}
              role="tabpanel"
              aria-labelledby={`tab-${activeTab}`}
              className="journey-content"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="content-header">
                <h3 className="content-title">{journeyData[activeTab].title}</h3>
                <p className="content-subtitle">{journeyData[activeTab].subtitle}</p>
              </div>

              <motion.div
                className="journey-items"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
              >
                {journeyData[activeTab].items.map((item) => {
                  const isOngoing = item.status.toLowerCase() === "ongoing";
                  
                  return (
                    <motion.div
                      key={item.id}
                      className="journey-item"
                      variants={cardVariants}
                      whileHover="hover"
                    >
                      {/* High performance hover glow background */}
                      <div className="card-glow-overlay" />
                      
                      {/* Left Subtle Timeline Segment */}
                      <div className="item-timeline">
                        <motion.div 
                          className="timeline-dot" 
                          variants={dotVariants}
                          initial="initial"
                        />
                        <motion.div 
                          className="timeline-line" 
                          variants={lineVariants}
                          style={{ originY: 0 }}
                        />
                      </div>

                      {/* Card Content Column */}
                      <div className="item-details">
                        <div className="item-header">
                          <div className="item-title-row">
                            <h4 className="item-name">{item.name}</h4>
                            <p className="item-year">{item.year}</p>
                          </div>
                          <span className={`item-status status-${item.status.toLowerCase().replace(/\s+/g, "-")}`}>
                            {isOngoing ? (
                              <>
                                <span className="pulse-dot" />
                                Currently Active
                              </>
                            ) : (
                              item.status
                            )}
                          </span>
                        </div>
                        
                        <p className="item-description">{item.description}</p>
                        
                        {/* Key Contributions */}
                        {item.contributions && item.contributions.length > 0 && (
                          <div className="item-contributions-section">
                            <h5 className="contributions-heading">Key Contributions</h5>
                            <motion.ul 
                              className="contributions-list"
                              variants={contributionsContainerVariants}
                            >
                              {item.contributions.map((contribution, cIdx) => (
                                <motion.li 
                                  key={cIdx} 
                                  className="contribution-item"
                                  variants={contributionItemVariants}
                                >
                                  <span className="contribution-icon">✓</span>
                                  <span className="contribution-text">{contribution}</span>
                                </motion.li>
                              ))}
                            </motion.ul>
                          </div>
                        )}
                        
                        {/* Technologies Tags */}
                        <div className="item-tech">
                          {item.technologies.map((tech, idx) => (
                            <motion.span 
                              key={idx} 
                              className="tech-badge"
                              whileHover={{
                                scale: 1.08,
                                y: -2,
                                color: "#ffffff",
                                backgroundColor: "rgba(0, 255, 204, 0.15)",
                                borderColor: "rgba(0, 255, 204, 0.6)",
                              }}
                              transition={{ type: "spring", stiffness: 300, damping: 15 }}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default ProfessionalJourney;
