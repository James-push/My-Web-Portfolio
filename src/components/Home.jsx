import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPaperPlane } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import "./custom-fix.css";
import { motion } from "framer-motion";
import MyPhoto from "../assets/my-photo.png"; // Replace with your photo path
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
    const roles = ["Developer", "IT Support", "Network"];
  return (
    <section
      className="min-h-screen flex items-center bg-base-100 px-6 lg:px-20 transition-colors duration-500 pt-20 md:pt-0"
      id="home"
    >
      <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Left Side: Text */}
        <motion.div
          className="flex-1 text-center lg:text-left space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="transition-colors duration-500 text-center lg:text-left">
            <span className="block text-lg md:text-xl font-medium text-primary">
              Hi there! 👋 I'm
            </span>
            <span className="block text-5xl md:text-6xl font-bold text-base-content">
              Jesse James
            </span>
          </h1>

          <div className="my-typewriter block text-lg md:text-xl font-medium transition-colors duration-500">
            <Typewriter
            words={roles}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={100}
            deleteSpeed={50}
            />
          </div>

          <p className="block text-base sm:text-lg md:text-md font-normal text-neutral-400 transition-colors duration-500">
            I support applications and IT networks while developing tools to improve workflows and productivity. With experience in software development and cloud operations, I focus on security to deliver reliable and efficient solutions.
          </p>
          <div className="mt-8">
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              offset={-70}
              className="group mb-8 inline-flex items-center gap-2 justify-center w-auto min-w-[3.5rem] h-10 px-6 rounded-full border-2 border-primary text-primary bg-transparent font-semibold shadow transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary hover:bg-primary hover:text-primary-content"
              aria-label="Let's Connect!"
            >
              <span>Let's connect!</span>
            </ScrollLink>
            <p className="block text-lg md:text-md font-poppins font-normal text-base-content mb-4">
              What I do?
            </p>
            <div className="flex flex-col items-center lg:items-start gap-3">
              <div className="flex flex-wrap gap-2 sm:gap-3 mb-2 justify-center lg:justify-start">
                <span className="bg-primary text-primary-content rounded-full px-3.5 py-0.5 h-6 sm:h-7 flex items-center font-poppins text-xs sm:text-sm font-semibold shadow transition-colors duration-500">Software Development</span>
                <span className="bg-primary text-primary-content rounded-full px-3.5 py-0.5 h-6 sm:h-7 flex items-center font-poppins text-xs sm:text-sm font-semibold shadow transition-colors duration-500">Cybersecurity</span>
                <span className="bg-primary text-primary-content rounded-full px-3.5 py-0.5 h-6 sm:h-7 flex items-center font-poppins text-xs sm:text-sm font-semibold shadow transition-colors duration-500">Network Administration</span>
                <span className="bg-primary text-primary-content rounded-full px-3.5 py-0.5 h-6 sm:h-7 flex items-center font-poppins text-xs sm:text-sm font-semibold shadow transition-colors duration-500">UI/UX</span>
              </div>
              <div className="flex gap-4 mt-2">
                <a
                  href="https://github.com/James-push"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-2xl text-neutral-500 hover:text-primary transition-colors duration-300"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/jesse-james-santos/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-2xl text-neutral-500 hover:text-primary transition-colors duration-300"
                >
                  <FaLinkedin />
                </a>
                <ScrollLink
                  to="contact"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  aria-label="Contact"
                  className="text-2xl text-neutral-500 hover:text-primary transition-colors duration-300 cursor-pointer"
                >
                  <FaEnvelope />
                </ScrollLink>
              </div>
          </div>
        </div>
        </motion.div>

        {/* Right Side: Photo */}
        <motion.div
          className="flex-1 flex justify-center lg:justify-end"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          whileHover={{ y: -5 }}
        >
          <div className="w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-lg border-4 border-primary transition-colors duration-500 flex items-center justify-center transition-transform duration-500 ease-in-out scale-90 sm:scale-95 md:scale-100">
            <img
              src={MyPhoto}
              alt="Jesse.Js"
              className="w-full h-full object-cover object-center max-w-full max-h-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
