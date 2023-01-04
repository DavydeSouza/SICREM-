<template>
	<div id="list-winch-component-content" class="component-root">
		<generic-list
			:key="winchs.length"
			:items="winchs"
			:dataMap="dataMap"
			:editing="editingWinch"
			:editFunction="'editWinch'"
			:removeFunction="'removeWinch'"
		/>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import GenericList from '@/components/shared/GenericList.vue'

export default {
	name: 'ListWinch',
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
		...mapGetters(['winchs', 'editingWinch'])
	},
	methods: {
		...mapActions(['removeWinch'])
	}
}
</script>

<style lang="scss" scoped>
#list-winch-component-content {
	background-color: transparent;
}
</style>
