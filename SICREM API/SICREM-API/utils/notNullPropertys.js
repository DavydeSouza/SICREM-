const { Erro, ErrorType } = require('../_config/error')

const notNullPropertys = (obj, objectName) => {
	Object.keys(obj).forEach(key => {
		const property = obj[key]
		const type = typeof property
		if (property !== null) {
			if (type === 'object' && Object.keys(property).length) notNullPropertys(property, key)
		} else throw new Erro(ErrorType.PROPERTY_CANNOT_NULL, `${objectName}.${key}`)
	})
}

module.exports = notNullPropertys
