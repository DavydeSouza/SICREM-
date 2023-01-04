module.exports = (Service) => async (req, res, next) => {
	try {
		const types = await Service.getAll(req.params.type)
		return global.callback200(res, types)
	} catch (error) {
		return next(error)
	}
}
