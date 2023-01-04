module.exports = (Service) => async (req, res, next) => {
	try {
		await Service.activateTx(req.params.id, req.body)
		return global.callback200(res, { msg: global.TEXTS.activate_user_success })
	} catch (error) {
		return next(error)
	}
}
