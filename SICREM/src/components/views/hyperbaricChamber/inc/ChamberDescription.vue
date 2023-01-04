<template>
	<div id="form-hyperbaric-chamber-component-content">
		<div class="form-container">
			<form novalidate="true" class="register" @submit.prevent>
				<div class="form-row">
					<div
						class="form-group col-md-12"
						:class="{ 'invalid-field': $v.description.$error }"
					>
						<label for="description">Descrição</label>
						<textarea
							id="description"
							v-model="description"
							class="form-control"
							placeholder="Descrição"
							@blur="$v.description.$touch()"
						/>
						<div v-if="$v.description.$error" class="error-messages">
							<span v-if="!$v.description.required">O campo é obrigatório</span>
						</div>
					</div>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
import validation from '@/mixins/validations/scuba/hyperbaricChamber.js'

export default {
	name: 'ChamberData',
	components: {},
	mixins: [validation],
	data() {
		return {
			clear: false,
			manuHasError: true,
			description: null
		}
	},
	computed: {
		/* ...mapState({
			hyperbaricChamber: state => state.hyperbaricChamber.hyperbaricChamber
		}), */
	},
	methods: {
		// ...mapActions([]),
	}
}
</script>

<style lang="scss" scoped>
#form-hyperbaric-chamber-component-content {
	.form-container {
		form {
			.form-row {
				margin: 0;
				&.title {
					width: 100%;
					display: flex;
					align-items: center;
					column-gap: 10px;
					span {
						font-size: $font-size-input;
						font-weight: $font-weight-default-bold;
						margin: 10px 0;
					}
				}
				&:not(.actions) {
					border-radius: $border-radius;
					justify-content: space-between;
					.form-group {
						padding: 0;
						&.col-md-6 {
							flex-basis: 49%;
						}
						&.btn-container {
							padding: 2px 0;
							display: flex;
							justify-content: flex-start;
							align-items: flex-end;
						}
						&.qtd-controls-container {
							display: flex;
							justify-content: space-between;
							align-items: flex-end;
							column-gap: 15px;
							.item {
								&.swith-content {
									height: 38px;
									display: flex;
									align-items: center;
									column-gap: 5px;
									.vue-js-switch {
										margin: 0;
									}
								}
							}
						}
					}
				}
				&.actions {
					width: 100%;
					column-gap: 15px;
				}
			}
		}
	}
}
</style>
