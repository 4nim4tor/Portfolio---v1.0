import "../styles/SkillsAndTechnologies.css";
import CoreSkills from "./subcomponents/CoreSkills.jsx";
import Technologies from "./subcomponents/Technologies.jsx";

export default function SkillsAndTechnologies() {
	return (
		<section className="skills section" id="skills">
			<h2 className="section-title">Skills & Technologies</h2>
			<CoreSkills />
			<Technologies />
		</section>
	);
}
