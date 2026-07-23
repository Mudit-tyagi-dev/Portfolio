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

// Custom premium wireframe triangulated prism SVG for Three.js
const ThreejsIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 7v10l10 5V12L2 7z" />
    <path d="M22 7v10l-10 5V12l10-5z" />
  </svg>
);

// Map official brand colors to icons (text remains white)
const brandColors = {
  "React": "#61DAFB",
  "React Three Fiber": "#61DAFB",
  "Node.js": "#339933",
  "JavaScript": "#F7DF1E",
  "Three.js": "#FFFFFF",
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
        { name: "Bootstrap", icon: <FaBootstrap /> }
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
      id: "creative",
      title: "Creative Development",
      skills: [
        { name: "GSAP", icon: <GsapIcon /> },
        { name: "Framer Motion", icon: <SiFramer /> },
        { name: "Three.js", icon: <ThreejsIcon />, label: "Coming Soon" },
        { name: "React Three Fiber", icon: <FaReact />, label: "Learning" }
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

  // 12 floating technologies with brand icons, names, sizes, and custom subtitles
  const floatingCards = [
    { name: "React", icon: <FaReact aria-hidden="true" />, subtitle: "Frontend Library", size: "lg" },
    { name: "Node.js", icon: <FaNodeJs aria-hidden="true" />, subtitle: "Runtime Environment", size: "lg" },
    { name: "JavaScript", icon: <SiJavascript aria-hidden="true" />, subtitle: "Language Core", size: "lg" },
    { name: "Three.js", icon: <ThreejsIcon aria-hidden="true" />, subtitle: "3D Graphics", size: "lg" },
    { name: "GSAP", icon: <GsapIcon aria-hidden="true" />, subtitle: "Rich Animations", size: "md" },
    { name: "Framer Motion", icon: <SiFramer aria-hidden="true" />, subtitle: "Physics Motion", size: "md" },
    { name: "Tailwind CSS", icon: <SiTailwindcss aria-hidden="true" />, subtitle: "Utility CSS", size: "md" },
    { name: "PostgreSQL", icon: <SiPostgresql aria-hidden="true" />, subtitle: "Relational Database", size: "md" },
    { name: "MongoDB", icon: <SiMongodb aria-hidden="true" />, subtitle: "NoSQL Database", size: "md" },
    { name: "Drizzle ORM", icon: <SiDrizzle aria-hidden="true" />, subtitle: "TypeScript ORM", size: "sm" },
    { name: "Docker", icon: <FaDocker aria-hidden="true" />, subtitle: "Containerization", size: "sm" },
    { name: "Vercel", icon: <SiVercel aria-hidden="true" />, subtitle: "Deployment", size: "sm" }
  ];

  // Deterministic layout coordinates across 4 rows and 3 columns to prevent overlaps
  const initialPositions = useMemo(() => {
    const slots = [
      { col: 0, row: 0 }, // React (lg)
      { col: 2, row: 0 }, // Node.js (lg)
      { col: 1, row: 1 }, // JavaScript (lg)
      { col: 1, row: 0 }, // Three.js (lg)
      { col: 0, row: 1 }, // GSAP (md)
      { col: 2, row: 1 }, // Framer Motion (md)
      { col: 2, row: 2 }, // Tailwind (md)
      { col: 0, row: 2 }, // PostgreSQL (md)
      { col: 1, row: 2 }, // MongoDB (md)
      { col: 0, row: 3 }, // Drizzle ORM (sm)
      { col: 1, row: 3 }, // Docker (sm)
      { col: 2, row: 3 }  // Vercel (sm)
    ];
    return slots.map((slot, i) => {
      // Deterministic offsets for a premium organic feel
      const offsetX = Math.sin(i * 1.7) * 3;
      const offsetY = Math.cos(i * 2.3) * 2;
      const left = slot.col * 31 + 6 + offsetX;
      const top = slot.row * 22 + 4 + offsetY;
      return {
        left: `${Math.max(2, Math.min(84, left))}%`,
        top: `${Math.max(2, Math.min(86, top))}%`
      };
    });
  }, []);

  // 12 distinct trajectories with slow speeds (slowing times to 10s-13s) for a premium low-gravity floating feel
  const floatAnimations = [
    { x: [0, 6, -4, 5, -2, 0], y: [0, -8, 6, -7, 8, 0], rotate: [0, 2, -1, 2, -1, 0], duration: 10.2, delay: 0.1 },
    { x: [0, -5, 8, -4, 5, 0], y: [0, 7, -5, 8, -4, 0], rotate: [0, -2, 1, -2, 2, 0], duration: 12.5, delay: 0.5 },
    { x: [0, 4, -7, 3, -5, 0], y: [0, -6, 9, -4, 7, 0], rotate: [0, 1, -2, 1, -1, 0], duration: 9.8, delay: 1.2 },
    { x: [0, -8, 5, -6, 3, 0], y: [0, 10, -4, 7, -5, 0], rotate: [0, -2, 2, -1, 1, 0], duration: 13.0, delay: 0.3 },
    { x: [0, 5, -8, 4, -4, 0], y: [0, -7, 10, -6, 5, 0], rotate: [0, 2, -2, 2, -1, 0], duration: 11.2, delay: 1.8 },
    { x: [0, -6, 4, -5, 7, 0], y: [0, 5, -8, 6, -7, 0], rotate: [0, -1, 2, -2, 2, 0], duration: 11.8, delay: 0.8 },
    { x: [0, 7, -5, 6, -6, 0], y: [0, -9, 5, -8, 4, 0], rotate: [0, 2, -2, 1, -1, 0], duration: 10.0, delay: 2.2 },
    { x: [0, -4, 6, -3, 5, 0], y: [0, 6, -9, 6, -8, 0], rotate: [0, -2, 1, -2, 2, 0], duration: 10.8, delay: 1.5 },
    { x: [0, 6, -4, 5, -5, 0], y: [0, -7, 6, -6, 7, 0], rotate: [0, 1, -1, 2, -1, 0], duration: 11.5, delay: 0.9 },
    { x: [0, -7, 7, -4, 6, 0], y: [0, 8, -7, 7, -6, 0], rotate: [0, -2, 2, -1, 2, 0], duration: 12.8, delay: 1.6 },
    { x: [0, 5, -6, 4, -3, 0], y: [0, -8, 7, -5, 6, 0], rotate: [0, 1, -2, 1, -1, 0], duration: 10.5, delay: 0.7 },
    { x: [0, -6, 8, -5, 4, 0], y: [0, 9, -6, 8, -6, 0], rotate: [0, -2, 1, -2, 1, 0], duration: 12.2, delay: 1.1 },
  ];

  return (
    <section id="Skills" className="skills-section" aria-labelledby="skills-heading">
      <div className="skills-container-layout">
        {/* LEFT COLUMN: Categorized list of technologies */}
        <div className="skills-left-column">
          <div className="skills-header-wrapper">
            <h2 id="skills-heading" className="skills-title-arsenal">Technology Ecosystem</h2>
            <p className="skills-subtitle-arsenal">
              Every technology in my stack is carefully selected to build scalable SaaS platforms, business systems, and immersive digital experiences.
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
                        <span className="category-skill-name">
                          {skill.name}
                          {skill.label && (
                            <span className="skill-status-tag">{skill.label}</span>
                          )}
                        </span>
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
              const depthFactor = 6 + (index % 3) * 2; // outputs 6px, 8px, 10px parallax offsets
              
              // Parallax transformations mapped from spring variables
              const cardX = useTransform(xSpring, [-1, 1], [-depthFactor, depthFactor]);
              const cardY = useTransform(ySpring, [-1, 1], [-depthFactor, depthFactor]);

              // Continuous float animation loop or hover paused target positions
              const motionProps = shouldAnimate 
                ? {
                    animate: isCardActive 
                      ? {
                          scale: 1.08,
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
                      ? { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
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
                    className={`floating-card size-${card.size} ${isCardActive ? "hovered" : ""}`}
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
                      {/* Icon with brand colors which rotates and scales slightly on hover */}
                      <motion.span 
                        className="floating-card-icon" 
                        style={{ color: brandColors[card.name] || "currentColor" }}
                        animate={{ 
                          rotate: isCardActive ? 12 : 0,
                          scale: isCardActive ? 1.15 : 1
                        }}
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
                              animate={{ opacity: 0.75, height: "auto" }}
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
