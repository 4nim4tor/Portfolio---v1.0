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
			<div className="video-overlay">
				<video autoPlay loop muted playsInline className="background-video">
					<source src="/videos/background.mp4" type="video/mp4" />
					Your browser does not support the video tag.
				</video>
			</div>
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
