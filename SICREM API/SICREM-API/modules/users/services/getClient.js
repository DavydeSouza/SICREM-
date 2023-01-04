module.exports = (Repo) => async (name, code) => {
	try {
		console.log(name, code)
		let client = await Repo.getClient(name, code)
		return client
	} catch (error) {
		throw error
	}
}
