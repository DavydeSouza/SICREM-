<template>
	<div id="free-board-draft-component-content">
		<div class="component-container">
			<form novalidate="true" @submit.prevent="save">
				<div class="form-row">
					<div
						class="form-group col-md-12"
						:class="{ 'invalid-field': $v.openseasize.$error }"
					>
						<label for="typeValue">Calado Mar Aberto</label>
						<div class="input-button-box">
							<div class="typeValue freeBoardDraft-item-container">
								<input
									id="typeValue"
									v-model="openseasize"
									type="number"
									class="form-control"
									placeholder="Em milímetros"
									min="1"
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
						:class="{ 'invalid-field': $v.openseasize.$error }"
					>
						<label for="typeValue">Calado Borda-Livre (Área 1)</label>
						<div class="input-button-box">
							<div class="typeValue freeBoardDraft-item-container">
								<input
									id="typeValue"
									v-model="areaOne"
									type="number"
									class="form-control"
									placeholder="Em milímetros"
									min="1"
								/>
							</div>
						</div>
					</div>

					<div
						class="form-group col-md-12"
						:class="{ 'invalid-field': $v.openseasize.$error }"
					>
						<label for="typeValue">Calado Borda-Livre (Área 2)</label>
						<div class="input-button-box">
							<div class="typeValue freeBoardDraft-item-container">
								<input
									id="typeValue"
									v-model="areaTwo"
									type="number"
									class="form-control"
									placeholder="Em milímetros"
									min="1"
								/>
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
							Calado borda-livre
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
										`Adicionar área livre ${validAreasDraft.length +
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
								v-for="(item, index) in freeBoardDraftUnselecteds"
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
										@click.stop="removeFreeBoardDraftField(item.areaOrder)"
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

import freeBoardDraftValidation from '@/mixins/validations/ships/freeBoardDraft.js'
import toValidate from '@/mixins/validations/toValidate.js'
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
	name: 'FreeBoardDraft',
	components: {
		/* Modal */
	},
	mixins: [freeBoardDraftValidation, toValidate],
	data() {
		return {
			updating: true,
			controller: -1,
			showModal: false,
			selectedItem: false,
			editMode: false
		}
	},
	computed: {
		...mapState({
			areas: state => state.freeBoardDraft.areas,
			freeBoardDraft: state => state.freeBoardDraft,
			area: state => state.freeBoardDraft.area
		}),
		...mapGetters(['validAreasDraft', 'freeBoardDraftUnselecteds']),
		areaOne: {
			get() {
				return this.freeBoardDraft.areaOne
			},
			set(value) {
				const payload = { field: 'areaOne', value }
				this.setDraftFreeBoardAreaField(payload)
				this.validate('areaOne')
			}
		},
		areaTwo: {
			get() {
				return this.freeBoardDraft.areaTwo
			},
			set(value) {
				const payload = { field: 'areaTwo', value }
				this.setDraftFreeBoardAreaField(payload)
				this.validate('areaTwo')
			}
		},
		value: {
			get() {
				return this.area.value
			},
			set(value) {
				this.setFreeBoardDraftValue(value)
				this.validate('value')
			}
		},
		openseasize: {
			get() {
				return this.freeBoardDraft.openseasize
			},
			set(value) {
				this.setOpenSeaSizeDraft(value)
				this.validate('openseasize')
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
		...mapActions([
			'addFreeBoardDraftField',
			'removeFreeBoardDraftField',
			'setFreeBoardDraftArea',
			'getFreeBoardDraftAreas',
			'resetFreeBoardDraftFields',
			'editFreeBoardDraft',
			'setFreeBoardDraftValue',
			'setOpenSeaSizeDraft',
			'setDraftFreeBoardAreaField'
		]),
		validate(field) {
			field ? this.$v[field]?.$touch() : this.$v.$touch()
			this.$emit('free-board-draft-validattion', this.$v.$invalid)
		},

		async add() {
			this.addFreeBoardDraftField()
		},

		save() {
			this.showModal = false
		},

		async edit(area) {
			this.controller = area
			const found = await this.getFreeBoardDraftAreas(area)
			const idsEquals = this.id && this.id === found.id
			const valuesEquals = this.area.value === found.value
			const isSame = idsEquals || valuesEquals

			isSame
				? this.resetFreeBoardDraftFields()
				: this.setFreeBoardDraftArea(found)

			this.editMode = !isSame
		},

		finishEdit() {
			this.editFreeBoardDraft(this.controller)
			this.editMode = false
		},

		cancelEdit() {
			this.resetFreeBoardDraftFields()
			this.editMode = false
		}
	}
}
</script>

<style lang="scss">
#free-board-draft-component-content {
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
