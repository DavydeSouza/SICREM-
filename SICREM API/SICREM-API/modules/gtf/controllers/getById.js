module.exports = (Service) => async (req, res, next) => {
	try {
		const gtf = await Service.getById(req.params.id)
		return global.callback200(res, gtf)
	} catch (error) {
		return next(error)
	}
}
