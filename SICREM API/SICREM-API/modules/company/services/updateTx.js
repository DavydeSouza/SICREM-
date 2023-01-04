
module.exports = (Repo) => async (tx, id, body) => {
	try {
		body.address = JSON.stringify(body.address)
		const company = await Repo.updateTx(tx, id, body)
		return company
	} catch (error) {
		throw error
	}
}
