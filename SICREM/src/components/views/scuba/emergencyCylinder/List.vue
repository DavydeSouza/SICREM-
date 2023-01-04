<template>
	<div id="list-emergency-cylinder-component-content" class="component-root">
		<generic-list
			:key="emergencyCylinders.length"
			:items="emergencyCylinders"
			:dataMap="dataMap"
			:editing="editingEmergencyCylinder"
			:editFunction="'editEmergencyCylinder'"
			:removeFunction="'removeEmergencyCylinderFields'"
		/>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import GenericList from '@/components/shared/GenericList.vue'

export default {
	name: 'ListEmergencyCylinder',
	components: { GenericList },
	data() {
		return {
			dataMap: [
				{ header: 'Nº de Identificação', keys: ['manufactured', 'idNumber'] },
				{ header: 'Modelo', keys: ['manufactured', 'model'] },
				{ header: 'Capacidade', keys: ['capacity'] },
				{ header: 'Pressão', keys: ['pressure'] },
				{ header: 'Ações', keys: [] }
			]
		}
	},
	computed: {
		...mapGetters(['emergencyCylinders', 'editingEmergencyCylinder'])
	},
	methods: {
		...mapActions(['removeEmergencyCylinderFields'])
	}
}
</script>

<style lang="scss" scoped>
#list-emergency-cylinder-component-content {
	background-color: transparent;
}
</style>
