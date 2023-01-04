module.exports = (Service) => async (req, res, next) => {
	try {
		const shipowner = await Service.update(req.params.id, req.body)
		return global.callback200(res, shipowner)
	} catch (error) {
		return next(error)
	}
}
