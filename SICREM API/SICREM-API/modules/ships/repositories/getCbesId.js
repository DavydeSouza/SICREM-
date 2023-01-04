const repo = (pgpdb) => async (body) => {
	const getCbesidQuery = `
		SELECT
			cbesid
		FROM
			ship s
		WHERE
			s.shipowner = '${body.shipowner}'
			ORDER BY cbesid DESC LIMIT 1;
	`
	const r = await pgpdb.oneOrNone(getCbesidQuery)
	return r && r.cbesid ? r.cbesid : undefined
}
module.exports = repo
