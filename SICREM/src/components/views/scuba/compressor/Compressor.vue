<template>
	<div id="compressor-component">
		<item-form />
		<list />
	</div>
</template>

<script>
import ItemForm from './ItemForm.vue'
import List from './List.vue'
export default {
	name: 'Compressor',
	components: { ItemForm, List }
}
</script>
