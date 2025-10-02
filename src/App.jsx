import { ThemeProvider } from "./ThemeContext";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Skills from "./components/Skills"; 
import Footer from "./components/Footer"

function App() {
  return (
    <div className="bg-base-100 text-base-content min-h-screen">

       {/* Navbar*/}
      <Navbar />

      {/* Hero / Home */}
      <Home />

      {/* Skills */}
      <Skills />

      {/* About */}
      <About  />

      {/* Other sections */}
      <Contact />

      {/* Footer */}
      <Footer />
      
      
    </div>
  );
}

export default App;
