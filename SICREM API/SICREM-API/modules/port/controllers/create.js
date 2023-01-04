module.exports = (Service) => async (req, res, next) => {
	try {
		const port = await Service.create(req.body)
		return global.callback201(res, port)
	} catch (error) {
		return next(error)
	}
}
