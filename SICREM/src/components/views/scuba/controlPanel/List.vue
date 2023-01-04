<template>
	<div id="list-control-panel-component-content" class="component-root">
		<generic-list
			:key="controlPanels.length"
			:items="controlPanels"
			:dataMap="dataMap"
			:editing="editingControlPanel"
			:editFunction="'editControlPanel'"
			:removeFunction="'removeControlPanel'"
		/>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import GenericList from '@/components/shared/GenericList.vue'

export default {
	name: 'ListControlPanel',
	components: { GenericList },
	data() {
		return {
			dataMap: [
				{ header: 'Nº de Identificação', keys: ['manufactured', 'idNumber'] },
				{ header: 'Modelo', keys: ['manufactured', 'model'] },
				{
					header: 'Mergulhadores suplidos',
					keys: ['diversSupplied']
				},
				{ header: 'Ações', keys: [] }
			]
		}
	},
	computed: {
		...mapGetters(['controlPanels', 'editingControlPanel'])
	},
	methods: {
		...mapActions(['removeControlPanel'])
	}
}
</script>

<style lang="scss" scoped>
#list-control-panel-component-content {
	background-color: transparent;
}
</style>
