import "../styles/Hero.css";

export default function Hero() {
	return (
		<section className="hero section" id="home">
			<div className="profile-circle">
				<img src="../assets/Profile-Pic.png" alt="Profile portrait of Artur" />
			</div>
			<h1
				className="typewriter-container matrix-text"
				data-text="[Artur Jaworski]"
			>
				{" "}
				[Artur Jaworski]{" "}
			</h1>
			<p className="subtitle">Front-End Developer & Web Architect</p>
			<p className="description">
				Passionate about creating innovative web solutions that combine
				beautiful design with powerful functionality. Specializing in modern
				JavaScript frameworks and scalable backend architectures.
			</p>
			<div className="hero-buttons">
				<button
					onClick={() => document.getElementById("projects").scrollIntoView()}
				>
					View My Work
				</button>
				<button
					className="outlined"
					onClick={() => document.getElementById("contact").scrollIntoView()}
				>
					Get In Touch
				</button>
			</div>
		</section>
	);
}
