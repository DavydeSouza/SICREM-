<template>
	<div id="compressed-air-tank-component">
		<item-form />
		<list />
	</div>
</template>

<script>
import ItemForm from './ItemForm.vue'
import List from './List.vue'
export default {
	name: 'CompressedAirTank',
	components: { ItemForm, List }
}
</script>
