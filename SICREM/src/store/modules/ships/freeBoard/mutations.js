import { getDefaultState } from './defaultState'
export const SET_FREE_BOARD_PLUS_FIELD_IN_LIST =
	'SET_FREE_BOARD_PLUS_FIELD_IN_LIST'
export const ADD_FREE_BOARD_PLUS = 'ADD_FREE_BOARD_PLUS'
export const REMOVE_FREE_BOARD_PLUS_FIELD = 'REMOVE_FREE_BOARD_PLUS_FIELD'
export const SET_FREE_BOARD_PLUS = 'SET_FREE_BOARD_PLUS'
export const SET_FREE_BOARD_PLUS_VALUE = 'SET_FREE_BOARD_PLUS_VALUE'
export const SET_FREE_BOARD_PLUS_VALUE_OPEN_SEA =
	'SET_FREE_BOARD_PLUS_VALUE_OPEN_SEA'
export const RESET_FREE_BOARD_PLUS_FIELDS = 'RESET_FREE_BOARD_PLUS_FIELDS'
export const EDIT_FREE_BOARD_PLUS = 'EDIT_FREE_BOARD_PLUS'
export const SET_FREE_BOARD = 'SET_FREE_BOARD'
export const SET_AREA_FIELD = 'SET_AREA_FIELD'
export const RESET_FREE_BOARD_FIELDS = 'RESET_FREE_BOARD_FIELDS'
export const RESET_FREE_BOARD_STATE = 'RESET_FREE_BOARD_STATE'

export default {
	[SET_FREE_BOARD_PLUS_FIELD_IN_LIST](
		{ areas },
		payload = { value: undefined, index: -1 }
	) {
		areas[payload.index] = payload.value
	},
	[ADD_FREE_BOARD_PLUS]({ areas, area }) {
		const areaOrder = areas.length + 1
		const found = areas.map(a => a.areaOrder).find(a => a === areaOrder)
		area.areaOrder = found ? areaOrder - 1 : areaOrder
		areas.push(area)
	},
	[REMOVE_FREE_BOARD_PLUS_FIELD]({ areas }, payload) {
		const index = areas.findIndex(a => a.areaOrder === payload)
		areas.splice(index, 1)
	},
	[SET_FREE_BOARD_PLUS]({ area }, payload) {
		const { id, areaOrder, value } = payload
		area.id = id
		area.areaOrder = areaOrder
		area.value = value
	},
	[RESET_FREE_BOARD_PLUS_FIELDS](state) {
		state.validations.$reset()
		state.area = {
			id: undefined,
			areaOrder: undefined,
			value: undefined
		}
	},
	[RESET_FREE_BOARD_FIELDS](state) {
		console.log(state)
	},
	[RESET_FREE_BOARD_STATE](state) {
		Object.assign(state, getDefaultState())
	},
	[EDIT_FREE_BOARD_PLUS]({ areas, area }, payload) {
		const index = areas.findIndex(a => a.areaOrder === payload)
		areas[index] = area
	},
	[SET_FREE_BOARD_PLUS_VALUE]({ area }, payload) {
		area.value = payload
	},
	[SET_FREE_BOARD_PLUS_VALUE_OPEN_SEA](state, payload) {
		state.openseasize = payload
	},
	[SET_FREE_BOARD](state, payload) {
		state.areaOne = payload.areaOne
		state.areaTwo = payload.areaTwo
		state.isdraft = payload.isdraft
		state.openseasize = payload.openseasize
	},
	[SET_AREA_FIELD](state, payload) {
		state[payload.field] = payload.value
	}
}
