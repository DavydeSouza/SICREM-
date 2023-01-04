<template>
	<div id="prompt-modal-component-content" class="component-root">
		<div class="content">
			<modal :showClose="false" @close="() => closeModal">
				<template #header>
					<p class="header">
						{{ text }}
					</p>
				</template>

				<template #body>
					<div class="btn-container">
						<button
							type="button"
							class="btn-custom tertiary"
							@click="closeModal"
						>
							Cancelar
						</button>
						<button
							type="button"
							class="btn-custom dangery"
							@click=";[confirmCallback(), closeModal()]"
						>
							Confirmar
						</button>
					</div>
				</template>
			</modal>
		</div>
	</div>
</template>

<script>
import Modal from '@/components/shared/Modal.vue'

export default {
	name: 'PromptModal',
	components: { Modal },
	props: {
		text: {
			type: String,
			default: 'Confirma a operação?'
		},
		confirmCallback: {
			type: Function,
			required: true
		}
	},
	data() {
		return {}
	},
	methods: {
		closeModal() {
			this.$emit('close-prompt-modal')
			document.location.reload(true)
		}
	}
}
</script>

<style lang="scss">
#prompt-modal-component-content {
	background-color: transparent;
	.modal-container {
		max-width: 30%;
		.modal-header {
			justify-content: center;
			font-size: $font-size-mid-big;
			font-weight: $font-weight-default-bolder;
		}
		.modal-body {
			.btn-container {
				display: flex;
				justify-content: space-around;
			}
		}
	}
}
</style>
