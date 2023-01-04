module.exports = (Repo) => async (certification) => {
	try {
		let system = await Repo.getByCertificationId(certification)
		return system
	} catch (error) {
		throw error
	}
}
