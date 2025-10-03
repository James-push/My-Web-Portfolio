import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

const Footer = () => {
  return (
  <footer className="p-4 bg-base-200 text-base-content border-t border-base-300 transition-colors duration-500">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        <div className="flex flex-col items-start">
          <span className="text-xl font-bold font-poppins">Jesse<span className="text-primary">.JS</span></span>
          <div className="footer-tagline font-poppins mt-1 text-s">From concept to reality — turning your ideas <br></br>into seamless digital solutions.</div>
        </div>
        <div className="flex gap-4 mt-3 md:mt-0">
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
      <p className="text-center mt-2 text-s text-neutral-400">© 2025 Jesse James Santos. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
