module.exports = (Repo) => async (id) => {
	try {
		let rtc = await Repo.getById(id)
		return rtc
	} catch (error) {
		throw error
	}
}
