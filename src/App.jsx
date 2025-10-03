import { ThemeProvider } from "./ThemeContext";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Skills from "./components/Skills"; 
import Footer from "./components/Footer"
import Experience from "./components/Experience";

function App() {
  return (
    <div className="bg-base-100 text-base-content min-h-screen">

      <Navbar />
      <Home />
      <Skills />
      <About  />
      <Experience />
      <Contact />
      <Footer />
      
      
    </div>
  );
}

export default App;
