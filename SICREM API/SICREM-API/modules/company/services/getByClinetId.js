module.exports = (Repo) => async (clientid) => {
	try {
		let company = await Repo.getByClinetId(clientid)
		return company
	} catch (error) {
		throw error
	}
}
