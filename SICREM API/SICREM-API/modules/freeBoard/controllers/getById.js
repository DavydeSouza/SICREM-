module.exports = (Service) => async (req, res, next) => {
	try {
		const freeBoard = await Service.getById(req.params.id)
		return global.callback200(res, freeBoard)
	} catch (error) {
		return next(error)
	}
}
