module.exports = (Service) => async (req, res, next) => {
	try {
		const mtf = await Service.getById(req.params.id)
		return global.callback200(res, mtf)
	} catch (error) {
		return next(error)
	}
}
