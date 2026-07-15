import React from "react";
import { motion } from "framer-motion";
import "./SectionTitle.css";

function SectionTitle({ title, subtitle = null, variant = "default" }) {
  return (
    <div className={`section-title-wrapper ${variant}`}>
      <motion.h1
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {title}
      </motion.h1>
      {subtitle && (
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}

export default SectionTitle;
