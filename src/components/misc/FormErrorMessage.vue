<script>
	export default {
		name: "FormErrorMessage",
		props: ['message']
	}
</script>

<template>
	<span>{{ message}}</span>
</template>

<style scoped>
	span {
		height: 20px;
		
		padding-top: 2px;
		font-size: 12px;
		color: rgba(0,0,0,0.6);
	}
</style>