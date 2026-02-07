import { ThemeProvider } from "./ThemeContext";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Skills from "./components/Skills"; 
import Footer from "./components/Footer"
import Experience from "./components/Experience";
import { useState } from "react";
import { Link } from "react-scroll";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-base-100 text-base-content min-h-screen">
      {/* Navbar - Fixed and can slide left independently */}
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Main content that slides left when menu opens */}
      <div
        className={`transition-transform duration-300 ease-in-out ${
          isOpen ? "-translate-x-64" : "translate-x-0"
        }`}
      >
        <Home />
        <Skills />
        <About  />
        <Experience />
        <Contact />
        <Footer />
      </div>

      {/* Sidebar menu that slides in from right */}
      <div
        className={`fixed top-0 right-0 h-screen w-64 bg-base-100 text-base-content backdrop-blur-md z-40 transform transition-transform transition-colors duration-300 ease-in-out overflow-y-auto ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="px-6 py-20 space-y-6 text-xl font-semibold text-center">
          <li><Link to="home" smooth={true} duration={500} offset={-70} onClick={() => setIsOpen(false)} className="block cursor-pointer transition-colors hover:text-primary py-3">Home</Link></li>
          <li><Link to="skills" smooth={true} duration={500} offset={-70} onClick={() => setIsOpen(false)} className="block cursor-pointer transition-colors hover:text-primary py-3">Skills</Link></li>
          <li><Link to="about" smooth={true} duration={500} offset={-70} onClick={() => setIsOpen(false)} className="block cursor-pointer transition-colors hover:text-primary py-3">About</Link></li>
          <li><Link to="experience" smooth={true} duration={500} offset={-70} onClick={() => setIsOpen(false)} className="block cursor-pointer transition-colors hover:text-primary py-3">Experience</Link></li>
          <li><Link to="services" smooth={true} duration={500} offset={-70} onClick={() => setIsOpen(false)} className="block cursor-pointer transition-colors hover:text-primary py-3">Services</Link></li>
          <li><Link to="contact" smooth={true} duration={500} offset={-70} onClick={() => setIsOpen(false)} className="block cursor-pointer transition-colors hover:text-primary py-3">Contact Me</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default App;
