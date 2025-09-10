import facets from "../../data/diamondFacets.js";
import GemBase from "./GemBase.jsx";

export default function DiamondGem(props) {
	return <GemBase facets={facets} {...props} />;
}
