import cyberGarage from "../assets/images/cyberGarage.png";
import dotArtImg from "../assets/images/dotArtImg.png";
import wheatleyScourge from "../assets/images/wheatleyScourge.png";

const projects = [
	{
		title: "The Wheatley Scourge",
		description:
			"An interactive demo of a Portal-inspired assistant widget built to unleash a delightfully unhelpful, Clippy-esque AI onto the user. This project features my first use of reactive 3D models that respond dynamically to cursor movement, adding personality and depth to the experience. A playful exploration of character-driven UI, interactive behavior, and modern front-end techniques.",
		technologies: "React, Three.js, Vite",
		image: wheatleyScourge, // Replace with <img> or imported image later
		demoLink: "the-wheatley-scourge.vercel.app",
		codeLink: "https://github.com/4nim4tor/The-Wheatley-Scourge",
	},
	{
		title: "Cyber Garage",
		description:
			"A minimalist, modern web project built with Vite + React. The site showcases early-stage front-end design skills, clean layout, responsive design and subtle interactivity; a snapshot of my evolving approach to structure, styling and user experience.",
		technologies: "React, CSS Modules, Vite",
		image: cyberGarage, // Replace with <img> or imported image later
		demoLink: "https://cyber-garage.vercel.app",
		codeLink: "https://github.com/4nim4tor/Week-15--25.07.01",
	},
	{
		title: "Dot-Art Generator",
		description:
			"A simple vanilla-JS project demonstrating basic DOM manipulation. The page allows users to dynamically generate and clear a customizable grid, showcasing foundational skills with element selection, event handling and DOM updates. A neat example of interactive front-end logic built with pure JavaScript.",
		technologies: "React, JavaScript, GitHub",
		image: dotArtImg, // Replace with <img> or imported image later
		demoLink: "https://4nim4tor.github.io/Dot-Art-Generator-1.0/",
		codeLink: "https://github.com/4nim4tor/Dot-Art-Generator-1.0",
	},
	{
		title: "Portfolio Website",
		description:
			"A clean and modern self-hosted portfolio site built to showcase personal projects, experiments and evolutions in web design. With a focus on clarity, responsiveness and ease of navigation, this portfolio reflects my growth and versatility as a front-end developer.",
		technologies: "React, Vite, CSS Modules",
		image: dotArtImg, // Replace with <img> or imported image later
		demoLink: "https://arturjj.vercel.app/",
		codeLink: "https://github.com/4nim4tor/Portfolio---v1.0",
	},
];

export default projects;
