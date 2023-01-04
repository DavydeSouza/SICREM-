module.exports = (Service) => async (req, res, next) => {
	try {
		const rtc = await Service.update(req.params.id, req.body)
		return global.callback200(res, rtc)
	} catch (error) {
		return next(error)
	}
}
