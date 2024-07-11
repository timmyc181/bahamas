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
		font-size: 16px;
		font-weight: 600;
	}
</style>