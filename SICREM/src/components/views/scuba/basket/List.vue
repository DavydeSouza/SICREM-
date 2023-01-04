<template>
	<div id="list-basket-component-content" class="component-root">
		<generic-list
			:key="baskets.length"
			:items="baskets"
			:dataMap="dataMap"
			:editing="editingBasket"
			:editFunction="'editBasket'"
			:removeFunction="'removeBasket'"
		/>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import GenericList from '@/components/shared/GenericList.vue'

export default {
	name: 'ListBasket',
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
		...mapGetters(['baskets', 'editingBasket'])
	},
	methods: {
		...mapActions(['removeBasket'])
	}
}
</script>

<style lang="scss" scoped>
#list-basket-component-content {
	background-color: transparent;
}
</style>
