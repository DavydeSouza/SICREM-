<template>
	<div id="crate-adress-component-content">
		<div class="form-container">
			<form
				novalidate="true"
				@submit.prevent="save"
				@input="$emit('custom-adress-validation', $v.address.$invalid)"
			>
				<div class="form-row">
					<div class="form-group col-md-12 swith-content">
						<label>Endereço no extetrior</label>
						<toggle-button
							:sync="true"
							:width="70"
							:height="30"
							:color="`#01253f`"
							:value="foreign"
							:labels="{ checked: 'SIM', unchecked: 'NÃO' }"
							@change="foreign = !foreign"
						/>
					</div>

					<div class="form-group col-md-6">
						<label for="postcode">CEP</label>
						<input
							id="postcode"
							v-model="address.postcode"
							type="text"
							class="form-control"
							placeholder="CEP"
							autocomplete="off"
							maxlength="8"
							@change="
								() => {
									!foreign && cepSearch()
								}
							"
						/>
					</div>
				</div>

				<div class="form-row">
					<div
						class="form-group col-md-6"
						:class="{ 'invalid-field': $v.address.country.$error }"
					>
						<label for="country">País</label>
						<input
							id="country"
							v-model="address.country"
							type="text"
							class="form-control"
							placeholder="CEP"
							autocomplete="off"
							maxlength="8"
							@change="
								() => {
									!foreign && cepSearch()
								}
							"
							@input=";[$v.address.country.$touch(), emit()]"
						/>
						<div v-if="$v.address.country.$error" class="error-messages">
							<span v-if="!$v.address.country.required">
								O campo é obrigatório
							</span>
							<span v-if="!$v.address.country.minLength">
								Deve ter no minimo
								{{ $v.address.country.$params.minLength.min }} caracteres
							</span>
						</div>
					</div>

					<div
						class="form-group col-md-3 select-container"
						:class="{ 'invalid-field': $v.address.state.$error }"
					>
						<label for="state">Estado</label>
						<v-select
							id="state"
							v-model="address.state"
							placeholder="UF"
							track-by="name"
							label="name"
							:disabled="isSearchingCep"
							:options="UFS"
							@search:blur="$v.address.state.$touch()"
							@input=";[$v.address.state.$touch(), emit()]"
						/>
						<div v-if="$v.address.state.$error" class="error-messages">
							<span v-if="!$v.address.state.required">
								O campo é obrigatório
							</span>
						</div>
					</div>
				</div>

				<div class="form-row">
					<div
						class="form-group col-md-8"
						:class="{ 'invalid-field': $v.address.city.$error }"
					>
						<label for="city">Cidade</label>
						<input
							id="city"
							v-model="address.city"
							type="text"
							class="form-control"
							:disabled="isSearchingCep"
							placeholder="Nome da cidade"
							@input=";[$v.address.city.$touch(), emit()]"
						/>
						<div v-if="$v.address.city.$error" class="error-messages">
							<span v-if="!$v.address.city.required">
								O campo é obrigatório
							</span>
							<span v-if="!$v.address.city.minLength">
								Deve ter no minimo
								{{ $v.address.city.$params.minLength.min }} caracteres
							</span>
						</div>
					</div>

					<div
						class="form-group col-md-8"
						:class="{ 'invalid-field': $v.address.district.$error }"
					>
						<label for="district">Bairro</label>
						<input
							id="district"
							v-model="address.district"
							type="text"
							class="form-control"
							:disabled="isSearchingCep"
							placeholder="Nome do bairro"
							@input=";[$v.address.district.$touch(), emit()]"
						/>
						<div v-if="$v.address.district.$error" class="error-messages">
							<span v-if="!$v.address.district.required">
								O campo é obrigatório
							</span>
							<span v-if="!$v.address.district.minLength">
								Deve ter no minimo
								{{ $v.address.district.$params.minLength.min }} caracteres
							</span>
						</div>
					</div>
				</div>

				<div class="form-row">
					<div
						class="form-group col-md-10"
						:class="{ 'invalid-field': $v.address.street.$error }"
					>
						<label for="street">Logradouro</label>
						<input
							id="inputAddress"
							v-model="address.street"
							type="text"
							class="form-control"
							:disabled="isSearchingCep"
							placeholder="Logradouro Principal"
							@input=";[$v.address.street.$touch(), emit()]"
						/>
						<div v-if="$v.address.street.$error" class="error-messages">
							<span v-if="!$v.address.street.required">
								O campo é obrigatório
							</span>
							<span v-if="!$v.address.street.minLength">
								Deve ter no minimo
								{{ $v.address.street.$params.minLength.min }} caracteres
							</span>
						</div>
					</div>

					<div class="form-group col-md-2">
						<label for="_number">Nº</label>
						<input
							id="_number"
							ref="_number"
							v-model="address.number"
							type="number"
							class="form-control"
							:disabled="isSearchingCep"
							placeholder="nº"
						/>
					</div>
				</div>

				<div class="form-row">
					<div class="form-group col-md-6">
						<label for="complement">Complemento</label>
						<input
							id="complement"
							v-model="address.complement"
							type="text"
							class="form-control"
							:disabled="isSearchingCep"
							placeholder="Complemento"
						/>
					</div>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex'
import EventBus from '@/components/event-bus'
import addresValidation from '@/mixins/validations/address.js'
import { cepService } from '@/services/cepService.js'
import { ToggleButton } from 'vue-js-toggle-button'

export default {
	name: 'CustomAddress',
	components: { ToggleButton },
	mixins: [addresValidation],
	props: {
		validate: {
			type: Boolean,
			default: false
		},
		addressReceived: {
			type: Object,
			default: null
		}
	},
	data() {
		return {
			isSearchingCep: false,
			foreign: false,
			address: {
				postcode: '',
				street: undefined,
				number: undefined,
				state: undefined,
				city: undefined,
				district: undefined,
				complement: undefined,
				country: undefined
			}
		}
	},
	computed: {
		...mapState({
			UFS: state => state.address.UFS
		})
	},
	watch: {
		validate() {
			this.$v.address.$touch()
		}
	},
	created() {
		EventBus.$on('updated-address', this.setAddress)
		this.setAddress(this.addressReceived)
	},
	methods: {
		setAddress(address) {
			if (address) this.address = address
		},
		async cepSearch() {
			this.isSearchingCep = true
			const cepValido = /(^[0-9]{5}-[0-9]{3}$|^[0-9]{8}$)/.test(
				this.address.postcode
			)
			if (cepValido) {
				const { data } = await cepService(this.address.postcode)
				if (data.erro) {
					const msg = 'Cep não localizado!'
					alert(msg)
				} else {
					const _number = this.$refs._number
					this.isSearchingCep = false
					this.address.state = data.uf
					this.address.city = data.localidade
					this.address.district = data.bairro
					this.address.street = data.logradouro
					this.address.country = this.foreign ? '' : 'Brasil'
					this.emit()
					_number.focus()
				}
			} else {
				const msg = 'Cep Inválido!'
				alert(msg)
			}
			this.isSearchingCep = false
		},
		emit() {
			this.$emit('custom-address-update', this.address)
		}
	}
}
</script>

<style lang="scss" scoped>
#crate-adress-component-content {
	width: 100%;
}
</style>
