<script>
	export default {
		name: "LandingPageButton",
		emits: ['click']
	}
</script>

<template>
	<button @click="$emit('click')">
		<slot></slot>
	</button>
</template>

<style scoped>
	button {
		border: none;
		border-radius: 0;
		font-weight: bold;
		padding: 25px 50px;
		font-size: 16px;
		cursor: pointer;
		flex: 0;
	}
</style>