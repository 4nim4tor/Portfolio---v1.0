export default function ErrorDisplay({ errorLines, onSkip }) {
	return (
		<div className="error-message">
			{errorLines.map((line, index) => (
				<p key={index}>{line}</p>
			))}
			<button className="skip-button" onClick={onSkip}>
				Skip Sass
			</button>
		</div>
	);
}
