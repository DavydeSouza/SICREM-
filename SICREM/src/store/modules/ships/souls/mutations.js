import { getDefaultState, getDefaultFieldsValues } from './defaultState'

export const SET_SOULS_FIELD = 'SET_SOULS_FIELD'
export const SET_SOULS = 'SET_SOULS'
export const RESET_SOULS_FIELDS = 'RESET_SOULS_FIELDS'
export const RESET_SOULS_STATE = 'RESET_SOULS_STATE'

export default {
	[SET_SOULS_FIELD]({ souls }, payload) {
		souls[payload.field] = payload.value
	},
	[SET_SOULS]({ souls }, payload) {
		souls.id = payload.id
		souls.qtdpaxcabin8bunks = payload.qtdpaxcabin8bunks
		souls.qtdotherpax = payload.qtdotherpax
		souls.crew = payload.crew
		souls.qtdunmannedprofessionals = payload.qtdunmannedprofessionals
		souls.qtdnotcrewprofissionals = payload.qtdnotcrewprofissionals
	},
	[RESET_SOULS_FIELDS](state) {
		state.souls = getDefaultFieldsValues()
	},
	[RESET_SOULS_STATE](state) {
		Object.assign(state, getDefaultState())
	}
}
