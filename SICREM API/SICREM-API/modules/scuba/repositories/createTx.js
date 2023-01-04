const Guid = require('guid')
const moment = require('moment-timezone')

const repo = () => (tx, body) => {
	body.id = Guid.raw()
	body.dtInsert = moment().tz('America/Sao_Paulo').format('YYYY-MM-DD HH:mm:ss')
	let colums = `id, depth, generalSystemItems, compressors, masksHelmets, compressedsAirTanks,
	 cylindersFrames, comunicators, umbilicals, emergencyCylinders, controlPanels, signets,
	 winchs, dtInsert, hyperbaricsChambers, baskets, porticos, certification`

	let values = `$<id>, $<depth>, $<generalSystemItems>, $<compressors>,
		$<masksHelmets>, $<compressedsAirTanks>, $<cylindersFrames>, $<comunicators>, $<umbilicals>,
		$<emergencyCylinders>, $<controlPanels>, $<signets>, $<winchs>, $<dtInsert>,
		$<hyperbaricsChambers>, $<baskets>, $<porticos>, $<certification>`

	const returnig = 'RETURNING *'
	const query = `INSERT INTO System (${colums}) VALUES (${values}) ${returnig};`
	return tx.one(query, body)
}
module.exports = repo
