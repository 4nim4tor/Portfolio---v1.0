export default function Footer() {
	return (
		<footer
			style={{
				padding: "1rem",
				textAlign: "center",
				border: "1px solid var(--accent-color)",
			}}
		>
			<p style={{ fontSize: "0.9rem" }}>
				&copy; {new Date().getFullYear()} 4nim4tor. All rights reserved.
			</p>
		</footer>
	);
}
