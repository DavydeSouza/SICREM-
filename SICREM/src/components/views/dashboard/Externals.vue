<template>
	<transition name="fade">
		<div id="externals-component">
			<div class="presentation-box">
				<span class="label"
					><i class="fas fa-user" /> {{ $auth.user().name }},<br />
					Bem-vindo ao Sistema !!!</span
				>
				<p>perfil: {{ levels[$auth.user().level] }}</p>
				<h1>CBES</h1>
				<p>Clique nas opções ao lado</p>
			</div>
		</div>
	</transition>
</template>

<script>
export default {
	name: 'Externals',
	components: {},
	data() {
		return {
			levels: ['Administrador', 'CBES Usuário', 'Cliente']
		}
	}
}
</script>

<style lang="scss">
#externals-component {
	background-color: transparent;
	.presentation-box {
		background-color: $main-color;
		border-radius: $border-radius;
		padding: 15px;

		.label {
			font-size: 20px;
			color: #fff;
			text-align: center;
			font-weight: $font-weight-buttons;
		}
	}
}
</style>
