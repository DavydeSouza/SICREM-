<template>
	<div class="item-remove-component">
		<span
			v-tooltip="tooltip"
			class="btn-custom small dangery"
			:class="{ disabled: !active }"
			:disabled="totalObjetos > 0 || !active"
			@click="clicked"
		>
			<i class="fas fa-trash-alt" />
		</span>
		<prompt-modal
			v-if="prompt"
			:confirmCallback="onClick"
			:text="text || exclusionText"
			@close-prompt-modal="prompt = false"
		/>
	</div>
</template>
<script>
import PromptModal from '@/components/shared/PromptModal.vue'

export default {
	name: 'ButtonAction',
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
		text: {
			type: String,
			default: null
		}
	},
	data() {
		return {
			prompt: false,
			exclusionText:
				'Confirma a exclusão? Essa operação não pode ser desfeita!',
			tooltip: {
				content: 'Excluir'
			}
		}
	},
	methods: {
		clicked() {
			this.prompt = true
		}
	}
}
</script>
<style lang="scss" scoped>
.item-remove-component {
	background-color: transparent;
}
</style>
