import { users as usersService } from '@/services/users'
import { company as companyService } from '@/services/company'

export default {
	setClientField(context, payload = { valule: undefined, field: '' }) {
		const field = payload.field
		context.commit(`SET_CLIENT_${field.toUpperCase()}`, payload.value)
	},
	setClientContacts({ commit }, payload) {
		commit('SET_CLIENT_CONTACTS', payload)
	},
	getClientsByName({ commit }, payload) {
		if (payload.length > 2) {
			setTimeout(async () => {
				const resp = await usersService.findByName(payload)
				const data = resp.data.length ? resp.data : [{ id: '', name: payload }]
				commit('SET_CLIENTS', data)
			}, 400)
		}
	},
	getClient({ commit }, payload) {
		if (payload.value.length > 2) {
			setTimeout(async () => {
				const resp = await companyService.getClient(payload.type, payload.value)
				const data = resp.data.length ? resp.data : []
				commit('SET_CLIENTS', { content: data })
			}, 0)
		}
	},
	async loadClients({ commit, dispatch }, payload) {
		try {
			dispatch('setLoadingTrue')
			const { data } = await usersService.getClients(payload)
			commitUsers(commit, data)
		} catch (error) {
			console.log(error)
		} finally {
			dispatch('setLoadingFalse')
		}
	},
	async loadUsersByField({ commit, dispatch }, payload) {
		try {
			dispatch('setLoadingTrue')
			const { data } = await usersService.findByField(payload)
			commitUsers(commit, data)
		} catch (error) {
			console.log(error)
		} finally {
			dispatch('setLoadingFalse')
		}
	},
	async laodClientById({ commit, dispatch }, payload) {
		const { data } = await usersService.findById(payload)
		if (data.id) {
			commit('SET_CLIENT', data)
			dispatch('setContacts', data.contacts)
		} else throw new Error('User not found!')
	},
	async laodUserToEdit({ commit }, payload) {
		const { data } = await usersService.findToEdit(payload)
		if (data.user) {
			commit('SET_CLIENT', data.user)
		} else throw new Error('User not found!')
	},
	async laodClientToEdit({ commit, dispatch }, payload) {
		const { data } = await usersService.findToEditByCbesId(payload)
		if (data.user) {
			commit('SET_CLIENT', data.user)
			dispatch('setContacts', data.user.contacts)
		} else throw new Error('User not found!')

		if (data.shipowner) {
			dispatch('setShipowner', data.shipowner)
		}

		if (data.company) {
			dispatch('setCompany', data.company)
		}
	},
	async inactiveCliente({ commit }, payload) {
		const { id, level } = payload
		const resp = await usersService.inactive(id, { level })
		if (resp.status == 200) commit('INACTVE_CLIENT', payload)
		return resp
	},
	resetClientState({ commit }) {
		commit('RESET_CLIENT_STATE')
	},
	resetClients({ commit }) {
		commit('RESET_CLIENTS')
	},
	async removeCliente({ commit }, payload) {
		const resp = await usersService.delete(payload)
		if (resp.status == 200) commit('INACTVE_CLIENT', payload)
		return resp
	}
}

function commitUsers(commit, data) {
	const msg = 'No result (Users)'
	if (data) {
		const { content, total } = data
		commit('SET_CLIENTS', { content, total: parseInt(total) })
	} else throw new Error(msg)
}
