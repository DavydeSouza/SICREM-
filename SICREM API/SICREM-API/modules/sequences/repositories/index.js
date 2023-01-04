const pgpdb = require('../../../_config/db/postgres')

module.exports = {
	generateClientID: require('./generateClientID')(pgpdb),
	generateCbesID: require('./generateCbesID')(pgpdb)
}
