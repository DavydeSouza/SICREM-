<template>
	<div id="create-hyperbaric-chamber-component-content">
		<div class="form-container">
			<form novalidate="true" class="register" @submit.prevent>
				<form-box>
					<template slot="header">
						DESCRIÇÃO
					</template>

					<template slot="content">
						<div class="form-row">
							<div class="form-group col-md-12">
								<!-- <chamber-description /> -->
							</div>
						</div>
					</template>
				</form-box>

				<form-box>
					<template slot="header">
						DADOS DA CÂMARA
					</template>

					<template slot="content">
						<div class="form-row">
							<div class="form-group col-md-12">
								<!-- <chamber-data /> -->
							</div>
						</div>
					</template>
				</form-box>

				<form-box>
					<template slot="header">
						ACESSÓRIOS
					</template>

					<template slot="content">
						<div class="form-row">
							<div class="form-group col-md-12">
								<accessories />
							</div>
						</div>
					</template>
				</form-box>
			</form>
		</div>
	</div>
</template>

<script>
import validation from '@/mixins/validations/scuba/hyperbaricChamber.js'
import FormBox from '@/components/shared/FormBox'
// import ChamberDescription from './inc/ChamberDescription'
// import ChamberData from './inc/ChamberData'
import Accessories from './inc/accessories/Accessories'

export default {
	name: 'CreateHyperbaricChamber',
	components: { FormBox, /* ChamberDescription, ChamberData, */ Accessories },
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
#create-hyperbaric-chamber-component-content {
	width: 100%;
	height: 100%;
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
			}
		}
	}
}
</style>
