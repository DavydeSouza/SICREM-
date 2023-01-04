async function getId (obj, cb) {
	if (!!obj && (typeof obj === 'object')) {
		if (obj.id && obj.id !== '') {
			obj = obj.id
		} else {
			if (cb) {
				const type = await cb()
				obj = type.id
			} else {
				obj.id = null
			}
		}
	}
	return obj
}

module.exports = getId
