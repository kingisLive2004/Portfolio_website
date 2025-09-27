import React from "react";
import Hero from "../components/Hero";
import { motion } from "framer-motion";
const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
    >
      <Hero />
    </motion.div>
  );
};

export default About;
