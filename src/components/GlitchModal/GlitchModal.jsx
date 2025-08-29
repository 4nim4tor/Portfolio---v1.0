// src/components/GlitchModal/GlitchModal.jsx

import { useEffect } from "react";
import { createPortal } from "react-dom";
import "../../styles/GlitchModal.css";

export function GlitchModal({ open, message, onClose }) {
	useEffect(() => {
		function onKey(e) {
			if (e.key === "Escape") onClose?.();
		}
		if (open) document.addEventListener("keydown", onKey);
		return () => document.removeEventListener("keydown", onKey);
	}, [open, onClose]);

	useEffect(() => {
		if (!open) return;
		const prevActive = document.activeElement;
		document.getElementById("egg-close-btn")?.focus();
		return () => prevActive?.focus?.();
	}, [open]);

	if (!open) return null;

	const variants = ["v1", "v2", "v3"];

	function randomProps(index) {
		return {
			className: `glitch-block ${
				variants[Math.floor(Math.random() * variants.length)]
			}`,
			style: {
				"--slice-speed": `${1.6 + Math.random() * 1.2}s`,
				"--shift-speed": `${1.8 + Math.random() * 1.4}s`,
				animationDelay: `${index * 0.12}s`,
			},
		};
	}

	return createPortal(
		<div
			className="egg-overlay active"
			onClick={(e) => e.target === e.currentTarget && onClose()}
		>
			<div
				className="egg-modal"
				role="dialog"
				aria-modal="true"
				aria-labelledby="egg-title"
				aria-describedby="egg-message"
			>
				<div className="egg-chrome">
					<div id="egg-title" className="egg-title">
						System Anomaly
					</div>
					<button
						id="egg-close-btn"
						className="egg-close"
						aria-label="Close"
						onClick={onClose}
					>
						✕
					</button>
				</div>
				<div className="egg-body">
					<div id="egg-message" className="egg-message">
						{Array.isArray(message) ? (
							message.map((line, i) => (
								<div key={i} {...randomProps(i)} data-text={line}>
									{line}
								</div>
							))
						) : (
							<div {...randomProps(0)} data-text={message}>
								{message}
							</div>
						)}
					</div>
				</div>
			</div>
		</div>,
		document.body
	);
}
