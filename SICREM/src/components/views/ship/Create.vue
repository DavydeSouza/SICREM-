<template>
	<div id="crate-ship-component-content">
		<div class="form-container">
			<form novalidate="true" class="register" @submit.prevent="save">
				<form-box>
					<template slot="header">
						Dados da embarcação
					</template>
					<template slot="content">
						<ship
							:validating="validateChilds"
							@ship-validattion="data => (invalids.shipInvalid = data)"
							@ship-haspropulsion="data => (haspropulsion = data)"
						/>
					</template>
				</form-box>

				<form-box v-if="haspropulsion || propulsionsAndPowers.length">
					<template slot="header">
						Propulsão e energia
					</template>
					<template slot="content">
						<prop-and-power />
					</template>
				</form-box>

				<form-box>
					<template slot="header">
						Caracteristicas operacionais da embarcação
					</template>
					<template slot="content">
						<gtf
							:validating="validateChilds"
							@gtf-validattion="data => (invalids.gtfInvalid = data)"
						/>
					</template>
				</form-box>

				<form-box>
					<template slot="header">
						Borda-livre
					</template>
					<template slot="content">
						<free-board
							:validating="validateChilds"
							@free-board-validattion="
								data => (invalids.freeBoardInvalid = data)
							"
						/>
					</template>
				</form-box>

				<form-box>
					<template slot="header">
						Calado Borda-livre
					</template>
					<template slot="content">
						<free-board-draft
							:validating="validateChilds"
							@free-board-draft-validattion="
								data => (invalids.freeBoardDraftdInvalid = data)
							"
						/>
					</template>
				</form-box>

				<form-box>
					<template slot="header">
						Armador, Estaleiro e Nº do casco
					</template>
					<template slot="content">
						<div class="form-row">
							<div
								id="ship-owner"
								class="form-group col-md-12 component-content"
							>
								<ship-owner
									v-if="!$route.params.id"
									:validating="validateChilds"
									@select-ship-owner="data => setShipowner(data)"
									@ship-owner-validation="
										data => (invalids.shipOwnerInvalid = data)
									"
								/>
							</div>
						</div>

						<div class="form-row">
							<div class="form-group col-md-12 select-container">
								<ship-yard
									:validating="validateChilds"
									@ship-yard-validattion="
										data => (invalids.shipYardInvalid = data)
									"
								/>
							</div>
						</div>

						<hull-code-field
							:validating="validateChilds"
							@hull-code-validattion="data => (invalids.hullCodeInvalid = data)"
						/>
					</template>
				</form-box>

				<form-box>
					<template slot="header">
						Caracteristicas principais
					</template>
					<template slot="content">
						<mtf
							:validating="validateChilds"
							@mtf-validattion="data => (invalids.mtfInvalid = data)"
						/>
					</template>
				</form-box>

				<form-box>
					<template slot="header">
						Passageiros
					</template>
					<template slot="content">
						<souls
							:validating="validateChilds"
							@souls-validattion="data => (invalids.soulsInvalid = data)"
						/>
					</template>
				</form-box>

				<form-box>
					<template slot="header">
						Área Marítima de cobertura radiotelefônica
					</template>
					<template slot="content">
						<radio-coverage
							@radio-coverage-validattion="data => (invalids.rtcInvalid = data)"
						/>
					</template>
				</form-box>

				<form-box>
					<template slot="header">
						Informações complementares
					</template>
					<template slot="content">
						<other-infos
							:validating="validateChilds"
							@other-infos-validattion="
								data => (invalids.otherInfosInvalid = data)
							"
						/>
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
import { ships } from '@/services/ships'
import editShipMixin from '@/mixins/editShipMixin.js'
import notification from '@/mixins/notificationsMixin.js'
import sanatizeObject from '@/helpers/sanatizeObject'
import removeFlagFromList from '@/helpers/removeFlagFromList'

import FormBox from '../../shared/FormBox'
import Ship from './inc/Ship'
import Gtf from './inc/GTF'
import Mtf from './inc/MTF'
import FreeBoard from './inc/FreeBoard'
import FreeBoardDraft from './inc/FreeBoardDraft.vue'
import Souls from './inc/Souls'
import RadioCoverage from './inc/RadioCoverage'
import ShipOwner from './inc/ShipOwner'
import ShipYard from './inc/ShipYard'
import PropAndPower from './inc/propulsion/PropAndPower.vue'
import OtherInfos from './inc/OtherInfos.vue'
import HullCodeField from './inc/HullCodeField'

