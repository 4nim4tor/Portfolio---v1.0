import "../styles/CoreSkills.css";

import JavaScript from "../assets/JavaScript.svg?react";
import Node from "../assets/Node.js.svg?react";
import CSS from "../assets/CSS.svg?react";
import HTML from "../assets/HTML.svg?react";
import ReactIcon from "../assets/React.svg?react";
import Vite from "../assets/Vite.js.svg?react";
import Next from "../assets/Next.js-icon.svg?react";

const skills = [
	{
		Icon: CSS,
		name: "CSS3",
		link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
	},
	{
		Icon: HTML,
		name: "HTML5",
		link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
	},
	{
		Icon: JavaScript,
		name: "JavaScript",
		link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
	},
	{ Icon: Node, name: "Node.js", link: "https://nodejs.org/" },
	{ Icon: ReactIcon, name: "React", link: "https://reactjs.org/" },
	{ Icon: Vite, name: "Vite", link: "https://vitejs.dev/" },
	{ Icon: Next, name: "Next.js", link: "https://nextjs.org/" },
];

function chunkArray(array, size) {
	const result = [];
	for (let i = 0; i < array.length; i += size) {
		result.push(array.slice(i, i + size));
	}
	return result;
}

export default function CoreSkills() {
	const rows = chunkArray(skills, 3);

	return (
		<section className="core-skills" id="core-skills">
			<h3 className="sub-section-title">Core Skills</h3>

			<div className="skills-grid">
				{rows.map((row, rowIndex) => (
					<div
						className={`skills-row ${rowIndex % 2 === 1 ? "offset-row" : ""}`}
						key={rowIndex}
					>
						{row.map(({ Icon, name, link }) => (
							<div className="tile" key={name}>
								<a
									className="skill-tile"
									href={link}
									target="_blank"
									rel="noopener noreferrer"
								>
									<Icon className="icon" />
									<span>{name}</span>
								</a>
							</div>
						))}
					</div>
				))}
			</div>
		</section>
	);
}
