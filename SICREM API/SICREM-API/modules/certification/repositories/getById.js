module.exports = (pgpdb) => (body) => {
	const json = `
			json_agg(c.*) as certification,
			json_agg(json_build_object('name', e.name, 'id', e.id)) as company
			${body.system ? ', json_agg(s.*) as system' : ''}
	`
	const join = `
		JOIN Company e on e.id = c.company
		${body.system ? 'JOIN system s on s.certification = c.id' : ' '}
	`
	const columns = `${json}`
	const query = `
	SELECT
		${columns}
	FROM
		Certification c
		${join}
	WHERE
		c.id = $<id>;`
	return pgpdb.one(query, body)
}
