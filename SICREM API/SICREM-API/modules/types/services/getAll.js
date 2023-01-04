module.exports = (Repo) => async (table) => {
	try {
		const types = await Repo.getAll(`${table}Type`)
		return types
	} catch (error) {
		throw error
	}
}
