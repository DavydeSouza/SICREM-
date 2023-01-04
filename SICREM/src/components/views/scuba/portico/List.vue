<template>
	<div id="list-portico-component-content" class="component-root">
		<generic-list
			:key="porticos.length"
			:items="porticos"
			:dataMap="dataMap"
			:editing="editingPortico"
			:editFunction="'editPortico'"
			:removeFunction="'removePortico'"
		/>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import GenericList from '@/components/shared/GenericList.vue'

export default {
	name: 'ListPortico',
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
		...mapGetters(['porticos', 'editingPortico'])
	},
	methods: {
		...mapActions(['removePortico'])
	}
}
</script>

<style lang="scss" scoped>
#list-portico-component-content {
	background-color: transparent;
}
</style>
