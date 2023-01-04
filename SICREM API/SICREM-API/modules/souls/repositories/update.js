module.exports = (pgpdb) => (mtf, obj) => {
	const query = `
	UPDATE
		Souls
	SET
		qtdpaxcabin8bunks = $<qtdpaxcabin8bunks>,
		qtdotherpax = $<qtdotherpax>,
		qtdunmannedprofessionals = $<qtdunmannedprofessionals>,
		crew = $<crew>
	WHERE
		mtf = '${mtf}'
	RETURNING
		id;`
	return pgpdb.one(query, obj)
}
