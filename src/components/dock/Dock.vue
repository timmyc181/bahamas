<script>
	import FullScreenImage from '@/components/misc/FullScreenImage.vue'
	import LandingPageContent from '@/components/misc/LandingPageContent.vue'
	import imgUrl from '@/assets/dock-light.jpg'
	
	export default {
		name: "Dock",
		components: {LandingPageContent, FullScreenImage},
		computed: {
			imgUrl() {
				return imgUrl
			}
		}
	}
</script>

<template>
	<section id="dock-upper">
		<FullScreenImage :path="imgUrl">
			<LandingPageContent>
				<template #title>Dorris Cove Dock</template>
				<template #description>A cool dock</template>
				<template #action>Reserve</template>
			</LandingPageContent>
		</FullScreenImage>
	</section>
	
</template>

<style scoped>
	#dock-upper:deep(.overlay) {
		background: rgba(5, 0, 23, 0.4);
		
	}
</style>