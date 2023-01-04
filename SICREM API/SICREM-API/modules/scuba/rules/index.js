const { Erro, ErrorType } = require('./../../../_config/error')
const notNullPropertys = require('../../../utils/notNullPropertys')

const KEYS_20 = ['compressors', 'compressedsAirTanks', 'masksHelmets']
const KEYS_CONFORMITY = ['baskets', 'signets', 'hyperbaricsChambers', 'porticos', 'winchs']
const KEYS_30_50 = ['cylindersFrames', 'comunicators', 'umbilicals', 'emergencyCylinders',
	'controlPanels'].concat(KEYS_20, KEYS_CONFORMITY)
const KEYS_EXC = ['generalSystemItems']

module.exports = {

	itemsAt20: (system) => {
		KEYS_20.forEach(key => {
			const items = system[key] || []
			if (!items.length) throw new Erro(ErrorType.INVALID_SCUBA_FIELDS, key)
		})
	},

	itemsBetween30and50: (system) => {
		KEYS_30_50.forEach(key => {
			const items = system[key] || []
			if (!items.length) throw new Erro(ErrorType.INVALID_SCUBA_FIELDS, key)
			notNullPropertys(system[key], key)
		})
	},

	itemsConformity: (system) => {
		KEYS_CONFORMITY.forEach(key => {
			const items = system[key] || []
			items.forEach(item => {
				if (!item.conformity) throw new Erro(ErrorType.INVALID_SCUBA_CONFORMITY, key)
			})
		})
	},

	itemsToJSON: (body) => {
		[...KEYS_30_50, ...KEYS_EXC].forEach(key => {
			body[key] = JSON.stringify(body[key])
		})
		delete body.system
		return body
	}

}
