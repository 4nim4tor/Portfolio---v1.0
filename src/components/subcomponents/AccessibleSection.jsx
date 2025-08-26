export default function AccessibleSection({
	id,
	title,
	children,
	className = "",
	headingLevel = "h2",
}) {
	const HeadingTag = headingLevel;
	const headingId = `${id}-heading`;

	return (
		<section
			id={id}
			className={`section ${className}`}
			aria-labelledby={headingId}
		>
			<HeadingTag id={headingId} className="section-title">
				{title}
			</HeadingTag>
			{children}
		</section>
	);
}
