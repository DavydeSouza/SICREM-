const repo = (pgpdb) => (body) => {
	const hasContacts = !!body.contacts.length
	let clientColumns = ''
	let clientValues = ''
	if (hasContacts) {
		clientColumns = ', contacts, register, clientid'
		clientValues = ', $<contacts>, $<register>, $<clientid>'
	}
	body.contacts = hasContacts ? JSON.stringify(body.contacts) : false
	const colums = `id, password, name, email, level ${hasContacts ? clientColumns : ''}`
	const values = `$<id>, $<password>, $<name>, $<email>, $<level> ${hasContacts ? clientValues : ''}`
	const returnig = `RETURNING id, name, email, level ${hasContacts ? clientColumns : ''}`
	const queryInsert = `INSERT INTO users (${colums}) VALUES (${values}) ${returnig};`
	return pgpdb.one(queryInsert, body)
}
module.exports = repo
