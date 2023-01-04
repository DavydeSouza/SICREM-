module.exports = (Repo) => async (id) => {
	try {
		let mtf = await Repo.getById(id)
		return mtf
	} catch (error) {
		throw error
	}
}
