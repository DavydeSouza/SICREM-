module.exports = (pgpdb) => (showInactives) => {
	const columns = `c.id, c.cbesid, c.expiration, c.type, s.depth, comp.name`
	const join = `
		JOIN System s on s.certification = c.id
		JOIN Company comp on comp.id = c.company
	`
	const filter = showInactives ? '' : 'WHERE c.active = TRUE'
	const query = `
	SELECT
		${columns}
	FROM
		Certification c
		${join}
		${filter};`
	return pgpdb.any(query)
}
