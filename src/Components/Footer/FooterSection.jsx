import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";
import "./FooterSection.css";

function FooterSection() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#About" },
    { label: "Projects", href: "#Projects" },
    { label: "Skills", href: "#Skills" },
    { label: "Contact", href: "#Contact" },
  ];

  const socialLinks = [
    {
      icon: FiGithub,
      url: "https://github.com/Mudit-tyagi-dev",
      label: "GitHub",
    },
    {
      icon: FiLinkedin,
      url: "https://www.linkedin.com/in/mudit-tyagi11/",
      label: "LinkedIn",
    },
    {
      icon: FiTwitter,
      url: "https://x.com/Mudit_Tyagi11",
      label: "Twitter",
    },
    {
      icon: FiMail,
      url: "mailto:mudittyagi.dev@gmail.com",
      label: "Email",
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
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-content">
          {/* Brand Section */}
          <motion.div
            className="footer-brand"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="brand-name">Mudit Tyagi</h3>
            <p className="brand-description">Full Stack Developer | Web Enthusiast | Tech Innovator</p>
            <p className="brand-tagline">Building amazing web experiences.</p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="footer-section-column"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="footer-section-title">Quick Links</h4>
            <motion.ul
              className="footer-links"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {quickLinks.map((link, index) => (
                <motion.li key={index} variants={itemVariants}>
                  <a href={link.href} className="footer-link">
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Services */}
          <motion.div
            className="footer-section-column"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="footer-section-title">Services</h4>
            <ul className="footer-links">
              <li>
                <a href="#" className="footer-link">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Full Stack Solutions
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  API Development
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Consulting
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="footer-section-column"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="footer-section-title">Connect</h4>
            <motion.div
              className="footer-social-links"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social-link"
                    aria-label={`${social.label} Profile`}
                    variants={itemVariants}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.95 }}
                    title={social.label}
                  >
                    <IconComponent size={20} />
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="footer-copyright">
            &copy; {currentYear} Mudit Tyagi. All rights reserved. | Designed & Built with <span className="heart">♥</span> by
            Mudit
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

export default FooterSection;
