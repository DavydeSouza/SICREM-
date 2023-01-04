<template>
	<div id="accessories-hyperbaric-chamber-component-content">
		<div class="form-container">
			<form novalidate="true" class="register" @submit.prevent>
				<div class="form-row">
					<label class="sub-header">Profundímetro</label>
				</div>
				<div class="form-row">
					<div class="form-group col-md-12">
						<depth-gauge />
					</div>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
import validation from '@/mixins/validations/scuba/hyperbaricChamber.js'
import DepthGauge from './inc/depthGauge/DepthGauge'

export default {
	name: 'HyperbaricChamberAccessories',
	components: { DepthGauge },
	mixins: [validation],
	data() {
		return {
			clear: false,
			manuHasError: true
		}
	},
	computed: {},
	methods: {}
}
</script>

<style lang="scss" scoped>
#accessories-hyperbaric-chamber-component-content {
	width: 100%;
	height: 100%;
	border-top: 1px solid $btn-disabled-color;
	border-bottom: 1px solid $btn-disabled-color;
	margin: 15px 0px;
	.form-container {
		form {
			.form-row {
				margin: 0;
				&.title {
					width: 100%;
					display: flex;
					align-items: center;
					column-gap: 10px;
					span {
						font-size: $font-size-input;
						font-weight: $font-weight-default-bold;
						margin: 10px 0;
					}
				}
				&:not(.actions) {
					border-radius: $border-radius;
					justify-content: space-between;
					.form-group {
						padding: 0;
						&.col-md-6 {
							flex-basis: 49%;
						}
						&.btn-container {
							padding: 2px 0;
							display: flex;
							justify-content: flex-start;
							align-items: flex-end;
						}
						&.qtd-controls-container {
							display: flex;
							justify-content: space-between;
							align-items: flex-end;
							column-gap: 15px;
							.item {
								&.swith-content {
									height: 38px;
									display: flex;
									align-items: center;
									column-gap: 5px;
									.vue-js-switch {
										margin: 0;
									}
								}
							}
						}
					}
				}
				&.actions {
					width: 100%;
					column-gap: 15px;
				}
				.sub-header {
					margin: 15px 0px;
					font-size: $font-size-big;
					font-weight: $font-weight-default-bold;
				}
			}
		}
	}
}
</style>
