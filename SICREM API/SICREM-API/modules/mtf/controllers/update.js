module.exports = (Service) => async (req, res, next) => {
	try {
		const mtf = await Service.update(req.params.id, req.body)
		return global.callback200(res, mtf)
	} catch (error) {
		return next(error)
	}
}
