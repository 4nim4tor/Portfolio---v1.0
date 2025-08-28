import useCarousel from "./hooks/useCarousel";
import ArrowLeft from "../assets/svgs/ArrowLeftIcon.svg?react";
import ArrowRight from "../assets/svgs/ArrowRightIcon.svg?react";

import "../styles/Projects.css";

import projects from "../data/projects";
import ProjectCard from "./subcomponents/ProjectCard";
import NavArrow from "./subcomponents/NavArrow";
import DotNavigation from "./subcomponents/DotNavigation";
import AccessibleSection from "./subcomponents/AccessibleSection";

export default function Projects() {
	const { current, next, prev, goTo } = useCarousel(projects.length);
	const project = projects[current];

	return (
		<AccessibleSection
			id="projects"
			title="Test Chamber Logs"
			className="projects section"
		>
			<div className="project-card-wrapper">
				{projects.map((project, index) => (
					<ProjectCard
						key={index}
						project={project}
						className={index === current ? "active" : ""}
					/>
				))}
			</div>

			<div className="project-navigation">
				<NavArrow onClick={prev} Icon={ArrowLeft} label="Previous Project" />
				<DotNavigation
					total={projects.length}
					currentIndex={current}
					onSelect={goTo}
				/>
				<NavArrow onClick={next} Icon={ArrowRight} label="Next Project" />
			</div>
		</AccessibleSection>
	);
}
