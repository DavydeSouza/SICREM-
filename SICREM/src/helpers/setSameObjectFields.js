const setSameObjectFields = (src, model) => {
	const obj = {}
	for (var key of Object.keys(model)) {
		const lowerCaseKey = key.toLowerCase()
		const found = Object.keys(src).find(k => k === lowerCaseKey)
		if (found) obj[key] = src[lowerCaseKey]
	}
	return obj
}
export default setSameObjectFields
