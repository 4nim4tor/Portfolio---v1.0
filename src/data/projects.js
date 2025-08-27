import ecommerceImg from "../assets/ecommerce.png";
import portfolioImg from "../assets/portfolio.png";
import taskManagerImg from "../assets/taskmanager.png";

const projects = [
	{
		title: "E-Commerce Platform",
		description:
			"A comprehensive web application built with modern technologies, featuring responsive design and optimized performance.",
		technologies: "React, Node.js, MongoDB",
		image: ecommerceImg, // Replace with <img> or imported image later
		demoLink: "#",
		codeLink: "#",
	},
	{
		title: "Portfolio Website",
		description:
			"A personal developer portfolio built with React, showcasing skills and projects with a modern UI.",
		technologies: "React, CSS Modules, Vite",
		image: portfolioImg, // Replace with <img> or imported image later
		demoLink: "#",
		codeLink: "#",
	},
	{
		title: "Task Manager App",
		description:
			"A task management app with CRUD functionality, user auth, and responsive design.",
		technologies: "React, Express, MongoDB",
		image: taskManagerImg, // Replace with <img> or imported image later
		demoLink: "#",
		codeLink: "#",
	},
];

export default projects;
