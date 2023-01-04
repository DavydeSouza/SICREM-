module.exports = (Service) => async (req, res, next) => {
	try {
		const prop = await Service.getById(req.params.id)
		return global.callback200(res, prop)
	} catch (error) {
		return next(error)
	}
}
