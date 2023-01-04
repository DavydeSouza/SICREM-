module.exports = (Service) => async (req, res, next) => {
	try {
		const name = req.query.value
		const shipowner = await Service.getByName(name)
		return global.callback200(res, shipowner)
	} catch (error) {
		return next(error)
	}
}
