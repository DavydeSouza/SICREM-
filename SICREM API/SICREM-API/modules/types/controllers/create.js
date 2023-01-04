module.exports = (Service) => async (req, res, next) => {
	try {
		const type = req.body.type
		const name = req.body.name
		const persistedType = await Service.create({type, name})
		return global.callback201(res, persistedType)
	} catch (error) {
		return next(error)
	}
}
