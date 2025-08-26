export default function SkillHex({ Icon, name, link }) {
	return (
		<div className="hex" key={name}>
			<a
				className="skill-hex"
				href={link}
				target="_blank"
				rel="noopener noreferrer"
				aria-label={`Learn more about ${name}`}
			>
				<Icon
					className={`skills-icon ${name.toLowerCase().replace(".", "")}-icon`}
				/>
				<span>{name}</span>
			</a>
		</div>
	);
}
