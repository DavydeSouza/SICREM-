module.exports = (Service) => async (req, res, next) => {
	try {
		const port = await Service.getById(req.params.id)
		return global.callback200(res, port)
	} catch (error) {
		return next(error)
	}
}
