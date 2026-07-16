import React, { useState, useEffect, useMemo, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FaReact, FaNodeJs, FaGitAlt, FaGithub, FaDocker, FaFigma, FaBootstrap } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiPostgresql, SiMongodb, SiDrizzle, SiVercel, SiFirebase, SiJavascript, SiFramer } from "react-icons/si";
import "./SkillsRefactored.css";

// Custom premium SVG for GSAP representing animated timeline layers and nodes
const GsapIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M3 5h18M3 12h18M3 19h18" strokeWidth="1.5" opacity="0.25" />
    <circle cx="6" cy="5" r="2.5" fill="currentColor" stroke="none" />
    <circle cx="12" cy="12" r="2.5" fill="currentColor" stroke="none" />
    <circle cx="18" cy="19" r="2.5" fill="currentColor" stroke="none" />
    <path d="M6 5l6 7 6 7" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

// Map official brand colors to icons (text remains white)
const brandColors = {
  "React": "#61DAFB",
  "Node.js": "#339933",
  "JavaScript": "#F7DF1E",
  "Tailwind CSS": "#06B6D4",
  "Tailwind": "#06B6D4",
  "Bootstrap": "#7952B3",
  "GSAP": "#88CE02",
  "Framer Motion": "#F024B6",
  "Express.js": "#FFFFFF",
  "Express": "#FFFFFF",
  "PostgreSQL": "#4169E1",
  "MongoDB": "#47A248",
  "Drizzle ORM": "#C5F74F",
  "Git": "#F05032",
  "GitHub": "#FFFFFF",
  "Vercel": "#FFFFFF",
  "Firebase": "#FFCA28",
  "Docker": "#2496ED",
  "Figma": "#F24E1E"
};

// Normalizing helper to sync hover states between left items and right cards
const isMatch = (nameA, nameB) => {
  if (!nameA || !nameB) return false;
  const a = nameA.toLowerCase().replace(".js", "").replace(" css", "").trim();
  const b = nameB.toLowerCase().replace(".js", "").replace(" css", "").trim();
  return a === b;
};

