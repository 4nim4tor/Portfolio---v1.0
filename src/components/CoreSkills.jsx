import "../styles/CoreSkills.css";

import JavaScript from "../assets/JavaScript.svg?react";
import Node from "../assets/Node.js.svg?react";
import CSS from "../assets/CSS.svg?react";
import HTML from "../assets/HTML.svg?react";
import Typescript from "../assets/Typescript.svg?react";
import ReactIcon from "../assets/React.svg?react";
import Vite from "../assets/Vite.js.svg?react";

const skills = [
  {
    Icon: JavaScript,
    name: "JavaScript",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  { Icon: Node, name: "Node.js", link: "https://nodejs.org/" },
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
    Icon: Typescript,
    name: "TypeScript",
    link: "https://www.typescriptlang.org/",
  },
  { Icon: ReactIcon, name: "React", link: "https://reactjs.org/" },
  { Icon: Vite, name: "Vite", link: "https://vitejs.dev/" },
];

export default function CoreSkills() {
  return (
    <section className="core-skills" id="core-skills">
      <h3 className="sub-section-title">Core Skills</h3>

      <div className="skills-grid">
        {skills.map(({ Icon, name, link }) => (
          <div className="tile">
            <a
              className="skill-tile"
              key={name}
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
    </section>
  );
}
