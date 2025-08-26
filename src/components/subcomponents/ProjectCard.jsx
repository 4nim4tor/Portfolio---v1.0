export default function ProjectCard({ project, className }) {
	return (
		<div className={`project-card-content ${className}`}>
			<div className="project-wrapper">
				<div className="project-details">
					<h3 className="project-title">{project.title}</h3>
					<p className="project-description">{project.description}</p>
					<p className="project-tech">
						<strong>Technologies:</strong> {project.technologies}
					</p>
					<div className="project-buttons">
						<button className="primary">Live Demo</button>
						<button className="outlined">View Code</button>
					</div>
				</div>

				<div className="project-image">
					<img src={project.image} alt={project.title} />
				</div>
			</div>
		</div>
	);
}
