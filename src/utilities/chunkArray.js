export default function chunkArray(array, sizes) {
	const result = [];
	let i = 0;
	let sizeIndex = 0;

	while (i < array.length) {
		const size = sizes[sizeIndex % sizes.length];
		result.push(array.slice(i, i + size));
		i += size;
		sizeIndex++;
	}
	return result;
}
