module.exports = (Service) => async (req, res, next) => {
	try {
		const freeBoard = await Service.update(req.params.id, req.body)
		return global.callback200(res, freeBoard)
	} catch (error) {
		return next(error)
	}
}
