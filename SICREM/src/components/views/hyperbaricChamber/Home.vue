<template>
	<div id="home-hyperbaric-chamber-component-content">
		<div class="form-container">
			<form novalidate="true" class="register" @submit.prevent="save">
				<create />
				<div class="form-row actions">
					<button
						type="submit"
						class="btn-custom primary"
						:disabled="false"
						@click.stop.prevent="save"
					>
						Cadastrar
					</button>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
// import { mapState, mapActions, mapGetters } from 'vuex'
// import { certification } from '@/services/certification'
import notification from '@/mixins/notificationsMixin.js'
import Create from './Create'

export default {
	name: 'HomeHyperbalicChamber',
	components: {
		Create
	},
	mixins: [notification],
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
		/* ...mapState({
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
		} */
	},
	destroyed() {},
	methods: {
		/* ...mapActions(['setCompany']),
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
		} */
	}
}
</script>

<style lang="scss" scoped>
#home-hyperbaric-chamber-component-content {
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
