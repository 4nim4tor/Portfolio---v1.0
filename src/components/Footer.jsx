import "../styles/Footer.css";

export default function Footer() {
	return (
		<footer className="foot">
			<p className="footer-p">
				&copy; {new Date().getFullYear()} 4nim4tor. All rights reserved.
			</p>
		</footer>
	);
}
