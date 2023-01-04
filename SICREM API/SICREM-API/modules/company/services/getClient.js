module.exports = (Repo) => async (name, code, isScuba) => {
	try {
		let company = await Repo.getClient(name, code, isScuba)
		return company
	} catch (error) {
		throw error
	}
}
