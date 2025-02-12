import React from "react";
import { motion } from "framer-motion";
import html5 from "../assets/html.png";
import css3 from "../assets/css.png";
import react from "../assets/react.png";
import nodejs from "../assets/node.png";
import express from "../assets/express.png";
import mongodb from "../assets/mongodb.png";
import javascript from "../assets/javascript.png";

const Skills = () => {
  const skills = [
    { name: "HTML", icon: html5 },
    { name: "CSS", icon: css3 },
    { name: "JavaScript", icon: javascript },
    { name: "React", icon: react },
    { name: "Node.js", icon: nodejs },
    { name: "MongoDB", icon: mongodb },
    { name: "Express.js", icon: express },
    { name: "Tailwind CSS", icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
  ];

  return (
    <section id="skills" className="py-24 px-6">
      {/* Section Header */}
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-4xl font-bold text-gray-900">Skills</h2>
      </motion.div>

      {/* Skills Grid */}
      <motion.div 
        className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 place-items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        {skills.map((skill, index) => (
          <motion.div 
            key={index} 
            className="flex flex-col items-center"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            {/* Icon Wrapper */}
            <motion.div 
              className="w-24 h-24 flex items-center justify-center rounded-lg shadow-lg bg-gray-100"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <img src={skill.icon} alt={skill.name} className="w-12 h-12" />
            </motion.div>
            {/* Skill Name */}
            <p className="text-lg font-semibold mt-3 text-gray-800">{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
