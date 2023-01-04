module.exports = (Repo) => async (id) => {
	try {
		let ship = await Repo.getByCbesId(id)
		return ship.jsonb_agg ? ship.jsonb_agg[0] : null
	} catch (error) {
		throw error
	}
}
