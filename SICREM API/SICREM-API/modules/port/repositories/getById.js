module.exports = (pgpdb) => (id) => {
	const json = `json_build_object('adress', json_agg(a.*))`
	const columns = `id, name, adress, gtf, ${json}`
	const join = `JOIN Adress a on a.id = p.adress`
	const query = `
	SELECT
		${columns}
	FROM
		Port p
		${join}
	WHERE
		p.id = $<id>;`
	return pgpdb.oneOrNone(query, {id})
}
