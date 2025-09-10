export default function GemGradients({
	facets,
	pointer,
	baseHue,
	saturation,
	lightnessBase,
	lightnessRange,
	idPrefix,
}) {
	return (
		<defs>
			{facets.map((facet, i) => {
				// Find facet center
				const xs = facet.map((p) => p[0]);
				const ys = facet.map((p) => p[1]);
				const cx = xs.reduce((a, b) => a + b, 0) / xs.length;
				const cy = ys.reduce((a, b) => a + b, 0) / ys.length;

				// Vector from facet center to pointer
				const dx = pointer.x - cx;
				const dy = pointer.y - cy;
				const len = Math.sqrt(dx * dx + dy * dy) || 1;

				// Normalize to 0–1 for gradient coords
				const nx = dx / len / 2 + 0.5;
				const ny = dy / len / 2 + 0.5;

				// Lightness variation based on distance
				const distFactor = Math.max(0, 1 - len / 300);
				const l1 = lightnessBase + lightnessRange * distFactor;
				const l2 = lightnessBase - lightnessRange * distFactor;

				return (
					<linearGradient
						key={i}
						id={`${idPrefix}-facet${i}`} // unique ID
						x1={`${nx * 100}%`}
						y1={`${ny * 100}%`}
						x2={`${(1 - nx) * 100}%`}
						y2={`${(1 - ny) * 100}%`}
					>
						<stop
							offset="0%"
							stopColor={`hsl(${baseHue}, ${saturation}%, ${l1}%)`}
						/>
						<stop
							offset="100%"
							stopColor={`hsl(${baseHue}, ${saturation}%, ${l2}%)`}
						/>
					</linearGradient>
				);
			})}
		</defs>
	);
}

// // Lightness variation per facet
// const l1 = lightnessBase + ((i % 6) - 3) * (lightnessRange / 6);
// const l2 = lightnessBase - ((i % 6) - 3) * (lightnessRange / 6);

// // Alternate gradient direction for sparkle
// const x1 = i % 2 === 0 ? "0%" : "100%";
// const y1 = "0%";
// const x2 = i % 2 === 0 ? "100%" : "0%";
// const y2 = "100%";
