<template>
	<div id="form-contact-component-content">
		<div class="form-container">
			<form novalidate="true" class="register" @submit.prevent>
				<div class="form-row">
					<div
						class="form-group col-md-6"
						:class="{ 'invalid-field': $vd.name.$error }"
					>
						<label for="name">Nome</label>
						<input
							id="name"
							v-model="name"
							type="text"
							class="form-control"
							placeholder="Nome do contato"
						/>
						<div v-if="$vd.name.$error" class="error-messages">
							<span v-if="!$vd.name.required">O campo é obrigatório</span>
							<span v-if="!$vd.name.minLength">
								Deve ter no minimo
								{{ $vd.name.$params.minLength.min }} caracteres
							</span>
						</div>
					</div>

					<div
						class="form-group col-md-6"
						:class="{ 'invalid-field': $vd.email.$error }"
					>
						<label for="email">E-mail usado para login</label>
						<input
							id="email"
							v-model="email"
							type="email"
							class="form-control"
							placeholder="Email do contato"
						/>
						<div v-if="$vd.email.$error" class="error-messages">
							<span v-if="!$vd.email.required">O campo é obrigatório</span>
							<span v-if="!$vd.email.email">Formato inválido</span>
						</div>
					</div>

					<div class="form-group col-md-6">
						<label for="sector">Setor</label>
						<input
							id="sector"
							v-model="sector"
							type="text"
							class="form-control"
							placeholder="Setor do contato"
						/>
					</div>
				</div>

				<div class="form-row">
					<div class="internal-container form-group col-md-6">
						<label for="cels">Celular</label>
						<div class="form-row flex-container">
							<div v-for="(cel, c) in cels" :key="c" class="contact-group">
								<div
									class="form-group"
									:class="{ 'invalid-field': $vdCel.$each[c].$error }"
								>
									<input
										id="input-cels"
										v-model="cels[c]"
										type="tel"
										class="form-control"
										:placeholder="`Celular ${c + 1}`"
										@input="customSet(c, 'cels', $event.target.value)"
									/>
									<div v-if="$vdCel.$each[c].$error" class="error-messages">
										<span v-if="!$vdCel.$each[c].required"
											>O campo é obrigatório</span
										>
										<span v-if="!$vdCel.$each[c].minLength">
											Deve ter no minimo
											{{ $vdCel.$each[c].$params.minLength.min }} caracteres
										</span>
									</div>
								</div>
								<div class="buttons-container">
									<button
										v-if="c > 0 || cels.length > 1"
										type="button"
										class="remove-item btn btn-link"
										@click.stop="
											removeContactField({ field: 'cels', index: c })
										"
									>
										<i class="far fa-trash-alt" />
									</button>
									<button
										v-if="cels.length === c + 1"
										type="button"
										class="add-item btn btn-link"
										@click.stop="cels.push(undefined)"
									>
										<i class="fas fa-plus" />
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="form-row">
					<div class="internal-container form-group col-md-6">
						<label for="phones">Telefone</label>
						<div class="form-row">
							<div v-for="(phone, p) in phones" :key="p" class="contact-group">
								<div
									class="form-group"
									:class="{ 'invalid-field': $vdPhone.$each[p].$error }"
								>
									<input
										id="input-phones"
										v-model="phones[p]"
										type="tel"
										class="form-control"
										:placeholder="`Telefone ${p + 1}`"
										@input="customSet(p, 'phones', $event.target.value)"
									/>
									<div v-if="$vdPhone.$each[p].$error" class="error-messages">
										<span v-if="!$vdPhone.$each[p].required"
											>O campo é obrigatório</span
										>
										<span v-if="!$vdPhone.$each[p].minLength">
											Deve ter no minimo
											{{ $vdPhone.$each[p].$params.minLength.min }} caracteres
										</span>
									</div>
								</div>
								<div class="buttons-container">
									<button
										v-if="p > 0 || phones.length > 1"
										type="button"
										class="remove-item btn btn-link"
										@click.stop="
											removeContactField({ field: 'phones', index: p })
										"
									>
										<i class="far fa-trash-alt" />
									</button>
									<button
										v-if="phones.length === p + 1"
										type="button"
										class="add-item btn btn-link"
										title="Adicionar outro contato"
										@click.stop="phones.push(undefined)"
									>
										<i class="fas fa-plus" />
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="form-row">
					<div class="form-group col-md-6 btn-container">
						<button
							type="buttom"
							class="btn-custom secondary"
							@click="buttonAction"
						>
							{{ editing ? 'Editar' : 'Adicionar' }}
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
import contactValidation from '@/mixins/validations/contact.js'

export default {
	name: 'ItemFormContact',
	mixins: [contactValidation],
	data() {
		return {
			index: -1,
			separator: '|',
			selectedItem: false,
			editMode: false,
			temp: undefined
		}
	},
	computed: {
		...mapState({
			contact: state => state.contacts.contact,
			contacts: state => state.contacts.contacts,
			editing: state => state.contacts.editing,
			$vd: state => state.contacts.validations.contact,
			$vdCel: state => state.contacts.validationCel,
			$vdPhone: state => state.contacts.validationPhone
		}),
		name: {
			get() {
				return this.contact.name
			},
			set(value) {
				this.setContactField({ value, field: 'name' })
			}
		},
		email: {
			get() {
				return this.contact.email
			},
			set(value) {
				this.setContactField({ value, field: 'email' })
			}
		},
		sector: {
			get() {
				return this.contact.sector
			},
			set(value) {
				this.setContactField({ value, field: 'sector' })
			}
		},
		cels: {
			get() {
				return this.contact.cels
			}
		},
		phones: {
			get() {
				return this.contact.phones
			}
		}
	},
	methods: {
		...mapActions([
			'setContactField',
			'addContact',
			'commitEditContact',
			'removeContactField'
		]),

		customSet(index, field, value) {
			this.setContactField({ value, field, index })
		},

		isSelected(isSelected = false, index) {
			this.selectedItem = isSelected ? -1 : index
		},

		buttonAction() {
			this.$vd.$touch()
			this.$vdCel.$touch()
			this.$vdPhone.$touch()
			const isValidVd = !this.$vd.$invalid && !this.$vd.$error
			const isValidVdCel = !this.$vdCel.$invalid && !this.$vdCel.$error
			const isValidVdPhone = !this.$vdPhone.$invalid && !this.$vdPhone.$error

			setTimeout(() => {
				if (isValidVd && isValidVdCel && isValidVdPhone) {
					this.editing ? this.commitEditContact() : this.addContact()
					this.$vd.$reset()
					this.$vdCel.$reset()
					this.$vdPhone.$reset()
				}
			}, 0)
		}
	}
}
</script>

<style lang="scss" scoped>
#form-contact-component-content {
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

				.internal-container {
					margin-bottom: 10px;
					.form-row {
						margin: 0;
						.contact-group {
							width: 100%;
							display: inline-flex;
							.buttons-container {
								margin-left: 5px;
								position: relative;
								top: 6px;
								button {
									color: $font-color;
									color: white;
									&:focus {
										box-shadow: none;
									}
									&.remove-item {
										background-color: $danger-color;
										&:hover {
											background-color: $danger-color-hover;
										}
									}
									&.add-item {
										background-color: $selected-item-color;
										&:hover {
											background-color: $btn-secondary-color;
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
}
</style>
