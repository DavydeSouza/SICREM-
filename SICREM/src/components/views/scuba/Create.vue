<template>
	<div id="crate-scuba-component-content">
		<div class="form-container">
			<form novalidate="true" class="register" @submit.prevent="save">
				<form-box>
					<template slot="header">
						Certificado
					</template>

					<template slot="content">
						<div class="form-row">
							<div class="form-group col-md-12">
								<company
									:company_="$route.params.id ? company : null"
									@select-company="data => (company = data)"
								/>
								<certification v-if="!$route.params.id" />
							</div>
						</div>
					</template>
				</form-box>

				<form-box v-if="at20">
					<template slot="header">
						COMPRESSOR
					</template>

					<template slot="content">
						<div class="form-row">
							<div class="form-group col-md-12">
								<compressor />
							</div>
						</div>
					</template>
				</form-box>

				<form-box v-if="at20">
					<template slot="header">
						MÁSCARA FACIAL
					</template>

					<template slot="content">
						<div class="form-row">
							<div class="form-group col-md-12">
								<mask-helmet />
							</div>
						</div>
					</template>
				</form-box>

				<form-box v-if="at20">
					<template slot="header">
						RESERVATÓRIO DE AR COMPRIMIDO
					</template>

					<template slot="content">
						<div class="form-row">
							<div class="form-group col-md-12">
								<compressed-air-tank />
							</div>
						</div>
					</template>
				</form-box>

				<form-box v-if="btw30and50">
					<template slot="header">
						QUADRO DE CILINDROS
					</template>

					<template slot="content">
						<div class="form-row">
							<div class="form-group col-md-12">
								<cylinder-frame />
							</div>
						</div>
					</template>
				</form-box>

				<form-box v-if="btw30and50">
					<template slot="header">
						INTERCOMUNICADOR / GRAVADOR DE SOM E IMAGEM
					</template>

					<template slot="content">
						<div class="form-row">
							<div class="form-group col-md-12">
								<comunicator />
							</div>
						</div>
					</template>
				</form-box>

				<form-box v-if="btw30and50">
					<template slot="header">
						UMBILICAL
					</template>

					<template slot="content">
						<div class="form-row">
							<div class="form-group col-md-12">
								<umbilical />
							</div>
						</div>
					</template>
				</form-box>

				<form-box v-if="btw30and50">
					<template slot="header">
						CILINDRO DE EMERGÊNCIA
					</template>

					<template slot="content">
						<div class="form-row">
							<div class="form-group col-md-12">
								<emergency-cylinder />
							</div>
						</div>
					</template>
				</form-box>

				<form-box v-if="btw30and50">
					<template slot="header">
						PAINEL DE CONTROLE
					</template>

					<template slot="content">
						<div class="form-row">
							<div class="form-group col-md-12">
								<control-panel />
							</div>
						</div>
					</template>
				</form-box>

				<form-box v-if="btw30and50">
					<template slot="header">
						SINETE
					</template>

					<template slot="content">
						<div class="form-row">
							<div class="form-group col-md-12">
								<signet />
							</div>
						</div>
					</template>
				</form-box>

				<form-box v-if="btw30and50">
					<template slot="header">
						GUINCHO
					</template>

					<template slot="content">
						<div class="form-row">
							<div class="form-group col-md-12">
								<winch />
							</div>
						</div>
					</template>
				</form-box>

				<form-box v-if="btw30and50">
					<template slot="header">
						CÂMARA HIPERBÁRICA
					</template>

					<template slot="content">
						<div class="form-row">
							<div class="form-group col-md-12">
								<hyperbaric-chamber />
							</div>
						</div>
					</template>
				</form-box>

				<form-box v-if="btw30and50">
					<template slot="header">
						CESTA
					</template>

					<template slot="content">
						<div class="form-row">
							<div class="form-group col-md-12">
								<basket />
							</div>
						</div>
					</template>
				</form-box>

				<form-box v-if="btw30and50">
					<template slot="header">
						PÓRTICO
					</template>

					<template slot="content">
						<div class="form-row">
							<div class="form-group col-md-12">
								<portico />
							</div>
						</div>
					</template>
				</form-box>

				<form-box v-if="at20">
					<template slot="header">
						OUTROS ITEMS
					</template>

					<template slot="content">
						<div class="form-row">
							<div class="form-group col-md-12">
								<general-system-items />
							</div>
						</div>
					</template>
				</form-box>

				<div class="form-row actions">
					<button
						type="submit"
						class="btn-custom primary"
						:disabled="false"
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
import { certification } from '@/services/certification'
import clientValidation from '@/mixins/validations/client.js'
import editScubaMixin from '@/mixins/editScubaMixin.js'
import notification from '@/mixins/notificationsMixin.js'
import FormBox from '@/components/shared/FormBox'
import Company from './company/Company'
import Certification from './certification/Certification'
import Compressor from './compressor/Compressor'
import MaskHelmet from './maskHelmet/MaskHelmet'
import GeneralSystemItems from './generalSystemItems/GeneralSystemItems'
import CompressedAirTank from './compressedAirTank/CompressedAirTank'
import CylinderFrame from './cylinderFrame/CylinderFrame'
import Comunicator from './comunicator/Comunicator'
import Umbilical from './umbilical/Umbilical'
import EmergencyCylinder from './emergencyCylinder/EmergencyCylinder'
import ControlPanel from './controlPanel/ControlPanel'
import Signet from './signet/Signet'
import Winch from './winch/Winch'
import HyperbaricChamber from './hyperbaricChamber/HyperbaricChamber'
import Basket from './basket/Basket'
import Portico from './portico/Portico'

