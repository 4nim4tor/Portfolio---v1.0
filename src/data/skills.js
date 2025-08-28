import JS from "../assets/svgs/JavaScript.svg?react";
import CSS from "../assets/svgs/CSS.svg?react";
import HTML from "../assets/svgs/HTML.svg?react";
import React from "../assets/svgs/React.svg?react";
import Vite from "../assets/svgs/Vite.js.svg?react";
import Next from "../assets/svgs/Next.js-icon.svg?react";
import Tailwind from "../assets/svgs/Tailwind.css-icon.svg?react";

const skills = [
	{
		Icon: HTML,
		name: "HTML5",
		link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
	},
	{
		Icon: CSS,
		name: "CSS3",
		link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
	},

	{
		Icon: JS,
		name: "JavaScript",
		link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
	},

	{ Icon: Next, name: "Next.js", link: "https://nextjs.org/" },
	{ Icon: Tailwind, name: "Tailwind.css", link: "https://tailwindcss.com/" },
	{ Icon: Vite, name: "Vite", link: "https://vitejs.dev/" },
	{ Icon: React, name: "React", link: "https://reactjs.org/" },
];

export default skills;
