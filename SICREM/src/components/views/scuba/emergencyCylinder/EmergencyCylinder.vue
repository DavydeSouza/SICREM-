<template>
	<div id="emergency-cylinder-component">
		<item-form />
		<list />
	</div>
</template>

<script>
import ItemForm from './ItemForm.vue'
import List from './List.vue'
export default {
	name: 'EmergencyCylinder',
	components: { ItemForm, List }
}
</script>
