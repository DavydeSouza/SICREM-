import { company } from '@/services/company'

export default {
	setCompany(context, payload) {
		context.commit(`SET_COMPANY`, payload)
	},
	setCompanyField(context, payload = { valule: undefined, field: '' }) {
		const field = payload.field
		context.commit(`SET_COMPANY_${field.toUpperCase()}`, payload.value)
	},
	getCompanysByName({ commit }, payload) {
		if (payload.length > 2) {
			setTimeout(async () => {
				const resp = await company.findByName(payload)
				const data = resp.data.length ? resp.data : [{ id: '', name: payload }]
				commit('SET_COMPANYS', data)
			}, 400)
		}
	},
	async loadCompanyById({ commit }, payload) {
		const { data } = await company.findById(payload)
		if (data.id) {
			commit('SET_COMPANY', data)
		} else throw new Error('User not found!')
	},
	resetCompanyFields({ commit }, payload) {
		commit('RESET_COMPANY_FIELDS', payload)
	},
	resetCompanyState({ commit }) {
		commit('RESET_COMPANY_STATE')
	}
}
