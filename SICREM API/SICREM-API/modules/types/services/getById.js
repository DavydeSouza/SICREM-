module.exports = (Repo) => async (id, table) => {
	try {
		let type = await Repo.getById(id, `${table}Type`)
		return type
	} catch (error) {
		throw error
	}
}
