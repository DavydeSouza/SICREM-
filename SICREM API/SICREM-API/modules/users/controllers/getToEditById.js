module.exports = (Service) => async (req, res, next) => {
	try {
		const data = await Service.getToEditById(req.params.id)
		return global.callback200(res, data)
	} catch (error) {
		return next(error)
	}
}
