module.exports = (Repo, ServiceSeq, ServiceSystem, pgpdb) => async (body) => {
	try {
		const certification_ = body.certification
		certification_.issue = '2015-07-21'
		certification_.expiration = '2016-07-21'
		return pgpdb.tx(async tx => {
			certification_.cbesid = await ServiceSeq.generateCbesID()
			const certification = await Repo.createTx(tx, certification_)
			body.system.certification = certification.id
			const system = await ServiceSystem.createTx(tx, body)
			return { certification, system }
		})
	} catch (error) {
		throw error
	}
}
