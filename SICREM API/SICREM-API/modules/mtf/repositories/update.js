module.exports = (pgpdb) => (obj) => {
	const query = `
	UPDATE
		MainTechinicalFeatures
	SET
		totallength = $<totallength>,
		deadweight = $<deadweight>,
		tonnagelength = $<tonnagelength>,
		countour = $<countour>,
		moldedmouth = $<moldedmouth>,
		moldedend = $<moldedend>,
		grosstonnage = $<grosstonnage>,
		heavydisplacement = $<heavydisplacement>,
		ligthdisplacement = $<ligthdisplacement>,
		lpp = $<lpp>,
		rulelength = $<rulelength>,
		hulllength = $<hulllength>,
		drafts = $<drafts>,
		freeBoards = $<freeBoards>,
		souls = $<souls>
	WHERE
		id = $<id>
	RETURNING
		id;`
	return pgpdb.one(query, obj)
}
