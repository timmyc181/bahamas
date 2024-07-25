<script>
	import LandingPageButton from '@/components/misc/LandingPageButton.vue'
	
	export default {
		name: "LandingPageContent",
		components: {LandingPageButton}
	}
</script>

<template>
	<div class="landing-page-content">
		<slot name="background"></slot>
		<div class="overlay"></div>
		<div class="title">
			<slot name="title"></slot>
			<div class="overlay-title-effect" v-if="$slots.overlayTitle">
				<slot name="overlayTitle"></slot>
			</div>
			<div v-if="$slots.overlayTitle" class="overlay-title-lightener">
				<slot name="overlayTitle"></slot>
			</div>
		</div>
		

<!--		<div class="description">-->
<!--			<slot name="description"></slot>-->
<!--		</div>-->
		<LandingPageButton>
			<slot name="action"></slot>
		</LandingPageButton>
		
	</div>
	<svg width="20" height="39" viewBox="0 0 20 39" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M10 0L10 37" stroke="white" stroke-width="3"/>
		<path d="M18.887 27.8869L10 36.7739L1.1131 27.8869" stroke="white" stroke-width="3"/>
	</svg>
	
<!--	<img src="@/assets/scroll-arrow.svg" alt="scroll-arrow"/>-->
</template>

<style scoped>
	.landing-page-content {
		display: flex;
		flex-direction: column;
		position: fixed;
		justify-content: center;
		align-items: center;
		bottom: 0;
		left: 0;
		right: 0;
		top: 0;
		flex: 1;
		//padding: 40px var(--side-padding) 80px;
	}
	
	.title {
		font: bold 96px Anybody;
		color: var(--turtle-nest-primary);
		margin-bottom: 20px;
		text-shadow: 0 0 20px rgba(0,0,0,0.3);
		position: relative;
		text-align: center;
	}
	
	.overlay-title-effect {
		color: white;
		mix-blend-mode: overlay;
	}
	
	.overlay-title-lightener {
		position: absolute;
		top: 0;
		left: 0;
		color: white;
		box-shadow: none;
		opacity: 0.2;
	}
	
	.description {
		font-size: 20px;
		color: white;
		opacity: 0.9;
		margin-bottom: 40px;
	}
	
	svg {
		position: fixed;
		bottom: 20px;
		margin: auto;
		left: 0;
		right: 0;
		transform: scale(0.8);
		opacity: 0.8;
	}
	
	:deep(.background-image), :deep(.overlay) {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;

	}
	
	:deep(.background-image) {
		z-index: -3;
		object-fit: cover;
	}
	
	:deep(.overlay) {
		z-index: -2;
	}
</style>