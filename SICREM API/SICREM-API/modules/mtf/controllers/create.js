module.exports = (Service) => async (req, res, next) => {
	try {
		const mtf = await Service.create(req.body)
		return global.callback201(res, mtf)
	} catch (error) {
		return next(error)
	}
}
