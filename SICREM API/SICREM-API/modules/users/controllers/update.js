module.exports = (Service) => async (req, res, next) => {
	try {
		const users = await Service.updateTx(req.params.id, req.body, req.tokenDecoded)
		return global.callback200(res, users)
	} catch (error) {
		return next(error)
	}
}
