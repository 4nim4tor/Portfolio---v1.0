import {
	createContext,
	useContext,
	useState,
	useCallback,
	useMemo,
	useEffect,
} from "react";
import { GlitchModal } from "../components/GlitchModal/GlitchModal";
import EASTER_EGGS from "../data/easterEggs";

const ChaosContext = createContext(null);

export function ChaosProvider({
	children,
	chaosProb = 1 / 12,
	eggs = EASTER_EGGS,
}) {
	const [open, setOpen] = useState(false);
	const [message, setMessage] = useState("");

	const list = useMemo(() => (eggs?.length ? eggs : EASTER_EGGS), [eggs]);

	const roll = useCallback(
		(e) => {
			if (Math.random() < chaosProb) {
				const msg = list[(Math.random() * list.length) | 0];
				setMessage(msg);
				setOpen(true);

				// Optional: block same‑tab link nav if chaos triggers
				if (e?.target?.closest("a") && !e.target.closest("a").target) {
					e.preventDefault();
				}
				return true;
			}
			return false;
		},
		[chaosProb, list]
	);

	const close = useCallback(() => setOpen(false), []);

	// 🆕 Delegated global click listener
	useEffect(() => {
		const handler = (e) => {
			// Match buttons, anchors, and role=button (covers many UI libs)
			if (e.target.closest("a, button, [role='button']")) {
				roll(e);
			}
		};
		document.addEventListener("click", handler);
		return () => document.removeEventListener("click", handler);
	}, [roll]);

	return (
		<ChaosContext.Provider value={{ roll }}>
			{children}
			<GlitchModal open={open} message={message} onClose={close} />
		</ChaosContext.Provider>
	);
}

export const useChaos = () => {
	const ctx = useContext(ChaosContext);
	if (!ctx) throw new Error("useChaos must be used within <ChaosProvider>");
	return ctx;
};
