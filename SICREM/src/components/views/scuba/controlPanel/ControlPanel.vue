<template>
	<div id="control-panel-frame-component">
		<item-form />
		<list />
	</div>
</template>

<script>
import ItemForm from './ItemForm.vue'
import List from './List.vue'
export default {
	name: 'ControlPanel',
	components: { ItemForm, List }
}
</script>
