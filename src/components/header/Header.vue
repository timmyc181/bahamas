<script>
	import HeaderOption from '@/components/header/HeaderOption.vue'
	
	export default {
		name: "Header",
		components: {HeaderOption}
	}
</script>

<template>
	<nav>
		<RouterLink to="/">
			<HeaderOption>Home</HeaderOption>
		</RouterLink>
		<RouterLink to="/dock">
			<HeaderOption>Dock</HeaderOption>
		</RouterLink>
		<RouterLink to="/turtles-nest">
			<HeaderOption>Turtles nest</HeaderOption>
		</RouterLink>
	</nav>
</template>

<style scoped>
	nav {
		display: flex;
		gap: 40px;
	}
</style>