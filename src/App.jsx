import React, { useState, useEffect } from "react";
import Lenis from "lenis";
import { motion, } from "framer-motion";
// import Lenis from "@studio-freight/lenis";

import Intro from "./Intro/Intro.jsx";
import Background from "./Intro/Background.jsx";

import Home from "./Components/Home/Home.jsx";
import ProfessionalJourney from "./Components/ProfessionalJourney/ProfessionalJourney.jsx";
import SkillsRefactored from "./Components/Skills/SkillsRefactored.jsx";
import ProjectsSection from "./Components/Projects/ProjectsSection.jsx";
import AboutSection from "./Components/About/AboutSection.jsx";
import Certifications from "./Components/Certifications/Certifications.jsx";
import ContactSection from "./Components/Contact/ContactSection.jsx";
import FooterSection from "./Components/Footer/FooterSection.jsx";

import "./App.css";

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    window.lenis = lenis;

    let rafId;

    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      window.lenis = null;
    };
  }, []);

  return (
    // <div className="app-wrapper">
    //   <Background />

    //   {/* <AnimatePresence mode="wait">
    //     {showIntro ? (
    //       <Intro key="intro" onFinish={() => setShowIntro(false)} />
    //     ) : (
          
    //     )}
    //   </AnimatePresence> */}
    //   <motion.div
    //         key="main"
    //         initial={{ scale: 1, opacity: 0 }}
    //         animate={{ scale: 1, opacity: 1 }}
    //         // transition={{ duration: 1 }}
    //       >
    //         <Home />
    //         <ProfessionalJourney />
    //         <SkillsRefactored />
    //         <ProjectsSection />
    //         <AboutSection />
    //         <Certifications />
    //         <ContactSection />
    //         <FooterSection />
    //       </motion.div>
    // </div>
 <div className="app-wrapper">
    <Background />

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Home />
      <ProfessionalJourney />
      <SkillsRefactored />
      <ProjectsSection />
      <AboutSection />
      <Certifications />
      <ContactSection />
      <FooterSection />
    </motion.div>
  </div>
  );
}
