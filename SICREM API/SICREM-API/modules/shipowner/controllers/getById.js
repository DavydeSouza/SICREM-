module.exports = (Service) => async (req, res, next) => {
	try {
		const shipowner = await Service.getById(req.params.id)
		return global.callback200(res, shipowner)
	} catch (error) {
		return next(error)
	}
}
