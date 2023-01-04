import { getDefaultState, getDefaultFieldsValues } from './defaultState'

export const SET_AIR_TANK_ISDOUBLE = 'SET_AIR_TANK_ISDOUBLE'
export const SET_AIR_TANK_PRESSURE = 'SET_AIR_TANK_PRESSURE'
export const SET_AIR_TANK_CAPACITY = 'SET_AIR_TANK_CAPACITY'
export const SET_AIR_TANK_NUMBER = 'SET_AIR_TANK_NUMBER'
export const SET_AIR_TANK_MANUFACTURER = 'SET_AIR_TANK_MANUFACTURER'
export const SET_AIR_TANK_MODEL = 'SET_AIR_TANK_MODEL'
export const SET_AIR_TANKS = 'SET_AIR_TANKS'
export const ADD_AIR_TANK = 'ADD_AIR_TANK'
export const EDIT_AIR_TANK = 'EDIT_AIR_TANK'
export const SET_AIR_TANK = 'SET_AIR_TANK'
export const REMOVE_AIR_TANK = 'REMOVE_AIR_TANK'

export const RESET_AIR_TANK_FIELDS = 'RESET_AIR_TANK_FIELDS'
export const RESET_AIR_TANK_STATE = 'RESET_AIR_TANK_STATE'

export default {
	[SET_AIR_TANK_ISDOUBLE]({ compressedAirTank }, payload) {
		compressedAirTank.isDouble = payload
	},
	[SET_AIR_TANK_PRESSURE]({ compressedAirTank }, payload) {
		compressedAirTank.pressure = payload
	},
	[SET_AIR_TANK_CAPACITY]({ compressedAirTank }, payload) {
		compressedAirTank.capacity = payload
	},
	[SET_AIR_TANK_NUMBER]({ compressedAirTank }, payload) {
		compressedAirTank.manufactured.idNumber = payload
	},
	[SET_AIR_TANK_MANUFACTURER]({ compressedAirTank }, payload) {
		compressedAirTank.manufactured.manufacturer = payload
	},
	[SET_AIR_TANK_MODEL]({ compressedAirTank }, payload) {
		compressedAirTank.manufactured.model = payload
	},
	[SET_AIR_TANKS]({ compressedsAirTanks }, payload = []) {
		compressedsAirTanks.splice(0, payload.length)
		compressedsAirTanks.push(...payload)
	},
	[ADD_AIR_TANK]({ compressedsAirTanks, compressedAirTank }) {
		compressedAirTank.id = Date.now()
		compressedsAirTanks.push(compressedAirTank)
	},
	[EDIT_AIR_TANK]({ compressedsAirTanks, compressedAirTank }, payload) {
		const index = compressedsAirTanks.findIndex(
			c => c.id === compressedAirTank.id
		)
		compressedAirTank.flag = payload
		compressedsAirTanks.splice(index, 1)
		compressedsAirTanks.push(compressedAirTank)
	},
	[SET_AIR_TANK](state, payload) {
		const id = payload.id || Date.now()
		state.compressedAirTank = {
			id: id,
			isDouble: payload.isDouble,
			pressure: payload.pressure,
			capacity: payload.capacity,
			manufactured: payload.manufactured,
			flag: payload.flag
		}
	},
	[REMOVE_AIR_TANK]({ compressedsAirTanks }, payload) {
		const index = compressedsAirTanks.findIndex(b => b.id === payload)
		compressedsAirTanks.splice(index, 1)
	},
	[RESET_AIR_TANK_STATE](state) {
		Object.assign(state, getDefaultState())
	},
	[RESET_AIR_TANK_FIELDS](state) {
		state.compressedAirTank = getDefaultFieldsValues()
	}
}
