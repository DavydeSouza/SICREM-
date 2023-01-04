<template>
	<div id="comunicator-frame-component">
		<item-form />
		<list />
	</div>
</template>

<script>
import ItemForm from './ItemForm.vue'
import List from './List.vue'
export default {
	name: 'Comunicator',
	components: { ItemForm, List }
}
</script>
