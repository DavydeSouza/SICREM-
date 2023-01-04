module.exports = (Service) => async (req, res, next) => {
	try {
		const port = await Service.update(req.params.id, req.body)
		return global.callback200(res, port)
	} catch (error) {
		return next(error)
	}
}
