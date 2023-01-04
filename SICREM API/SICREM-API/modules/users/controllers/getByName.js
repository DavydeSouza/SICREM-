module.exports = (Service) => async (req, res, next) => {
	try {
		const port = await Service.getByName(req.params.name)
		return global.callback200(res, port)
	} catch (error) {
		return next(error)
	}
}
