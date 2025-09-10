import DiamondGem from "./DiamondGem";

export default function TechDiamond({ Icon, name, link }) {
	return (
		<div className="diammond" key={name}>
			<a
				className="tech-diammond"
				href={link}
				target="_blank"
				rel="noopener noreferrer"
			>
				<DiamondGem>
					<Icon
						className={`tech-icon ${name
							.toLowerCase()
							.replace(" ", "")
							.replace(".", "")}-icon`}
					/>
					<span>{name}</span>
				</DiamondGem>
			</a>
		</div>
	);
}
