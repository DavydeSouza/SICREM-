module.exports = (Service) => async (req, res, next) => {
	try {
		const shipyard = await Service.getById(req.params.id)
		return global.callback200(res, shipyard)
	} catch (error) {
		return next(error)
	}
}
