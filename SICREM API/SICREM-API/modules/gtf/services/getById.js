module.exports = (Repo) => async (id) => {
	try {
		let gtf = await Repo.getById(id)
		return gtf
	} catch (error) {
		throw error
	}
}
