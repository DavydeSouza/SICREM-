<template>
	<div id="app">
		<router-view />
		<notifications
			group="response"
			position="bottom right"
			classes="notification-custom"
		/>
		<notifications
			group="fatal-error"
			position="top center"
			classes="notification-custom"
		/>
	</div>
</template>

<script>
export default {
	name: 'App'
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto:400,400i,700,700i&display=swap');
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed:400,400i,700,700i&display=swap');
@import url('../node_modules/@fortawesome/fontawesome-free/css/all.min.css');
@import './assets/scss/mixins/notification-custom_mixin';

body {
	background-color: #f3f7fc;
}
#app {
	font: 400 1em/1.625em Roboto Condensed, Roboto, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;

	* {
		box-sizing: border-box;
	}

	.max-width {
		max-width: 1360px;
		margin: 0 auto;
	}

	.hide {
		display: none;
	}

	.submit-form {
		display: flex;
		justify-content: center;
		margin-top: 30px;
	}
	@include notification-custom;
}
</style>

<style lang="scss">
.multiselect__placeholder {
	padding-top: 0px !important;
	position: relative !important;
	bottom: 3px !important;
	font-family: $font-family !important;
	font-weight: $font-weight-placeholder-bolder !important;
	// font-size: $font-size-mid-big !important;
	color: $font-color !important;
	// margin-left: 5px;
}

.multiselect__single {
	background: transparent !important;
	font-family: $font-family !important;
	font-weight: $font-weight-placeholder-bolder !important;
	// font-size: $font-size-mid-big !important;
	color: $font-color !important;
}

.multiselect__input {
	background: transparent !important;
	font-family: $font-family !important;
	font-weight: $font-weight-placeholder-bolder !important;
	// font-size: $font-size-mid-big !important;
	color: $font-color !important;
	&::placeholder {
		font-family: $font-family;
		font-weight: $font-weight-placeholder-bolder;
		// font-size: $font-size-mid-big;
		color: $font-color !important;
	}
}

.title {
	.multiselect__single {
		color: #fff !important;
	}
}
.multiselect__content-wrapper {
	background: #f3f7fc !important;
}

.multiselect--disabled {
	background: transparent !important;
}

.multiselect--disabled .multiselect__current,
.multiselect--disabled .multiselect__select {
	background: transparent !important;
}
</style>

// Global placeholder style for input and textarea. This customization doen't
work in all browsers.
<style lang="scss">
input {
	&:focus {
		background-color: #fff;
	}

	&::placeholder {
		font-weight: $font-weight-placeholder-bolder !important;
		font-size: $font-size-placeholder !important;
		color: $font-color !important;
	}

	&::-webkit-input-placeholder {
		font-weight: $font-weight-placeholder-bolder !important;
		font-size: $font-size-placeholder !important;
		color: $font-color !important;
	}

	&.vs__search::placeholder {
		font-weight: $font-weight-placeholder-bolder !important;
		font-size: $font-size-placeholder !important;
		color: $font-color !important;
	}
}

textarea {
	font-family: $font-family;
	color: $font-color;
	font-size: $font-size-input;
	outline: none;
	border: none;
	background: transparent;

	&::placeholder {
		color: $font-color;
		font-family: $font-family;
		font-size: $font-size-placeholder;
		font-weight: $font-weight-placeholder-bolder;
	}

	&::-webkit-input-placeholder {
		color: $font-color;
		font-family: $font-family;
		font-size: $font-size-placeholder;
		font-weight: $font-weight-placeholder-bolder;
	}
}
</style>

// Global table styles
<style lang="scss"></style>

// Global fade effect. This effect is used to make the transition between pages
<style>
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
	opacity: 0;
}
</style>

// Errors
<style>
.errors {
	margin-top: 10px;
	color: #f00;
}

.is-invalid,
.is_invalid {
	border: 1px solid tomato;
}
</style>

<style lang="scss">
.search-section {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 45px;
	margin-top: 20px;
	border-radius: 5px;
	background: #ffffff;
	padding: 0 16px;

	label {
		font-family: $font-family;
		color: $font-color;
		font-size: 1em;
	}

	input {
		border: none;
		outline: none;
		background-color: transparent;
		width: 100%;
		margin-left: 12px;
		font-family: $font-family;
		color: $font-color;
		font-size: $font-size-input;
	}
	input::placeholder {
		font-family: $font-family;
		font-weight: $font-weight-placeholder-bolder;
		color: $font-color;
		font-size: $font-size-placeholder;
	}
}
.select-section {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 45px;
	margin-top: 20px;
	border-radius: 5px;
	background: #ffffff;

	label {
		font-family: $font-family;
		color: $font-color;
		font-size: 1em;
	}

	.v-select {
		width: 100%;
		.vs__dropdown-toggle {
			border: none;
			outline: none;
			background: #ffffff;
			width: 100%;
		}
		.vs__selected-options {
			.vs__selected {
				font-family: $font-family;
				color: $font-color;
				font-size: 1em;
			}
		}
	}
	.vs__selected-options ::placeholder {
		font-family: $font-family;
		color: $font-color;
		font-size: $font-size-placeholder;
		font-weight: $font-weight-placeholder-bolder;
	}
}
.select-section-input {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 45px;
	border-radius: 5px;
	background: $inputs-color;

	label {
		font-family: $font-family;
		color: $font-color;
		font-size: 1em;
	}

	.v-select {
		width: 100%;
		.vs__dropdown-toggle {
			border: none;
			outline: none;
			background: $inputs-color;
			width: 100%;
		}
		.vs__selected-options {
			.vs__selected {
				font-family: $font-family;
				color: $font-color;
				font-size: 1em;
			}
		}
	}
	.vs__selected-options ::placeholder {
		font-family: $font-family;
		font-size: $font-size-placeholder;
		font-weight: $font-weight-placeholder-bolder;
		color: $font-color;
	}
}
</style>
