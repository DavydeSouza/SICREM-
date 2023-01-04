const pgErrorHandler = require('../../../_config/error/handler/pgErrorHandler')
module.exports = (Repo, ServiceGtf, ServiceMtf) => async (id, body) => {
	try {
		const { ship, gtf, mtf } = body
		const ship_ = await Repo.update(id, ship)
		await ServiceGtf.updateTx(gtf)
		await ServiceMtf.update(mtf)

		if (ship_) {
			return await Repo.getById(ship_.id)
		} else {}
	} catch (error) {
		console.log(error)
		if (error.constraint) {
			pgErrorHandler(error.constraint)
		}
		throw error
	}
}
