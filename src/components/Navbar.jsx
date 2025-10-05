import { useState, useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import { Link } from "react-scroll";
import { Menu, X, Sun, Moon } from "lucide-react";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "skills", label: "Skills" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "services", label: "Services" },
    { id: "contact", label: "Contact Me" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/30 dark:bg-gray-900/10 dark:border-gray-700/30 shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link
          to="home"
          smooth={true}
          duration={500}
          offset={-70}
          className="cursor-pointer text-lg md:text-xl font-bold tracking-wide"
          aria-label="Home"
        >
          Jesse<span className="text-primary">.JS</span>
        </Link>

        {/* Desktop Menu */}
  <ul className="hidden md:flex space-x-8 text-sm md:text-base font-semibold">
    {navItems.map((item) => (
      <li key={item.id}>
        {item.id === "contact" ? (
          <Link
            to={item.id}
            smooth={true}
            duration={500}
            offset={-70}
            className="cursor-pointer border border-primary bg-primary text-primary-content rounded-lg px-4 py-2 transition-colors duration-300 hover:bg-transparent hover:text-primary"
          >
            {item.label}
          </Link>
        ) : (
          <Link
            to={item.id}
            smooth={true}
            duration={500}
            offset={-70}
            className="cursor-pointer transition-colors hover:text-primary"
          >
            {item.label}
          </Link>
        )}
      </li>
    ))}
  </ul>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {/* iOS-style Toggle */}
          <button
            onClick={toggleTheme}
            className={`relative w-14 h-8 rounded-full transition-colors duration-300 ${
              theme === "dark" ? "bg-gray-700" : "bg-gray-300"
            }`}
          >
            {/* Circle with icon */}
            <div
              className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-white flex items-center justify-center text-yellow-400 dark:text-yellow-400 transition-transform duration-300 ${
                theme === "dark" ? "translate-x-6" : "translate-x-0"
              }`}
            >
              {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
            </div>
          </button>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-200/40 dark:hover:bg-gray-700/40 transition"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
  <ul className="md:hidden bg-white/30 dark:bg-gray-900/30 backdrop-blur-md border-t border-white/20 dark:border-gray-700/20 px-6 py-4 space-y-4 text-sm font-semibold">
          {navItems.map((item) => (
            <li key={item.id}>
              <Link
                to={item.id}
                smooth={true}
                duration={500}
                offset={-70}
                className="block cursor-pointer transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
