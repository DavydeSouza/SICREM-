module.exports = (Service) => async (req, res, next) => {
	try {
		const type = await Service.getById(req.params.id, req.params.type)
		return global.callback200(res, type)
	} catch (error) {
		return next(error)
	}
}
