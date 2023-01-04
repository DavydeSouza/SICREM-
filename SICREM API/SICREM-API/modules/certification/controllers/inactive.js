module.exports = (Service) => async (req, res, next) => {
	try {
		await Service.inactive(req.query.id)
		return global.callback204(res)
	} catch (error) {
		return next(error)
	}
}
