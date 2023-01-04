module.exports = (Repo, ServiceSystem, pgpdb) => async (id, body) => {
	try {
		const system_ = body.system
		const certification_ = body.certification
		certification_.maxDepth = certification_.maxdepth
		system_.certification = certification_.id
		return pgpdb.tx(async tx => {
			const system = await ServiceSystem.updateTx(tx, system_.id, system_)
			const certification = await Repo.updateTx(tx, id, certification_)
			return { certification, system }
		})
	} catch (error) {
		throw error
	}
}
