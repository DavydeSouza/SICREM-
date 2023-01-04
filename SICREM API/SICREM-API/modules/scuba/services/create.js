const { itemsAt20, itemsBetween30and50, itemsConformity, itemsToJSON } = require('../rules')

module.exports = (Repo) => async (body) => {
	try {
		if (body.system.depth) {
			const system = body.system
			if (parseInt(system.depth) < 30) itemsAt20(system)
			else {
				itemsBetween30and50(system)
				itemsConformity(system)
			}
			const scuba = Repo.create(itemsToJSON(system))
			return scuba
		} else {
			throw new Error('Required property "depth" missing.')
		}
	} catch (error) {
		throw error
	}
}
