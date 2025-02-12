import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const contacts = [
    {
      name: "Email",
      icon: <FaEnvelope size={28} />,
      link: "mailto:nishantmore228@gmail.com",
      color: "bg-red-600",
    },
    {
      name: "GitHub",
      icon: <FaGithub size={28} />,
      link: "https://github.com/nishantmore9",
      color: "bg-gray-800",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin size={28} />,
      link: "https://www.linkedin.com/in/nishant-more-857031230/",
      color: "bg-blue-600",
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 px-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white"
    >
      {/* Section Title */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold">Contact Me</h2>
      </motion.div>

      {/* Contact Links */}
      <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-6">
        {contacts.map((contact, index) => (
          <motion.a
            key={index}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-3 px-6 py-3 rounded-lg text-lg font-medium shadow-lg hover:shadow-xl transition ${contact.color}`}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.1 }}
            viewport={{ once: true }}
          >
            {contact.icon}
            {contact.name}
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
