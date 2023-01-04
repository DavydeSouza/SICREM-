module.exports = (Repo) => async (certification) => {
	try {
		await Repo.inactiveByCertification(certification)
		return
	} catch (error) {
		throw error
	}
}
