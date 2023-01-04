import { certification } from '@/services/certification'

export default {
	setCertification({ commit }, payload) {
		commit('SET_CERTIFICATION', payload)
	},
	async inactiveCertification({ commit }, payload) {
		await certification.inactive(payload)
		commit('REMOVE_CERTIFICATION', payload)
	},
	async loadCertifications({ commit }) {
		const { data } = await certification.getAll()
		if (data) commit('SET_CERTIFICATIONS', data)
	},
	async getCertificationById({ commit }, { id, system }) {
		const { data } = await certification.findById(id, system)
		if (data) {
			commit('SET_CERTIFICATION', data.certification)
			commit('SET_CERTIFICATION_COMPANY', data.company)
			commit('SET_CERTIFIED_SYSTEM', data.system)
		}
	},
	resetCertificationState({ commit }) {
		commit('RESET_CERTIFICATION_STATE')
	}
}
