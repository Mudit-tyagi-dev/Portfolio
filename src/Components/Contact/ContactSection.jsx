import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import "./ContactSection.css";

function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const contactInfo = [
    {
      id: 1,
      icon: FiMail,
      label: "Email",
      value: "mudittyagi.dev@gmail.com",
      link: "mailto:mudit@example.com",
    },
    {
      id: 2,
      icon: FiPhone,
      label: "Phone",
      value: "+91 9058192304",
      link: "tel:+919058192304",
    },
    {
      id: 3,
      icon: FiMapPin,
      label: "Location",
      value: "India",
      link: "#",
    },
  ];

  const socialLinks = [
    {
      id: 1,
      icon: FiGithub,
      label: "GitHub",
      url: "https://github.com/Mudit-tyagi-dev",
    },
    {
      id: 2,
      icon: FiLinkedin,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/mudit-tyagi11/",
    },
    {
      id: 3,
      icon: FiTwitter,
      label: "Twitter",
      url: "https://x.com/Mudit_Tyagi11",
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
    <section id="Contact" className="contact-section">
      <div className="contact-container">
        <motion.h1
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Get In Touch
        </motion.h1>

        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Have a project in mind? I&apos;d love to hear from you. Let&apos;s collaborate and create something amazing together.
        </motion.p>

        <div className="contact-grid">
          {/* Contact Information */}
          <motion.div
            className="contact-info-wrapper"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="contact-info-title">Contact Information</h2>

            <motion.div
              className="contact-info-list"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {contactInfo.map((info) => {
                const IconComponent = info.icon;
                return (
                  <motion.a
                    key={info.id}
                    href={info.link}
                    className="contact-info-item"
                    variants={itemVariants}
                    whileHover={{ translateX: 8 }}
                  >
                    <div className="info-icon">
                      <IconComponent size={24} />
                    </div>
                    <div className="info-content">
                      <p className="info-label">{info.label}</p>
                      <p className="info-value">{info.value}</p>
                    </div>
                  </motion.a>
                );
              })}
            </motion.div>

            {/* Social Links */}
            <div className="social-section">
              <h3 className="social-title">Connect With Me</h3>
              <motion.div
                className="social-links"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={social.id}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                      aria-label={`${social.label} Profile`}
                      variants={itemVariants}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <IconComponent size={20} />
                    </motion.a>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="contact-form-wrapper"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="form-title">Send Me a Message</h2>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your name"
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Project inquiry"
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project..."
                  rows="5"
                  required
                  className="form-textarea"
                />
              </div>

              <motion.button
                type="submit"
                className="submit-button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {submitted ? "Message Sent!" : "Send Message"}
              </motion.button>

              {submitted && <p className="success-message">Thank you! I'll get back to you soon.</p>}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
