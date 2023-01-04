module.exports = (Service) => async (req, res, next) => {
	try {
		const draft = await Service.update(req.params.id, req.body)
		return global.callback200(res, draft)
	} catch (error) {
		return next(error)
	}
}
