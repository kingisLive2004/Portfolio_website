import React from "react";
import { motion } from "framer-motion";
const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-[#e6dace]"
    >
      <div className="max-w-3xl mx-auto pt-20 mt-20 pb-20">
        <div className="flex items-center justify-center gap-2 py-12 ">
          <div className="w-6 h-6 bg-blue-500  rounded-full"></div>
          <h1 className="text-center text-3xl font-bold">Let's Talk</h1>
        </div>
        <form className="flex flex-col bg-white px-8 py-12">
          <div className="grid grid-cols-1 md:gris-cols-2 gap-6 mb-6">
            <div className="w-full mb-4">
              <label className="block mb-2" htmlFor="">
                First Name
              </label>
              <input
                className="w-full border border-gray-400 px-6 py-2 outline-none placeholder:text-xs"
                placeholder="Enter First Name"
                type="text"
              />
            </div>
            <div className="w-full mb-4">
              <label className="block mb-2" htmlFor="">
                Last Name
              </label>
              <input
                className="w-full border border-gray-400 px-6 py-2 outline-none placeholder:text-xs"
                placeholder="Enter Last Name"
                type="text"
              />
            </div>

            <div className="w-full mb-4">
              <label className="block mb-2" htmlFor="">
                Email
              </label>
              <input
                className="w-full border border-gray-400 px-6 py-2 outline-none placeholder:text-xs"
                placeholder="Enter Email"
                type="email"
              />
            </div>
            <div className="w-full mb-4">
              <label className="block mb-2" htmlFor="">
                Subject
              </label>
              <input
                className="w-full border border-gray-400 px-6 py-2 outline-none placeholder:text-xs"
                placeholder="Enter subject"
                type="text"
              />
            </div>
            <div className="w-full mb-4">
              <label className="block mb-2" htmlFor="">
                Message
              </label>
              <textarea
                className="w-full h-40 border border-gray-400 px-6 py-2 outline-none placeholder:text-xs"
                placeholder="Enter your message"
                type="textrea"
              />
            </div>
            <button className="px-6 py-2 bg-blue-500 rounded-full w-40 text-white cursor-pointer">
              Submit
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
