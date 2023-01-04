module.exports = (Service) => async (req, res, next) => {
	try {
		const query = req.query
		const json = req.path.includes('json')
		const ship = await Service.get(query, json)
		return global.callback200(res, ship)
	} catch (error) {
		return next(error)
	}
}
