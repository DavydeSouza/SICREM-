import { types as typesService } from '@/services/types'

export default {
	async setAllTypes(context) {
		const types = context.state.types
		for (var key of Object.keys(types)) {
			const res = await typesService.findAll(key)
			types[key] = res.data
		}
		context.commit('LOAD_ALL_TYPES', types)
	}
}
