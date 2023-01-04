<template>
	<div id="winch-component">
		<item-form />
		<list />
	</div>
</template>

<script>
import ItemForm from './ItemForm.vue'
import List from './List.vue'
export default {
	name: 'Winch',
	components: { ItemForm, List }
}
</script>
