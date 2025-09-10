import { useState, useEffect } from "react";
import "../styles/ThemeToggle.css";
import ThemeToggleIcon from "../assets/svgs/Theme-Light-Dark-Loop.svg?react";
import HexGem from "./subcomponents/HexGem";

export default function ThemeToggle() {
	const [lightMode, setLightMode] = useState(
		localStorage.getItem("theme") === "light"
	);

	useEffect(() => {
		document.documentElement.classList.toggle("invert", lightMode);
		localStorage.setItem("theme", lightMode ? "light" : "dark");
	}, [lightMode]);

	return (
		<div className="theme-toggle-wrapper">
			<div className="theme-toggle-border">
				<div className="theme-toggle">
					<HexGem>
						<button
							className="theme-toggle"
							onClick={() => setLightMode(!lightMode)}
							aria-label="Toggle theme"
						>
							<ThemeToggleIcon
								className={lightMode ? "icon-light" : "icon-dark"}
							/>
						</button>
					</HexGem>
				</div>
			</div>
		</div>
	);
}
