<template>
	<div id="shipowner-component-content">
		<div class="form-container">
			<form novalidate="true" @submit.prevent="save">
				<div class="form-row">
					<div id="shipowner-internal-container">
						<div
							id="shipowner-container"
							class="form-group col-md-8 select-container"
							:class="{ 'invalid-field': $v.shipowner.$error }"
						>
							<label for="ship-type-container">Armador</label>
							<v-select
								v-model="shipowner"
								:track-by="'name'"
								:label="'name'"
								:placeholder="`Digite o ${typeSearch} do armador`"
								:options="shipowners"
								@search="debouncer(() => getShipowner($event))"
								@search:blur=";[$v.shipowner.$touch()]"
								@input="$emit('select-ship-owner', $event)"
								@option:selected=";[isValid()]"
							>
								<template #no-options="{ search, searching }">
									<template v-if="searching" class="info-messages">
										<div class="not-found-message">
											<span>
												Nenhum armador com o
												<em>{{ `${typeSearch} "${search}"` }}</em>
												encontrado.
											</span>
										</div>
									</template>
									<em v-else style="opacity: 0.5;">
										Digite no mínimo 3 caracteres para buscar
									</em>
								</template>
							</v-select>
							<div v-if="$v.shipowner.$error" class="error-messages">
								<span v-if="!$v.shipowner.required">O campo é obrigatório</span>
							</div>
						</div>
						<div class="form-group swith-content">
							<toggle-button
								:sync="true"
								:width="96"
								:height="35"
								:color="{
									checked: '#01253f',
									unchecked: '#17a2b8'
								}"
								:value="type"
								:labels="{ checked: 'CBES-ID', unchecked: 'Nome' }"
								@change=";[changeType(), reset()]"
							/>
						</div>
						<div class="form-group info-content">
							<i
								v-if="shipowner"
								class="fas fa-info-circle"
								@mouseenter="() => (showInfo = true)"
								@mouseleave="() => (showInfo = false)"
							/>
							<div v-if="showInfo" class="infos">
								<div><span>CBES-ID: </span>{{ shipowner.clientid }}</div>
								<div><span>Name: </span>{{ shipowner.name }}</div>
							</div>
						</div>
					</div>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
import toValidate from '@/mixins/validations/toValidate.js'
import { mapState, mapActions } from 'vuex'
import { ToggleButton } from 'vue-js-toggle-button'
import debounceMixin from '@/mixins/debounceMixin.js'

export default {
	name: 'ShipOwner',
	components: { ToggleButton },
	mixins: [toValidate, debounceMixin],
	data() {
		return {
			type: true,
			shipowner: undefined,
			typeSearch: 'código',
			showInfo: false
		}
	},
	validations: {
		shipowner: { required }
	},
	computed: {
		...mapState({
			shipowners: state => {
				const list = state.shipowners.shipowners
				return list.map(item => {
					return {
						name: `${item.clientid} - ${item.user} - ${item.company}`,
						clientid: item.clientid,
						id: item.companyId
					}
				})
			}
		})
	},
	mounted() {
		this.$emit('ship-owner-validation', this.$v.$invalid)
	},
	methods: {
		...mapActions(['resetClients', 'getShipownersByClient']),
		async getShipowner(value) {
			const type = this.type ? 'code' : 'name'
			await this.getShipownersByClient({ type, value })
		},
		changeType() {
			this.type = !this.type
			this.typeSearch = this.type ? 'código' : 'nome'
			this.resetClients()
		},
		isValid() {
			this.$v.shipowner.$touch()
			const valid = this.$route.params.id ? false : this.$v.$invalid
			this.$emit('ship-owner-validation', valid)
		},
		reset() {
			this.resetClients()
			this.shipowner = undefined
		}
	}
}
</script>

<style lang="scss" scoped>
#shipowner-component-content {
	width: 100%;
	.form-container {
		display: flex;
		form {
			width: 100%;
			.form-row {
				.form-group {
					&.swith-content {
						position: relative;
						top: 17px;
					}
					&.info-content {
						height: 101%;
						display: flex;
						align-items: center;
						margin-left: 15px;
						i {
							position: relative;
							top: 17px;
							font-size: 20px;
							cursor: pointer;
						}
						.infos {
							display: flex;
							flex-direction: column;
							background-color: white;
							padding: 7px;
							position: absolute;
							right: 200px;
							box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
							span {
								font-weight: 600;
							}
						}
					}
				}
				#shipowner-internal-container {
					#shipowner-container {
						width: 100%;
					}
					width: 100%;
					display: flex;
					align-items: center;
				}
			}
		}
	}
}
</style>