export default {
	name: 'ShipCreate',
	components: {
		FormBox,
		Ship,
		Gtf,
		Mtf,
		FreeBoard,
		FreeBoardDraft,
		Souls,
		RadioCoverage,
		ShipOwner,
		ShipYard,
		PropAndPower,
		OtherInfos,
		HullCodeField
	},
	mixins: [editShipMixin, notification],
	data() {
		return {
			invalids: {
				gtfInvalid: true,
				freeBoardInvalid: true,
				freeBoardDraftdInvalid: true,
				mtfInvalid: true,
				soulsInvalid: true,
				rtcInvalid: true,
				otherInfosInvalid: true,
				shipOwnerInvalid: true,
				shipYardInvalid: true,
				shipInvalid: true,
				hullCodeInvalid: true
			},
			validateChilds: false,
			haspropulsion: false,
			submitted: true,
			loadingSubmit: true
		}
	},
	computed: {
		...mapState({
			ship: state => state.ships.ship,
			gtf: state => state.gtf.gtf,
			freeBoard: state => state.freeBoard,
			freeBoardDraft: state => state.freeBoardDraft,
			mtf: state => state.mtf.mtf,
			shipyard: state => state.shipyards.shipyard,
			shipowner: state => state.shipowners.shipowner,
			address: state => state.address.address,
			otherInfos: state => state.otherInfos.otherInfos,
			checkedRtcs: state => state.radioCoverages.checkedRtcs,
			souls: state => state.souls.souls
		}),
		...mapGetters(['propulsionsAndPowers']),
		enableSave: {
			get() {
				return !Object.values(this.invalids).find(v => v)
			}
		}
	},
	async created() {
		const id = this.$route.params.id
		if (id) {
			const resp = await this.getShipById(id)
			if (resp) this.loadEditInfos(resp)
		}
	},
	methods: {
		back() {
			this.$router.back({ redirect: '/' })
		},
		...mapActions([
			'getShipById',
			'getGtfEditedFormat',
			'setShipField',
			'setShipowner'
		]),
		async save() {
			this.submitted = true
			this.loadingSubmit = true
			this.invalids.shipOwnerInvalid = this.validsOnEdit(
				this.invalids.shipOwnerInvalid
			)
			this.invalids.shipYardInvalid = this.validsOnEdit(
				this.invalids.shipYardInvalid
			)
			this.invalids.freeBoardDraftdInvalid = this.validsOnEdit(
				this.invalids.freeBoardDraftdInvalid
			)
			if (this.enableSave) {
				const ship = sanatizeObject(this.ship)

				this.gtf.propulsionAndPower = removeFlagFromList(
					this.propulsionsAndPowers
				)
				this.gtf.rtc = this.checkedRtcs
				const gtf = sanatizeObject(this.gtf)

				const handleFreeBoard = freeBoard => {
					const { areaOne, areaTwo, isdraft, openseasize } = freeBoard
					return { areaOne, areaTwo, isdraft, openseasize }
				}
				const freeBoards = {
					freeBoard: sanatizeObject(handleFreeBoard(this.freeBoard)),
					freeBoardDraft: sanatizeObject(handleFreeBoard(this.freeBoardDraft))
				}
				const mtf = sanatizeObject(this.mtf)
				mtf.freeBoards = freeBoards
				mtf.souls = this.souls

				ship.otherInfos = sanatizeObject(this.otherInfos)
				ship.clientid = this.shipowner.clientid

				const shipyard = sanatizeObject(this.shipyard)
				gtf.shipyard = shipyard

				if (this.$route.params.id) {
					try {
						ship.shipowner = this.shipownerId
						const gtf = await this.getGtfEditedFormat()
						const resp = await ships.update(ship.id, {
							ship,
							gtf,
							mtf
						})

						if (resp.status === 200) {
							this.loadingSubmit = false
							this.$router.push({ name: 'shipHome' })
							this.apiResponseNotification(200, resp)
						}
					} catch (error) {
						console.log(error)
						this.loadingSubmit = false
					}
				} else {
					try {
						ship.shipowner = sanatizeObject(this.shipowner)
						const resp = await ships.create({ ship, gtf, mtf })
						this.$router.push({ name: 'shipHome' })
						this.apiResponseNotification(201, resp)
						this.loadingSubmit = false
					} catch (error) {
						console.log(error)
						this.loadingSubmit = false
					}
				}
			} else {
				this.validateChilds = !this.validateChilds
				document.getElementById('main').scrollTo(0, 0)
			}
		},
		validsOnEdit(value) {
			return this.$route.params.id ? false : value
		}
	}
}
</script>
