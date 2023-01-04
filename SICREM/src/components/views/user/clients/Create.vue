<template>
	<div id="crate-user-component-content">
		<div class="form-container">
			<form novalidate="true" class="register" @submit.prevent="save">
				<form-box>
					<template slot="header">
						Dados do cliente
					</template>

					<template slot="content">
						<div class="form-row">
							<div class="form-group col-md-4">
								<label for="cbesid">CBES ID</label>
								<input
									id="cbesid"
									v-model="clientId"
									type="text"
									class="form-control"
									placeholder="Gerado pelo sistema"
									readonly
								/>
							</div>
						</div>

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
									placeholder="Nome do cliente"
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

							<div
								class="form-group col-md-6"
								:class="{ 'invalid-field': $v.email.$error }"
							>
								<label for="email">E-mail</label>
								<input
									id="email"
									v-model="email"
									type="email"
									class="form-control"
									placeholder="Email utilizado para entrar no sistema"
									@blur="$v.email.$touch()"
								/>
								<div v-if="$v.email.$error" class="error-messages">
									<span v-if="!$v.email.email">Formato inválido</span>
								</div>
							</div>

							<div class="form-group col-md-12 swith-content">
								<label>Empresa de mergulho</label>
								<toggle-button
									:sync="true"
									:width="70"
									:height="30"
									:color="`#01253f`"
									:value="isScuba"
									:labels="{ checked: 'SIM', unchecked: 'NÃO' }"
									@change="isScuba = !isScuba"
								/>
							</div>
						</div>
					</template>
				</form-box>

				<form-box>
					<template slot="header">
						Contato
					</template>
					<template slot="content">
						<div class="form-row">
							<div class="form-group col-md-12">
								<contact :validate="validate" />
							</div>
						</div>
					</template>
				</form-box>

				<form-box>
					<template slot="header">
						Dados da empresa
					</template>
					<template slot="content">
						<div class="form-row">
							<div class="form-group col-md-12">
								<create-company
									:isScuba="isScuba"
									@crate-company-validation="data => (companyIsInvalid = data)"
								/>
							</div>
						</div>
					</template>
				</form-box>
				<div class="form-row actions">
					<button type="button" class="btn-custom tertiary" @click="back">
						<i class="fas fa-arrow-left"></i>
						VOLTAR
					</button>
					<button
						type="submit"
						class="btn-custom primary"
						:disabled="disableSave"
						@click.stop.prevent="save()"
					>
						Cadastrar
					</button>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import EventBus from '@/components/event-bus'
import { users } from '@/services/users'
import FormBox from '@/components/shared/FormBox'
import Contact from './inc/contact/Contact.vue'
import CreateCompany from './inc/company/Create'
import clientValidation from '@/mixins/validations/client.js'
import notification from '@/mixins/notificationsMixin.js'
import authorize from '@/mixins/authorizeMixin.js'
import { ToggleButton } from 'vue-js-toggle-button'
import removeFlagFromList from '@/helpers/removeFlagFromList'
import { ROLES } from '@/helpers/roles'

export default {
	name: 'CreateClient',
	components: {
		Contact,
		FormBox,
		CreateCompany,
		ToggleButton
	},
	mixins: [clientValidation, notification, authorize],
	beforeRouteEnter(to, from, next) {
		next(vm => {
			vm.path = from.path
		})
	},
	data() {
		return {
			validate: false,
			showContact: false,
			submitted: true,
			loadingSubmit: true,
			isScuba: false,
			companyInvalid_: true
		}
	},
	computed: {
		...mapState({
			client: state => state.clients.client,
			company: state => state.company.company,
			levels: state => state.levels.levels
		}),
		...mapGetters(['contacts']),
		companyIsInvalid: {
			get() {
				return this.companyInvalid_ && this.isScuba
			},
			set(value) {
				this.companyInvalid_ = value
			}
		},
		name: {
			get() {
				return this.client.name
			},
			set(value) {
				this.setClientField({ value, field: 'name' })
			}
		},
		email: {
			get() {
				return this.client.email
			},
			set(value) {
				this.setClientField({ value, field: 'email' })
			}
		},
		level: {
			get() {
				return this.client.level
			},
			set(value) {
				this.setClientField({ value, field: 'level' })
			}
		},
		clientId: {
			get() {
				return this.client.clientId
			}
		},
		disableSave: {
			get() {
				return (
					this.$v.$error ||
					(!this.contacts.length && this.client.level === '2') ||
					this.companyIsInvalid
				)
			}
		},
		loggedAsAdmin: {
			get() {
				return this.isAdmin()
			}
		}
	},
	async created() {
		const { id } = this.$route.params
		if (id) await this.laodClientToEdit(id)
		EventBus.$emit('updated-address', this.company.address)
	},
	destroyed() {
		this.resetClientState()
		this.resetCompanyState()
		this.resetContactState()
	},
	methods: {
		back() {
			this.$router.back({ redirect: '/' })
		},

		...mapActions([
			'setClientField',
			'laodClientToEdit',
			'resetClientState',
			'resetContactState',
			'resetCompanyState'
		]),
		async save() {
			this.setClientField({ value: ROLES.client, field: 'level' })
			this.submitted = true
			this.loadingSubmit = true
			this.$v.$touch()
			this.validate = !this.validate
			if (!this.$v.$error) {
				if (!this.isScuba) {
					this.company.fcem = this.company.fcemExpiration = null
				}
				const client = this.client
				const company = this.company
				client.contacts = removeFlagFromList(this.contacts)

				if (this.$route.params.id) {
					try {
						const resp = await users.update(client.id, {
							client,
							company
						})
						this.apiResponseNotification(200, resp)
						this.$router.push({ name: 'clientList' })
					} catch (error) {
						this.form.perfil = this.perfis.find(p => p.id === this.form.perfil)
						this.loadingSubmit = false
					}
				} else {
					try {
						const resp = await users.create({ client, company })
						this.apiResponseNotification(201, resp)
						this.$router.push({ name: 'clientList' })
					} catch (error) {
						this.loadingSubmit = false
					}
				}
			}
			this.loadingSubmit = false
		}
	}
}
</script>

<style lang="scss" scoped>
#crate-user-component-content {
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	.form-container {
		.form-group {
			&.swith-content {
				label {
					&:first-of-type {
						min-width: 200px;
					}
				}
			}
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
		&::v-deep #contact-modal {
			.modal-container {
				max-width: 40%;
				.buttons-container {
					display: flex;
					column-gap: 11px;
				}
			}
		}
	}
}
</style>

<style lang="scss" scoped></style>
