module.exports = (Service) => async (req, res, next) => {
	try {
		const shipyards = await Service.getByName(req.params.name)
		return global.callback200(res, shipyards)
	} catch (error) {
		return next(error)
	}
}
