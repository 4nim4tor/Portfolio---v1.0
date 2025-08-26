import "../styles/About.css";
import workspaceImg from "../assets/Work-space.jpg";
import errorMessages from "../data/errorMessages";
import { useEffect, useState } from "react";
import AccessibleSection from "./subcomponents/AccessibleSection";

export default function About() {
	const [showError, setShowError] = useState(false);
	const [currentError, setCurrentError] = useState([]);

	useEffect(() => {
		const interval = setInterval(() => {
			setShowError((prev) => !prev);
			if (!showError) {
				const randomIndex = Math.floor(Math.random() * errorMessages.length);
				setCurrentError(errorMessages[randomIndex]);
			}
		}, 8000); // toggles every 8 seconds

		return () => clearInterval(interval);
	}, []);

	const stats = [
		{ value: "10+", label: "Projects Completed" },
		{ value: "2+", label: "Years of Web Development Experience" },
		{ value: "3", label: "Languages Spoken Fluently" },
	];

	return (
		<AccessibleSection
			id="about"
			title="About Me, Me, Me... and Me too!"
			className="about section"
		>
			<p className="section-motto">
				“Turns out the cake was a bug. I fixed it.” <br />
				<span className="motto-author">— Wheatley, probably</span>
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
					{showError ? (
						<div className="error-message">
							{currentError.map((line, index) => (
								<p key={index}>{line}</p>
							))}
						</div>
					) : (
						<img src={workspaceImg} alt="Personal workspace" />
					)}
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
		</AccessibleSection>
	);
}
