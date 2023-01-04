<template>
	<div id="crate-user-component-content">
		<div class="form-container">
			<form novalidate="true" class="register" @submit.prevent="save">
				<form-box>
					<template slot="header">
						{{ `Dados do ${loggedAsAdmin ? 'usuário' : 'cliente'}` }}
					</template>

					<template slot="content">
						<div class="form-row">
							<div
								v-if="loggedAsAdmin"
								id="user-perfil-container"
								class="form-group col-md-4 select-container"
								:class="{ 'invalid-field': $v.level.$error }"
							>
								<label for="user-perfilcontainer">Perfil</label>
								<v-select
									v-model="level"
									placeholder="Selecione o perfil"
									track-by="name"
									label="name"
									:clearable="false"
									:options="levels"
									:reduce="level => level.value"
									@search:blur=";[$v.level.$touch()]"
								>
									<template #no-options="{ searching }">
										<template v-if="searching" class="info-messages">
											<div class="not-found-message">
												<span>Perfil não encontrado</span>
											</div>
										</template>
									</template>
								</v-select>
								<div v-if="$v.level.$error" class="error-messages">
									<span v-if="!$v.level.required">O campo é obrigatório</span>
								</div>
							</div>

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
import { mapState, mapActions } from 'vuex'
import { users } from '@/services/users'
import FormBox from '@/components/shared/FormBox'
import clientValidation from '@/mixins/validations/client.js'
import notification from '@/mixins/notificationsMixin.js'
import authorize from '@/mixins/authorizeMixin.js'
import { ROLES } from '@/helpers/roles'

export default {
	name: 'CreateInternalUser',
	components: {
		FormBox
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
			submitted: true,
			loadingSubmit: true,
			active: true,
			isScuba: false
		}
	},
	computed: {
		...mapState({
			client: state => state.clients.client,
			levels: state => state.levels.levels.filter(c => c.value !== '2')
		}),
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
		disableSave: {
			get() {
				return this.$v.$error
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
		if (!this.levels.length) await this.laodAllLevels()
		if (id) await this.laodUserToEdit(id)
	},
	destroyed() {
		this.resetClientState()
	},
	methods: {
		back() {
			this.$router.back({ redirect: '/' })
		},

		...mapActions([
			'setClientField',
			'laodAllLevels',
			'laodUserToEdit',
			'resetClientState'
		]),
		async save() {
			if (!this.isAdmin())
				this.setClientField({ value: ROLES.client, field: 'level' })
			this.submitted = true
			this.loadingSubmit = true
			this.$v.$touch()
			if (!this.$v.$error) {
				const client = this.client
				client.active =
					client.active !== undefined ? client.active : this.active
				delete client.clientId
				if (this.$route.params.id) {
					try {
						const resp = await users.update(client.id, { client })
						this.apiResponseNotification(200, resp)
						this.$router.push({ name: 'usersList' })
					} catch (error) {
						this.form.perfil = this.perfis.find(p => p.id === this.form.perfil)
						this.loadingSubmit = false
					}
				} else {
					try {
						const client = this.client
						const resp = await users.create({ client })
						this.apiResponseNotification(201, resp)
						this.$router.push({ name: 'usersList' })
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
	}
}
</style>

<style lang="scss" scoped></style>
