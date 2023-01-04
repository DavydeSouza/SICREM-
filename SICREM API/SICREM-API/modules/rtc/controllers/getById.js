module.exports = (Service) => async (req, res, next) => {
	try {
		const rtc = await Service.getById(req.params.id)
		return global.callback200(res, rtc)
	} catch (error) {
		return next(error)
	}
}
