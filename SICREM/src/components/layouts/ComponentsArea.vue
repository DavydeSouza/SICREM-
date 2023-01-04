<template>
	<div id="components-area-component">
		<div id="components-content">
			<div id="main">
				<main>
					<transition name="fade" mode="out-in" appear>
						<router-view />
					</transition>
				</main>
			</div>
		</div>
	</div>
</template>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
