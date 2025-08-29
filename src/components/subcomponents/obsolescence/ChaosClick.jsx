// src/components/subcomponents/ChaosClick.jsx
import React from "react";
import { useChaos } from "../components/ChaosProvider";

export function ChaosClick({
	children,
	onClick,
	preventAnchorOnTrigger = true,
}) {
	const { roll } = useChaos();

	const child = React.Children.only(children);

	const handleClick = (e) => {
		child.props?.onClick?.(e);
		onClick?.(e);

		const triggered = roll();

		if (
			triggered &&
			preventAnchorOnTrigger &&
			e.currentTarget.tagName === "A" &&
			!e.currentTarget.target // only block same-tab
		) {
			e.preventDefault();
		}
	};

	return React.cloneElement(child, { onClick: handleClick });
}
