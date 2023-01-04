export const LOAD_ALL_LEVELS = 'LOAD_ALL_LEVELS'
export default {
	[LOAD_ALL_LEVELS]({ levels }, payload = []) {
		levels.splice(0, payload.length)
		levels.push(...payload)
	}
}
