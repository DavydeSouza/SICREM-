<template>
	<div id="manu-and-model-component-content">
		<div class="form-container">
			<form novalidate="true" @submit.prevent="save">
				<div class="form-row">
					<div id="manu-and-model-internal-container">
						<div
							id="manu-container"
							class="form-group col-md-6"
							:class="{ 'invalid-field': $v.manufacturer.$error }"
						>
							<label>Fabricante</label>
							<input
								id="type"
								v-model="manufacturer"
								type="text"
								class="form-control"
								placeholder="Nome do fabricante"
								@input="$emit('set-manufacturer-name', manufacturer)"
								@blur=";[$v.manufacturer.$touch(), isValid()]"
							/>
							<div v-if="$v.manufacturer.$error" class="error-messages">
								<span v-if="!$v.manufacturer.required"
									>O campo é obrigatório</span
								>
							</div>
						</div>

						<div
							v-if="showModel_"
							id="model-container"
							class="form-group col-md-6"
							:class="{ 'invalid-field': $v.model.$error }"
						>
							<label>Modelo</label>
							<input
								id="type"
								v-model="model"
								type="text"
								class="form-control"
								placeholder="Nome do modelo"
								@input=";[$emit('set-model-name', model), isValid()]"
								@blur="$v.model.$touch()"
							/>
							<div v-if="$v.model.$error" class="error-messages">
								<span v-if="!$v.model.required">O campo é obrigatório</span>
							</div>
						</div>

						<div
							id="id-number-container"
							class="form-group col-md-6"
							:class="{ 'invalid-field': $v.idNumber.$error }"
						>
							<label>Nº de identificação</label>
							<input
								id="type"
								v-model="idNumber"
								type="text"
								class="form-control"
								placeholder="Nº de identificação"
								@input=";[$emit('set-id-number', idNumber), isValid()]"
								@blur="$v.idNumber.$touch()"
							/>
							<div v-if="$v.idNumber.$error" class="error-messages">
								<span v-if="!$v.idNumber.required">O campo é obrigatório</span>
							</div>
						</div>
					</div>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
import validations from '@/mixins/validations/manufacturerAndModel.js'

export default {
	name: 'ManufacturerAndModel',
	mixins: [validations],
	props: {
		_manufacturer: {
			type: String,
			default: undefined
		},
		_model: {
			type: String,
			default: undefined
		},
		_idNumber: {
			type: String,
			default: undefined
		},
		requireModel: {
			type: Boolean,
			default: true
		},
		showModel: {
			type: Boolean,
			default: true
		},
		clear: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			manufacturer: undefined,
			model: undefined,
			idNumber: undefined,
			showModel_: true
		}
	},
	watch: {
		clear() {
			this.$v.$touch()
			this.$emit('manu-and-model-validation', this.$v.$error)
			if (!this.$v.$error) {
				this.manufacturer = undefined
				this.model = undefined
				this.idNumber = undefined
				this.$v.$reset()
			}
		},
		_manufacturer(new_) {
			this.manufacturer = new_
		},
		_model(new_) {
			this.model = new_
		},
		_idNumber(new_) {
			this.idNumber = new_
		}
	},
	created() {
		this.showModel_ = this.showModel
		if (this.requireModel) this.showModel_ = true
	},
	methods: {
		isValid() {
			this.$emit('manu-and-model-validation', this.$v.$error)
		}
	}
}
</script>

<style lang="scss" scoped>
#manu-and-model-component-content {
	width: 100%;
	.form-container {
		display: flex;
		form {
			width: 100%;
			.form-row {
				margin: 0;
				justify-content: space-between;
				#manu-and-model-internal-container {
					width: 100%;
					display: flex;
					justify-content: space-between;
					flex-wrap: wrap;
					align-items: center;
					.form-group {
						padding: 0;
						&.col-md-6 {
							flex-basis: 49%;
						}
					}
				}
			}
		}
	}
}
</style>
