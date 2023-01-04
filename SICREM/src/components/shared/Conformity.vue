<template>
	<div id="conformity-component-content">
		<div class="form-container">
			<form novalidate="true" @submit.prevent="save">
				<div class="form-row">
					<div id="conformity-internal-container">
						<div
							id="manu-container"
							class="form-group col-md-6"
							:class="{ 'invalid-field': $v.declarationNumber.$error }"
						>
							<label>Declaração de Conformidade nº</label>
							<input
								id="type"
								v-model="declarationNumber"
								type="text"
								class="form-control"
								placeholder="nº"
								@input="$emit('set-declaration-number', declarationNumber)"
								@blur=";[$v.declarationNumber.$touch(), isValid()]"
							/>
							<div v-if="$v.declarationNumber.$error" class="error-messages">
								<span v-if="!$v.declarationNumber.required"
									>O campo é obrigatório</span
								>
							</div>
						</div>

						<div
							id="expiration-container"
							class="form-group col-md-6"
							:class="{ 'invalid-field': $v.expiration.$error }"
						>
							<label>Validade:</label>
							<input
								id="type"
								v-model="expiration"
								type="text"
								class="form-control"
								placeholder="Validade"
								@input=";[$emit('set-expiration', expiration), isValid()]"
								@blur="$v.expiration.$touch()"
							/>
							<div v-if="$v.expiration.$error" class="error-messages">
								<span v-if="!$v.expiration.required"
									>O campo é obrigatório</span
								>
							</div>
						</div>

						<div
							id="id-number-container"
							class="form-group col-md-6"
							:class="{ 'invalid-field': $v.issuedBy.$error }"
						>
							<label>Emitida por:</label>
							<input
								id="type"
								v-model="issuedBy"
								type="text"
								class="form-control"
								placeholder="Emissor"
								@input=";[$emit('set-issue-by', issuedBy), isValid()]"
								@blur="$v.issuedBy.$touch()"
							/>
							<div v-if="$v.issuedBy.$error" class="error-messages">
								<span v-if="!$v.issuedBy.required">O campo é obrigatório</span>
							</div>
						</div>
					</div>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
import validations from '@/mixins/validations/scuba/conformity.js'

export default {
	name: 'Conformity',
	mixins: [validations],
	props: {
		_declarationNumber: {
			type: String,
			default: undefined
		},
		_expiration: {
			type: String,
			default: undefined
		},
		_issuedBy: {
			type: String,
			default: undefined
		},
		requireIssuedBy: {
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
			declarationNumber: undefined,
			expiration: undefined,
			issuedBy: undefined
		}
	},
	watch: {
		clear() {
			this.$v.$touch()
			console.log('Conformity')
			if (!this.$v.$error) {
				this.declarationNumber = undefined
				this.expiration = undefined
				this.issuedBy = undefined
				this.$v.$reset()
			}
		},
		_declarationNumber(new_) {
			this.declarationNumber = new_
		},
		_expiration(new_) {
			this.expiration = new_
		},
		_issuedBy(new_) {
			this.issuedBy = new_
		}
	},
	methods: {
		isValid() {
			this.$emit('conformity-validation', this.$v.$error)
		}
	}
}
</script>

<style lang="scss" scoped>
#conformity-component-content {
	width: 100%;
	.form-container {
		display: flex;
		form {
			width: 100%;
			.form-row {
				margin: 0;
				justify-content: space-between;
				#conformity-internal-container {
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
