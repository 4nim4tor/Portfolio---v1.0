import "./App.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SkillsAndTechnologies from "./components/SkillsAndTechnologies";

function App() {
  return (
    <div className="app-container">
      <Header />
      <Hero />
      <About />
      <Projects />
      <SkillsAndTechnologies />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
