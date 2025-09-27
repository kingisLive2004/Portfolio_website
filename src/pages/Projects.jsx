import React from "react";
import { projectDatas } from "../assets/assets";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-[#e6dace]"
    >
      <div className="max-w-3xl mx-auto px-4">
        <div className="flex items-center justify-center gap-4 pb-20 pt-40 ">
          <div className="w-6 h-6 bg-blue-500 text-center rounded-full"></div>
          <h1 className="text-center text-2xl md:text-3xl font-bold">
            Projects
          </h1>
        </div>

        <p className="text-center text-gray-700">
          Here are some of the projects I’ve built, showcasing my skills in web
          development, machine learning, and creating scalable applications
        </p>

        <div className="grid grid-cols-1 gap-6 mt-12 pb-24">
          {projectDatas.map((project, index) => (
            <div
              key={index}
              className="w-full flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden"
            >
              {/* Left section */}
              <div className="w-full md:w-[60%] p-8 flex flex-col justify-between">
                <div>
                  <h1 className="text-xl text-blue-600 font-semibold">
                    {project.name}
                  </h1>
                  <p className="text-xs font-bold">{project.role}</p>
                  <p className="mt-6 text-gray-800">{project.description}</p>
                </div>

                {/* Project Link Button */}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-6 px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition"
                  >
                    View Project
                  </a>
                )}
              </div>

              {/* Right section (image) */}
              <div className="w-full md:w-[40%]">
                <img
                  className="w-full h-full object-cover"
                  src={project.image}
                  alt={project.name}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
