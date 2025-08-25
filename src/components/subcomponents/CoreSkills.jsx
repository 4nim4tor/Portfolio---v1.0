import "../../styles/CoreSkills.css";
import skills from "../../data/skills.js";

function chunkArray(array, sizes) {
	const result = [];
	let i = 0;
	let sizeIndex = 0;

	while (i < array.length) {
		const size = sizes[sizeIndex % sizes.length];
		result.push(array.slice(i, i + size));
		i += size;
		sizeIndex++;
	}
	return result;
}

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
							<div className="hex" key={name}>
								<a
									className="skill-hex"
									href={link}
									target="_blank"
									rel="noopener noreferrer"
								>
									<Icon
										className={`skills-icon ${name
											.toLowerCase()
											.replace(".", "")}-icon`}
									/>
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
