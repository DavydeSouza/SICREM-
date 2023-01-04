module.exports = (Service) => async (req, res, next) => {
	try {
		const json = req.path.includes('json')
		const ship = await Service.getById(req.query.id, json)
		return global.callback200(res, ship)
	} catch (error) {
		return next(error)
	}
}
