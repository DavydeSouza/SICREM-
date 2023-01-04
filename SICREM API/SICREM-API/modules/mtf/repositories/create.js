const repo = (pgpdb) => (body) => {
	let colums = `id, totallength, hulllength, rulelength, lpp, ligthdisplacement,
	heavydisplacement, grosstonnage, nettonnage, moldedend, moldedmouth, countour,
	tonnagelength, deadweight, drafts, freeBoards, souls`
	let values = `$<id>, $<totallength>, $<hulllength>, $<rulelength>, $<lpp>,
	$<ligthdisplacement>, $<heavydisplacement>, $<grosstonnage>, $<nettonnage>, $<moldedend>,
	$<moldedmouth>, $<countour>, $<tonnagelength>, $<deadweight>,
	$<drafts>, $<freeBoards>, $<souls>`
	const returnig = 'RETURNING *'
	const query = `INSERT INTO MainTechinicalFeatures (${colums}) VALUES (${values}) ${returnig};`
	return pgpdb.one(query, body)
}
module.exports = repo
