import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import gsap from "gsap";
import "./AboutSection.css";

// 6 Faces of the Interactive Identity Cube
const facesData = [
  {
    title: "Creative Developer",
    icon: "🎨",
    description: "Crafting immersive, motion-rich, and visually stunning web experiences that blend art with technology.",
  },
  {
    title: "Problem Solver",
    icon: "🧩",
    description: "Analyzing complex algorithmic challenges, optimizing queries, and resolving backend performance bottlenecks.",
  },
  {
    title: "Product Builder",
    icon: "🚀",
    description: "Translating business requirements into robust, scalable, and user-centric SaaS products.",
  },
  {
    title: "Full Stack Engineer",
    icon: "💻",
    description: "Engineering seamless integrations between modern front-end interfaces and secure, high-performance backends.",
  },
  {
    title: "Team Leader",
    icon: "👥",
    description: "Empowering developer teams, organizing local hackathons, and managing project lifecycles collaboratively.",
  },
  {
    title: "Continuous Learner",
    icon: "📚",
    description: "Constantly exploring emerging AI technologies, cloud-native patterns, and creative development paradigms.",
  },
];

// Stats Item Component with Count-Up Animation
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
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
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

// 3D Rotating Identity Cube Component
const Cube = ({ activeFace, setActiveFace }) => {
  const cubeRef = useRef(null);
  
  // Rotation tracker
  const rotation = useRef({ x: -15, y: 45 });
  const isDragging = useRef(false);
  const isSnapping = useRef(false);
  const startPointer = useRef({ x: 0, y: 0 });
  const startRotation = useRef({ x: 0, y: 0 });
  const idleTimeout = useRef(null);

  // Speed parameters for slow idle rotation
  const autoRotateSpeedX = 0.05;
  const autoRotateSpeedY = 0.15;

  const updateActiveFace = (rx, ry) => {
    const radX = (rx * Math.PI) / 180;
    const radY = (ry * Math.PI) / 180;

    // Dot product with camera direction [0, 0, 1]
    const zFront = Math.cos(radX) * Math.cos(radY);
    const zRight = -Math.cos(radX) * Math.sin(radY);
    const zBack = -Math.cos(radX) * Math.cos(radY);
    const zLeft = Math.cos(radX) * Math.sin(radY);
    const zTop = -Math.sin(radX);
    const zBottom = Math.sin(radX);

    const faces = [
      { index: 0, z: zFront },
      { index: 1, z: zRight },
      { index: 2, z: zBack },
      { index: 3, z: zLeft },
      { index: 4, z: zTop },
      { index: 5, z: zBottom },
    ];

    faces.sort((a, b) => b.z - a.z);
    setActiveFace(faces[0].index);
  };

  useEffect(() => {
    let animationFrameId;

    const tick = () => {
      if (!isDragging.current && !isSnapping.current) {
        rotation.current.x += autoRotateSpeedX;
        rotation.current.y += autoRotateSpeedY;

        // Normalise rotations to prevent memory bloat or overflow
        rotation.current.x = ((rotation.current.x + 180) % 360) - 180;
        rotation.current.y = rotation.current.y % 360;

        if (cubeRef.current) {
          gsap.set(cubeRef.current, {
            rotationX: rotation.current.x,
            rotationY: rotation.current.y,
          });
        }
        
        // Custom normalization inside state tracking to avoid snapping calculations jitter
        const rxNorm = ((rotation.current.x + 180) % 360) - 180;
        const ryNorm = ((rotation.current.y + 180) % 360) - 180;
        updateActiveFace(rxNorm, ryNorm);
      }
      animationFrameId = requestAnimationFrame(tick);
    };

    animationFrameId = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(animationFrameId);
      if (idleTimeout.current) clearTimeout(idleTimeout.current);
    };
  }, []);

  const handlePointerDown = (e) => {
    isDragging.current = true;
    startPointer.current = { x: e.clientX, y: e.clientY };
    startRotation.current = { x: rotation.current.x, y: rotation.current.y };

    if (idleTimeout.current) clearTimeout(idleTimeout.current);

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);
  };

  const handlePointerMove = (e) => {
    if (!isDragging.current) return;

    const dx = e.clientX - startPointer.current.x;
    const dy = e.clientY - startPointer.current.y;

    const sensitivity = 0.45;
    let targetX = startRotation.current.x - dy * sensitivity;
    let targetY = startRotation.current.y + dx * sensitivity;

    // Constraint rotation to avoid pitch flipping issues
    targetX = Math.max(-75, Math.min(75, targetX));

    rotation.current.x = targetX;
    rotation.current.y = targetY;

    if (cubeRef.current) {
      gsap.set(cubeRef.current, {
        rotationX: targetX,
        rotationY: targetY,
      });
      
      const rxNorm = ((targetX + 180) % 360) - 180;
      const ryNorm = ((targetY + 180) % 360) - 180;
      updateActiveFace(rxNorm, ryNorm);
    }
  };

  const handlePointerUp = () => {
    isDragging.current = false;
    window.removeEventListener("pointermove", handlePointerMove);
    window.removeEventListener("pointerup", handlePointerUp);

    snapToFace(activeFace);
  };

  const snapToFace = (faceIndex) => {
    isSnapping.current = true;
    let targetX = 0;
    let targetY = 0;

    const currentY = rotation.current.y;

    switch (faceIndex) {
      case 0: // Front
        targetX = 0;
        targetY = Math.round(currentY / 360) * 360;
        break;
      case 1: // Right
        targetX = 0;
        targetY = Math.round((currentY + 90) / 360) * 360 - 90;
        break;
      case 2: // Back
        targetX = 0;
        targetY = Math.round((currentY + 180) / 360) * 360 - 180;
        break;
      case 3: // Left
        targetX = 0;
        targetY = Math.round((currentY - 90) / 360) * 360 + 90;
        break;
      case 4: // Top
        targetX = -90;
        targetY = Math.round(currentY / 90) * 90;
        break;
      case 5: // Bottom
        targetX = 90;
        targetY = Math.round(currentY / 90) * 90;
        break;
      default:
        break;
    }

    rotation.current.x = targetX;
    rotation.current.y = targetY;

    if (cubeRef.current) {
      gsap.to(cubeRef.current, {
        rotationX: targetX,
        rotationY: targetY,
        duration: 0.7,
        ease: "power2.out",
        overwrite: "auto",
        onComplete: () => {
          // Resume slow rotation after 4 seconds of idle time
          idleTimeout.current = setTimeout(() => {
            isSnapping.current = false;
          }, 4000);
        },
      });
    }
  };

  const handleFaceSelect = (index) => {
    if (idleTimeout.current) clearTimeout(idleTimeout.current);
    isDragging.current = false;
    isSnapping.current = true;
    setActiveFace(index);
    snapToFace(index);
  };

  return (
    <div className="cube-wrapper">
      <div
        className="cube-container"
        onPointerDown={handlePointerDown}
        style={{ cursor: isDragging.current ? "grabbing" : "grab" }}
      >
        <div className="cube" ref={cubeRef}>
          {facesData.map((face, index) => (
            <div
              key={index}
              className={`cube-face face-${index} ${index === activeFace ? "active" : ""}`}
            >
              <div className="face-content">
                <span className="face-icon">{face.icon}</span>
                <h4 className="face-title">{face.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Nav pill selectors */}
      <div className="cube-nav">
        {facesData.map((face, index) => (
          <button
            key={index}
            className={`cube-nav-btn ${index === activeFace ? "active" : ""}`}
            onClick={() => handleFaceSelect(index)}
            title={face.title}
          >
            {face.icon}
          </button>
        ))}
      </div>
    </div>
  );
};

function AboutSection() {
  const [activeFace, setActiveFace] = useState(0);

  const values = [
    {
      id: 1,
      title: "Innovation",
      description: "Building practical solutions by applying modern technologies to solve real-world problems.",
      icon: "💡",
    },
    {
      id: 2,
      title: "Quality",
      description: "Writing clean, scalable code with a strong focus on performance and user experience.",
      icon: "✨",
    },
    {
      id: 3,
      title: "Collaboration",
      description: "Believing in teamwork, open communication, and knowledge sharing to grow together.",
      icon: "🤝",
    },
    {
      id: 4,
      title: "Continuous Learning",
      description: "Dedicated to growing my skills and staying updated with emerging industry trends.",
      icon: "📚",
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
    <section id="About" className="about-section">
      <div className="about-container">
        {/* Upgrade 1: Section Heading */}
        <motion.h1
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Beyond The Code
        </motion.h1>

        <div className="about-grid">
          {/* Upgrade 2: Left Content */}
          <motion.div
            className="about-content"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="about-heading">
              Creative Full Stack Developer
            </h2>

            <div className="about-blocks">
              <div className="about-block">
                <span className="block-tag">Full Stack Development & SaaS</span>
                <p className="block-text">
                  Developing scalable web systems and modern <strong>SaaS platforms</strong> from database design to deployment, prioritizing optimization and security.
                </p>
              </div>
              <div className="about-block">
                <span className="block-tag">Enterprise & Problem Solving</span>
                <p className="block-text">
                  Engineering robust <strong>ERP systems</strong> that streamline business operations, solve complex architectural bottlenecks, and optimize execution.
                </p>
              </div>
              <div className="about-block">
                <span className="block-tag">Interactive UI & Growth</span>
                <p className="block-text">
                  Crafting premium, motion-rich frontend experiences while continuously growing toward <strong>creative development</strong>.
                </p>
              </div>
              <div className="about-block">
                <span className="block-tag">Leadership & Collaboration</span>
                <p className="block-text">
                  Empowering local development communities, leading college coding events, and organizing collaborative projects.
                </p>
              </div>
            </div>

            {/* Upgrade 5: Stats */}
            <div className="about-stats">
              <StatItem number="10+" label="Projects Built" />
              <StatItem number="5+" label="Client & College Projects" />
              <StatItem number="Hackathon" label="Winner" />
              <StatItem number="Student" label="Chairman" />
              <StatItem number="13+" label="Technologies" />
            </div>
          </motion.div>

          {/* Upgrade 3: Interactive Identity Cube Column */}
          <motion.div
            className="cube-column"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="cube-wrapper">
              <Cube activeFace={activeFace} setActiveFace={setActiveFace} />
              
              {/* Fade in/out active face description card */}
              <div className="cube-details-wrapper">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeFace}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="cube-details-panel"
                  >
                    <h3 className="details-title">{facesData[activeFace].title}</h3>
                    <p className="details-description">{facesData[activeFace].description}</p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Upgrade 4: Core Values */}
        <motion.div
          className="values-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
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
              >
                <div className="value-icon">{value.icon}</div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutSection;
