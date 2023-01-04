module.exports = (pgpdb) => (id) => {
	const json = `json_build_object('adress', json_agg(a.*))`
	const columns = `id, name, adress, ${json}`
	const join = `JOIN Adress a on a.id = s.adress`
	const query = `
	SELECT
		${columns}
	FROM
		Shipyard s
		${join}
	WHERE
		s.id = $<id>;`
	return pgpdb.oneOrNone(query, {id})
}
