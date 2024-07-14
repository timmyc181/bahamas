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
		border: 5px var(--turtle-nest-secondary) solid;
		color: var(--turtle-nest-secondary);
		border-radius: 0;
		font: 600 20px Anybody;
		padding: 16px 30px;
		cursor: pointer;
		flex: 0;
		background: none;
		box-shadow: 0 0 10px 0 rgba(0,0,0,0.3);
		position: relative;
		z-index: 1;
	}
	
	button,
	button::after {
		transition: all 250ms ease;
	}
	
	button::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		height: 0;
		width: 100%;
		background: var(--turtle-nest-secondary);
		z-index: -1;
	}
	
	button:hover::after {
		height: 100%;
	}
	
	button:hover {
		color: black;
		
	}
</style>