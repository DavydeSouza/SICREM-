module.exports = (Service) => async (req, res, next) => {
	try {
		const souls = await Service.create(req.body)
		return global.callback201(res, souls)
	} catch (error) {
		return next(error)
	}
}
