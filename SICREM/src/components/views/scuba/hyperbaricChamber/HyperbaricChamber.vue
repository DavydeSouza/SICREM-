<template>
	<div id="hyperbaric-chamber-component">
		<item-form />
		<list />
	</div>
</template>

<script>
import ItemForm from './ItemForm.vue'
import List from './List.vue'
export default {
	name: 'HyperbaricChamber',
	components: { ItemForm, List }
}
</script>
