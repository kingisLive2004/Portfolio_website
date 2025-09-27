import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
