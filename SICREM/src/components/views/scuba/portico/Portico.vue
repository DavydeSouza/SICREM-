<template>
	<div id="portico-component">
		<item-form />
		<list />
	</div>
</template>

<script>
import ItemForm from './ItemForm.vue'
import List from './List.vue'
export default {
	name: 'Portico',
	components: { ItemForm, List }
}
</script>
