<template>
	<div id="cylinder-frame-component">
		<item-form />
		<list />
	</div>
</template>

<script>
import ItemForm from './ItemForm.vue'
import List from './List.vue'
export default {
	name: 'CylinderFrame',
	components: { ItemForm, List }
}
</script>
