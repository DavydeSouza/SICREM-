module.exports = (Service) => async (req, res, next) => {
	try {
		const ship = await Service.getByCbesId(req.params.id)
		return global.callback200(res, ship)
	} catch (error) {
		return next(error)
	}
}
