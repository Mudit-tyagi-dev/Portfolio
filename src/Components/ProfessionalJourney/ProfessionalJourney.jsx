import React, { useState } from "react";
import { motion } from "framer-motion";
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
          description: "Developed a responsive website for a law firm, enhancing their online presence and client engagement",
          year: "2026",
          technologies: ["React", "GSAP", "Tailwind CSS","Framer Motion","Express.js","Node.js"],
          status: "Completed",
        },
        // {
        //   id: 2,
        //   name: "Portfolio Website Redesign",
        //   description: "Redesigned and optimized a corporate portfolio website with modern UI/UX",
        //   year: "2023-2024",
        //   technologies: ["Next.js", "Tailwind CSS", "Vercel"],
        //   status: "Completed",
        // },
      ],
    },
    hackathons: {
      title: "Hackathon Achievements",
      subtitle: "Competition and innovation experience",
      items: [
        {
          id: 1,
          name: "HackFest 2026 ",
          description: "Winner of GeeksforGeeks HackFest 2026, developed an innovative solution for real-time data visualization",
          year: "2026",
          technologies: ["React", "Tailwind CSS","Zustand","chartjs","FAST API"],
          status: "Ranked 1st",
        },
      ],
    },
    leadership: {
      title: "College Coding Club",
      subtitle: "Community and mentorship experience",
      items: [
        {
          id: 1,
          name: "Web Development Workshop Lead",
          description: "Conducted weekly workshops teaching modern web development to 50+ students",
          year: "2023-2024",
          technologies: ["React", "JavaScript"],
          status: "Ongoing",
        },
        {
          id: 2,
          name: "Technical Content Creator",
          description: "Created technical documentation and guides for club members",
          year: "2023",
          technologies: ["Documentation", "Content Creation"],
          status: "Completed",
        },
      ],
    },
    personal: {
      title: "Personal Projects",
      subtitle: "Self-initiated learning and exploration",
      items: [
        {
          id: 1,
          name: "Full Stack Portfolio Website",
          description: "Built this portfolio website showcasing skills and projects",
          year: "2024",
          technologies: ["React", "Node.js", "Framer Motion"],
          status: "Ongoing",
        },
        {
          id: 2,
          name: "Open Source Contributions",
          description: "Contributing to open source projects and learning from community",
          year: "2023-2024",
          technologies: ["JavaScript", "Git"],
          status: "Ongoing",
        },
      ],
    },
    learning: {
      title: "Learning Journey",
      subtitle: "Continuous skill development",
      items: [
        {
          id: 1,
          name: "Advanced React Patterns",
          description: "Mastered advanced React concepts including hooks, context, and performance optimization",
          year: "2024",
          technologies: ["React", "Performance"],
          status: "Completed",
        },
        {
          id: 2,
          name: "Backend Development",
          description: "Deep dive into Node.js, Express, and database design",
          year: "2023-2024",
          technologies: ["Node.js", "Express", "Databases"],
          status: "Ongoing",
        },
        {
          id: 3,
          name: "Cloud & DevOps",
          description: "Learning deployment, Docker, and cloud platforms",
          year: "2024",
          technologies: ["Docker", "Vercel", "CI/CD"],
          status: "Ongoing",
        },
      ],
    },
  };

  const tabs = [
    { id: "freelance", label: "Freelance", icon: "💼" },
    { id: "hackathons", label: "Hackathons", icon: "🚀" },
    { id: "leadership", label: "Leadership", icon: "👥" },
    { id: "personal", label: "Personal Projects", icon: "🛠️" },
    { id: "learning", label: "Learning", icon: "📚" },
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
        <div className="journey-tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`journey-tab ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
              aria-selected={activeTab === tab.id}
              role="tab"
            >
              <span className="tab-icon">{tab.icon}</span>
              <span className="tab-label">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <motion.div
          className="journey-content"
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="content-header">
            <h3 className="content-title">{journeyData[activeTab].title}</h3>
            <p className="content-subtitle">{journeyData[activeTab].subtitle}</p>
          </div>

          <motion.div
            className="journey-items"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {journeyData[activeTab].items.map((item) => (
              <motion.div
                key={item.id}
                className="journey-item"
                variants={itemVariants}
              >
                <div className="item-header">
                  <div>
                    <h4 className="item-name">{item.name}</h4>
                    <p className="item-year">{item.year}</p>
                  </div>
                  <span className={`item-status status-${item.status.toLowerCase().replace(" ", "-")}`}>
                    {item.status}
                  </span>
                </div>
                <p className="item-description">{item.description}</p>
                <div className="item-tech">
                  {item.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default ProfessionalJourney;
