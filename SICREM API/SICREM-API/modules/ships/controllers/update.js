module.exports = (Service) => async (req, res, next) => {
	try {
		const ship = await Service.update(req.params.id, req.body)
		return global.callback200(res, ship)
	} catch (error) {
		return next(error)
	}
}
