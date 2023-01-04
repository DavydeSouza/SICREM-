module.exports = (Service) => async (req, res, next) => {
	try {
		const ship = await Service.create(req.body)
		return global.callback201(res, ship)
	} catch (error) {
		return next(error)
	}
}
