import facets from "../../data/hexFacets.js";
import GemBase from "./GemBase";

export default function HexGem(props) {
	return <GemBase facets={facets} {...props} />;
}
