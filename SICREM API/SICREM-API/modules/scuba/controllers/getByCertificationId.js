module.exports = (Service) => async (req, res, next) => {
	try {
		const system = await Service.getByCertificationId(req.query.id)
		return global.callback200(res, system)
	} catch (error) {
		return next(error)
	}
}
