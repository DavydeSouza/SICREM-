const { itemsAt20, itemsBetween30and50, itemsConformity, itemsToJSON } = require('../rules')

module.exports = (Repo) => async (tx, id, body) => {
	try {
		if (body.depth) {
			if (parseInt(body.depth) < 30) itemsAt20(body)
			else {
				itemsBetween30and50(body)
				itemsConformity(body)
			}
			const scuba = Repo.updateTx(tx, id, itemsToJSON(body))
			return scuba
		} else {
			throw new Error('Required property "depth" missing.')
		}
	} catch (error) {
		throw error
	}
}
