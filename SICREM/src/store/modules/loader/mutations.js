export const SET_LOADING_TRUE = 'SET_LOADING_TRUE'
export const SET_LOADING_FALSE = 'SET_LOADING_FALSE'

export default {
	[SET_LOADING_TRUE](state) {
		state.loading = true
	},
	[SET_LOADING_FALSE](state) {
		state.loading = false
	}
}
