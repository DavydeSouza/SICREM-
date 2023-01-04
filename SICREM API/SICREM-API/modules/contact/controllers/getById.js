module.exports = (Service) => async (req, res, next) => {
	try {
		const contact = await Service.getById(req.params.id)
		return global.callback200(res, contact)
	} catch (error) {
		return next(error)
	}
}
