const EDITING_FLAG = 'editing'
const EDITED_FLAG = 'edited'

export default {
	setContactValidations({ commit }, payload) {
		commit('SET_CONTACT_VALIDATIONS', payload)
	},
	setContactCelsValidations({ commit }, payload) {
		commit('SET_CONTACT_CEL_VALIDATIONS', payload)
	},
	setContactPhonesValidations({ commit }, payload) {
		commit('SET_CONTACT_PHONE_VALIDATIONS', payload)
	},

	setContactField(
		context,
		payload = { value: undefined, field: undefined, index: -1 }
	) {
		const field = payload.field
		if (payload.index > -1) {
			context.state.validations.contact[field].$touch()
			context.commit('SET_CONTACT_VALUE_IN_LIST', payload)
		} else {
			context.state.validations.contact[field].$touch()
			context.commit(`SET_CONTACT_${field.toUpperCase()}`, payload.value)
		}
	},
	removeContactField(context, payload = { field: undefined, index: -1 }) {
		const field = payload.field.toUpperCase()
		context.commit(`REMOVE_CONTACT_${field}`, payload.index)
	},
	setContacts({ commit }, payload) {
		commit('SET_CONTACTS', payload)
	},
	addContact({ commit, state }) {
		commit('ADD_CONTACT', state.contact)
		commit('RESET_CONTACT_FIELDS')
	},
	editContact({ commit, state }, payload) {
		const contact = payload.id
			? state.contacts.find(c => c.id === payload.id)
			: payload
		if (contact) {
			contact.flag = EDITING_FLAG
			commit('SET_CONTACT_EDTING', true)
			commit('SET_CONTACT', contact)
		}
	},
	commitEditContact({ commit }) {
		commit('EDIT_CONTACT', EDITED_FLAG)
		commit('SET_CONTACT_EDTING', false)
		commit('RESET_CONTACT_FIELDS')
	},
	removeContact({ commit }, payload) {
		commit('REMOVE_CONTACT', payload)
	},
	resetContactState({ commit }) {
		commit('RESET_CONTACT_STATE')
	}
}
