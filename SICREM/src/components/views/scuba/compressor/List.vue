<template>
	<div id="list-compressor-component-content" class="component-root">
		<generic-list
			:key="compressors.length"
			:items="compressors"
			:dataMap="dataMap"
			:editing="editingCompressor"
			:editFunction="'editCompressor'"
			:removeFunction="'removeCompressor'"
		/>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import GenericList from '@/components/shared/GenericList.vue'

export default {
	name: 'ListCompressor',
	components: { GenericList },
	data() {
		return {
			dataMap: [
				{ header: 'Tipo', keys: ['type'] },
				{ header: 'Pressão', keys: ['pressure'] },
				{ header: 'Modelo', keys: ['manufactured', 'model'] },
				{ header: 'Nº de Identificação', keys: ['manufactured', 'idNumber'] },
				{ header: 'Ações', keys: [] }
			]
		}
	},
	computed: {
		...mapGetters(['compressors', 'editingCompressor'])
	},
	methods: {
		...mapActions(['removeCompressor'])
	}
}
</script>

<style lang="scss" scoped>
#list-compressor-component-content {
	background-color: transparent;
}
</style>
