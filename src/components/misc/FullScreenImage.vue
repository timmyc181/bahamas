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
	<Transition>
		<img v-show="loaded" @load="loaded = true" :src="path" :alt="path">
	</Transition>
	<div class="overlay"></div>
	<slot></slot>
</template>

<style scoped>
	img {
		width: 100vw;
		height: 100vh;
		z-index: -2;
		position: absolute;
		top: 0;
		object-fit: cover;
	}
	
	.v-enter-from {
		transform: scale(1.2);
		//opacity: 0;
	}
	
	.v-enter-active {
		transition: transform 1.5s ease, opacity 1s ease;
	}
	
	.overlay {
		width: 100vw;
		height: 100vh;
		z-index: -1;
		position: absolute;
		top: 0;
	}
	
</style>