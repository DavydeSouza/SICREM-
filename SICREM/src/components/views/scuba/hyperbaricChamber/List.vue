<template>
	<div id="list-hyperbaric-chamber-component-content" class="component-root">
		<generic-list
			:key="hyperbaricsChambers.length"
			:items="hyperbaricsChambers"
			:dataMap="dataMap"
			:editing="editingHyperbaricChamber"
			:editFunction="'editHyperbaricChamber'"
			:removeFunction="'removeHyperbaricChamber'"
		/>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import GenericList from '@/components/shared/GenericList.vue'

export default {
	name: 'ListHyperbaricChamber',
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
				{ header: 'Pressão de Trabalho', keys: ['workPressure'] },
				{ header: 'Ações', keys: [] }
			]
		}
	},
	computed: {
		...mapGetters(['hyperbaricsChambers', 'editingHyperbaricChamber'])
	},
	methods: {
		...mapActions(['removeHyperbaricChamber'])
	}
}
</script>

<style lang="scss" scoped>
#list-hyperbaric-chamber-component-content {
	background-color: transparent;
}
</style>
