module.exports = (Service) => async (req, res, next) => {
	try {
		const infos = await Service.update(req.params.id, req.body)
		return global.callback200(res, infos)
	} catch (error) {
		return next(error)
	}
}
