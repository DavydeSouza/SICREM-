module.exports = (Repo, ServiceSeq, ServiceSystem) => async (body) => {
	try {
		const certification_ = body.certification
		certification_.cbesid = await ServiceSeq.generateCbesID()
		certification_.issue = '2015-07-21'
		certification_.expiration = '2016-07-21'

		const certification = await Repo.create(certification_)

		body.system.certification = certification.id
		const system = await ServiceSystem.create(body)

		return { certification, system }
	} catch (error) {
		throw error
	}
}
