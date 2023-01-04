<template>
	<div id="umbilical-component">
		<item-form />
		<list />
	</div>
</template>

<script>
import ItemForm from './ItemForm.vue'
import List from './List.vue'
export default {
	name: 'Umbilical',
	components: { ItemForm, List }
}
</script>