export default function SkillsRefactored() {
  const [activeSkill, setActiveSkill] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const rightColumnRef = useRef(null);

  // Parallax motion tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 100 };
  const xSpring = useSpring(mouseX, springConfig);
  const ySpring = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseMove = (e) => {
    if (isMobile || !rightColumnRef.current) return;
    const rect = rightColumnRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Normalized coordinates (-1 to 1) for parallax
    const x = e.clientX - rect.left - width / 2;
    const y = e.clientY - rect.top - height / 2;
    mouseX.set(x / (width / 2));
    mouseY.set(y / (height / 2));

    // Absolute percentages for background glow pointer variable
    const xPercent = ((e.clientX - rect.left) / width) * 100;
    const yPercent = ((e.clientY - rect.top) / height) * 100;
    rightColumnRef.current.style.setProperty("--mouse-x", `${xPercent}%`);
    rightColumnRef.current.style.setProperty("--mouse-y", `${yPercent}%`);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    if (rightColumnRef.current) {
      rightColumnRef.current.style.setProperty("--mouse-x", "50%");
      rightColumnRef.current.style.setProperty("--mouse-y", "50%");
    }
  };

  const categoriesData = [
    {
      id: "frontend",
      title: "Frontend",
      skills: [
        { name: "React", icon: <FaReact /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "Bootstrap", icon: <FaBootstrap /> },
        { name: "GSAP", icon: <GsapIcon /> },
        { name: "Framer Motion", icon: <SiFramer /> },
      ],
    },
    {
      id: "backend",
      title: "Backend",
      skills: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express.js", icon: <SiExpress /> },
      ],
    },
    {
      id: "database",
      title: "Database",
      skills: [
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "Drizzle ORM", icon: <SiDrizzle /> },
      ],
    },
    {
      id: "tools",
      title: "Tools",
      skills: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "GitHub", icon: <FaGithub /> },
        { name: "Vercel", icon: <SiVercel /> },
        { name: "Firebase", icon: <SiFirebase /> },
        { name: "Docker", icon: <FaDocker /> },
        { name: "Figma", icon: <FaFigma /> },
      ],
    },
  ];

  // 10 floating technologies with brand icons, names, and custom subtitles
  const floatingCards = [
    { name: "React", icon: <FaReact aria-hidden="true" />, subtitle: "Frontend Library" },
    { name: "Node.js", icon: <FaNodeJs aria-hidden="true" />, subtitle: "Runtime Environment" },
    { name: "JavaScript", icon: <SiJavascript aria-hidden="true" />, subtitle: "Language Core" },
    { name: "Tailwind", icon: <SiTailwindcss aria-hidden="true" />, subtitle: "Utility CSS" },
    { name: "PostgreSQL", icon: <SiPostgresql aria-hidden="true" />, subtitle: "Relational Database" },
    { name: "MongoDB", icon: <SiMongodb aria-hidden="true" />, subtitle: "NoSQL Database" },
    { name: "Figma", icon: <FaFigma aria-hidden="true" />, subtitle: "UI/UX Design" },
    { name: "Express", icon: <SiExpress aria-hidden="true" />, subtitle: "Backend Framework" },
    { name: "GSAP", icon: <GsapIcon aria-hidden="true" />, subtitle: "Rich Animations" },
    { name: "Docker", icon: <FaDocker aria-hidden="true" />, subtitle: "Containerization" }
  ];

  // Deterministic organic grids layout coordinates to prevent overlap and boundaries overflows
  const initialPositions = useMemo(() => {
    const slots = [
      { col: 0, row: 0 }, // React
      { col: 2, row: 0 }, // Node.js
      { col: 1, row: 1 }, // JavaScript
      { col: 2, row: 1 }, // Tailwind
      { col: 0, row: 2 }, // PostgreSQL
      { col: 1, row: 2 }, // MongoDB
      { col: 0, row: 1 }, // Figma
      { col: 2, row: 2 }, // Express
      { col: 0, row: 3 }, // GSAP
      { col: 1, row: 3 }  // Docker
    ];
    return slots.map((slot, i) => {
      // Deterministic trigonometric shift to make initial offsets look organic and randomized
      const offsetX = Math.sin(i * 1.7) * 4;
      const offsetY = Math.cos(i * 2.3) * 3;
      const left = slot.col * 33 + 7 + offsetX;
      const top = slot.row * 23 + 5 + offsetY;
      return {
        left: `${Math.max(2, Math.min(84, left))}%`,
        top: `${Math.max(2, Math.min(88, top))}%`
      };
    });
  }, []);

  // 10 distinct zero-gravity floating trajectories with varying bounds, speeds, and delays
  const floatAnimations = [
    { x: [0, 10, -7, 8, -4, 0], y: [0, -14, 10, -11, 14, 0], rotate: [0, 3, -2, 4, -1, 0], duration: 6.2, delay: 0.1 },
    { x: [0, -8, 12, -6, 8, 0], y: [0, 11, -9, 13, -7, 0], rotate: [0, -4, 2, -3, 3, 0], duration: 7.5, delay: 0.5 },
    { x: [0, 7, -11, 5, -8, 0], y: [0, -10, 14, -7, 11, 0], rotate: [0, 2, -3, 2, -2, 0], duration: 5.8, delay: 1.2 },
    { x: [0, -12, 8, -9, 5, 0], y: [0, 15, -7, 11, -8, 0], rotate: [0, -3, 3, -2, 2, 0], duration: 8.0, delay: 0.3 },
    { x: [0, 8, -12, 7, -6, 0], y: [0, -11, 15, -9, 8, 0], rotate: [0, 3, -3, 3, -2, 0], duration: 6.8, delay: 1.8 },
    { x: [0, -10, 7, -8, 11, 0], y: [0, 8, -12, 10, -11, 0], rotate: [0, -2, 3, -3, 3, 0], duration: 7.2, delay: 0.8 },
    { x: [0, 11, -8, 10, -10, 0], y: [0, -14, 8, -13, 7, 0], rotate: [0, 3, -3, 2, -1, 0], duration: 6.0, delay: 2.2 },
    { x: [0, -7, 10, -5, 8, 0], y: [0, 10, -14, 9, -13, 0], rotate: [0, -3, 2, -3, 3, 0], duration: 6.5, delay: 1.5 },
    { x: [0, 9, -6, 8, -8, 0], y: [0, -11, 9, -9, 11, 0], rotate: [0, 2, -2, 3, -2, 0], duration: 7.0, delay: 0.9 },
    { x: [0, -11, 11, -7, 9, 0], y: [0, 13, -11, 11, -9, 0], rotate: [0, -3, 3, -2, 4, 0], duration: 7.8, delay: 1.6 },
  ];

  return (
    <section id="Skills" className="skills-section" aria-labelledby="skills-heading">
      <div className="skills-container-layout">
        {/* LEFT COLUMN: Categorized list of technologies */}
        <div className="skills-left-column">
          <div className="skills-header-wrapper">
            <h2 id="skills-heading" className="skills-title-arsenal">Tech Arsenal</h2>
            <p className="skills-subtitle-arsenal">
              The technologies I use to build scalable, high-performance web applications.
            </p>
          </div>

          <div className="skills-categories-grid">
            {categoriesData.map((category) => (
              <div key={category.id} className="skills-category-group">
                <h3 className="category-group-title">{category.title}</h3>
                <div className="category-group-list">
                  {category.skills.map((skill) => {
                    const isItemHighlighted = activeSkill && isMatch(skill.name, activeSkill);
                    
                    return (
                      <div 
                        key={skill.name} 
                        className={`category-skill-item ${isItemHighlighted ? "item-active" : ""}`}
                        tabIndex={0}
                        aria-label={`${skill.name} technology`}
                        onMouseEnter={() => setActiveSkill(skill.name)}
                        onMouseLeave={() => setActiveSkill(null)}
                        onFocus={() => setActiveSkill(skill.name)}
                        onBlur={() => setActiveSkill(null)}
                      >
                        <span 
                          className="category-skill-icon" 
                          style={{ color: brandColors[skill.name] || "currentColor" }}
                          aria-hidden="true"
                        >
                          {skill.icon}
                        </span>
                        <span className="category-skill-name">{skill.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: Anti-gravity Floating Cards Panel */}
        <div 
          ref={rightColumnRef}
          className="skills-right-column" 
          aria-label="Floating Interactive Technology Overview"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {/* subtle radial cyan tracker glow */}
          <div className="radial-glow-tracker" aria-hidden="true" />
          
          {/* Subtle Grid dots overlay in background */}
          <div className="floating-field-bg" aria-hidden="true" />
          
          <div className="floating-field-container">
            {floatingCards.map((card, index) => {
              const isCardActive = activeSkill && isMatch(card.name, activeSkill);
              const float = floatAnimations[index % floatAnimations.length];

              const shouldAnimate = !isMobile && !shouldReduceMotion;

              // Generate custom depth scale multiplier per card for premium 3D Parallax feel
              const depthFactor = 5 + (index % 3) * 2; // outputs 5px, 7px, 9px parallax offsets
              
              // Parallax transformations mapped from spring variables
              const cardX = useTransform(xSpring, [-1, 1], [-depthFactor, depthFactor]);
              const cardY = useTransform(ySpring, [-1, 1], [-depthFactor, depthFactor]);

              // Continuous float animation loop or hover paused target positions
              const motionProps = shouldAnimate 
                ? {
                    animate: isCardActive 
                      ? {
                          scale: 1.06,
                          x: 0,
                          y: 0,
                          rotate: 0,
                        }
                      : {
                          scale: 1,
                          x: float.x,
                          y: float.y,
                          rotate: float.rotate,
                        },
                    transition: isCardActive
                      ? { duration: 0.35, ease: "easeOut" }
                      : {
                          x: {
                            duration: float.duration,
                            repeat: Infinity,
                            repeatType: "mirror",
                            ease: "easeInOut",
                            delay: float.delay
                          },
                          y: {
                            duration: float.duration + 0.5,
                            repeat: Infinity,
                            repeatType: "mirror",
                            ease: "easeInOut",
                            delay: float.delay
                          },
                          rotate: {
                            duration: float.duration + 1,
                            repeat: Infinity,
                            repeatType: "mirror",
                            ease: "easeInOut",
                            delay: float.delay
                          },
                          scale: { duration: 0.25 }
                        }
                  }
                : {
                    // Mobile/reduced-motion fallback
                    animate: { scale: isCardActive ? 1.06 : 1 },
                    transition: { duration: 0.2 }
                  };

              return (
                <motion.div
                  key={card.name}
                  className="floating-card-parallax-wrapper"
                  style={{
                    position: "absolute",
                    left: initialPositions[index].left,
                    top: initialPositions[index].top,
                    x: shouldAnimate ? cardX : 0,
                    y: shouldAnimate ? cardY : 0,
                    zIndex: isCardActive ? 50 : 10,
                  }}
                >
                  <motion.div
                    className={`floating-card ${isCardActive ? "hovered" : ""}`}
                    {...motionProps}
                    onMouseEnter={() => setActiveSkill(card.name)}
                    onMouseLeave={() => setActiveSkill(null)}
                    onFocus={() => setActiveSkill(card.name)}
                    onBlur={() => setActiveSkill(null)}
                    tabIndex={isMobile ? -1 : 0}
                    aria-label={`${card.name} (${card.subtitle})`}
                  >
                    <div className="floating-card-glow" aria-hidden="true" />
                    <div className="floating-card-inner">
                      {/* Icon with brand colors which rotates slightly on hover */}
                      <motion.span 
                        className="floating-card-icon" 
                        style={{ color: brandColors[card.name] || "currentColor" }}
                        animate={{ rotate: isCardActive ? 15 : 0 }}
                        transition={{ duration: 0.3 }}
                        aria-hidden="true"
                      >
                        {card.icon}
                      </motion.span>
                      
                      <div className="floating-card-text-wrapper">
                        <span className="floating-card-name">{card.name}</span>
                        
                        {/* Subtitle displays on hover */}
                        <AnimatePresence>
                          {isCardActive && (
                            <motion.span
                              className="floating-card-subtitle"
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 0.7, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.25, ease: "easeOut" }}
                            >
                              {card.subtitle}
                            </motion.span>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
