import cloneObject from '../../../../helpers/cloneObject.js'
import { getDefaultState, getDefaultFieldsValues } from './defaultState'

export const SET_SHIPOWNER_ID = 'SET_SHIPOWNER_ID'
export const SET_SHIPOWNER_NAME = 'SET_SHIPOWNER_NAME'
export const SET_SHIPOWNER_REGISTER = 'SET_SHIPOWNER_REGISTER'

export const SET_SHIPOWNERS = 'SET_SHIPOWNERS'
export const SET_SHIPOWNER = 'SET_SHIPOWNER'
export const SET_SHIPOWNER_ADDRESS = 'SET_SHIPOWNER_ADDRESS'

export const RESET_SHIPOWNER_FIELDS = 'RESET_SHIPOWNER_FIELDS'
export const RESET_SHIPOWNER_STATE = 'RESET_SHIPOWNER_STATE'

export default {
	[SET_SHIPOWNER_ID]({ shipowner }, payload) {
		shipowner.id = payload
	},
	[SET_SHIPOWNER_REGISTER]({ shipowner }, payload) {
		shipowner.register = payload
	},
	[SET_SHIPOWNER_NAME]({ shipowner }, payload) {
		shipowner.name = payload
	},
	[SET_SHIPOWNERS]({ shipowners }, payload) {
		shipowners.splice(0, payload.length)
		shipowners.push(...payload)
	},
	[SET_SHIPOWNER]({ shipowner }, payload) {
		cloneObject(payload, shipowner)
	},
	[SET_SHIPOWNER_ADDRESS]({ shipowner }, payload) {
		shipowner.address = payload
	},
	[RESET_SHIPOWNER_STATE](state) {
		Object.assign(state, getDefaultState())
	},
	[RESET_SHIPOWNER_FIELDS](state) {
		state.client = getDefaultFieldsValues()
	}
}
