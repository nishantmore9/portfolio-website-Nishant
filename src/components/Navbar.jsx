import React, { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full bg-white py-4 px-6 md:px-10 z-50 shadow-md"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        
        {/* Logo - Scrolls to Top */}
        <Link 
          to="home" 
          smooth={true} 
          duration={600} 
          className="text-2xl font-bold text-gray-900 cursor-pointer"
        >
          Portfolio
        </Link>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.ul
              className="absolute top-16 left-0 w-full bg-white flex flex-col items-center shadow-md md:hidden"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {["About", "Skills", "Projects", "Contact"].map((item, index) => (
                <motion.li
                  key={index}
                  className="py-4"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    to={item.toLowerCase()}
                    smooth={true}
                    duration={600}
                    offset={-80}
                    className="cursor-pointer text-gray-700 hover:text-blue-500 transition duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          {["About", "Skills", "Projects", "Contact"].map((item, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                to={item.toLowerCase()}
                smooth={true}
                duration={600}
                offset={-80}
                className="cursor-pointer text-gray-700 hover:text-blue-500 transition duration-300"
              >
                {item}
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
