<script>
	import FullScreenImage from '@/components/misc/FullScreenImage.vue'
	import LandingPageContent from '@/components/misc/LandingPageContent.vue'
	
	export default {
		name: "Dock",
		components: {LandingPageContent, FullScreenImage},
		
	}
</script>

<template>
	<section id="dock-upper">
		<LandingPageContent>
			<template #background>
				<img class="background-image" src="@/assets/dock-light-1.jpg" alt="dock"/>
				<div class="overlay"></div>
			</template>
			<template #title>
				Tahiti Beach
				<br>
				Dock
			</template>
			<template #action>Reserve</template>
		</LandingPageContent>
	</section>

</template>

<style scoped>
	#dock-upper {
		--button-accent: var(--dock-secondary);
	}
	
	.overlay {
		background: rgba(5, 0, 23, 0.4);
		
	}
	
	:deep(.title) {
		background-image: url('@/assets/dock-light-text-overlay.jpg');
		background-size: cover;
		width: 100vw;
		background-position-y: 45.86%;
		-webkit-background-clip: text;
		background-clip: text;
		color: white;
		-webkit-text-fill-color: transparent;
		text-align: center;
	}
	
	/*:deep(.title) {*/
	/*	color: white;*/
	/*	text-align: center;*/
	/*	mix-blend-mode: overlay;*/
	/*}*/

</style>