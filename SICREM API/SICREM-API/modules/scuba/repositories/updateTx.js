const {PreparedStatement: PS} = require('pg-promise')
const moment = require('moment-timezone')
const stringDashRemove = require('../../../utils/stringDashRemove')
const deallocate = require('../../../utils/deallocate')

module.exports = () => async (tx, id, obj) => {
	obj.dtUpdate = moment()
		.tz('America/Sao_Paulo')
		.format('YYYY-MM-DD HH:mm:ss')
	const query = `
	UPDATE
		System
	SET
		depth = $1,
		generalSystemItems = $2,
		compressors = $3,
		masksHelmets = $4,
		compressedsAirTanks = $5,
		cylindersFrames = $6,
		comunicators = $7,
		umbilicals = $8,
		emergencyCylinders = $9,
		controlPanels = $10,
		signets = $11,
		winchs = $12,
		hyperbaricsChambers = $13,
		baskets = $14,
		porticos = $15,
		dtUpdate = $16,
		certification = $17
	WHERE
		id = $18
	RETURNING
		*;`

	const psName = `updateScuba_${stringDashRemove(id)}`

	const update = new PS({name: psName, text: query})
	update.values = [
		obj.depth, obj.generalSystemItems, obj.compressors, obj.masksHelmets,
		obj.compressedsAirTanks, obj.cylindersFrames, obj.comunicators, obj.umbilicals,
		obj.emergencyCylinders, obj.controlPanels, obj.signets, obj.winchs,
		obj.hyperbaricsChambers, obj.baskets, obj.porticos, obj.dtUpdate,
		obj.certification, id
	]

	const result = await tx.one(update, obj)
	await deallocate(tx, psName)
	return result
}
