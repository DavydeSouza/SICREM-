const EDITING_FLAG = 'editing'
const EDITED_FLAG = 'edited'

export default {
	setCylinderFrameField(context, payload = { valule: undefined, field: '' }) {
		const field = payload.field
		context.commit(`SET_FRAME_${field.toUpperCase()}`, payload.value)
	},
	setCylinderFrames({ commit, dispatch }, payload) {
		commit('SET_FRAMES', payload)
		dispatch('resetCylinderFrameFields')
	},
	addCylinderFrame({ commit, dispatch }) {
		commit('ADD_FRAME')
		dispatch('resetCylinderFrameFields')
	},
	editCylinderFrame({ commit, state }, payload) {
		const cylinderFrame = payload.id
			? state.cylindersFrames.find(c => c.id === payload.id)
			: payload
		if (cylinderFrame) {
			cylinderFrame.flag = EDITING_FLAG
			commit('SET_FRAME', cylinderFrame)
		}
	},
	commitEditCylinderFrame({ commit }) {
		commit('EDIT_FRAME', EDITED_FLAG)
		commit('RESET_FRAME_FIELDS')
	},
	resetCylinderFrameFields({ commit }, payload) {
		commit('RESET_FRAME_FIELDS', payload)
	},
	resetCylinderFrameState({ commit }) {
		commit('RESET_FRAME_STATE')
	},
	removeCylinderFrame({ commit, state }, payload) {
		const cylinderFrame = state.cylindersFrames.find(c => c.id === payload)
		if (cylinderFrame) {
			commit('REMOVE_FRAME', cylinderFrame.id)
		}
	}
}
