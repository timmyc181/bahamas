<script>
	import HeaderOption from '@/components/header/HeaderOption.vue'
	
	export default {
		name: "Header",
		components: {HeaderOption}
	}
</script>

<template>
	<nav>
		<HeaderOption to="/">Home</HeaderOption>
		<HeaderOption to="/dock">Dock</HeaderOption>
		<HeaderOption to="/turtles-nest">Turtles nest</HeaderOption>
	</nav>
</template>

<style scoped>
	nav {
		display: flex;
		gap: 40px;
		
		background: linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0));
		width: 100%;
		height: 100px;
		padding: 30px var(--side-padding);
	}
</style>