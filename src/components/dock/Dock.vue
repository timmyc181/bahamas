<script>
	import About from '@/components/dock/About.vue'
	import RequestForm from '@/components/dock/RequestForm.vue'
	import ReserveButton from '@/components/dock/ReserveButton.vue'
	import FullScreenImage from '@/components/misc/FullScreenImage.vue'
	import LandingPageContent from '@/components/misc/LandingPageContent.vue'
	
	export default {
		name: "Dock",
		components: {RequestForm, ReserveButton, About, LandingPageContent, FullScreenImage},
		
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
				Dock Slip
			</template>
			<template #action>Reserve</template>
		</LandingPageContent>
	</section>
	<div class="scroll-content">
		<section class="info-section">
			<div class="about-section">
				<About></About>
			</div>
			<div class="about-section">
				<ReserveButton></ReserveButton>
				<img src="@/assets/dock-diagram.png" alt="dock diagram" class="dock-diagram">
			</div>
		</section>
		<section>
			<img src="@/assets/stars.jpg" alt="stars" class="stars">
		</section>
		<section class="request-form-container">
			<RequestForm></RequestForm>
		</section>
	</div>

</template>

<style scoped>
	.request-form-container {
		width: 100%;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	
	#dock-upper {
		width: 100%;
		height: 100%;
		z-index: 1;
	}
	
	#dock-upper, .scroll-content {
		--button-accent: var(--dock-secondary);
	}
	
	.scroll-content :global(button) {
		color: black;
	}
	
	.overlay {
		background: rgba(5, 0, 23, 0.4);
		
	}
	
	#dock-upper :deep(.title) {
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
	.scroll-content {
		z-index: 5;
		position: relative;
		padding-top: 60px;
		display: flex;
		flex-direction: column;
		
	}
	
	.info-section {
		display: flex;
		padding: 80px 160px;
		align-items: flex-start;
		gap: 300px
		
	}
	
	.about-section {
		display: flex;
		flex-direction: column;
		flex: 1;
	}
	
	.about-section:last-child {
		align-items: flex-end;
	}
	
	.dock-diagram {
		margin-top: 80px;
		width: 100%;
	}
	
	.stars {
		width: 100%;
		object-fit: cover;
		height: 800px;
	}
	
</style>