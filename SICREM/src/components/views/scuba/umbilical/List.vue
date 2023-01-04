<template>
	<div id="list-umbilical-component-content" class="component-root">
		<generic-list
			:key="umbilicals.length"
			:items="umbilicals"
			:dataMap="dataMap"
			:editing="editingUmbilical"
			:editFunction="'editUmbilical'"
			:removeFunction="'removeUmbilical'"
		/>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import GenericList from '@/components/shared/GenericList.vue'

export default {
	name: 'ListUmbilical',
	components: { GenericList },
	data() {
		return {
			dataMap: [
				{ header: 'Nº de Identificação', keys: ['manufactured', 'idNumber'] },
				{ header: 'Modelo', keys: ['manufactured', 'model'] },
				{ header: 'Diâmetro interno', keys: ['internalDiameter'] },
				{ header: 'Comprimento', keys: ['length'] },
				{ header: 'Pressão', keys: ['pressure'] },
				{ header: 'Ações', keys: [] }
			]
		}
	},
	computed: {
		...mapGetters(['umbilicals', 'editingUmbilical'])
	},
	methods: {
		...mapActions(['removeUmbilical'])
	}
}
</script>

<style lang="scss" scoped>
#list-umbilical-component-content {
	background-color: transparent;
}
</style>
