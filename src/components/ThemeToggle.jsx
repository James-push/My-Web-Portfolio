import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="btn btn-sm btn-outline flex items-center gap-2"
    >
      {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
      {theme === "light" ? "Dark" : "Light"}
    </button>
  );
};

export default ThemeToggle;
