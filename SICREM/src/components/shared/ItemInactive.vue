<template>
	<div class="item-inactive-component">
		<span class="text" @click="() => clicked(active)">
			{{ !active ? inactivate : activate }}
		</span>
		<prompt-modal
			v-if="prompt"
			:confirmCallback="allow ? onClick : () => null"
			:text="text || exclusionText"
			@close-prompt-modal="prompt = false"
		/>
	</div>
</template>
<script>
import PromptModal from '@/components/shared/PromptModal.vue'

export default {
	name: 'ItemInactive',
	components: { PromptModal },
	props: {
		onClick: {
			type: Function,
			default: undefined
		},
		totalObjetos: {
			type: Number,
			default: 0
		},
		active: {
			type: Boolean,
			default: true
		},
		allow: {
			type: Boolean,
			default: false
		},
		text: {
			type: String,
			default: null
		}
	},
	data() {
		return {
			prompt: false,
			activate: 'Ativo',
			inactivate: 'Inativo',
			exclusionText: 'Confirma a inativação?',
			tooltip: {
				content: 'Inativar'
			}
		}
	},
	methods: {
		clicked() {
			if (this.allow) this.prompt = true
		}
	}
}
</script>
<style lang="scss" scoped>
.item-inactive-component {
	background-color: transparent;
	span {
		&.text {
			text-transform: uppercase;
			font-size: $font-size-small;
			color: $selected-item-color;
			cursor: pointer;
		}
	}
}
</style>
