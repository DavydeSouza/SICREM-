module.exports = (Service) => async (req, res, next) => {
	try {
		const contact = await Service.create(req.body)
		return global.callback201(res, contact)
	} catch (error) {
		return next(error)
	}
}
