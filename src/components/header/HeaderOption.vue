<template>
	<RouterLink :to="to">
		<slot></slot>
	</RouterLink>

</template>

<script>
	export default {
		name: "HeaderOption",
		props: ['to']
	}
</script>

<style scoped>
	a {
		color: white;
		text-decoration: none;
		font: 500 16px Lexend;
		
	}
</style>