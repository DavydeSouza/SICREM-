module.exports = (Repo) => async (tx, body) => {
	try {
		body.address = JSON.stringify(body.address)
		const company = await Repo.createTx(tx, body)
		return company
	} catch (error) {
		throw error
	}
}
