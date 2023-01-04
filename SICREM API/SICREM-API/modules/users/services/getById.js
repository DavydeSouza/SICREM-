module.exports = (Repo) => async (id) => {
	try {
		const user = await Repo.getById(id)
		user.contacts = !user.contacts ? [] : user.contacts
		return user
	} catch (error) {
		throw error
	}
}
