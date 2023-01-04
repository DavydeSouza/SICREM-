import { getDefaultState, getDefaultFieldsValues } from './defaultState'

export const SET_ADDRESS_VALIDATIONS = 'SET_ADDRESS_VALIDATIONS'
export const SET_ADDRESS_POSTALCODE = 'SET_ADDRESS_POSTALCODE'
export const SET_ADDRESS_STREET = 'SET_ADDRESS_STREET'
export const SET_ADDRESS_NUMBER = 'SET_ADDRESS_NUMBER'
export const SET_ADDRESS_STATE = 'SET_ADDRESS_STATE'
export const SET_ADDRESS_CITY = 'SET_ADDRESS_CITY'
export const SET_ADDRESS_COMPLEMENT = 'SET_ADDRESS_COMPLEMENT'
export const RESET_ADDRESS_FIELDS = 'RESET_ADDRESS_FIELDS'
export const RESET_ADDRESS_STATE = 'RESET_ADDRESS_STATE'

export default {
	[SET_ADDRESS_VALIDATIONS](state, payload) {
		state.validations = payload
	},
	[SET_ADDRESS_POSTALCODE]({ address }, payload) {
		address.postcode = payload
	},
	[SET_ADDRESS_STREET]({ address }, payload) {
		address.street = payload
	},
	[SET_ADDRESS_NUMBER]({ address }, payload) {
		address.number = payload
	},
	[SET_ADDRESS_STATE]({ address }, payload) {
		address.state = payload
	},
	[SET_ADDRESS_CITY]({ address }, payload) {
		address.city = payload
	},
	[SET_ADDRESS_COMPLEMENT]({ address }, payload) {
		address.complement = payload
	},
	[RESET_ADDRESS_STATE](state) {
		Object.assign(state, getDefaultState())
	},
	[RESET_ADDRESS_FIELDS](state) {
		state.address = getDefaultFieldsValues()
	}
}
