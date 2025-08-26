export default function DotNavigation({ total, currentIndex, onSelect }) {
	return (
		<div className="dots">
			{Array.from({ length: total }).map((_, index) => (
				<span
					key={index}
					className={`dot ${index === currentIndex ? "active" : ""}`}
					onClick={() => onSelect(index)}
				/>
			))}
		</div>
	);
}
