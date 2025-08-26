export default function NavArrow({ onClick, Icon, label }) {
	return (
		<button className="nav-arrow" onClick={onClick} aria-label={label}>
			<Icon className="arrow-icon" />
		</button>
	);
}
