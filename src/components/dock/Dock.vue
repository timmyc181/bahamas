<script>
	import FullScreenImage from '@/components/misc/FullScreenImage.vue'
	import LandingPageContent from '@/components/misc/LandingPageContent.vue'
	import imgUrl from '@/assets/stars.jpg'
	
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
	<FullScreenImage :path="imgUrl">
		<LandingPageContent>
			<template #title>Dorris Cove Dock</template>
			<template #description>A cool dock</template>
			<template #action>Reserve</template>
		</LandingPageContent>
	</FullScreenImage>
</template>

<style scoped>

</style>