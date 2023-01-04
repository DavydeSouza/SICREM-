module.exports = (Service) => async (req, res, next) => {
	try {
		const freeBoardArea = await Service.update(req.params.id, req.body)
		return global.callback200(res, freeBoardArea)
	} catch (error) {
		return next(error)
	}
}
