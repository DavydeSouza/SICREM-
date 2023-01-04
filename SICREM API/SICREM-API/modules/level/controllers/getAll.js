module.exports = (Service) => async (req, res, next) => {
	try {
		const users = await Service.getAll()
		return global.callback200(res, users)
	} catch (error) {
		return next(error)
	}
}
