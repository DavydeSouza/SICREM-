<template>
	<div id="list-signet-component-content" class="component-root">
		<generic-list
			:key="signets.length"
			:items="signets"
			:dataMap="dataMap"
			:editing="editingSignet"
			:editFunction="'editSignet'"
			:removeFunction="'removeSignet'"
		/>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import GenericList from '@/components/shared/GenericList.vue'

export default {
	name: 'ListSignet',
	components: { GenericList },
	data() {
		return {
			dataMap: [
				{ header: 'Nº de Identificação', keys: ['manufactured', 'idNumber'] },
				{ header: 'Modelo', keys: ['manufactured', 'model'] },
				{
					header: 'Conformidade nº',
					keys: ['conformity', 'declarationNumber']
				},
				{ header: 'Carga de Trabalho', keys: ['workLoad'] },
				{ header: 'Ações', keys: [] }
			]
		}
	},
	computed: {
		...mapGetters(['signets', 'editingSignet'])
	},
	methods: {
		...mapActions(['removeSignet'])
	}
}
</script>

<style lang="scss" scoped>
#list-signet-component-content {
	background-color: transparent;
}
</style>
