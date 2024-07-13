<script>
	import FullScreenImage from '@/components/misc/FullScreenImage.vue'
	import seaWhipImageUrl from '@/assets/sea-whip.jpeg'
	
	export default {
		name: "LandingPage",
		data() { return { seaWhipImageUrl: seaWhipImageUrl } },
		components: {FullScreenImage}
	}
</script>

<template>
	<FullScreenImage :path="seaWhipImageUrl">
	
	</FullScreenImage>
</template>

<style scoped>
</style>