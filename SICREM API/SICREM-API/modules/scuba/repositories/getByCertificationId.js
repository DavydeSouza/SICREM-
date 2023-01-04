module.exports = (pgpdb) => (certification) => {
	const columns = `*`
	const query = `
	SELECT
		${columns}
	FROM
		System
	WHERE
		certification = $<certification>;`
	return pgpdb.any(query, {certification})
}
