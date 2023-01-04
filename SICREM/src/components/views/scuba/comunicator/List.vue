<template>
	<div id="list-comunicator-component-content" class="component-root">
		<generic-list
			:key="comunicators.length"
			:items="comunicators"
			:dataMap="dataMap"
			:editing="editingComunicator"
			:editFunction="'editComunicator'"
			:removeFunction="'removeComunicator'"
		/>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import GenericList from '@/components/shared/GenericList.vue'

export default {
	name: 'ListComunicator',
	components: { GenericList },
	data() {
		return {
			dataMap: [
				{ header: 'Nº de Identificação', keys: ['manufactured', 'idNumber'] },
				{ header: 'Modelo', keys: ['manufactured', 'model'] },
				{
					header: 'Mergulhadores suplidos',
					keys: ['diversSuppliedByIntercoms']
				},
				{ header: 'Ações', keys: [] }
			]
		}
	},
	computed: {
		...mapGetters(['comunicators', 'editingComunicator'])
	},
	methods: {
		...mapActions(['removeComunicator'])
	}
}
</script>

<style lang="scss" scoped>
#list-comunicator-component-content {
	background-color: transparent;
}
</style>
