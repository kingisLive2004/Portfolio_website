import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="w-full bg-white fixed top-0 z-50 shadow">
      <div className="container mx-auto flex items-center justify-between px-4 py-8 sm:px-12 md:px-24 lg:px-32">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-blue-500"></div>
          <h1 className="text-xl">
            <span className="font-bold">Samik Bhattacharya</span>
            <span>/</span>
            <span>Software Developer</span>
          </h1>
        </div>
        {/* Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              `uppercase hover:text-blue-600 ${isActive ? "text-blue-500" : ""}`
            }
          >
            About Me
          </NavLink>
          <NavLink
            to={"/resume"}
            className={({ isActive }) =>
              `uppercase hover:text-blue-600 ${isActive ? "text-blue-500" : ""}`
            }
          >
            Resume
          </NavLink>
          <NavLink
            to={"/projects"}
            className={({ isActive }) =>
              `uppercase hover:text-blue-600 ${isActive ? "text-blue-500" : ""}`
            }
          >
            Projects
          </NavLink>
          <NavLink
            to={"/contact"}
            className={({ isActive }) =>
              `uppercase hover:text-blue-600 ${isActive ? "text-blue-500" : ""}`
            }
          >
            Contact Me
          </NavLink>
        </div>
        <div className="md:hidden">
          {showMenu ? (
            <FaXmark
              onClick={() => setShowMenu(!showMenu)}
              className="text-xl cursor-pointer"
            />
          ) : (
            <FaBars
              onClick={() => setShowMenu(!showMenu)}
              className="text-xl cursor-pointer"
            />
          )}
        </div>
      </div>
      {showMenu && (
        <div className=" md:hidden flex flex-col items-center space-y-6 h-screen py-20">
          <NavLink
            onClick={() => setShowMenu(!showMenu)}
            to={"/"}
            className={({ isActive }) =>
              `uppercase hover:text-blue-600 ${isActive ? "text-blue-500" : ""}`
            }
          >
            About Me
          </NavLink>
          <NavLink
            onClick={() => setShowMenu(!showMenu)}
            to={"/resume"}
            className={({ isActive }) =>
              `uppercase hover:text-blue-600 ${isActive ? "text-blue-500" : ""}`
            }
          >
            Resume
          </NavLink>
          <NavLink
            onClick={() => setShowMenu(!showMenu)}
            to={"/projects"}
            className={({ isActive }) =>
              `uppercase hover:text-blue-600 ${isActive ? "text-blue-500" : ""}`
            }
          >
            Projects
          </NavLink>
          <NavLink
            onClick={() => setShowMenu(!showMenu)}
            to={"/contact"}
            className={({ isActive }) =>
              `uppercase hover:text-blue-600 ${isActive ? "text-blue-500" : ""}`
            }
          >
            Contact Me
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Navbar;
