import { useState, useEffect, useRef } from "react";

export default function useCarousel(length, interval = 15000) {
	const [current, setCurrent] = useState(0);
	const autoPlayRef = useRef(null);

	const next = () => setCurrent((prev) => (prev + 1) % length);

	const prev = () => setCurrent((prev) => (prev - 1 + length) % length);

	const goTo = (index) => setCurrent(index);

	useEffect(() => {
		autoPlayRef.current = setInterval(() => {
			next();
		}, interval);

		return () => clearInterval(autoPlayRef.current);
	}, [length]);

	return { current, next, prev, goTo };
}
