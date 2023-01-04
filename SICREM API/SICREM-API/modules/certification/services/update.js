module.exports = (Repo, ServiceSystem) => async (id, body) => {
	try {
		const system_ = body.system
		const certification_ = body.certification
		certification_.maxDepth = certification_.maxdepth
		system_.certification = certification_.id
		const system = await ServiceSystem.update(system_.id, system_)
		const certification = await Repo.update(id, certification_)
		return { certification, system }
	} catch (error) {
		throw error
	}
}
