module.exports = (Repo, ServiceSystem) => async (id) => {
	try {
		await ServiceSystem.inactiveByCertification(id)
		await Repo.inactive(id)
		return
	} catch (error) {
		throw error
	}
}
