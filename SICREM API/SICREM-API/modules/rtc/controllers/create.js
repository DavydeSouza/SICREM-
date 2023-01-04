module.exports = (Service) => async (req, res, next) => {
	try {
		const rtc = await Service.create(req.body)
		return global.callback201(res, rtc)
	} catch (error) {
		return next(error)
	}
}
