import cloneObject from '../../../helpers/cloneObject.js'
import { getDefaultState, getDefaultFieldsValues } from './defaultState'

export const SET_COMPANY_ID = 'SET_COMPANY_ID'
export const SET_COMPANY_REGISTER = 'SET_COMPANY_REGISTER'
export const SET_COMPANY_NAME = 'SET_COMPANY_NAME'
export const SET_COMPANY_FCEM = 'SET_COMPANY_FCEM'
export const SET_COMPANY_EXPIRATION = 'SET_COMPANY_EXPIRATION'
export const SET_COMPANY_MAINS = 'SET_COMPANY_MAINS'
export const SET_COMPANY_RESERVES = 'SET_COMPANY_RESERVES'
export const SET_COMPANYS = 'SET_COMPANYS'
export const SET_COMPANY = 'SET_COMPANY'
export const SET_COMPANY_CLIENTID = 'SET_COMPANY_CLIENTID'
export const SET_COMPANY_ADDRESS = 'SET_COMPANY_ADDRESS'

export const RESET_COMPANY_FIELDS = 'RESET_COMPRESSOR_FIELDS'
export const RESET_COMPANY_STATE = 'RESET_COMPANY_STATE'

export default {
	[SET_COMPANY_ID]({ company }, payload) {
		company.id = payload
	},
	[SET_COMPANY_REGISTER]({ company }, payload) {
		company.register = payload
	},
	[SET_COMPANY_NAME]({ company }, payload) {
		company.name = payload
	},
	[SET_COMPANY_FCEM]({ company }, payload) {
		company.fcem = payload
	},
	[SET_COMPANY_EXPIRATION]({ company }, payload) {
		company.fcemExpiration = payload
	},
	[SET_COMPANY_MAINS]({ company }, payload = []) {
		company.mainDivesQtd = payload
	},
	[SET_COMPANY_RESERVES]({ company }, payload = []) {
		company.reservesDivesQtd = payload
	},
	[SET_COMPANY_CLIENTID]({ company }, payload) {
		company.clientId = payload
	},
	[SET_COMPANYS]({ companys }, payload) {
		companys.splice(0, payload.length)
		companys.push(...payload)
	},
	[SET_COMPANY]({ company }, payload) {
		cloneObject(payload, company)
	},
	[SET_COMPANY_ADDRESS]({ company }, payload) {
		company.address = payload
	},
	[RESET_COMPANY_STATE](state) {
		Object.assign(state, getDefaultState())
	},
	[RESET_COMPANY_FIELDS](state) {
		state.compressor = getDefaultFieldsValues()
	}
}
