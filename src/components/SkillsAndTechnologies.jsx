import CoreSkills from "./CoreSkills.jsx";
import Technologies from "./Technologies.jsx";

import "../styles/SkillsAndTechnologies.css";

export default function SkillsAndTechnologies() {
	return (
		<section className="skills section" id="skills">
			<h2 className="section-title">Skills & Technologies</h2>
			<CoreSkills />
			<Technologies />
		</section>
	);
}
