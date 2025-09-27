import React from "react";
import { educationData, skillSets } from "../assets/assets";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
      className="w-full min-h-screen bg-[#e6dace] mt-20"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-center py-20 gap-4 ">
          <div className="w-8 h-8 bg-blue-500 rounded-full text-center"></div>
          <h1 className="uppercase text-center text-4xl font-bold">Resume</h1>
        </div>
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h1 className="text-2xl font-bold">Experience</h1> {/*CHANGE*/}
            <button className="uppercase px-6 py-2 bg-blue-600 text-white rounded-full cursor-pointer">
              <a
                href="/Resume.pdf"
                download="Resume.pdf"
                className="uppercase px-6 py-2 bg-blue-600 text-white rounded-full cursor-pointer"
              >
                Download CV
              </a>
            </button>{" "}
            {/*CHANGE*/}
          </div>

          {/* Education Section */}
          <div className="max-w-2xl mx-auto mt-12">
            <div className="flex items-center justify-between mb-12">
              <h1 className="text-2xl font-bold">Education</h1>
            </div>
            <div className="w-full flex flex-col space-y-6 py-6">
              {educationData.map((education, index) => (
                <div
                  key={index}
                  className="py-20 px-12 grid grid-cols-1 md:grid-cols-2 gap-8 bg-white"
                >
                  <div className="min-w-1/2">
                    <h1 className="text-blue-500 font-bold mb-4">
                      {education.timeline}
                    </h1>
                    <h2 mb-2>
                      DEGREE NAME:
                      <span className="text-blue-500"> {education.degree}</span>
                    </h2>
                    <p className="mb-2">
                      Degree level:
                      <span className="text-blue-500">
                        {education.institution}
                      </span>
                    </p>
                    <p className="mb-2">
                      University Location:
                      <span className="text-blue-500">
                        {education.location}
                      </span>
                    </p>
                  </div>
                  <div>
                    <p>{education.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Skills Section */}
        <div className="max-w-2xl mx-auto mt-12 pb-12 text-sm">
          <div className="bg-white p-12">
            <h1 className="text-2xl font-bold mb-6">Skills</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12 pb-12 max-w-xl">
              {skillSets.map((skill, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                  <h1>{skill}</h1>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;
