module.exports = (Service) => async (req, res, next) => {
	try {
		const prop = await Service.update(req.params.id, req.body)
		return global.callback200(res, prop)
	} catch (error) {
		return next(error)
	}
}
