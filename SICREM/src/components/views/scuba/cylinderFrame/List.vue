<template>
	<div id="list-cylinder-frame-component-content" class="component-root">
		<generic-list
			:key="cylindersFrames.length"
			:items="cylindersFrames"
			:dataMap="dataMap"
			:editing="editingCylinderFrame"
			:editFunction="'editCylinderFrame'"
			:removeFunction="'removeCylinderFrame'"
		/>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import GenericList from '@/components/shared/GenericList.vue'

export default {
	name: 'ListCylinderFrame',
	components: { GenericList },
	data() {
		return {
			dataMap: [
				{ header: 'Nº de Identificação', keys: ['manufactured', 'idNumber'] },
				{ header: 'Modelo', keys: ['manufactured', 'model'] },
				{ header: 'Capacidade', keys: ['capacityEachCylinder'] },
				{ header: 'Pressão', keys: ['pressure'] },
				{ header: 'Ações', keys: [] }
			]
		}
	},
	computed: {
		...mapGetters(['cylindersFrames', 'editingCylinderFrame'])
	},
	methods: {
		...mapActions(['removeCylinderFrame'])
	}
}
</script>

<style lang="scss" scoped>
#list-cylinder-frame-component-content {
	background-color: transparent;
}
</style>
