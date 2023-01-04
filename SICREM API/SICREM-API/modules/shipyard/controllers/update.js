module.exports = (Service) => async (req, res, next) => {
	try {
		const shipyard = await Service.update(req.params.id, req.body)
		return global.callback200(res, shipyard)
	} catch (error) {
		return next(error)
	}
}
