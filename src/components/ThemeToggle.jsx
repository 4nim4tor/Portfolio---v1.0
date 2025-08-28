import { useState, useEffect } from "react";
import "../styles/ThemeToggle.css";

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
			<div className="theme-toggle-border"></div>
			<button
				className="theme-toggle"
				onClick={() => setLightMode(!lightMode)}
				aria-label="Toggle theme"
			>
				{lightMode ? "🌙" : "☀️"}
			</button>
		</div>
	);
}
