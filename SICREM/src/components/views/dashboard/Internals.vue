<template>
	<transition name="fade">
		<div id="internals-component">
			<div class="presentation-box">
				<span class="label"
					><i class="fas fa-user-tie" /> {{ $auth.user().name }},<br />
					Bem-vindo ao Sistema !!!</span
				>
				<p>Perfil: {{ levels[$auth.user().level] }}</p>
				<h3>CBES</h3>
				<p>Clique nas opções ao lado</p>
			</div>
			<br />
			<div class="number-box">
				<div class="users">
					<span class="icon"
						><i class="fas fa-users" /> Quantidade de Usuários</span
					>
					<h1>...</h1>
					<p>Usuários no Sistema</p>
				</div>
				<br />
				<div class="ships">
					<span class="icon"
						><i class="fas fa-users" /> Quantidade de Embarcações</span
					>
					<h1>...</h1>
					<p>Embarcações no Sistema</p>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
export default {
	name: 'Internals',
	components: {},
	data() {
		return {
			levels: ['Administrador', 'CBES Usuário', 'Cliente']
		}
	}
}
</script>

<style lang="scss">
#internals-component {
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
	.number-box {
		.users {
			text-align: center;
			padding: 15px;
			background-color: $main-color;
			border-radius: $border-radius;

			.icon {
				font-size: 20px;
				color: #fff;
				text-align: center;
			}
			h1 {
				text-align: center;
			}
			p {
				text-align: center;
				font-size: 15px;
			}
			span {
				text-align: center;
			}
		}
		.ships {
			padding: 15px;
			background-color: $main-color;
			border-radius: $border-radius;
			text-align: center;
			.icon {
				font-size: 20px;
				color: #fff;
				text-align: center;
			}
			h1 {
				text-align: center;
			}
			p {
				text-align: center;
				font-size: 15px;
			}
		}
	}
}
</style>
