import { useState, useCallback } from "react";

export default function usePointerPosition(svgWidth, svgHeight) {
	const [pointer, setPointer] = useState({ x: svgWidth / 2, y: svgHeight / 2 });

	const handleMouseMove = useCallback(
		(e) => {
			const rect = e.currentTarget.getBoundingClientRect();
			setPointer({
				x: ((e.clientX - rect.left) / rect.width) * svgWidth,
				y: ((e.clientY - rect.top) / rect.height) * svgHeight,
			});
		},
		[svgWidth, svgHeight]
	);

	return { pointer, handleMouseMove };
}
