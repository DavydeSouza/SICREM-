import cloneObject from '../../../helpers/cloneObject.js'
import { getDefaultState, getDefaultFieldsValues } from './defaultState'

export const SET_CLIENT_ID = 'SET_CLIENT_ID'
export const SET_CLIENT_NAME = 'SET_CLIENT_NAME'
export const SET_CLIENT_REGISTER = 'SET_CLIENT_REGISTER'
export const SET_CLIENT_EMAIL = 'SET_CLIENT_EMAIL'
export const SET_CLIENT_CONTACTS = 'SET_CLIENT_CONTACTS'
export const SET_CLIENT_LEVEL = 'SET_CLIENT_LEVEL'
export const SET_CLIENTS = 'SET_CLIENTS'
export const SET_CLIENT = 'SET_CLIENT'
export const SET_CLIENT_CLIENT_ID = 'SET_CLIENT_CLIENT_ID'
export const INACTVE_CLIENT = 'INACTVE_CLIENT'
export const RESET_CLIENT_FIELDS = 'RESET_CLIENT_FIELDS'
export const RESET_CLIENT_STATE = 'RESET_CLIENT_STATE'
export const RESET_CLIENTS = 'RESET_CLIENTS'

export default {
	[SET_CLIENT_ID]({ client }, payload) {
		client.id = payload
	},
	[SET_CLIENT_NAME]({ client }, payload) {
		client.name = payload
	},
	[SET_CLIENT_REGISTER]({ client }, payload) {
		client.register = payload
	},
	[SET_CLIENT_EMAIL]({ client }, payload) {
		client.email = payload
	},
	[SET_CLIENT_CONTACTS]({ client }, payload = []) {
		client.contacts = payload
	},
	[SET_CLIENT_LEVEL]({ client }, payload = []) {
		client.level = payload
	},
	[SET_CLIENT_CLIENT_ID]({ client }, payload) {
		client.clientId = payload
	},
	[SET_CLIENTS](state, { content, total }) {
		state.clients = []
		state.clients = content
		state.total = total || 0
	},
	[SET_CLIENT]({ client }, payload) {
		cloneObject(payload, client)
	},
	[INACTVE_CLIENT]({ clients }, payload) {
		const index = clients.findIndex(c => c.id === payload)
		clients.splice(index, 1)
	},
	[RESET_CLIENT_STATE](state) {
		Object.assign(state, getDefaultState())
	},
	[RESET_CLIENT_FIELDS](state) {
		state.client = getDefaultFieldsValues()
	},
	[RESET_CLIENTS](state) {
		state.clients = []
	}
}
