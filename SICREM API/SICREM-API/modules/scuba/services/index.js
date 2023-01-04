const Repo = require('../repositories')

module.exports = {
	create: require('./create')(Repo),
	createTx: require('./createTx')(Repo),
	update: require('./update')(Repo),
	updateTx: require('./updateTx')(Repo),
	inactiveByCertification: require('./inactiveByCertification')(Repo),
	getByCertificationId: require('./getByCertificationId')(Repo)
}
