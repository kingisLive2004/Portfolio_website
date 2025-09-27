import React from "react";
import { assets, socialLinks } from "../assets/assets";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="w-full bg-white">
      <div className="relative w-full min-h-screen">
        <div className="absolute  left-0 md:h-[140%] w-full md:w-[32%] bg-[#e6dace]"></div>
        <div className="absolute md:left-40 md:top-20 max-w-5xl w-full py-20">
          <div className="w-full flex flex-col md:flex-row gap-12">
            {/* Left Side of image profile */}
            <div className="w-full md:w-[35%] bg-[#F4ECE6] shadow-2xl">
              <div className="flex flex-col items-center mx-auto p-12">
                <img
                  className="w-50 h-50 object-cover rounded-full"
                  src={assets.profileImg}
                  alt=""
                />
                <h1 className="text-xl sm:text-2xl font-bold mt-6 mb-6 text-center">
                  Samik
                  <br />
                  Bhattacharya
                </h1>
                <div className="border-t-2 border-t-blue-500 w-16 mb-6"></div>
                <p className="uppercase text-l mb-6">
                  Aspiring Software Developer
                </p>
              </div>
              <div className="mt-12 bg-white w-full flex items-center justify-center py-4 space-x-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={social.img}
                      alt="social-icon"
                      className="w-8 h-8 hover:opacity-70 transition"
                    />
                  </a>
                ))}
              </div>
            </div>
            {/* Right Side context */}
            <div className="w-full md:w-1/2 text-center md:text-left px-6">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-8xl font-bold mb-6">
                Samik Bhattacharya
              </h1>
              <p className="text-md md:text-2xl mb-6 font-semibold">
                Here's who I am & what I do
              </p>
              <div className="flex gap-4">
                <Link to="/resume">
                  <button className="uppercase px-8 py-2 bg-blue-500 text-white rounded-full cursor-pointer hover:bg-white hover:text-black hover:border hover:border-gray-700">
                    Resume
                  </button>
                </Link>
                <Link to="/projects">
                  <button className="uppercase px-8 py-2 bg-blue-500 text-white rounded-full cursor-pointer hover:bg-white hover:text-black hover:border hover:border-gray-700">
                    Projects
                  </button>
                </Link>
              </div>
              <p className="mt-12 text-md mb-12">
                Hi, I’m Samik Bhattacharya, an aspiring Software Developer
                Engineer (Fresher). I’m passionate about web development,
                problem-solving, and learning new technologies. Currently, I’m
                building projects to strengthen my skills and looking for
                opportunities to contribute to real-world applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
