<template>
	<div id="free-board-component-content">
		<div class="component-container">
			<form novalidate="true" @submit.prevent="save">
				<div class="form-row">
					<div
						class="form-group col-md-12"
						:class="{ 'invalid-field': $v.openseasize.$error }"
					>
						<label for="openseasize">Borda-Livre Mar Aberto</label>
						<div class="input-button-box">
							<div class="openseasize">
								<input
									v-model="openseasize"
									type="number"
									class="form-control"
									placeholder="Em milímetros"
									min="1"
									:disabled="!showOpeanSize"
									@blur="$v.openseasize.$touch()"
								/>
								<div v-if="$v.openseasize.$error" class="error-messages">
									<span v-if="!$v.openseasize.required"
										>O campo é obrigatório</span
									>
								</div>
							</div>
						</div>
					</div>

					<div
						class="form-group col-md-12"
						:class="{ 'invalid-field': $v.areaOne.$error }"
					>
						<label for="areaOne">Borda-Livre (Área 1)</label>
						<div class="input-button-box">
							<div id="areaOne">
								<input
									v-model="areaOne"
									type="number"
									class="form-control"
									placeholder="Em milímetros"
									min="1"
									:disabled="!showAreaOne"
								/>
								<div v-if="$v.areaOne.$error" class="error-messages">
									<span v-if="!$v.areaOne.required">O campo é obrigatório</span>
								</div>
							</div>
						</div>
					</div>

					<div
						class="form-group col-md-12"
						:class="{ 'invalid-field': $v.areaTwo.$error }"
					>
						<label for="areaTwo">Borda-Livre (Área 2)</label>
						<div class="input-button-box">
							<div id="areaTwo">
								<input
									v-model="areaTwo"
									type="number"
									class="form-control"
									placeholder="Em milímetros"
									min="1"
									:disabled="!showAreaTwo"
								/>
								<div v-if="$v.areaTwo.$error" class="error-messages">
									<span v-if="!$v.areaTwo.required">O campo é obrigatório</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</form>

			<!-- <modal
				v-if="showModal"
				id="calado-modal"
				:show-footer="true"
				@close=";[(showModal = false)]"
			>
				<div slot="header" class="header">
					<span>
						<h2>
							Borda Livre
						</h2>
					</span>
				</div>

				<div slot="body">
					<form>
						<div class="form-row">
							<div class="form-group col-md-6">
								<input
									id="input-free-edge"
									v-model="value"
									type="number"
									class="form-control"
									:placeholder="
										`Adicionar área livre ${validAreas.length +
											1} (em milímetros)`
									"
								/>
							</div>
							<div v-if="!editMode" class="buttons-container">
								<button
									type="button"
									class="add-item btn btn-link"
									@click.stop="add"
								>
									<i class="fas fa-plus" />
								</button>
							</div>
						</div>
					</form>

					<div id="added-items">
						<div class="items">
							<div
								v-for="(item, index) in freeBoardUnselecteds"
								:key="index"
								class="item"
							>
								<div>
									<span
										class="item-title"
										:title="`${item.value}`"
										@click.stop="edit(item.areaOrder)"
									>
										{{ `Área ${item.areaOrder}` }}
									</span>
									<span
										v-if="!editMode"
										class="remove"
										@click.stop="removeFreeBoardField(item.areaOrder)"
									>
										<i class="far fa-trash-alt" />
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div slot="footer">
					<div class="actions">
						<div v-if="!editMode" class="buttons-container">
							<button type="button" class="btn btn-primary" @click="save">
								Finalizar
							</button>
						</div>

						<div v-else class="buttons-container">
							<button
								type="button"
								class="btn btn-secondary"
								@click="cancelEdit"
							>
								Cancelar Edição
							</button>
							<button type="button" class="btn btn-primary" @click="finishEdit">
								Finalizar edição
							</button>
						</div>
					</div>
				</div>
			</modal> -->
		</div>
	</div>
</template>

