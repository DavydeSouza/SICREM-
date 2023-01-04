const sanatizeObject = obj => {
	for (var [key, value] of Object.entries(obj)) {
		if (value === '' || value === undefined) {
			obj[key] = null
		}
	}
	return obj
}
export default sanatizeObject
