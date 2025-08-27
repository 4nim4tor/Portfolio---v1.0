import { useEffect, useRef } from "react";

export default function useErrorCycle(
	setShowError,
	setCurrentError,
	errorMessages
) {
	const timeoutRef = useRef(null);
	const loopTimeoutRef = useRef(null);
	const errorActiveRef = useRef(false);

	const startCycle = () => {
		setShowError(false);
		errorActiveRef.current = false;

		loopTimeoutRef.current = setTimeout(() => {
			const randomIndex = Math.floor(Math.random() * errorMessages.length);
			setCurrentError(errorMessages[randomIndex]);
			setShowError(true);
			errorActiveRef.current = true;

			timeoutRef.current = setTimeout(() => {
				setShowError(false);
				errorActiveRef.current = false;
				startCycle();
			}, 15000);
		}, 8000);
	};

	const skipError = () => {
		setShowError(false);
		errorActiveRef.current = false;
		clearTimeout(timeoutRef.current);
		clearTimeout(loopTimeoutRef.current);
		startCycle();
	};

	useEffect(() => {
		startCycle();
		return () => {
			clearTimeout(timeoutRef.current);
			clearTimeout(loopTimeoutRef.current);
		};
	}, []);

	return { skipError };
}
