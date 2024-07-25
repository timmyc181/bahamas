<script>
	export default {
		name: "FullScreenImage",
		data() {
			return {
				loaded: false,
				
				
			}
		},
		props:  ['path'],
	}
</script>

<template>
	<div class="full-screen-image">
		<Transition>
			<img v-show="loaded" @load="loaded = true" :src="path" :alt="path">
		</Transition>
		<div class="overlay"></div>
<!--		<div class="loading-overlay"></div>-->
	</div>

	<slot></slot>
</template>

<style scoped>
	
	.full-screen-image {
		width: 100vw;
		height: 100vh;
		z-index: -2;
		position: fixed;
		top: 0;
	}
	
	img {
		object-fit: cover;
		z-index: -3;
	}
	
	.overlay {
		z-index: -2;
	}
	
	.loading-overlay {
		z-index: -1;
		background: white;
	}
	
	img, .overlay, .loading-overlay {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
	}
	
	/*.v-enter-from {*/
	/*	transform: scale(1.2);*/
	/*	//opacity: 0;*/
	/*}*/
	
	/*.v-enter-active {*/
	/*	transition: transform 1.5s ease, opacity 1s ease;*/
	/*}*/
	

	
</style>