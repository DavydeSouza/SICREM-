module.exports = (Repo) => async (query, json) => {
	try {
		const filters = Object.entries(query).map((e, i) => {
			return { field: e[0], value: e[1], index: i + 1 }
		})
		let ships = await Repo.get(filters.filter(f => f), json)
		return handleResult(ships)
	} catch (error) {
		throw error
	}
}

function handleResult (ships_ = []) {
	const total = ships_[0].total
	return {
		total,
		content: ships_.map(s => {
			delete s.total
			return s
		})
	}
}
