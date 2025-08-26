import "../../styles/CoreSkills.css";
import skills from "../../data/skills.js";
import chunkArray from "../../utilities/chunkArray.js";
import SkillHex from "./SkillHex.jsx";

export default function CoreSkills() {
	const rows = chunkArray(skills, [2, 3]);

	return (
		<section className="core-skills" id="core-skills">
			<h3 className="sub-section-title">Core Skills</h3>

			<div className="skills-grid">
				{rows.map((row, rowIndex) => (
					<div
						className={`skills-row ${
							rowIndex % 2 === 1 ? "skills-offset-row" : ""
						}`}
						key={rowIndex}
					>
						{row.map(({ Icon, name, link }) => (
							<SkillHex key={name} Icon={Icon} name={name} link={link} />
						))}
					</div>
				))}
			</div>
		</section>
	);
}
