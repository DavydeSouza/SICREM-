module.exports = (Service) => async (req, res, next) => {
	try {
		const draft = await Service.getById(req.params.id)
		return global.callback200(res, draft)
	} catch (error) {
		return next(error)
	}
}
