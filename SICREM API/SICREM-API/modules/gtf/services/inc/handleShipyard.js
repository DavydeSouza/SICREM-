const pgpdb = require('../../../../_config/db/postgres')

async function handleShipyard (shipyard, service) {
	const shipyard_ = shipyard.id
		? shipyard
		: await pgpdb.tx(async tx => service.create(shipyard, tx))
	return shipyard_.id
}

module.exports = handleShipyard
