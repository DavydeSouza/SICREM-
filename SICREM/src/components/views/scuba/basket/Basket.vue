<template>
	<div id="basket-component">
		<item-form />
		<list />
	</div>
</template>

<script>
import ItemForm from './ItemForm.vue'
import List from './List.vue'
export default {
	name: 'Basket',
	components: { ItemForm, List }
}
</script>
