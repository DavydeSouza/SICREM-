module.exports = (Repo) => async (id, json) => {
	try {
		let ship = await Repo.getById(id, json)
		return ship.jsonb_agg ? ship.jsonb_agg[0] : null
	} catch (error) {
		throw error
	}
}
