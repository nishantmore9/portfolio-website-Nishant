import React from "react";
import { FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";
import aboutImg from "../assets/about.jpg";

const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      {/* Section Title */}
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-4xl font-bold text-gray-900">About Me</h2>
      </motion.div>

      {/* Content Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src={aboutImg}
            alt="about"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div 
          className="text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Who am I?</h3>
          <p className="text-gray-600 leading-relaxed">
            I am a final-year computer engineering student with a passion for web development.
            With expertise in MongoDB, Express.js, React.js, and Node.js, I develop full-stack
            applications that deliver seamless user experiences.
          </p>

          {/* Key Skills */}
          <p className="my-4 font-semibold text-gray-900">Key Skills:</p>
          <ul className="text-gray-600 space-y-2">
            {[
              { skill: "Frontend", tools: "React.js, Tailwind CSS, JavaScript (ES6+)" },
              { skill: "Backend", tools: "Node.js, Express.js, REST APIs" },
              { skill: "Database", tools: "MongoDB, Mongoose ORM" },
              { skill: "Security", tools: "JWT, OAuth, bcrypt" },
              { skill: "State Management", tools: "Redux, Context API" }
            ].map((item, index) => (
              <motion.li key={index} whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                ✅ <b>{item.skill}:</b> {item.tools}
              </motion.li>
            ))}
          </ul>

          {/* Download Resume Button */}
          <motion.div 
            className="mt-6 flex justify-center md:justify-start"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          >
            <a
              href="https://drive.google.com/file/d/1QrbaYwmynZcboN73ZBfZy3emtpC5Msc4/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-black text-white rounded-lg flex items-center gap-2 text-lg font-medium hover:bg-gray-800 transition"
            >
              Download Resume <FaDownload className="text-white text-lg"/>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
