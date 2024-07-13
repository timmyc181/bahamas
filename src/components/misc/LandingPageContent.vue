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
		<div class="description">
			<slot name="description"></slot>
		</div>
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
		align-items: flex-start;
		bottom: 0;
		left: 0;
		right: 0;
		padding: 40px var(--side-padding) 80px;
		background: linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.6));
	}
	
	.title {
		font-size: 36px;
		font-weight: bold;
		color: white;
		margin-bottom: 10px;
	}
	
	.description {
		font-size: 20px;
		color: white;
		opacity: 0.9;
		margin-bottom: 40px;
	}
</style>