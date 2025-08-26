import { useState } from "react";

export default function useCarousel(length) {
	const [current, setCurrent] = useState(0);

	const next = () => setCurrent((prev) => (prev + 1) % length);
	const prev = () => setCurrent((prev) => (prev - 1 + length) % length);
	const goTo = (index) => setCurrent(index);

	return { current, next, prev, goTo };
}
