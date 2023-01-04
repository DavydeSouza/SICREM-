module.exports = (pgpdb) => async (mtf, objs) => {
	const resp = []
	const freeBoards = Object.values(objs)
	for (const obj of freeBoards) {
		const query = `
		UPDATE
			FreeBoard
		SET
			openseasize = '${obj.openseasize}',
			areas = '${JSON.stringify(obj.areas)}'
		WHERE
			isdraft = ${obj.isdraft} AND
			mtf = '${mtf.id}'
		RETURNING id
			;`
		resp.push(await pgpdb.oneOrNone(query))
	}
	return resp
}
