import "../styles/About.css";

export default function About() {
	const stats = [
		{ value: "10+", label: "Projects Completed" },
		{ value: "2+", label: "Years of Web Development Experience" },
		{ value: "3", label: "Languages Spoken Fluently" },
	];

	return (
		<section id="about" className="about section">
			<h2 className="section-title">About Me, Me, Me... and Me too!</h2>
			<p className="section-motto">
				“The cake may be a lie, but clean code is the real dream.”
			</p>
			<div className="about-content">
				<div className="about-text">
					<h2>Curious by nature, strategic by design.</h2>
					<p>
						My journey into web development began with a scientific mindset and
						a passion for problem-solving. I originally pursued molecular
						biotechnology, but along the way discovered a deeper interest in
						technology and design. That shift led me into front-end
						development—where creativity meets logic, and every bug is just a
						misunderstood feature waiting to be fixed.
					</p>
					<p>
						Through hands-on training and real-world projects, I’ve built
						responsive, user-centered websites using HTML, CSS, JavaScript, and
						React. I thrive on crafting intuitive digital experiences that
						balance aesthetics with accessibility.
					</p>
					<p>
						I’m known for being calm under pressure, adaptable, and structured
						in my approach. I work comfortably with tools like Git, VS Code, and
						Figma, and I’m always exploring new ways to improve user
						experience—whether through cleaner code, smarter workflows, or
						simply asking better questions.
					</p>
				</div>
				<div className="about-image">
					<img src="/path/to/image.jpg" alt="Image of coding?" />
				</div>
				<div className="about-stats">
					{stats.map((stat, index) => (
						<div className="stat" key={index}>
							<span>{stat.value}</span>
							<small>{stat.label}</small>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
