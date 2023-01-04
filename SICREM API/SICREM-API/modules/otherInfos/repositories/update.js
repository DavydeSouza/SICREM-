module.exports = (pgpdb) => (ship, obj) => {
	const query = `
	UPDATE
		OtherInfos
	SET
		cargoondeck = $<cargoondeck>,
		tank = $<tank>,
		toxicchemicalsorgas = $<toxicchemicalsorgas>,
		glowless60 = $<glowless60>,
		dangerouscargo = $<dangerouscargo>,
		standby = $<standby>,
		convoy = $<convoy>,
		crossingsoperator = $<crossingsoperator>
	WHERE
		ship = '${ship}'
	RETURNING
		id;`
	return pgpdb.one(query, obj)
}
