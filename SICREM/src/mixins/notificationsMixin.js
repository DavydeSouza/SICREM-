export default {
	data() {
		return {
			duration: 5000
		}
	},
	methods: {
		apiResponseNotification(expectedStatus, resp, infos = {}) {
			const status = resp.status
			const title = resp.data.erro || infos.title || null
			const text = resp.data.msg || resp.msg || infos.msg
			if (status == expectedStatus) {
				this.successNotification(title, text)
			} else {
				this.errorNotification(title, text)
			}
		},
		defaultNotification(title, text) {
			const conf_ = {
				group: 'response',
				type: 'info',
				title: title || 'Atenção',
				text: text || 'Nenhum texto de resposta foi informado.',
				duration: this.duration
			}
			this.$notify(conf_)
		},
		errorNotification(title, text) {
			const conf_ = {
				group: 'response',
				type: 'error',
				title: title || 'Não foi possível concluir a operação.',
				text: text || '',
				duration: this.duration
			}
			this.$notify(conf_)
		},
		successNotification(title, text) {
			const conf_ = {
				group: 'response',
				type: 'success',
				title: title || 'Operação realizada com sucesso!',
				text: text || '',
				duration: this.duration
			}
			this.$notify(conf_)
		}
	}
}
