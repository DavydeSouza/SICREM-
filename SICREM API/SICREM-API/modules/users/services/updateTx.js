const pgErrorHandler = require('../../../_config/error/handler/pgErrorHandler')
const { clientMustHaveCompany, clientMustHaveContact, isInativeUser, onlyAdminUpdateThisUser, clientNoChangePerfil } = require('../rules')

module.exports = (Repo, ServiceCompany, pgpdb) => async (id, body, user) => {
	try {
		const {client, company} = body
		const resp = {}
		await clientNoChangePerfil(client)
		onlyAdminUpdateThisUser(user.level, client.level)
		await isInativeUser(client)
		return pgpdb.tx(async tx => {
			if (client.level === '2') {
				clientMustHaveCompany(company)
				clientMustHaveContact(client)
				resp.user = await updateClient(client, id, Repo, tx)
				resp.company = await updateCompany(company, id, ServiceCompany, tx)
			} else {
				client.contacts = []
				resp.user = await Repo.updateTx(tx, client.id, client)
			}
			return resp
		})
	} catch (error) {
		if (error.constraint) {
			pgErrorHandler(error.constraint)
		}
		throw error
	}
}

async function updateClient (client, id, Repo, tx) {
	client.contacts = JSON.stringify(client.contacts)
	return Repo.updateTx(tx, id, client)
}

async function updateCompany (company, id, service, tx) {
	company.user = id
	company = await service.updateTx(tx, company.id, company)
	return company
}
