const ids = {}
const onlyIDs = (obj, keyParam, index = -1) => {
	if (obj) {
		const keys = Object.keys(obj)
		keys.forEach(key => {
			if (key === 'id') {
				if (keyParam) {
					if (index > -1) {
						if (!ids[keyParam]) ids[keyParam] = []
						ids[keyParam][index] = obj[key]
					} else {
						ids[keyParam] = {}
						ids[keyParam] = obj[key]
					}
				} else {
					if (index > -1) {
						if (!ids[keyParam]) ids[keyParam] = []
						ids[key][index] = obj[key]
					} else {
						ids.id = obj[key]
					}
				}
			} else {
				if (typeof obj[key] === 'object') {
					if (Array.isArray(obj[key])) {
						obj[key].forEach((object, index) => onlyIDs(object, key, index))
					} else {
						onlyIDs(obj[key], key)
					}
				}
			}
		})
	}
	return ids
}
export default onlyIDs
