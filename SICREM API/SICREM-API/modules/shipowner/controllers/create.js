module.exports = (Service) => async (req, res, next) => {
	try {
		const shipowner = await Service.create(req.body)
		return global.callback201(res, shipowner)
	} catch (error) {
		return next(error)
	}
}
