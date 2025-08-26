import "../styles/SkillsAndTechnologies.css";
import AccessibleSection from "./subcomponents/AccessibleSection.jsx";
import CoreSkills from "./subcomponents/CoreSkills.jsx";
import Technologies from "./subcomponents/Technologies.jsx";

export default function SkillsAndTechnologies() {
	return (
		<AccessibleSection id="skills" title="Skills and Technologies">
			<CoreSkills />
			<Technologies />
		</AccessibleSection>
	);
}
