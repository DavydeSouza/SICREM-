module.exports = (pgpdb) => async (id) => {
	const userJson = `
		'user', json_build_object(
			'id', u.id,
			'name', u.name,
			'active', u.active,
			'email', u.email,
			'contacts', u.contacts,
			'level', u.level,
			'clientId', u.clientid
		)
	`
	const companyJson = `
		'company', json_build_object(
			'id', c.id,
			'name', c.name,
			'fcem', c.fcem,
			'fcemExpiration', c.fcemexpiration,
			'register', c.register,
			'address', c.address
		)
	`

	const columns = `json_build_object(${userJson}, ${companyJson})`

	const join = `
		left join company c on c."user" = u.id
	`
	const query = `
	SELECT
		${columns}
	FROM
		users u
		${join}
	WHERE
		u.id = $<id>;
	`

	const result = await pgpdb.oneOrNone(query, {id})

	return result.json_build_object
}