<script>
// import Modal from '@/components/shared/Modal'
import findIObjectnArrayByArray from '@/helpers/findIObjectnArrayByArray.js'
import freeBoardValidation from '@/mixins/validations/ships/freeBoard.js'
import toValidate from '@/mixins/validations/toValidate.js'
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
	name: 'FreeBoard',
	components: {
		/* Modal */
	},
	mixins: [freeBoardValidation, toValidate],
	data() {
		return {
			updating: true,
			controller: -1,
			showModal: false,
			selectedItem: false,
			editMode: false,
			showOpeanSize: false,
			showAreaOne: false,
			showAreaTwo: false,
			showAreaOneAreas: ['Interior (Área 1)', 'Interior (Áreas 1 e 2)'],
			showAreaTwoAreas: ['Interior (Área 2)', 'Interior (Áreas 1 e 2)'],
			showOpeanSizeAreas: [
				'Longo Curso',
				'Cabotagem',
				'Apoio marítimo',
				'Unidade estacionária'
			]
		}
	},
	computed: {
		...mapState({
			areas: state => state.freeBoard.areas,
			freeBoard: state => state.freeBoard,
			area: state => state.freeBoard.area,
			navigationareas: state => state.gtf.gtf.navigationareas
		}),
		...mapGetters(['validAreas', 'freeBoardUnselecteds']),
		areaOne: {
			get() {
				return this.freeBoard.areaOne
			},
			set(value) {
				const payload = { field: 'areaOne', value }
				this.setFreeBoardAreaField(payload)
				this.validate('areaOne')
			}
		},
		areaTwo: {
			get() {
				return this.freeBoard.areaTwo
			},
			set(value) {
				const payload = { field: 'areaTwo', value }
				this.setFreeBoardAreaField(payload)
				this.validate('areaTwo')
			}
		},
		/* value: {
			get() {
				return this.area.value
			},
			set(value) {
				this.setFreeBoardValue(value)
			}
		}, */
		openseasize: {
			get() {
				return this.freeBoard.openseasize
			},
			set(value) {
				this.setOpenSeaSize(value)
				this.validate('openseasize')
			}
		}
	},
	watch: {
		navigationareas(_new) {
			this.showOpeanSize = this._showOpeanSize(_new)
			this.showAreaOne = this._showOAreaOne(_new)
			this.showAreaTwo = this._showOAreaTwo(_new)
		}
	},
	updated() {
		if (this.$route.params.id && this.updating) {
			this.updating = false
			this.validate()
		}
	},
	methods: {
		...mapActions([
			'addFreeBoardField',
			'removeFreeBoardField',
			'setFreeBoardArea',
			'getFreeBoardAreas',
			'resetFreeBoardFields',
			'editFreeBoard',
			'setFreeBoardValue',
			'setOpenSeaSize',
			'getOpenSeaSize',
			'setFreeBoardAreaField'
		]),

		validate(field) {
			field ? this.$v[field]?.$touch() : this.$v.$touch()
			this.$emit('free-board-validattion', this.$v.$invalid)
		},

		add() {
			this.addFreeBoardField()
		},

		save() {
			this.showModal = false
		},

		async edit(area) {
			this.controller = area
			const found = await this.getFreeBoardAreas(area)
			const idsEquals = this.id && this.id === found.id
			const valuesEquals = this.area.value === found.value
			const isSame = idsEquals || valuesEquals

			isSame ? this.resetFreeBoardFields() : this.setFreeBoardArea(found)

			this.editMode = !isSame
		},

		finishEdit() {
			this.editFreeBoard(this.controller)
			this.editMode = false
		},

		cancelEdit() {
			this.resetFreeBoardFields()
			this.editMode = false
		},
		_showOpeanSize(areas = []) {
			const names = areas.map(a => a.name)
			return findIObjectnArrayByArray(names, this.showOpeanSizeAreas)
		},
		_showOAreaOne(areas = []) {
			const names = areas.map(a => a.name)
			return findIObjectnArrayByArray(names, this.showAreaOneAreas)
		},
		_showOAreaTwo(areas = []) {
			const names = areas.map(a => a.name)
			return findIObjectnArrayByArray(names, this.showAreaTwoAreas)
		}
	}
}
</script>

<style lang="scss">
#free-board-component-content {
	.component-container {
		form {
			.form-row {
				.form-group {
					label {
						text-transform: uppercase;
					}
					.input-button-box {
						display: flex;
						width: 100%;
					}
					.buttons-container {
						display: inline-flex;
						align-items: center;
						button {
							background-color: $btn-secondary-color;
							width: 90px;
							height: $height-btn-default;
							&:hover {
								background-color: $btn-secondary-color-hover;
							}
						}
					}
				}
			}
		}
	}

	.items-group {
		width: 100%;
		display: inline-flex;
		margin-bottom: 10px;
		.buttons-container {
			margin-left: 10px;
			button {
				color: $font-color;
				&:focus {
					box-shadow: none;
				}
				&.remove-item {
					&:hover {
						background-color: $danger-color;
						color: $font-color-white;
					}
				}
				&.add-item {
					&:hover {
						background-color: $btn-secondary-color;
						color: $font-color-white;
					}
				}
			}
		}
	}

	#added-items {
		margin-top: 10px;
		display: flex;
		.items {
			display: flex;
			flex-wrap: wrap;
			.item {
				background-color: $main-color;
				color: $font-color-white;
				height: 38px;
				min-width: 95px;
				max-width: 150px;
				border-radius: $border-radius;
				padding: 8px;
				margin: 0px 7px 7px 0px;
				&:hover {
					background-color: $main-color-hover;
					color: $btn-secondary-color;
					font-weight: $font-weight-default-bolder;
				}
				div {
					height: 100%;
					display: flex;
					align-items: center;
					span {
						cursor: pointer;
						&.item-title {
							flex-grow: 1;
							user-select: none;
							text-transform: capitalize;
							white-space: nowrap;
							text-overflow: ellipsis;
							overflow: hidden;
						}
						&.remove {
							margin-left: 10px;
							&:hover {
								color: $danger-color;
							}
						}
					}
				}
			}
		}
	}
}
</style>
