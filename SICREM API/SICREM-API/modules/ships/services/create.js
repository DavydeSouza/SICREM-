const pgErrorHandler = require('../../../_config/error/handler/pgErrorHandler')
const getId = require('../../../utils/getId')

module.exports = (Repo, ServiceGtf, ServiceMtf, getCbesId) => async (body) => {
	try {
		body.ship.shipowner = await getId(body.ship.shipowner, undefined)

		const gtf = await ServiceGtf.create(body.gtf)
		const mtf = await ServiceMtf.create(body.mtf)
		const otherInfos = JSON.stringify(body.ship.otherInfos)
		const cbesid = await getCbesId(body.ship)

		body.ship.cbesid = cbesid
		body.ship.gtf = gtf.id
		body.ship.mtf = mtf.id
		body.ship.otherInfos = otherInfos

		const ship = await Repo.create(body.ship)

		return ship
	} catch (error) {
		console.log(error)
		if (error.constraint) {
			pgErrorHandler(error.constraint)
		}
		throw error
	}
}
