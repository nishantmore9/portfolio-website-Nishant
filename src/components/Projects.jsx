import React from 'react';
import { motion } from 'framer-motion';
import jobportal from '../assets/project_1.png';
import blogspot from '../assets/project_2.png';
import weatherapp from '../assets/project_3.png';

const Projects = () => {
  const projects = [
    {
      name: "Job Portal",
      description: "A job portal website where users can search for jobs and apply for them.",
      skills: ["React", "Node", "Express", "MongoDB", "Tailwind"],
      link: "https://github.com/nishantmore9/Job-Portal-MERN",
      img: jobportal
    },
    {
      name: "Blogspot",
      description: "A blog website where users can read and write blogs.",
      skills: ["React", "Node", "Express", "MongoDB", "Tailwind"],
      link: "https://github.com/nishantmore9/Blog-app",
      img: blogspot
    },
    {
      name: "Weather App",
      description: "A weather app that shows the weather of a particular location.",
      skills: ["HTML", "CSS", "JavaScript"],
      link: "",
      img: weatherapp
    }
  ];

  return (
    <section id="projects" className="py-24 px-6">
      {/* Section Header */}
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-gray-900">Projects</h2>
      </motion.div>

      {/* Project Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            className="p-6 bg-white rounded-xl shadow-lg flex flex-col"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            viewport={{ once: true }}
          >
            {/* Project Image */}
            <div className="w-full h-48 rounded-lg overflow-hidden mb-4 flex items-center justify-center">
              <img className="w-full h-full object-cover" src={project.img} alt={project.name} />
            </div>

            {/* Project Details */}
            <div className="flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-gray-900">{project.name}</h3>
              <p className="text-gray-700 mt-2">{project.description}</p>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2 mt-4">
                {project.skills.map((skill, i) => (
                  <span key={i} className="px-3 py-1 bg-gray-800 text-white text-sm font-medium rounded-full">
                    {skill}
                  </span>
                ))}
              </div>

              {/* Source Button */}
              {project.link && (
                <motion.div 
                  className="mt-6 flex justify-left"
                  whileHover={{ scale: 1.1 }}
                >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition"
                  >
                    Source
                  </a>
                </motion.div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
