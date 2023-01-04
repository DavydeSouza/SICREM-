module.exports = (pgpdb) => (company) => {
	const columns = `*`
	const query = `
	SELECT
		${columns}
	FROM
		Certification
	WHERE
		company = $<company>;`
	return pgpdb.any(query, {company})
}
