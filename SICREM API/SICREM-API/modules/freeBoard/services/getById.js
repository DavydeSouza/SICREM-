module.exports = (Repo) => async (id) => {
	try {
		let freeBoard = await Repo.getById(id)
		return freeBoard
	} catch (error) {
		throw error
	}
}
