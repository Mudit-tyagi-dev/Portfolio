import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Home.css";
import profile from "./profile.png";
import TypingName from "./Typingname";
import { Button } from "../common/Button";

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const drawerRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // ESC key listener to close menu
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Lock scroll when open, including Lenis
  useEffect(() => {
    if (isOpen && isMobile) {
      document.body.style.overflow = "hidden";
      if (window.lenis) window.lenis.stop();
    } else {
      document.body.style.overflow = "";
      if (window.lenis) window.lenis.start();
    }
    return () => {
      document.body.style.overflow = "";
      if (window.lenis) window.lenis.start();
    };
  }, [isOpen, isMobile]);

  // Focus trap for accessibility when drawer is open
  useEffect(() => {
    if (!isOpen || !isMobile) return;

    // Focus the first interactive element (close button or link)
    const focusable = drawerRef.current?.querySelectorAll(
      'a[href], button, [tabindex]:not([tabindex="-1"])'
    );
    if (focusable && focusable.length > 0) {
      focusable[0].focus();
    }

    const trapFocus = (e) => {
      if (e.key !== "Tab") return;
      const elements = drawerRef.current?.querySelectorAll(
        'a[href], button, [tabindex]:not([tabindex="-1"])'
      );
      if (!elements || elements.length === 0) return;

      const firstEl = elements[0];
      const lastEl = elements[elements.length - 1];

      if (e.shiftKey) {
        // Shift + Tab (backwards)
        if (document.activeElement === firstEl) {
          lastEl.focus();
          e.preventDefault();
        }
      } else {
        // Tab (forwards)
        if (document.activeElement === lastEl) {
          firstEl.focus();
          e.preventDefault();
        }
      }
    };

    window.addEventListener("keydown", trapFocus);
    return () => {
      window.removeEventListener("keydown", trapFocus);
      // Return focus to trigger button
      if (triggerRef.current) {
        triggerRef.current.focus();
      }
    };
  }, [isOpen, isMobile]);

  return (
    <>
      <header className="header-container">
        {/* On desktop, show the standard navbar list */}
        {!isMobile && (
          <nav className="nav" aria-label="Main Navigation">
            <a href="#Experience">Experience</a>
            <a href="#Skills">Skills</a>
            <a href="#Projects">Projects</a>
            <a href="#About">About</a>
            <a href="#Certifications">Certifications</a>
            <a href="#Contact">Contact</a>
          </nav>
        )}

        {/* On mobile, show the header pill with toggle button */}
        {isMobile && (
          <div className="mobile-nav-bar">
            <span className="mobile-logo-text">Mudit Tyagi</span>
            <button 
              ref={triggerRef}
              className={`hamburger-toggle ${isOpen ? "open" : ""}`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
              aria-controls="mobile-drawer-menu"
            >
              <span className="hamburger-bar"></span>
              <span className="hamburger-bar"></span>
              <span className="hamburger-bar"></span>
            </button>
          </div>
        )}
      </header>

      <AnimatePresence>
        {isOpen && isMobile && (
          <>
            {/* Backdrop blur overlay */}
            <motion.div
              className="drawer-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />

            {/* Slide-out Drawer */}
            <motion.div
              id="mobile-drawer-menu"
              ref={drawerRef}
              className="drawer-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation Menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <div className="drawer-header">
                <span className="drawer-logo">Mudit Tyagi</span>
                <button 
                  className="drawer-close"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close menu"
                >
                  ✕
                </button>
              </div>

              <nav className="drawer-links" aria-label="Mobile Navigation">
                <a href="#Experience" onClick={() => setIsOpen(false)}>Experience</a>
                <a href="#Skills" onClick={() => setIsOpen(false)}>Skills</a>
                <a href="#Projects" onClick={() => setIsOpen(false)}>Projects</a>
                <a href="#About" onClick={() => setIsOpen(false)}>About</a>
                <a href="#Certifications" onClick={() => setIsOpen(false)}>Certifications</a>
                <a href="#Contact" onClick={() => setIsOpen(false)}>Contact</a>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <div className="home">
        <div className="content">
          <div className="data">
            <TypingName />
            <div className="data">
              <p className="sub-heading">
                Passionate web developer skilled in HTML, CSS, JavaScript,
                Node.js, and React. I build fast, modern, and responsive websites.
                Constantly learning, exploring backend, and diving into AI and
                machine learning.
              </p>
            </div>

            <div className="cta-group">
              <Button
                as="a"
                href="#Projects"
                variant="primary"
                size="lg"
                className="btn-link"
              >
                View Projects
              </Button>
              <Button
                as="a"
                href="/resume.pdf"
                download="Mudit-Tyagi-Resume.pdf"
                variant="secondary"
                size="lg"
                className="btn-link btn-download"
              >
                ↓ Download Resume
              </Button>
              <Button
                as="a"
                href="#Contact"
                variant="ghost"
                size="lg"
                className="btn-link "
                  style={{border: "1px solid rgb(0, 255, 204)"}}
              >
                Get in Touch
              </Button>
            </div>
            <div className="availability-badge">
              <span className="status-dot"></span>
              Available for Internship & Freelance Projects
            </div>
            <div className="logo">
              <a
                href="https://x.com/Mudit_Tyagi11"
                type="button"
                target="#"
                data-twe-ripple-init
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 512 512"
                    width="25px"
                    height="25px"
                  >
                    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                  </svg>
                </span>
              </a>
              <a
                href="https://www.linkedin.com/in/mudit-tyagi11/"
                target="#"
                type="button"
                data-twe-ripple-init
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 448 512"
                    width="25px"
                    height="25px"
                  >
                    <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                  </svg>
                </span>
              </a>

              <a
                href="https://github.com/Mudit-tyagi-dev/"
                target="#"
                type="button"
                data-twe-ripple-init
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 496 512"
                    width="25px"
                    height="25px"
                  >
                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
          <div className="profile">
            <img src={profile} alt="profile img" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
