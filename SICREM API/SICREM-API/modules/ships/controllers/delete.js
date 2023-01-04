module.exports = (Service) => async (req, res, next) => {
	try {
		const ship = await Service.delete(req.params.id)
		return global.callback200(res, ship)
	} catch (error) {
		return next(error)
	}
}
