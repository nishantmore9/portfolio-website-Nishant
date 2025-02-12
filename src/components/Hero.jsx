import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import heroImg from "../assets/hero.jpg";

const Hero = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12 py-24 md:py-32 max-w-6xl mx-auto gap-10 min-h-screen">
      {/* Left Content */}
      <motion.div 
        className="max-w-lg space-y-6 text-center md:text-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 flex items-center gap-2 justify-center md:justify-start">
          Nishant More 
          <motion.span 
            className="wave"
            animate={{ rotate: [0, 20, 0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            👋
          </motion.span>
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-600 font-medium">
          Full Stack Developer
        </h2>
        <p className="text-gray-500 leading-relaxed">
          I'm a full-stack developer using React and NodeJS. I am passionate about
          building scalable and efficient web applications.
        </p>

        <motion.button 
          className="mt-6 px-6 py-3 bg-black text-white rounded-lg flex items-center gap-2 text-lg font-medium mx-auto md:mx-0 hover:bg-gray-800 transition"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Say Hello <FaPaperPlane className="text-white text-lg" />
        </motion.button>
      </motion.div>

      {/* Right Image */}
      <motion.div 
        className="relative flex-[1.5] w-full max-w-xs md:max-w-sm lg:max-w-md"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
      >
        <img src={heroImg} alt="Hero" className="w-full h-auto" />
      </motion.div>
    </section>
  );
};

export default Hero;
