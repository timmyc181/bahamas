<script>
	import FullScreenImage from '@/components/misc/FullScreenImage.vue'
	import LandingPageButton from '@/components/misc/LandingPageButton.vue'
	import LandingPageContent from '@/components/misc/LandingPageContent.vue'
	import imgUrl from '@/assets/octagon.jpg'
	
	export default {
		name: "TurtlesNest",
		data() { return { imgUrl: imgUrl } },
		components: {LandingPageContent, LandingPageButton, FullScreenImage},
	}
</script>

<template>
	<section id="turtle-nest">
		<FullScreenImage :path="imgUrl">
			<LandingPageContent>
				<template #title>Turtle Nest</template>
				<template #description>A cool house</template>
				<template #action>Book now</template>
			</LandingPageContent>
		</FullScreenImage>
	</section>
</template>

<style scoped>
	#turtle-nest {
		width: 100%;
		height: 100%;
	}
	
	#turtle-nest >>> .overlay {
		background: rgba(6, 25, 0, 0.3);
		
	}
</style>