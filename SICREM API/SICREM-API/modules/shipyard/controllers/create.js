module.exports = (Service) => async (req, res, next) => {
	try {
		const shipyard = await Service.create(req.body)
		return global.callback201(res, shipyard)
	} catch (error) {
		return next(error)
	}
}
