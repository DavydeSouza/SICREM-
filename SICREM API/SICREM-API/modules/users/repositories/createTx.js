const Guid = require('guid')

const repo = () => async (tx, body) => {
	const hasContacts = !!body.contacts.length
	body.id = Guid.raw()
	let clientColumns = ''
	let clientValues = ''
	if (hasContacts) {
		clientColumns = ', contacts, clientid'
		clientValues = ', $<contacts>, $<clientid>'
	}
	body.contacts = hasContacts ? JSON.stringify(body.contacts) : false
	const colums = `id, password, name, email, level ${hasContacts ? clientColumns : ''}`
	const values = `$<id>, $<password>, $<name>, $<email>, $<level> ${hasContacts ? clientValues : ''}`
	const returnig = `RETURNING id, name, email, level ${hasContacts ? clientColumns : ''}`
	const queryInsert = `INSERT INTO users (${colums}) VALUES (${values}) ${returnig};`
	return tx.one(queryInsert, body)
}
module.exports = repo
