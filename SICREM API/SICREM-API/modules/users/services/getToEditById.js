module.exports = (Repo) => async (id) => {
	try {
		const data = await Repo.getToEditById(id)
		const user = data.user.id ? data.user : null
		const company = data.company.id ? data.company : null
		if (user) user.contacts = !user.contacts ? [] : user.contacts
		return {user, company}
	} catch (error) {
		throw error
	}
}
