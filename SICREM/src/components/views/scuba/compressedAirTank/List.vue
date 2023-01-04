<template>
	<div id="list-compressed-air-tank-component-content" class="component-root">
		<generic-list
			:key="compressedsAirTanks.length"
			:items="compressedsAirTanks"
			:dataMap="dataMap"
			:editing="editingCompressedAirTank"
			:editFunction="'editCompressedAirTank'"
			:removeFunction="'removeCompressedAirTank'"
		/>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import GenericList from '@/components/shared/GenericList.vue'

export default {
	name: 'ListCompressedAirTank',
	components: { GenericList },
	data() {
		return {
			dataMap: [
				{ header: 'Nº de Identificação', keys: ['manufactured', 'idNumber'] },
				{ header: 'Modelo', keys: ['manufactured', 'model'] },
				{ header: 'Capacidade', keys: ['capacity'] },
				{ header: 'Pressão', keys: ['pressure'] },
				{ header: 'Ações', keys: [] }
			]
		}
	},
	computed: {
		...mapGetters(['compressedsAirTanks', 'editingCompressedAirTank'])
	},
	methods: {
		...mapActions(['removeCompressedAirTank'])
	}
}
</script>

<style lang="scss" scoped>
#list-compressed-air-tank-component-content {
	background-color: transparent;
}
</style>
