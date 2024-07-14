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
		font-weight: 500;
		font-size: 16px;
	}
</style>