import { useId } from "react";
import usePointerPosition from "../hooks/usePointerPosition.js";
import GemGradients from "./GemGradients.jsx";
import GemPolygons from "./GemPolygons.jsx";
import "../../styles/FacetedGem.css";

export default function GemBase({
	facets,
	baseHue = 0,
	saturation = 0,
	lightnessBase = 5,
	lightnessRange = 30,
	viewBox = "-9 3.5 293 293",
	children,
}) {
	const uniqueId = useId();
	const { pointer, handleMouseMove } = usePointerPosition(300, 300);

	return (
		<svg
			className="faceted-gem"
			viewBox={viewBox}
			onMouseMove={handleMouseMove}
		>
			<GemGradients
				facets={facets}
				pointer={pointer}
				idPrefix={uniqueId}
				baseHue={baseHue}
				saturation={saturation}
				lightnessBase={lightnessBase}
				lightnessRange={lightnessRange}
			/>

			<g transform="translate(-31.27,-19.15) scale(1.1279)">
				<GemPolygons facets={facets} idPrefix={uniqueId} />
				<foreignObject x="90" y="90" width="150" height="150">
					<div className="gem-content">{children}</div>
				</foreignObject>
			</g>
		</svg>
	);
}
