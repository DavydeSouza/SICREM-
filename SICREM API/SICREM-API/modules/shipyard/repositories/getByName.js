module.exports = (pgpdb) => (name) => {
	try {
		const columns = `id, name`
		const join = ``
		const query = `
		SELECT
			${columns}
		FROM
			Shipyard sy
			${join}
		WHERE
			LOWER (sy.name) LIKE LOWER('%${name}%');`
		return pgpdb.any(query, {name})
	} catch (error) {
		throw new Error(error)
	}
}
