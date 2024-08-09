<script>
	import FullScreenImage from '@/components/misc/FullScreenImage.vue'
	import LandingPageButton from '@/components/misc/LandingPageButton.vue'
	import LandingPageContent from '@/components/misc/LandingPageContent.vue'
	import imgUrl from '@/assets/octagon.jpg'
	
	export default {
		name: "TurtlesNest",
		data() {
			return {imgUrl: imgUrl}
		},
		components: {LandingPageContent, LandingPageButton, FullScreenImage},
	}
</script>

<template>
	<section id="turtle-nest">
		<FullScreenImage :path="imgUrl">
			<LandingPageContent>
				<template #title>Turtle Nest</template>
				<template #action>Book now</template>
			</LandingPageContent>
		</FullScreenImage>
	
	</section>
	<div class="scroll-content">
		<section class="info-section">
			<div class="floor-plan">
				<img class="floor-plan-image" src="@/assets/octagon-living-room.jpg" alt="floor plan"/>
			</div>
			<div class="text">
				Turtle nest is a single bedroom house on the southern end of Elbow Cay, Bahamas.
			</div>
		</section>
		<section class="info-section">
			<div class="text">
				A simple, single bedroom layout with a spacious living area.
			</div>
			<div class="floor-plan">
				<img class="floor-plan-image" src="@/assets/floor-plan.jpg" alt="floor plan"/>
			</div>

		</section>
		<section class="info-section">
			<img class="screen-image">
		</section>
	</div>

</template>

<style scoped>
	#turtle-nest {
		width: 100%;
		height: 100%;
		z-index: 1;
		position: relative;
		--button-accent: var(--turtle-nest-secondary);
	}
	
	.scroll-content {
		z-index: 5;
		position: relative;
		padding-top: 100px
	}
	
	#turtle-nest:deep(.overlay) {
		background: rgba(6, 25, 0, 0.3);
		
	}
	
	.info-section {
		display: flex;
		padding: 80px 100px;
		align-items: center;
		gap: 100px
		
	}
	
	.info-section > * {
		flex: 1;
	}
	
	.floor-plan {
		z-index: 2;
	}
	
	.floor-plan-image {
		max-width: 100%;
		
	}
	
	.text {
		display: flex;
		font-size: 20px;
		line-height: 2rem;
		opacity: 0.7;
	}
	
	.screen-image {
		height: calc(100vh - 160px);
		background: center url(@/assets/octagon-master-bedroom.jpg);
		background-size: cover;
		
	}
	/*.text::before {*/
	
	/*}*/
	
	/*.text:first-child::after,*/
	/*.text:last-child::before {*/
	/*	width: 100px;*/
	/*	content: '';*/
	/*}*/
</style>