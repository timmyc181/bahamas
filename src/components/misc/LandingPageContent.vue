<script>
	import LandingPageButton from '@/components/misc/LandingPageButton.vue'
	
	export default {
		name: "LandingPageContent",
		components: {LandingPageButton}
	}
</script>

<template>
	<div class="landing-page-content">
		<div class="title">
			<slot name="title"></slot>
		</div>
<!--		<div class="description">-->
<!--			<slot name="description"></slot>-->
<!--		</div>-->
		<LandingPageButton>
			<slot name="action"></slot>
		</LandingPageButton>
	</div>
</template>

<style scoped>
	.landing-page-content {
		display: flex;
		flex-direction: column;
		position: absolute;
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
	}
	
	.description {
		font-size: 20px;
		color: white;
		opacity: 0.9;
		margin-bottom: 40px;
	}
</style>