const { Erro, ErrorType } = require('../../../_config/error')

const _nullToFalse = require('../../../utils/nullToFalse')

const CERTIFICATION_ERRORS = {
	invalidValues: {
		status: 400,
		message: 'Invalid certification values. Select only one certification type.'
	}
}

const KEYS = ['cssm20Meters', 'cssm30Meters', 'cssm30MetersDecompressionStop',
	'cssmBetween30And50', 'cssmBetween50And90', 'cssmBetween90And300',
	'hyperbaricChamberDeclarationConformity', 'basketsSignetsDeclarationConformity']

module.exports = {
	nullToFalse: (body) => {
		Object.keys(body).forEach(key => {
			if (KEYS.includes(key)) body[key] = _nullToFalse(body[key])
		})
	},

	verifyInvalidSystem: (company) => {
		if (!company) throw new Erro(ErrorType.INVALID_CERT_SYSTEM_FIELD)
	},

	verifyValidValues: (certification) => {
		const obj = {}
		Object.keys(certification).forEach(key => {
			if (KEYS.includes(key)) obj[key] = certification[key]
		})
		const allTrue = Object.values(obj).every(value => value === true) // should be false
		const allFalse = Object.values(obj).every(value => !value) // should be false
		const oneTrue = Object.values(obj).filter(value => value).length === 1// should be true
		const isValid = (!allTrue && !allFalse) && oneTrue
		if (!isValid) throw new Erro(CERTIFICATION_ERRORS.invalidValues)
	}
}
