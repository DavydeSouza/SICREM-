import { getDefaultState } from './defaultState'

export const SET_FREE_BOARD_DRAFT_FIELD_IN_LIST =
	'SET_FREE_BOARD_DRAFT_FIELD_IN_LIST'
export const ADD_DRAFT = 'ADD_DRAFT'
export const REMOVE_FREE_BOARD_DRAFT_FIELD = 'REMOVE_FREE_BOARD_DRAFT_FIELD'
export const SET_DRAFT = 'SET_DRAFT'
export const SET_FREE_BOARD_DRAFT_VALUE = 'SET_FREE_BOARD_DRAFT_VALUE'
export const SET_FREE_BOARD_DRAFT_VALUE_OPEN_SEA =
	'SET_FREE_BOARD_DRAFT_VALUE_OPEN_SEA'
export const EDIT_DRAFT = 'EDIT_DRAFT'
export const SET_FREE_BOARD_DRAFT = 'SET_FREE_BOARD_DRAFT'
export const SET_DRAFT_AREA_FIELD = 'SET_DRAFT_AREA_FIELD'
export const RESET_FREE_BOARD_DRAFT_FIELDS = 'RESET_FREE_BOARD_DRAFT_FIELDS'
export const RESET_FREE_BOARD_DRAFT_STATE = 'RESET_FREE_BOARD_DRAFT_STATE'

export default {
	[SET_FREE_BOARD_DRAFT_FIELD_IN_LIST](
		{ areas },
		payload = { value: undefined, index: -1 }
	) {
		areas[payload.index] = payload.value
	},
	[ADD_DRAFT]({ areas, area }) {
		const areaOrder = areas.length + 1
		const found = areas.map(a => a.areaOrder).find(a => a === areaOrder)
		area.areaOrder = found ? areaOrder - 1 : areaOrder
		areas.push(area)
	},
	[REMOVE_FREE_BOARD_DRAFT_FIELD]({ areas }, payload) {
		const index = areas.findIndex(a => a.areaOrder === payload)
		areas.splice(index, 1)
	},
	[SET_DRAFT]({ area }, payload) {
		const { id, areaOrder, value } = payload
		area.id = id
		area.areaOrder = areaOrder
		area.value = value
	},
	[RESET_FREE_BOARD_DRAFT_FIELDS](state) {
		console.log(state)
	},
	[RESET_FREE_BOARD_DRAFT_STATE](state) {
		Object.assign(state, getDefaultState())
	},
	[EDIT_DRAFT]({ areas, area }, payload) {
		const index = areas.findIndex(a => a.areaOrder === payload)
		areas[index] = area
	},
	[SET_FREE_BOARD_DRAFT_VALUE]({ area }, payload) {
		area.value = payload
	},
	[SET_FREE_BOARD_DRAFT_VALUE_OPEN_SEA](state, payload) {
		state.openseasize = payload
	},
	[SET_FREE_BOARD_DRAFT](state, payload) {
		state.areaOne = payload.areaOne
		state.areaTwo = payload.areaTwo
		state.isdraft = payload.isdraft
		state.openseasize = payload.openseasize
	},
	[SET_DRAFT_AREA_FIELD](state, payload) {
		state[payload.field] = payload.value
	}
}
