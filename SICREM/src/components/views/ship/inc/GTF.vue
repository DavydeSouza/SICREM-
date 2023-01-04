<template>
	<div id="gtf-component-content">
		<div class="form-container">
			<form novalidate="true" @submit.prevent="save">
				<div class="form-row">
					<div
						id="ship-type-container"
						class="form-group col-md-4 select-container"
						:class="{ 'invalid-field': $v.shiptype.$error }"
					>
						<label for="ship-type-container">Tipo de embarcação</label>
						<v-select
							v-model="shiptype"
							placeholder="Selecione o tipo de embarcação"
							track-by="name"
							label="name"
							:options="types.ship"
							@search:blur=";[$v.shiptype.$touch()]"
						>
							<template #no-options="{ searching }">
								<template v-if="searching" class="info-messages">
									<div class="not-found-message">
										<span>Tipo de embarcação não encontrado</span>
									</div>
								</template>
							</template>
						</v-select>
						<div v-if="$v.shiptype.$error" class="error-messages">
							<span v-if="!$v.shiptype.required">O campo é obrigatório</span>
						</div>
					</div>

					<div
						class="form-group col-md-4 select-container"
						:class="{ 'invalid-field': $v.registrationport.$error }"
					>
						<label for="ship-type-container">Porto de inscrição</label>
						<v-select
							v-model="registrationport"
							placeholder="Digite no mínimo 3 caracteres para buscar"
							track-by="name"
							label="name"
							:options="ports"
							@search="debouncer(() => getPortByName($event))"
							@search:blur=";[$v.registrationport.$touch()]"
							@option:selected=";[resetGtfPorts()]"
						>
							<template #no-options="{ search, searching }">
								<template v-if="searching" class="info-messages">
									<div class="not-found-message">
										<span
											>Nenhum porto com o nome
											<em>{{ `"${search}"` }}</em>
											encontrado.
										</span>
										<span id="new-shypiard" @click.stop="newShipYard(search)">
											Clique aqui para cadastrar.
										</span>
									</div>
								</template>
								<em v-else style="opacity: 0.5;"
									>Digíte o nome do porto desejado</em
								>
							</template>
						</v-select>
						<div v-if="$v.registrationport.$error" class="error-messages">
							<span v-if="!$v.registrationport.required"
								>O campo é obrigatório</span
							>
						</div>
						<div
							v-if="registrationport && !registrationport.id"
							class="info-messages"
						>
							<span>* Um novo porto será criado na base de dados</span>
						</div>
					</div>

					<div
						class="form-group col-md-4 select-container"
						:class="{ 'invalid-field': $v.operationport.$error }"
					>
						<label for="ship-type-container">Porto de operação</label>
						<v-select
							v-model="operationport"
							placeholder="Digite no mínimo 3 caracteres para buscar"
							track-by="name"
							label="name"
							:options="ports"
							@search="debouncer(() => getPortByName($event))"
							@search:blur=";[$v.operationport.$touch()]"
							@option:selected=";[resetGtfPorts()]"
						>
							<template #no-options="{ search, searching }">
								<template v-if="searching" class="info-messages">
									<div class="not-found-message">
										<span
											>Nenhum porto com o nome
											<em>{{ `"${search}"` }}</em>
											encontrado.
										</span>
										<span id="new-shypiard" @click.stop="newShipYard(search)">
											Clique aqui para cadastrar.
										</span>
									</div>
								</template>
								<em v-else style="opacity: 0.5;"
									>Digíte o nome do porto desejado</em
								>
							</template>
						</v-select>
						<div v-if="$v.operationport.$error" class="error-messages">
							<span v-if="!$v.operationport.required"
								>O campo é obrigatório</span
							>
						</div>
						<div
							v-if="operationport && !operationport.id"
							class="info-messages"
						>
							<span>* Um novo porto será criado na base de dados</span>
						</div>
					</div>

					<div
						id="activitys-type-container"
						class="form-group col-md-4 select-container"
						:class="{ 'invalid-field': $v.activitys.$error }"
					>
						<label for="ship-type-container">Atividade ou serviço</label>
						<v-select
							v-model="activitys"
							placeholder="Selecione as atividades da embarcação"
							track-by="name"
							label="name"
							:multiple="true"
							:options="types.activity"
							:searchable="true"
							:close-on-select="true"
							:show-labels="false"
							:allow-empty="false"
							@close=";[$v.activitys.$touch()]"
						/>
						<div v-if="$v.activitys.$error" class="error-messages">
							<span v-if="!$v.activitys.required">O campo é obrigatório</span>
						</div>
					</div>

					<div
						id="navigation-type-container"
						class="form-group col-md-4 select-container"
						:class="{ 'invalid-field': $v.navigationareas.$error }"
					>
						<label for="ship-type-container">Área de navegação</label>
						<v-select
							v-model="navigationareas"
							placeholder="Selecione a área de navegação"
							track-by="name"
							label="name"
							:multiple="true"
							:options="types.navigationarea"
							:searchable="true"
							:close-on-select="true"
							:show-labels="false"
							:allow-empty="false"
							@close=";[$v.navigationareas.$touch()]"
						/>
						<div v-if="$v.navigationareas.$error" class="error-messages">
							<span v-if="!$v.navigationareas.required"
								>O campo é obrigatório</span
							>
						</div>
					</div>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
import gtfValidation from '@/mixins/validations/ships/gtf.js'
import toValidate from '@/mixins/validations/toValidate.js'
import debounceMixin from '@/mixins/debounceMixin.js'
import { mapState, mapActions } from 'vuex'

export default {
	name: 'GTF',
	components: {},
	mixins: [gtfValidation, toValidate, debounceMixin],
	data() {
		return {
			updating: true
		}
	},
	computed: {
		...mapState({
			gtf: state => state.gtf.gtf,
			ports: state => state.gtf.ports,
			types: state => state.types.types
		}),
		shiptype: {
			get() {
				return this.gtf.shiptype
			},
			set(value) {
				this.setGtfField({ value, field: 'shiptype' })
				this.validate('shiptype')
			}
		},
		activitys: {
			get() {
				return this.gtf.activitys
			},
			set(value) {
				this.setGtfField({ value, field: 'activitys' })
				this.validate('activitys')
			}
		},
		navigationareas: {
			get() {
				return this.gtf.navigationareas
			},
			set(value) {
				this.setGtfField({ value, field: 'navigationareas' })
				this.validate('navigationareas')
			}
		},
		registrationport: {
			get() {
				return this.gtf.registrationport
			},
			set(value) {
				this.setGtfField({ value, field: 'registrationport' })
				this.validate('registrationport')
			}
		},
		operationport: {
			get() {
				return this.gtf.operationport
			},
			set(value) {
				this.setGtfField({ value, field: 'operationport' })
				this.validate('operationport')
			}
		}
	},
	updated() {
		if (this.$route.params.id && this.updating) {
			this.updating = false
			this.validate()
		}
	},
	methods: {
		...mapActions(['setGtfField', 'getPortByName', 'resetGtfPorts']),
		validate(field) {
			field ? this.$v[field]?.$touch() : this.$v.$touch()
			this.$emit('gtf-validattion', this.$v.$invalid)
		}
	}
}
</script>

<style lang="scss">
#gtf-component-content {
	background-color: transparent;
}
</style>

<style lang="scss" scoped>
@import '../../../../assets/scss/mixins/_max-width-1024.scss';
@media (max-width: 1024px) {
	#gtf-component-content {
		@include max-width-1024;
	}
}
</style>
