/* eslint-disable object-property-newline */
const pgErrorHandler = require('../../../_config/error/handler/pgErrorHandler')
const getId = require('../../../utils/getId')

const REG_PORT = 'registrationport'
const OP_PORT = 'operationport'

module.exports = (Repo, ServiceTypes, ServicePort, ServiceShipYard) => async (gtf) => {
	try {
		const shipyard = gtf.shipyard.id
			? gtf.shipyard.id
			: await ServiceShipYard.create(gtf.shipyard)

		for (let key of Object.keys(gtf)) {
			if (key.toLocaleLowerCase() === REG_PORT || key.toLocaleLowerCase() === OP_PORT) {
				const callback = () => ServicePort.create(gtf[key])
				gtf[key] = await filterPort(gtf[key], callback)
			}

			if (!Array.isArray(gtf[key])) {
				const cb = () => ServiceTypes.create(gtf[key], key)
				gtf[key] = await getId(gtf[key], cb)
			}
		}

		gtf.activitys = JSON.stringify(gtf.activitys)
		gtf.navigationareas = JSON.stringify(gtf.navigationareas)
		gtf.propulsionAndPower = JSON.stringify(gtf.propulsionAndPower)
		gtf.rtc = JSON.stringify(gtf.rtc)

		const { hullmaterial, operationport, registrationport, shiptype,
			activitys, navigationareas, propulsionAndPower, rtc } = gtf

		const persist = { hullmaterial, operationport, registrationport, shipyard,
			shiptype, activitys, navigationareas, propulsionAndPower, rtc }

		const gtfPersisted = await Repo.create(persist)

		return gtfPersisted
	} catch (error) {
		if (error.constraint) {
			pgErrorHandler(error.constraint)
		}
		throw error
	}
}

async function filterPort (port_, cb) {
	if (!port_.id) {
		const port = await cb()
		return port
	} else return port_
}
