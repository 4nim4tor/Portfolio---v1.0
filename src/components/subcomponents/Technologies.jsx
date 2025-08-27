import techs from "../../data/technologies";
import "../../styles/Technologies.css";
import chunkArray from "../../utilities/chunkArray";
import TechDiamond from "./TechDiamond";

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
							<TechDiamond key={name} Icon={Icon} name={name} link={link} />
						))}
					</div>
				))}
			</div>
		</section>
	);
}
