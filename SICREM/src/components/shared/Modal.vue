<template>
	<transition name="modal">
		<div class="modal-mask">
			<div class="modal-wrapper">
				<div class="modal-container">
					<div class="modal-header">
						<slot v-if="showHeader" name="header" />
						<span v-if="showClose" class="close" @click="$emit('close')">
							<i class="fas fa-times" />
						</span>
					</div>
					<div class="modal-body">
						<slot name="body" />
					</div>
					<div v-if="showFooter" class="modal-footer">
						<slot name="footer" />
					</div>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
export default {
	name: 'Modal',
	props: {
		showClose: {
			type: Boolean,
			default: true
		},
		showHeader: {
			type: Boolean,
			default: true
		},
		showFooter: {
			type: Boolean,
			default: false
		}
	}
}
</script>

<style lang="scss" scoped>
.modal-mask {
	position: fixed;
	z-index: 9998;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	display: table;
	transition: opacity 0.3s ease;
}

.modal-wrapper {
	display: table-cell;
	vertical-align: middle;
}

.modal-header {
	display: flex;
}

.close {
	font-size: 25px;
	color: darkgrey;
	cursor: pointer;
}
.close:hover {
	color: black;
}

.modal-container {
	// width: 40%;
	max-width: 90%;
	max-height: 90vh;
	margin: 0px auto;
	padding: 20px 30px;
	overflow: auto;
	background-color: #fff;
	border-radius: 2px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
	transition: all 0.3s ease;

	@media all and (max-width: 900px) {
		width: 90%;
	}
}

.modal-body {
	margin-top: 20px;
	padding: 0;
}

.modal-footer {
	margin-top: 20px;
}

.modal-default-button {
	float: right;
}

.modal-enter {
	opacity: 0;
}

.modal-leave-active {
	opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
	-webkit-transform: scale(1.1);
	transform: scale(1.1);
}
</style>
