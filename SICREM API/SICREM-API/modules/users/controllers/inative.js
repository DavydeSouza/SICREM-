module.exports = (Service) => async (req, res, next) => {
	try {
		await Service.inativeTx(req.params.id, req.body, req.tokenDecoded)
		return global.callback200(res, { msg: global.TEXTS.inactivation_success })
	} catch (error) {
		return next(error)
	}
}
