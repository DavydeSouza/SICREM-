<template>
	<div id="list-compressor-component-content" class="component-root">
		<generic-list
			:key="contacts.length"
			:items="contacts"
			:dataMap="dataMap"
			:editing="editing"
			:editFunction="'editContact'"
			:removeFunction="'removeContact'"
		/>
	</div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import GenericList from '@/components/shared/GenericList.vue'

export default {
	name: 'ListContact',
	components: { GenericList },
	data() {
		return {
			dataMap: [
				{ header: 'Nome', keys: ['name'] },
				{ header: 'Setor', keys: ['sector'] },
				{ header: 'Email', keys: ['email'] },
				{ header: 'Celular', keys: ['cels'] },
				{ header: 'Telefones', keys: ['phones'] },
				{ header: 'Ações', keys: [] }
			]
		}
	},
	computed: {
		...mapState({
			editing: state => state.contacts.editing
		}),
		...mapGetters(['contacts'])
	}
}
</script>

<style lang="scss" scoped>
#list-compressor-component-content {
	background-color: transparent;
}
</style>
