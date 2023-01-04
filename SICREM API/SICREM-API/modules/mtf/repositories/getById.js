module.exports = (pgpdb) => (id) => {
	const columns = `
	id, totalLength, hullLength, ruleLength, lpp, ligthDisplacement,
	heavyDisplacement, grossTonnage, moldedEnd, moldedMouth, countour,
	tonnageLength, deadweight
	`
	const join = ``
	const query = `
	SELECT
		${columns}
	FROM
		MainTechinicalFeatures mtf
		${join}
	WHERE
		mtf.id = $<id>;
	`
	return pgpdb.oneOrNone(query, {id})
}
