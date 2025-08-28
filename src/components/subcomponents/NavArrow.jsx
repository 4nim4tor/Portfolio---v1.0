import { div } from "framer-motion/client";

export default function NavArrow({ onClick, Icon, label }) {
	return (
		<div className="nav-arrow">
			<button className="nav-button" onClick={onClick} aria-label={label}>
				<Icon className="arrow-icon" />
			</button>
		</div>
	);
}
