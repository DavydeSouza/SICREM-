<template>
	<div id="propulsion-component">
		<item-form />
		<list />
	</div>
</template>

<script>
import ItemForm from './ItemForm.vue'
import List from './List.vue'
export default {
	name: 'PropulsionAndPower',
	components: { ItemForm, List }
}
</script>
