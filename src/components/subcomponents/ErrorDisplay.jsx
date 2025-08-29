// src/components/subcomponents/ErrorDisplay.jsx
import "../../styles/GlitchModal.css"; // reuse glitch styles

const variants = ["v1", "v2", "v3"];

function randomProps(index) {
	return {
		className: `glitch-block ${
			variants[Math.floor(Math.random() * variants.length)]
		}`,
		style: {
			"--slice-speed": `${1.6 + Math.random() * 1.2}s`,
			"--shift-speed": `${1.8 + Math.random() * 1.4}s`,
			animationDelay: `${index * 0.12}s`,
		},
	};
}

export default function ErrorDisplay({ errorLines, onSkip }) {
	return (
		<div className="about-image error-box">
			<div className="egg-message">
				{errorLines.map((line, index) => (
					<div key={index} {...randomProps(index)} data-text={line}>
						{line}
					</div>
				))}
			</div>
			<button className="skip-button" onClick={onSkip}>
				Skip Sass
			</button>
		</div>
	);
}
