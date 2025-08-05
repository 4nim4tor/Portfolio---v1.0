import IconHex from "./IconHex.jsx";

import htmlIcon from "../assets/HTML.svg";
import cssIcon from "../assets/CSS.svg";
import jsIcon from "../assets/JavaScript.svg";
import reactIcon from "../assets/React.svg";
import nodeIcon from "../assets/Node.js.svg";
import gitIcon from "../assets/GitHub.svg";

export default function Skills() {
  const skills = [
    { icon: htmlIcon, label: "HTML" },
    { icon: cssIcon, label: "CSS" },
    { icon: jsIcon, label: "JavaScript" },
    { icon: reactIcon, label: "React" },
    { icon: nodeIcon, label: "Node.js" },
    { icon: gitIcon, label: "Git" },
  ];

  return (
    <section id="skills" style={{ padding: "4rem 2rem", textAlign: "center" }}>
      <h2 style={{ color: "var(--accent-color)" }}>Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <IconHex key={index} icon={skill.icon} label={skill.label} />
        ))}
      </div>
    </section>
  );
}
