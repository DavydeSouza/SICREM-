<template>
	<div id="form-mask-helmet-component-content">
		<div class="form-container">
			<form novalidate="true" class="register" @submit.prevent>
				<!-- <div class="form-row title">
					<span>MÁSCARA FACIAL</span>
				</div> -->

				<div class="form-row">
					<div
						class="form-group col-md-6"
						:class="{ 'invalid-field': $v.type.$error }"
					>
						<label for="type">Tipo</label>
						<input
							id="type"
							v-model="type"
							type="text"
							class="form-control"
							placeholder="Tipo de maskHelmet"
							@blur="$v.type.$touch()"
						/>
						<div v-if="$v.type.$error" class="error-messages">
							<span v-if="!$v.type.required">O campo é obrigatório</span>
							<span v-if="!$v.type.minLength">
								Deve ter no minimo
								{{ $v.type.$params.minLength.min }} caracteres
							</span>
						</div>
					</div>

					<div class="form-group col-md-12">
						<manufacturer-and-model
							:clear="clear"
							:_manufacturer="manufacturer"
							:_model="model"
							:_idNumber="idNumber"
							@set-manufacturer-name="data => (manufacturer = data)"
							@set-model-name="data => (model = data)"
							@set-id-number="data => (idNumber = data)"
							@manu-and-model-validation="data => (manuHasError = data)"
						/>
					</div>

					<div class="form-group col-md-6 btn-container">
						<button
							type="buttom"
							class="btn-custom secondary"
							@click="btnAction"
						>
							{{ maskHelmet.id ? 'Editar' : 'Adicionar' }}
							<i class="fas fa-plus-circle" />
						</button>
					</div>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import maskHelmetValidation from '@/mixins/validations/scuba/maskHelmet.js'
import ManufacturerAndModel from '../../../shared/ManufacturerAndModel.vue'

export default {
	name: 'ItemFormMaskHelmet',
	components: { ManufacturerAndModel },
	mixins: [maskHelmetValidation],
	data() {
		return {
			clear: false,
			manuHasError: true
		}
	},
	computed: {
		...mapState({
			maskHelmet: state => state.maskHelmet.maskHelmet
		}),
		type: {
			get() {
				return this.maskHelmet.type
			},
			set(value) {
				this.setMaskHelmetField({ value, field: 'type' })
			}
		},
		idNumber: {
			get() {
				return this.maskHelmet.manufactured.idNumber
			},
			set(value) {
				this.setMaskHelmetField({ value, field: 'number' })
			}
		},
		manufacturer: {
			get() {
				return this.maskHelmet.manufactured.manufacturer
			},
			set(value) {
				this.setMaskHelmetField({ value, field: 'manufacturer' })
			}
		},
		model: {
			get() {
				return this.maskHelmet.manufactured.model
			},
			set(value) {
				this.setMaskHelmetField({ value, field: 'model' })
			}
		}
	},
	methods: {
		...mapActions([
			'setMaskHelmetField',
			'addMaskHelmet',
			'commitEditMaskHelmet'
		]),
		btnAction() {
			this.clear = !this.clear
			this.$v.$touch()
			setTimeout(() => {
				if (!this.manuHasError && !this.$v.$invalid && !this.$v.$error) {
					this.maskHelmet.id
						? this.commitEditMaskHelmet()
						: this.addMaskHelmet()
					this.$v.$reset()
				}
			}, 0)
		}
	}
}
</script>

<style lang="scss" scoped>
#form-maskHelmet-component-content {
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
