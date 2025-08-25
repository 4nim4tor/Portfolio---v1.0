import { useState } from "react";
import ArrowLeft from "../assets/ArrowLeftIcon.svg?react";
import ArrowRight from "../assets/ArrowRightIcon.svg?react";

import "../styles/Projects.css";

import projects from "../data/projects";
import ProjectCard from "./subcomponents/ProjectsCard";

export default function Projects() {
	const [current, setCurrent] = useState(0);
	const project = projects[current];

	const nextSlide = () => {
		setCurrent((prev) => (prev + 1) % projects.length);
	};

	const prevSlide = () => {
		setCurrent((prev) => (prev - 1 + projects.length) % projects.length);
	};

	const goToSlide = (index) => {
		setCurrent(index);
	};

	return (
		<section className="projects section" id="projects">
			<h2 className="section-title">Featured Projects</h2>

			<ProjectCard project={project} />

			<div className="project-navigation">
				<button className="nav-arrow" onClick={prevSlide}>
					<ArrowLeft className="arrow-icon" />
				</button>
				<div className="dots">
					{projects.map((_, index) => (
						<span
							key={index}
							className={`dot ${index === current ? "active" : ""}`}
							onClick={() => goToSlide(index)}
						/>
					))}
				</div>
				<button className="nav-arrow" onClick={nextSlide}>
					<ArrowRight className="arrow-icon" />
				</button>
			</div>
		</section>
	);
}
