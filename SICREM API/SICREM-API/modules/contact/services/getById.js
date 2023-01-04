module.exports = (Repo) => async (id) => {
	try {
		let contact = await Repo.getById(id)
		return contact
	} catch (error) {
		throw error
	}
}
