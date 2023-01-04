const Guid = require('guid')
const encryptPswd = require('../../../_config/actions/encryptPswd')
const GeneratePswd = require('../../../_config/actions/generatePswd')
const ActionEmail = require('../../../_config/actions/action-email')
const conteudoEmail = require('../../../_config/email')
const { Erro, ErrorType } = require('./../../../_config/error')

module.exports = (Repo, ServiceSeq) => async (body) => {
	const id = (body.id) ? body.id : Guid.raw()
	const generatedPswd = GeneratePswd()
	const encryptedPswd = encryptPswd(generatedPswd)

	body.id = id
	body.password = encryptedPswd

	if (body.level === '2' && (!body.register || !body.contacts.length)) {
		throw new Erro(ErrorType.INVALID_CLIENT_DATA)
	} else if (body.level === '2') {
		body.clientid = await ServiceSeq.generateClientID()
	}
	const user = await Repo.create(body)

	const mail = conteudoEmail.welcome(user, generatedPswd)
	await ActionEmail.send(user.email, mail.subject, mail.content)

	return user
}
