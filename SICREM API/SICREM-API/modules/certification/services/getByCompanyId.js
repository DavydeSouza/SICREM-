module.exports = (Repo) => async (id) => {
	try {
		let certification = await Repo.getByCompanyId(id)
		return certification
	} catch (error) {
		throw error
	}
}
