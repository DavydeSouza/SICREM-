<template>
	<div id="login-component-content" class="component-container">
		<div class="module-content">
			<div class="form-container">
				<div id="container-logo">
					<img src="@/assets/img/logo-cbes-matriz.png" alt="logo" />
				</div>
				<form novalidate="true" @submit.prevent="save">
					<div class="form-group">
						<label for="email">Login</label>
						<input
							id="email"
							v-model="form.email"
							type="text"
							class="form-control"
							placeholder="Email"
						/>
					</div>

					<div class="form-group">
						<label for="password">Senha</label>
						<input
							id="password"
							v-model="form.password"
							type="password"
							class="form-control"
							placeholder="Senha"
						/>
					</div>

					<div class="invalid-access">
						<span v-if="invalidLoginStatus">{{ invalidLoginMsg }}</span>
					</div>

					<div class="buttons-container">
						<button
							type="submit"
							class="btn btn-custom primary"
							@click.stop.prevent="login()"
						>
							Entrar
						</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
import notification from '@/mixins/notificationsMixin.js'
export default {
	name: 'Login',
	title: 'Login',
	mixins: [notification],
	data() {
		return {
			seePassword: false,
			invalidLoginStatus: false,
			invalidLoginMsg: `Login ou senha inválidos.
				Solicite uma nova senha para o adiminstrador do sistema.
			`,
			form: {
				email: '',
				password: ''
			}
		}
	},
	methods: {
		levelSorting(level) {
			if (level == 0 || level == 1) {
				this.$router.push({ name: 'internals' })
			} else if (level == 2) {
				this.$router.push({ name: 'externals' })
			}
		},
		login() {
			this.$auth.options.loginData = {
				url: '/users/login',
				method: 'POST',
				fetchUser: false
			}
			this.$auth
				.login({
					data: this.form
				})
				.then(async resp => {
					if (resp.status == 401) {
						this.invalidLoginStatus = true
					} else if (resp.status == 200) {
						await this.$auth.fetch()
						this.levelSorting(this.$auth.user().level)
					}
				})
				.catch(err => {
					console.log(err)
				})
		}
	}
}
</script>

<style lang="scss" scoped>
#login-component-content {
	display: flex;
	justify-content: center;
	.module-content {
		margin-top: 25px;
		.form-container {
			width: 500px;
			display: flex;
			flex-direction: column;
			justify-content: center;
			height: inherit;
			grid-area: center;
			padding: 5px;

			#container-logo {
				display: flex;
				justify-content: center;
				margin-bottom: 10px;
				img {
					width: 210px;
					height: 95px;
				}
			}

			form {
				background-color: $main-color;
				padding: 20px;
				border-radius: $border-radius;
				color: $inputs-color;
				.invalid-access {
					text-align: center;
					color: $danger-color;
				}
				.buttons-container {
					display: flex;
					justify-content: center;
					button {
						margin-top: 10px;
						padding: 10px 50px;
						border-radius: $border-radius;
						background-color: $btn-primary-color;
						text-align: center;
						font-weight: $font-weight-buttons;
						font-size: $font-size-button;
						text-transform: uppercase;
						color: $inputs-color;
					}
				}
			}
		}
	}
}
</style>
