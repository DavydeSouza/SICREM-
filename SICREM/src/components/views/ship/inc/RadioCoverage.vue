<template>
	<div :id="`rtc-component-content`">
		<div class="form-container">
			<form novalidate="true" @submit.prevent="save">
				<div class="form-row">
					<div class="form-group swith-content">
						<toggle-button
							:sync="true"
							:width="70"
							:height="30"
							:color="`#01253f`"
							:value="!!getCheckedRtcs.length || rtc"
							:labels="{ checked: 'SIM', unchecked: 'NÃO' }"
							@change="updateRtcs()"
						/>
					</div>

					<div
						v-if="!!getCheckedRtcs.length || rtc"
						class="form-group col-md-8 checks-container"
					>
						<span
							v-for="(item, index) in radioCoveragesList"
							:key="index"
							class="check"
						>
							<input
								:id="`rtc-${index}`"
								type="checkbox"
								:value="item.name"
								:checked="
									getCheckedRtcs.find(getRtc => getRtc.name === item.name)
								"
								@change=";[setRtcs(item), validate()]"
							/>
							<label :for="`rtc-${index}`">{{ item.name }}</label>
						</span>
					</div>
				</div>
			</form>
			<div v-if="invalid" class="error-messages">
				<span>Deve selecionar ao menos um</span>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import { ToggleButton } from 'vue-js-toggle-button'

export default {
	name: 'RadioCoverage',
	components: { ToggleButton },
	mixins: [],
	data() {
		return {
			rtc: false,
			invalid: false,
			render: 0
		}
	},
	computed: {
		...mapGetters(['getCheckedRtcs']),
		...mapState({
			radioCoveragesList: state => state.radioCoverages.radioCoveragesList
		})
	},
	mounted() {
		this.$emit('radio-coverage-validattion', this.invalid)
	},
	methods: {
		...mapActions(['setRtcs', 'resetRtcs']),
		validate() {
			this.invalid = this.rtc ? !this.getCheckedRtcs.length : false
			this.$emit('radio-coverage-validattion', this.invalid)
		},
		updateRtcs() {
			this.rtc = !this.rtc
			if (!this.rtc) this.resetRtcs()
			this.validate()
		}
	}
}
</script>

<style lang="scss" scoped>
#rtc-component-content {
	margin: 15px 0px;
	.form-container {
		form {
			.form-row {
				height: auto;
				flex-wrap: nowrap;
				column-gap: 10px;
				.form-group {
					background-color: transparent;
					margin: 0;
					&.swith-content {
						width: fit-content;
						justify-content: flex-start;
						align-items: baseline;
						flex-basis: unset;
						label {
							margin: 0;
						}
					}
					&.button {
						span {
							padding-left: 6px;
							padding-right: 6px;
						}
					}
					&.checks-container {
						width: fit-content;
						display: flex;
						flex-wrap: wrap;
						flex-basis: unset;
						gap: 25px;
						.check {
							padding-top: 3px;
							display: flex;
							flex-wrap: nowrap;
							align-items: center;
							input[type='checkbox'] {
								transform: scale(1.5);
								margin-right: 8px;
							}
							label {
								margin: 0;
							}
						}
					}
				}
			}
		}
		.error-messages {
			height: 20px;
			margin-top: 5px;
			font-size: 12px;
			color: $danger-color;
		}
	}
}
</style>
