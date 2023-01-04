module.exports = (Service) => async (req, res, next) => {
	try {
		const contact = await Service.update(req.params.id, req.body)
		return global.callback200(res, contact)
	} catch (error) {
		return next(error)
	}
}
