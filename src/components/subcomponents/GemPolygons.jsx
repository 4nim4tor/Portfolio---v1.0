export default function GemPolygons({ facets, idPrefix }) {
	return (
		<>
			{facets.map((facet, i) => (
				<polygon
					key={i}
					points={facet.map((p) => p.join(",")).join(" ")}
					fill={`url(#${idPrefix}-facet${i})`} // match unique ID
					stroke="gray"
					strokeWidth="0.2"
				/>
			))}
		</>
	);
}
