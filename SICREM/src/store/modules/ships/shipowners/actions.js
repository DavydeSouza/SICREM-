import { shipowners } from '@/services/shipowners'

export default {
	setShipowner(context, payload) {
		context.commit(`SET_SHIPOWNER`, payload)
	},
	setShipownerField(context, payload = { valule: undefined, field: '' }) {
		const field = payload.field
		context.commit(`SET_SHIPOWNER_${field.toUpperCase()}`, payload.value)
	},
	getShipownersByName({ commit }, payload) {
		if (payload.length > 2) {
			setTimeout(async () => {
				const resp = await shipowners.findByName(payload)
				const data = resp.data.length ? resp.data : [{ id: '', name: payload }]
				commit('SET_SHIPOWNERS', data)
			}, 400)
		}
	},
	getShipownersByClient({ commit }, payload = { type: '', value: '' }) {
		if (payload.value.length > 2) {
			setTimeout(async () => {
				const { type: name, value } = payload
				const resp = await shipowners.findByClient(`${name}=${value}`)
				const data = resp.data.length ? resp.data : []
				commit('SET_SHIPOWNERS', data)
			}, 350)
		}
	},
	async laodShipownerById({ commit }, payload) {
		const { data } = await shipowners.findById(payload)
		if (data.id) {
			commit('SET_SHIPOWNER', data)
		} else throw new Error('User not found!')
	},
	resetShipownerState({ commit }) {
		commit('RESET_SHIPOWNER_STATE')
	}
}
