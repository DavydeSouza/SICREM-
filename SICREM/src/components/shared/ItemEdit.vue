<template>
	<div class="item-edit-component">
		<span
			v-if="onClick"
			class="btn-custom small primary"
			:class="{ disabled: !active }"
			:disabled="!active"
			@click="onClick"
		>
			<i class="fas fa-pen" />
		</span>

		<span v-else class="btn-custom small primary">
			<router-link
				v-tooltip="tooltip"
				:class="{ disabled: !active }"
				:disabled="!active"
				:to="{ name: routerName, query: { ...query }, params: { ...params } }"
			>
				<i class="fas fa-pen" />
			</router-link>
		</span>
	</div>
</template>

<script>
export default {
	name: 'ItemEdit',
	props: {
		routerName: {
			type: String,
			required: true
		},
		params: {
			type: Object,
			required: true
		},
		query: {
			type: Object,
			default: undefined
		},
		active: {
			type: Boolean,
			default: true
		},
		onClick: {
			type: Function,
			default: undefined
		}
	},
	data() {
		return {
			tooltip: {
				content: 'Editar'
			}
		}
	}
}
</script>

<style lang="scss" scoped>
.item-edit-component {
	background-color: transparent;
}
</style>
