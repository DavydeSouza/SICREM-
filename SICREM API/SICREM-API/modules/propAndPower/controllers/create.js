module.exports = (Service) => async (req, res, next) => {
	try {
		const prop = await Service.create(req.body)
		return global.callback201(res, prop)
	} catch (error) {
		return next(error)
	}
}
