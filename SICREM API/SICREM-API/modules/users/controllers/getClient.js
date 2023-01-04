module.exports = (Service) => async (req, res, next) => {
	try {
		const client = await Service.getClient(req.query.name, req.query.code)
		return global.callback200(res, client)
	} catch (error) {
		return next(error)
	}
}
