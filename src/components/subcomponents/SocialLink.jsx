export default function SocialLink({ href, children, label }) {
	return (
		<a
			href={href}
			className="social-icon tooltip"
			target="_blank"
			rel="noopener noreferrer"
			aria-label={label}
		>
			{children}
			{label && <span className="tooltip-text">{label}</span>}
		</a>
	);
}
