module.exports = (Service) => async (req, res, next) => {
	try {
		const souls = await Service.update(req.params.id, req.body)
		return global.callback200(res, souls)
	} catch (error) {
		return next(error)
	}
}
