module.exports = (Repo) => async (filters = {inactives: 0}) => {
	try {
		const showInactives = parseInt(filters.inactives) === 1
		const certifications = await Repo.getAll(showInactives)
		return certifications
	} catch (error) {
		throw error
	}
}
