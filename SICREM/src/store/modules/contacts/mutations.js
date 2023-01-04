import { getDefaultState, getDefaultFieldsValues } from './defaultState'

export const SET_CONTACT_VALIDATIONS = 'SET_CONTACT_VALIDATIONS'
export const SET_CONTACT_CEL_VALIDATIONS = 'SET_CONTACT_CEL_VALIDATIONS'
export const SET_CONTACT_PHONE_VALIDATIONS = 'SET_CONTACT_PHONE_VALIDATIONS'
export const SET_CONTACT_SECTOR = 'SET_CONTACT_SECTOR'

export const SET_CONTACT = 'SET_CONTACT'
export const SET_CONTACTS = 'SET_CONTACTS'
export const SET_CONTACT_VALUE_IN_LIST = 'SET_CONTACT_VALUE_IN_LIST'
export const SET_CONTACT_NAME = 'SET_CONTACT_NAME'
export const SET_CONTACT_EMAIL = 'SET_CONTACT_EMAIL'
export const SET_CONTACT_EDTING = 'SET_CONTACT_EDTING'
export const ADD_CONTACT = 'ADD_CONTACT'
export const EDIT_CONTACT = 'EDIT_CONTACT'
export const REMOVE_CONTACT = 'REMOVE_CONTACT'

export const REMOVE_CONTACT_CELS = 'REMOVE_CONTACT_CELS'
export const REMOVE_CONTACT_PHONES = 'REMOVE_CONTACT_PHONES'

export const RESET_CONTACT_FIELDS = 'RESET_CONTACT_FIELDS'
export const RESET_CONTACT_STATE = 'RESET_CONTACT_STATE'

export default {
	[SET_CONTACT_VALIDATIONS](state, payload) {
		state.validations = payload
	},
	[SET_CONTACT_CEL_VALIDATIONS](state, payload) {
		state.validationCel = payload
	},
	[SET_CONTACT_PHONE_VALIDATIONS](state, payload) {
		state.validationPhone = payload
	},
	[SET_CONTACT]({ contact }, payload) {
		const { id, name, email, cels, phones, sector, flag } = payload
		contact.id = id
		contact.name = name
		contact.email = email
		contact.cels = cels
		contact.phones = phones
		contact.sector = sector
		contact.flag = flag
	},
	[SET_CONTACTS]({ contacts }, payload) {
		contacts.splice(0, payload.length)
		contacts.push(...payload)
	},
	[SET_CONTACT_VALUE_IN_LIST](
		{ contact },
		payload = { value: undefined, field: undefined, index: -1 }
	) {
		contact[payload.field][payload.index] = payload.value
	},
	[SET_CONTACT_SECTOR]({ contact }, payload) {
		contact.sector = payload
	},
	[SET_CONTACT_NAME]({ contact }, payload) {
		contact.name = payload
	},
	[SET_CONTACT_EMAIL]({ contact }, payload) {
		contact.email = payload
	},
	[SET_CONTACT_EDTING](state, payload) {
		state.editing = payload
	},
	[ADD_CONTACT]({ contacts }, payload) {
		payload.id = Date.now()
		contacts.push(payload)
	},
	[EDIT_CONTACT]({ contacts, contact }, payload) {
		const index = contacts.findIndex(c => c.id === contact.id)
		contact.flag = payload
		contacts.splice(index, 1)
		contacts.push(contact)
	},
	[REMOVE_CONTACT]({ contacts }, payload) {
		const index = contacts.findIndex(b => b.id === payload)
		contacts.splice(index, 1)
	},
	[REMOVE_CONTACT_CELS]({ contact }, payload) {
		contact.cels.splice(payload, 1)
	},
	[REMOVE_CONTACT_PHONES]({ contact }, payload) {
		contact.phones.splice(payload, 1)
	},
	[RESET_CONTACT_STATE](state) {
		Object.assign(state, getDefaultState())
	},
	[RESET_CONTACT_FIELDS](state) {
		state.validations.$reset()
		state.contact = getDefaultFieldsValues()
	}
}
