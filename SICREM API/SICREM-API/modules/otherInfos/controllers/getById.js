module.exports = (Service) => async (req, res, next) => {
	try {
		const infos = await Service.getById(req.params.id)
		return global.callback200(res, infos)
	} catch (error) {
		return next(error)
	}
}
