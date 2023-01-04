const encryptPswd = require('../../../_config/actions/encryptPswd')
const GeneratePswd = require('../../../_config/actions/generatePswd')
const ActionEmail = require('../../../_config/actions/action-email')
const conteudoEmail = require('../../../_config/email')
const { clientMustHaveCompany, clientMustHaveContact, isInativeUser, onlyAdminUpdateThisUser } = require('../rules')

module.exports = (Repo, ServiceSeq, ServiceShipOwner, ServiceCompany, pgpdb) => async (body, user) => {
	try {
		const generatedPswd = GeneratePswd()
		const encryptedPswd = encryptPswd(generatedPswd)
		const {client, company} = body
		const resp = {}
		client.password = encryptedPswd
		onlyAdminUpdateThisUser(user.level, client.level)
		await isInativeUser(client)
		return pgpdb.tx(async tx => {
			if (client.level === '2') {
				clientMustHaveCompany(company)
				clientMustHaveContact(client)
				resp.user = await createClient(client, ServiceSeq, tx, Repo)
				resp.company = await createCompany(company, resp.user.id, ServiceCompany, tx)
			} else {
				resp.user = await Repo.createTx(tx, client)
			}
			const mail = conteudoEmail.welcome(resp.user, generatedPswd)
			await ActionEmail.send(resp.user.email, mail.subject, mail.content)
			return resp
		})
	} catch (error) {
		throw error
	}
}

async function createClient (client, service, tx, Repo) {
	client.clientid = await service.generateClientID()
	return Repo.createTx(tx, client)
}

async function createCompany (company, userId, service, tx) {
	company.user = userId
	return service.createTx(tx, company)
}
