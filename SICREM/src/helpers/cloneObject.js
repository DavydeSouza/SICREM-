const cloneObject = (src, target) => {
	for (var srcKey of Object.keys(src)) {
		const found = Object.keys(target).find(targetKey => targetKey === srcKey)
		if (found) target[srcKey] = src[srcKey]
	}
}
export default cloneObject
