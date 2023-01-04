const { Erro, ErrorType } = require('./../../../_config/error')
const { onlyAdminAction } = require('../../../_config/error/rules')
const { verifyStatusByEmail, getById } = require('../repositories/')
// const notNullPropertys = require('../../../utils/notNullPropertys')

module.exports = {
	levelPropertyInvalid: (level) => {
		if (level === undefined || level === null) { throw new Erro(ErrorType.INVALID_PROPERTY_VALUE) }
	},

	onlyAdminUpdateThisUser: (loggedUserLevel, targetUserLevel) => {
		if (parseInt(targetUserLevel) !== 2) onlyAdminAction(loggedUserLevel)
	},

	isInativeUser: async user => {
		const isInativeUser = await verifyStatusByEmail(user.email)
		if (isInativeUser) throw new Erro(ErrorType.EMAIL_USED_INATIVE_USER)
	},

	clientMustHaveContact: user => {
		if (!user.contacts.length) throw new Erro(ErrorType.INVALID_CLIENT_DATA)
	},

	clientMustHaveCompany: company => {
		if (!company) throw new Erro(ErrorType.INVALID_CLIENT_DATA)
	},

	clientNoChangePerfil: async updatedUser => {
		const originalUser = await getById(updatedUser.id)
		const originalIsClient = originalUser.level === '2'
		const updatedIsNotClient = updatedUser.level !== '2'
		if (originalIsClient && updatedIsNotClient) { throw new Erro(ErrorType.INVALID_CLIENT_PERFIL_CHANGE) }
	}
}
