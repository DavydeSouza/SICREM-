export const SET_CERTIFICATION = 'SET_CERTIFICATION'
export const SET_CERTIFICATIONS = 'SET_CERTIFICATIONS'
export const SET_CERTIFICATION_COMPANY = 'SET_CERTIFICATION_COMPANY'
export const SET_CERTIFIED_SYSTEM = 'SET_CERTIFIED_SYSTEM'
export const REMOVE_CERTIFICATION = 'REMOVE_CERTIFICATION'
export const RESET_CERTIFICATION_STATE = 'RESET_CERTIFICATION_STATE'

export default {
	[SET_CERTIFICATION](state, payload) {
		state.certification = payload
	},
	[SET_CERTIFIED_SYSTEM](state, payload) {
		if (payload) state.system = payload
	},
	[SET_CERTIFICATION_COMPANY](state, payload) {
		if (payload) state.company = payload
	},
	[SET_CERTIFICATIONS]({ certifications }, payload) {
		certifications.splice(0, payload.length)
		certifications.push(...payload)
	},
	[REMOVE_CERTIFICATION]({ certifications }, payload) {
		const index = certifications.findIndex(c => c.id === payload)
		certifications.splice(index, 1)
	},
	[RESET_CERTIFICATION_STATE](state) {
		state.certification = null
		state.company = null
		state.system = null
	}
}
