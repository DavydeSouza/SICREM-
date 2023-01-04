module.exports = (Repo) => async (query) => {
	try {
		const filters = Object.entries(query).map((e, i) => {
			return { field: e[0], value: e[1], index: i + 1 }
		})
		let clients = await Repo.getClients(filters.filter(f => f))
		return handleResult(clients)
	} catch (error) {
		throw error
	}
}

function handleResult (users = []) {
	if (users.length) {
		const total = users[0].total
		return {
			total,
			content: users.map(s => {
				delete s.total
				return s
			})
		}
	}
	return users
}
