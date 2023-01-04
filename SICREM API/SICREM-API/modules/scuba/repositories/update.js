const moment = require('moment-timezone')

module.exports = (pgpdb) => (id, obj) => {
	obj.dtUpdate = moment()
		.tz('America/Sao_Paulo')
		.format('YYYY-MM-DD HH:mm:ss')
	const query = `
	UPDATE
		System
	SET
		depth = $<depth>,
		generalSystemItems = $<generalSystemItems>,
		compressors = $<compressors>,
		masksHelmets = $<masksHelmets>,
		compressedsAirTanks = $<compressedsAirTanks>,
		cylindersFrames = $<cylindersFrames>,
		comunicators = $<comunicators>,
		umbilicals = $<umbilicals>,
		emergencyCylinders = $<emergencyCylinders>,
		controlPanels = $<controlPanels>,
		signets = $<signets>,
		winchs = $<winchs>,
		hyperbaricsChambers = $<hyperbaricsChambers>,
		baskets = $<baskets>,
		porticos = $<porticos>,
		dtUpdate = $<dtUpdate>,
		certification = $<certification>
	WHERE
		id = '${id}'
	RETURNING
		*;`
	return pgpdb.one(query, obj)
}
