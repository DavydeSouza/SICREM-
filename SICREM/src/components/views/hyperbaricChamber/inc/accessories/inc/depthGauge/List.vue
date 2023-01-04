<template>
	<div id="list-depth-gauge-component-content" class="component-root">
		<generic-list
			:key="depthGauges.length"
			:items="depthGauges"
			:dataMap="dataMap"
			:editing="editingDepthGauge"
			:editFunction="'editDepthGauge'"
			:removeFunction="'removeDepthGauge'"
		/>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import GenericList from '@/components/shared/GenericList.vue'

export default {
	name: 'ListDepthGauge',
	components: { GenericList },
	data() {
		return {
			dataMap: [
				{ header: 'Nº de Identificação', keys: ['manufactured', 'idNumber'] },
				{ header: 'Modelo', keys: ['manufactured', 'model'] },
				{ header: 'Diâmetro', keys: ['diameter'] },
				{ header: 'Escala', keys: ['escale'] },
				{ header: 'Tipo', keys: ['type'] },
				{ header: 'Local', keys: ['local'] },
				{ header: 'Ações', keys: [] }
			]
		}
	},
	computed: {
		...mapGetters(['depthGauges', 'editingDepthGauge'])
	},
	methods: {
		...mapActions(['removedepthGauges'])
	}
}
</script>

<style lang="scss" scoped>
#list-depth-gauge-component-content {
	background-color: transparent;
}
</style>
