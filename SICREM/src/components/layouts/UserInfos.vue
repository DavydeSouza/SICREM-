<template>
	<div id="user-infos-component">
		<div class="row">
			<div class="logo">
				<img src="@/assets/img/cbes-anchor.png" alt="logo" />
			</div>
			<div class="infos">
				<span class="user-name">
					{{ $auth.user().name }}
				</span>
				<span class="user-level">
					{{ levels[$auth.user().level] }}
				</span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'UserInfos',
	data() {
		return {
			levels: ['Administrador', 'CBES Usuário', 'Cliente']
		}
	}
}
</script>

<style lang="scss" scoped>
#user-infos-component {
	display: flex;
	justify-content: flex-start;
	.row {
		max-width: 180px;
		display: flex;
		column-gap: 10px;
	}
	.logo {
		background-color: white;
		width: 75px;
		padding: 5px;
		border: 2px solid #43474c;
		border-radius: $border-radius;
		display: flex;
		justify-content: center;
		img {
			height: 70px;
		}
	}
	.infos {
		display: flex;
		flex-direction: column;
		.user-name {
			color: $font-color-btn;
		}
		.user-level {
			font-size: $font-size-small;
		}
	}
}
</style>
