import { getDefaultState, getDefaultFieldsValues } from './defaultState'

export const SET_BASKET_DIVING = 'SET_BASKET_DIVING'
export const SET_BASKET_ACCESS = 'SET_BASKET_ACCESS'
export const SET_BASKET_WORKLOAD = 'SET_BASKET_WORKLOAD'
export const SET_BASKET_NUMBER = 'SET_BASKET_NUMBER'
export const SET_BASKET_MANUFACTURER = 'SET_BASKET_MANUFACTURER'
export const SET_BASKET_MODEL = 'SET_BASKET_MODEL'
export const SET_BASKET_DECLARATION = 'SET_BASKET_DECLARATION'
export const SET_BASKET_EXPIRATION = 'SET_BASKET_EXPIRATION'
export const SET_BASKET_ISSUEDBY = 'SET_BASKET_ISSUEDBY'
export const SET_BASKETS = 'SET_BASKETS'
export const ADD_BASKET = 'ADD_BASKET'
export const EDIT_BASKET = 'EDIT_BASKET'
export const SET_BASKET = 'SET_BASKET'
export const REMOVE_BASKET = 'REMOVE_BASKET'

export const RESET_BASKET_FIELDS = 'RESET_BASKET_FIELDS'
export const RESET_BASKET_STATE = 'RESET_BASKET_STATE'

export default {
	[SET_BASKET_DIVING]({ basket }, payload) {
		basket.diving = payload
	},
	[SET_BASKET_ACCESS]({ basket }, payload) {
		basket.access = payload
	},
	[SET_BASKET_WORKLOAD]({ basket }, payload) {
		basket.workLoad = payload
	},
	[SET_BASKET_NUMBER]({ basket }, payload) {
		basket.manufactured.idNumber = payload
	},
	[SET_BASKET_MANUFACTURER]({ basket }, payload) {
		basket.manufactured.manufacturer = payload
	},
	[SET_BASKET_MODEL]({ basket }, payload) {
		basket.manufactured.model = payload
	},
	[SET_BASKET_DECLARATION]({ basket }, payload) {
		basket.conformity.declarationNumber = payload
	},
	[SET_BASKET_EXPIRATION]({ basket }, payload) {
		basket.conformity.expiration = payload
	},
	[SET_BASKET_ISSUEDBY]({ basket }, payload) {
		basket.conformity.issuedBy = payload
	},
	[SET_BASKETS]({ baskets }, payload = []) {
		baskets.splice(0, payload.length)
		baskets.push(...payload)
	},
	[ADD_BASKET]({ baskets, basket }) {
		basket.id = Date.now()
		baskets.push(basket)
	},
	[EDIT_BASKET]({ baskets, basket }, payload) {
		const index = baskets.findIndex(c => c.id === basket.id)
		basket.flag = payload
		baskets.splice(index, 1)
		baskets.push(basket)
	},
	[SET_BASKET](state, payload) {
		const id = payload.id || Date.now()
		state.basket = {
			id: id,
			manufactured: payload.manufactured,
			conformity: payload.conformity,
			flag: payload.flag,
			workLoad: payload.workLoad,
			diving: payload.diving,
			access: payload.access
		}
	},
	[REMOVE_BASKET]({ baskets }, payload) {
		const index = baskets.findIndex(b => b.id === payload)
		baskets.splice(index, 1)
	},
	[RESET_BASKET_STATE](state) {
		Object.assign(state, getDefaultState())
	},
	[RESET_BASKET_FIELDS](state) {
		state.basket = getDefaultFieldsValues()
	}
}
