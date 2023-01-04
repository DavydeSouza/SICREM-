module.exports = (Service) => async (req, res, next) => {
	try {
		const id = req.params.id
		const system = parseInt(req.query.system)
		const certification = await Service.getById({ id, system })
		return global.callback200(res, certification)
	} catch (error) {
		return next(error)
	}
}
