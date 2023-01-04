<template>
	<div id="crate-company-component-content">
		<div class="form-container">
			<form novalidate="true" class="fcemExpiration" @submit.prevent="save">
				<div class="form-row">
					<div
						class="form-group col-md-8"
						:class="{ 'invalid-field': $v.name.$error }"
					>
						<label for="name">Nome</label>
						<input
							id="name"
							v-model="name"
							type="text"
							class="form-control"
							placeholder="Nome da empresa"
							@input="isValid"
							@blur="$v.name.$touch()"
						/>
						<div v-if="$v.name.$error" class="error-messages">
							<span v-if="!$v.name.required">O campo é obrigatório</span>
							<span v-if="!$v.name.minLength">
								Deve ter no minimo
								{{ $v.name.$params.minLength.min }} caracteres
							</span>
						</div>
					</div>
				</div>

				<div class="form-row">
					<div
						class="form-group col-md-4"
						:class="{ 'invalid-field': $v.register.$error }"
					>
						<label for="register">CNPJ</label>
						<input
							id="register"
							v-model="register"
							type="text"
							class="form-control"
							placeholder="CNPJ da empresa"
							@input="isValid"
							@blur="$v.register.$touch()"
						/>
						<div v-if="$v.register.$error" class="error-messages">
							<span v-if="!$v.register.required">O campo é obrigatório</span>
							<span v-if="!$v.register.minLength">
								Deve ter no minimo
								{{ $v.register.$params.minLength.min }} caracteres
							</span>
						</div>
					</div>
				</div>

				<div class="form-row">
					<div
						v-if="isScuba"
						class="form-group col-md-6"
						:class="{ 'invalid-field': $v.fcem.$error }"
					>
						<label for="fcem">FCEM</label>
						<input
							id="fcem"
							v-model="fcem"
							type="text"
							class="form-control"
							placeholder="fcem"
							@input="isValid"
							@blur="$v.fcem.$touch()"
						/>
						<div v-if="$v.fcem.$error" class="error-messages">
							<span v-if="!$v.fcem.required"
								>Obrigatório para perfil Companye</span
							>
							<span v-if="!$v.fcem.minLength">
								Deve ter no minimo
								{{ $v.fcem.$params.minLength.min }} caracteres
							</span>
						</div>
					</div>

					<div
						v-if="isScuba"
						class="form-group col-md-6"
						:class="{ 'invalid-field': $v.fcemExpiration.$error }"
					>
						<label for="fcemExpiration">Validade FCEM</label>
						<input
							id="fcemExpiration"
							v-model="fcemExpiration"
							type="date"
							class="form-control"
							placeholder="Data"
							@input="isValid"
							@blur="$v.fcemExpiration.$touch()"
						/>
						<div v-if="$v.fcemExpiration.$error" class="error-messages">
							<span v-if="!$v.fcemExpiration.required">Campo obrigatório</span>
						</div>
					</div>
				</div>

				<div class="form-row">
					<custom-address
						:addressReceived="company.address"
						@custom-address-update="setAddress"
						@custom-adress-validation="data => (adressInvalid = data)"
					/>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { users } from '@/services/users'
import CustomAddress from '@/components/shared/CustomAddress'
import validation from '@/mixins/validations/company.js'

export default {
	name: 'CreateCompany',
	components: { CustomAddress },
	mixins: [validation],
	props: {
		isScuba: {
			type: Boolean,
			required: true
		}
	},
	data() {
		return {
			validate: false,
			showContact: false,
			submitted: true,
			loadingSubmit: true
		}
	},
	computed: {
		...mapState({
			company: state => state.company.company
		}),
		name: {
			get() {
				return this.company.name
			},
			set(value) {
				this.setCompanyField({ value, field: 'name' })
			}
		},
		register: {
			get() {
				return this.company.register
			},
			set(value) {
				this.setCompanyField({ value, field: 'register' })
			}
		},
		fcem: {
			get() {
				return this.company.fcem
			},
			set(value) {
				this.setCompanyField({ value, field: 'fcem' })
			}
		},
		fcemExpiration: {
			get() {
				return this.company.fcemExpiration
			},
			set(value) {
				this.setCompanyField({ value, field: 'expiration' })
			}
		},
		address: {
			get() {
				return this.company.address
			},
			set(value) {
				this.setCompanyField({ value, field: 'address' })
			}
		}
	},
	mounted() {
		if (this.$route.params.id) {
			this.$v.$touch()
			this.$emit('crate-company-validation', this.$v.$invalid)
		}
	},
	methods: {
		...mapActions(['setCompanyField', 'loadCompanyById']),
		async save() {
			this.submitted = true
			this.loadingSubmit = true
			this.$v.$touch()

			if (!this.$v.$error) {
				if (this.$route.params.id) {
					try {
						const user = await users.update(this.$route.params.id, this.company)
						if (user.status === 200)
							console.log({ message: 'Usuário Atualizado com sucesso !' })
					} catch (error) {
						this.form.perfil = this.perfis.find(p => p.id === this.form.perfil)
						this.loadingSubmit = false
					}
				} else {
					try {
						await users.create(this.company)
						console.log({ message: 'Usuário Cadastrado com sucesso !' })
					} catch (error) {
						this.loadingSubmit = false
					}
				}
			}
			this.loadingSubmit = false
		},
		isValid() {
			this.$emit('crate-company-validation', this.$v.$invalid)
		},
		setAddress(address) {
			this.address = address
		}
	}
}
</script>

<style lang="scss" scoped>
#crate-company-component-content {
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	.form-container {
		.form-row {
			width: 100%;
			.form-group {
				&.button {
					padding: 0;
					display: inline-flex;
					align-items: flex-end;
					.button-container {
						width: 100%;
						height: 50px;
						display: flex;
						align-items: center;
						column-gap: 10px;
						button {
							background-color: $btn-secondary-color;
							border: none;
							&:hover {
								background-color: $btn-secondary-color-hover;
							}
						}
						span {
							text-transform: uppercase;
							font-size: $font-size-small;
							font-style: italic;
							color: $danger-color;
						}
					}
					.error-messages {
						span {
							font-size: $font-size-small;
							color: $danger-color;
						}
					}
				}
			}
		}
	}
}
</style>

<style lang="scss" scoped></style>
