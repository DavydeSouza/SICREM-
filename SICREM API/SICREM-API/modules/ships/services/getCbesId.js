const pgErrorHandler = require('../../../_config/error/handler/pgErrorHandler')
const leftZero = require('../../../utils/leftZero')

const type = 'E'
module.exports = (Repo) => async (ship) => {
	try {
		const cbesid = await Repo.getCbesId(ship)
		return cbesid ? mountCbesID(cbesid) : `${ship.clientid}${type}001`
	} catch (error) {
		if (error.constraint) {
			pgErrorHandler(error.constraint)
		}
		throw error
	}
}

function mountCbesID (cbesid) {
	const control = cbesid.indexOf(type) + 1
	const strNumber = cbesid.slice(control)
	const prefix = cbesid.slice(0, control)
	const sufix = leftZero(parseInt(strNumber) + 1)
	return prefix + sufix
}
