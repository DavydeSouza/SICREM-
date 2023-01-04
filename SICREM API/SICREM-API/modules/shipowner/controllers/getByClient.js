module.exports = (Service) => async (req, res, next) => {
	try {
		const params = req.query
		const shipowner = await Service.getByClient(params)
		return global.callback200(res, shipowner)
	} catch (error) {
		return next(error)
	}
}
