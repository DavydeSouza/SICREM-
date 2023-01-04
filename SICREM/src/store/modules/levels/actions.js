import { levels as levelsService } from '@/services/levels'

export default {
	async laodAllLevels(context) {
		const res = await levelsService.findAll()
		context.commit('LOAD_ALL_LEVELS', res.data)
	}
}
