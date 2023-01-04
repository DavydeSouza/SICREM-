module.exports = (Repo) => async (params) => {
	try {
		const filter = handleParams(params)
		const shipowners = await Repo.getByClient(filter)
		return shipowners
	} catch (error) {
		throw error
	}
}

function handleParams (params) {
	const entries = Object.entries(params)[0]
	const column = entries[0] === 'code' ? 'clientid' : 'name'
	return { column, value: entries[1] }
}
