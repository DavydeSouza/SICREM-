module.exports = (Service) => async (req, res, next) => {
	try {
		const system = await Service.create(req.body)
		return global.callback201(res, system)
	} catch (error) {
		return next(error)
	}
}