export default {
	name: 'CreateScuba',
	components: {
		FormBox,
		Company,
		Certification,
		Compressor,
		MaskHelmet,
		GeneralSystemItems,
		CompressedAirTank,
		CylinderFrame,
		Comunicator,
		Umbilical,
		EmergencyCylinder,
		ControlPanel,
		Signet,
		Winch,
		HyperbaricChamber,
		Basket,
		Portico
	},
	mixins: [clientValidation, editScubaMixin, notification],
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
			showCompressorModal: true
		}
	},
	computed: {
		...mapState({
			company_: state => state.company.company,
			certification: state => state.certification.certification,
			certificationSystem: state => state.certification.system,
			compressors: state => state.compressor.compressors,
			masksHelmets: state => state.maskHelmet.masksHelmets,
			generalSystemItems: state => state.generalSystemItems.generalSystemItems,
			compressedsAirTanks: state => state.compressedAirTank.compressedsAirTanks,
			cylindersFrames: state => state.cylinderFrame.cylindersFrames,
			comunicators: state => state.comunicator.comunicators,
			umbilicals: state => state.umbilical.umbilicals,
			emergencyCylinders: state => state.emergencyCylinder.emergencyCylinders,
			controlPanels: state => state.controlPanel.controlPanels,
			signets: state => state.signet.signets,
			winchs: state => state.winch.winchs,
			hyperbaricsChambers: state => state.hyperbaricChamber.hyperbaricsChambers,
			baskets: state => state.basket.baskets,
			porticos: state => state.portico.porticos
		}),
		...mapGetters(['maxDepth']),
		company: {
			get() {
				return this.company_
			},
			set(value) {
				this.setCompany(value)
			}
		},
		at20: {
			get() {
				if (this.certification) {
					return this.maxDepth <= 20 || this.btw30and50
				}
				return false
			}
		},
		btw30and50: {
			get() {
				if (this.certification) {
					return this.maxDepth > 20 && this.maxDepth <= 50
				}
				return false
			}
		}
	},
	async created() {
		const id = this.$route.params.id
		if (id) this.loadEditInfos(id)
	},
	destroyed() {
		this.resetCompressorState()
		this.resetBasketState()
		this.resetCompressedAirTankState()
		this.resetComunicatorState()
		this.resetControlPanelState()
		this.resetCylinderFrameState()
		this.resetEmergencyCylinderState()
		this.resetHyperbaricChamberState()
		this.resetMaskHelmetState()
		this.resetPorticoState()
		this.resetSignetState()
		this.resetUmbilicalState()
		this.resetWinchState()
		this.resetOtherItemsState()
		this.resetCertificationState()
		this.resetCompanyState()
	},
	methods: {
		...mapActions([
			'setCompany',
			'resetBasketState',
			'resetCompressedAirTankState',
			'resetCompressorState',
			'resetComunicatorState',
			'resetControlPanelState',
			'resetCylinderFrameState',
			'resetEmergencyCylinderState',
			'resetHyperbaricChamberState',
			'resetMaskHelmetState',
			'resetPorticoState',
			'resetSignetState',
			'resetUmbilicalState',
			'resetWinchState',
			'resetOtherItemsState',
			'resetCertificationState',
			'resetCompanyState'
		]),
		async save() {
			this.submitted = true
			this.loadingSubmit = true
			//this.$v.$touch()
			if (!this.$v.$error) {
				if (this.$route.params.id) {
					try {
						const id = this.$route.params.id
						const payload = await this.getData()
						const resp = await certification.update(id, payload)
						this.apiResponseNotification(200, resp)
					} catch (error) {
						this.loadingSubmit = false
					}
				} else {
					try {
						const payload = await this.getData()
						const resp = await certification.create(payload)
						this.apiResponseNotification(201, resp)
					} catch (error) {
						this.loadingSubmit = false
					}
				}
			}
			this.loadingSubmit = false
		},
		async getData() {
			const certification = this.certification
			certification.company = this.company.id
			const {
				compressors,
				masksHelmets,
				generalSystemItems,
				compressedsAirTanks,
				cylindersFrames,
				comunicators,
				umbilicals,
				emergencyCylinders,
				controlPanels,
				signets,
				winchs,
				hyperbaricsChambers,
				baskets,
				porticos
			} = this
			const depth = this.certificationSystem
				? this.certificationSystem.depth
				: certification.maxDepth
			const systemId = this.certificationSystem
				? this.certificationSystem.id
				: null
			const system = await this.sanatizeSystemItems({
				compressors,
				masksHelmets,
				generalSystemItems,
				compressedsAirTanks,
				cylindersFrames,
				comunicators,
				umbilicals,
				emergencyCylinders,
				controlPanels,
				signets,
				winchs,
				hyperbaricsChambers,
				baskets,
				porticos,
				depth,
				id: systemId
			})
			return { certification, system }
		},
		async sanatizeSystemItems(system, propsToExclude = ['flag', 'id']) {
			await Object.keys(system).forEach(key => {
				if (Array.isArray(system[key])) {
					const items = system[key]
					items.forEach(item => {
						Object.keys(item).forEach(k => {
							if (propsToExclude.includes(k)) delete item[k]
						})
					})
				}
			})
			return system
		}
	}
}
</script>

<style lang="scss" scoped>
#crate-scuba-component-content {
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	section {
		&.header {
			margin-bottom: 16px;
		}
	}
	.form-container {
		.content {
			.form-row {
				border-bottom: 1px solid #81818147;
				.form-group {
					padding-bottom: 16px;
					&.add-system-item {
						button {
							width: 120px;
							height: 36px;
							border: none;
							font-size: $font-size-input;
						}
					}
				}
			}
		}
	}
}
</style>
