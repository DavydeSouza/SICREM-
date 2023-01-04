<template>
	<div id="mask-helmet-component">
		<item-form />
		<list />
	</div>
</template>

<script>
import ItemForm from './ItemForm.vue'
import List from './List.vue'
export default {
	name: 'MaskHelmet',
	components: { ItemForm, List }
}
</script>
