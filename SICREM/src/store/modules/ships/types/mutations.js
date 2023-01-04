/* eslint-disable */
export const LOAD_ALL_TYPES = 'LOAD_ALL_TYPES'
export default {
	[LOAD_ALL_TYPES] ({ types }, payload) {
		types = {
			ship: payload.ship,
			hullmaterial: payload.hullmaterial,
			navigationarea: payload.navigationarea,
			activity: payload.activity
		}
	}
}
