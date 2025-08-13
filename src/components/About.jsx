import "../styles/about.css";

export default function About() {
	return (
		<section id="about" className="about section">
			<h2 className="section-title">About Me</h2>
			<div className="about-content">
				<div className="about-text">
					<h2>My Journey</h2>
					<p>
						With over <strong>[X]</strong> years of experience in web
						development, I’ve had the privilege of working with diverse clients
						and projects. My journey began with a curiosity for how websites
						work, which evolved into a passion for creating digital experiences
						that make a difference.
					</p>
					<p>
						I specialize in building responsive, user-friendly applications
						using modern technologies. Whether it's a simple landing page or a
						complex web app, I approach each project with attention to detail
						and a commitment to quality.
					</p>
					<div className="about-stats">
						<div className="stat">
							<span>50+</span>
							<small>Projects Completed</small>
						</div>
						<div className="stat">
							<span>X+</span>
							<small>Years Experience</small>
						</div>
						<div className="stat">
							<span>30+</span>
							<small>Happy Clients</small>
						</div>
					</div>
				</div>
				<div className="about-image">
					<p>About Image</p>
				</div>
			</div>
		</section>
	);
}
