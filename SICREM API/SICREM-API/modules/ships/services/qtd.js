module.exports = (Repo) => async () => {
	try {
		return Repo.qtd()
	} catch (error) {
		throw error
	}
}
