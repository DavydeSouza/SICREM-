module.exports = (Service) => async (req, res, next) => {
	try {
		const draft = await Service.create(req.body)
		return global.callback201(res, draft)
	} catch (error) {
		return next(error)
	}
}
