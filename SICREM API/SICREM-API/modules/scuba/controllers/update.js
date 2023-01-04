module.exports = (Service) => async (req, res, next) => {
	try {
		const system = await Service.update(req.query.id, req.body)
		return global.callback200(res, system)
	} catch (error) {
		return next(error)
	}
}
