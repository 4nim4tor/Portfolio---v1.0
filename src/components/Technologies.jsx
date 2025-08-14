import techs from "../data/technologies";
import "../styles/Technologies.css";

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

export default function Technologies() {
	const rows = chunkArray(techs, [1, 2]);

	return (
		<section className="technologies" id="technologies">
			<h3 className="sub-section-title">Technologies</h3>

			<div className="tech-grid">
				{rows.map((row, rowIndex) => (
					<div
						className={`tech-row ${
							rowIndex % 2 === 1 ? "tech-offset-row" : ""
						}`}
						key={rowIndex}
					>
						{row.map(({ Icon, name, link }) => (
							<div className="diammond" key={name}>
								<a
									className="tech-diammond"
									href={link}
									target="_blank"
									rel="noopener noreferrer"
								>
									<Icon
										className={`tech-icon ${name
											.toLowerCase()
											.replace(" ", "")}-icon`}
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
