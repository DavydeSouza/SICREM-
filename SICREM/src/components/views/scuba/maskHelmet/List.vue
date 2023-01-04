<template>
	<div id="list-mask-helmet-component-content" class="component-root">
		<generic-list
			:key="masksHelmets.length"
			:items="masksHelmets"
			:dataMap="dataMap"
			:editing="editingMaskHelmet"
			:editFunction="'editMaskHelmet'"
			:removeFunction="'removeMaskHelmet'"
		/>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import GenericList from '@/components/shared/GenericList.vue'

export default {
	name: 'ListMaskHelmet',
	components: { GenericList },
	data() {
		return {
			dataMap: [
				{ header: 'Tipo', keys: ['type'] },
				{ header: 'Modelo', keys: ['manufactured', 'model'] },
				{ header: 'Nº de Identificação', keys: ['manufactured', 'idNumber'] },
				{ header: 'Ações', keys: [] }
			]
		}
	},
	computed: {
		...mapGetters(['masksHelmets', 'editingMaskHelmet'])
	},
	methods: {
		...mapActions(['removeMaskHelmet'])
	}
}
</script>

<style lang="scss" scoped>
#list-maskHelmet-component-content {
	background-color: transparent;
}
</style>
