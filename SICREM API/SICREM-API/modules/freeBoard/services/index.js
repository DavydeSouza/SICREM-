const Repo = require('../repositories')
const ServiceAreas = require('../../freeBoardArea/services')

module.exports = {
	create: require('./create')(Repo, ServiceAreas),
	update: require('./update')(Repo),
	getById: require('./getById')(Repo)
}
