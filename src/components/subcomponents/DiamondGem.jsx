import facets from "../../data/diamondFacets.js";
import GemBase from "./GemBase.jsx";

export default function DiamondGem(props) {
	return <GemBase facets={facets} viewBox="-8.5 4 293 293" {...props} />;
}
