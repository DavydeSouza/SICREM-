<template>
	<div id="list-propulsion-component-content" class="component-root">
		<generic-list
			:key="propulsionsAndPowers.length"
			:items="propulsionsAndPowers"
			:dataMap="dataMap"
			:editing="editing"
			:editFunction="'editPower'"
			:removeFunction="'removePower'"
		/>
	</div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import GenericList from '@/components/shared/GenericList.vue'

export default {
	name: 'ListPropulsion',
	components: { GenericList },
	data() {
		return {
			dataMap: [
				{ header: 'Modelo', keys: ['model'] },
				{ header: 'Fabricante', keys: ['manufacturer'] },
				{ header: 'MCP', keys: ['mcp'] },
				{ header: 'Nº de Série', keys: ['serialNumber'] },
				{ header: 'Potência', keys: ['power'] },
				{ header: 'Ações', keys: [] }
			]
		}
	},
	computed: {
		...mapState({
			editing: state => state.propulsionAndPower.editing
		}),
		...mapGetters(['propulsionsAndPowers'])
	}
}
</script>

<style lang="scss" scoped>
#list-propulsion-component-content {
	background-color: transparent;
}
</style>
