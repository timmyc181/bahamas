<script>
	import HeaderOption from '@/components/header/HeaderOption.vue'
	
	export default {
		name: "Header",
		components: {HeaderOption}
	}
</script>

<template>
	<nav>
		<div class="leading">
			<RouterLink to="/">
				<img src="@/assets/logo.svg" alt="logo" height="20"/>
			</RouterLink>
		</div>
		
		<div class="center">
			<HeaderOption to="/turtles-nest">Turtle Nest</HeaderOption>
			<HeaderOption to="/dock">Dock</HeaderOption>
			<HeaderOption to="/turtles-nest">Storrhaven</HeaderOption>
		</div>

		<div class="trailing">
			<HeaderOption to="/contact">Contact</HeaderOption>
		</div>
	</nav>
</template>

<style scoped>
	nav {
		display: flex;
		gap: 40px;
		
		width: 100%;
		padding: 30px var(--side-padding);
		position: relative;
	}
	
	nav * {
		z-index: 1;
	}
	
	nav::before {
		content: '';
		height: 130px;
		background: linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0));
		width: 100%;
		position: absolute;
		top: 0;
		left: 0;
	}
	
	.leading, .trailing {
		width: 180px;
	}
	
	.center {
		flex: 1;
		display: flex;
		justify-content: center;
		gap: 40px;
	}
	
	.trailing {
		display: flex;
		justify-content: flex-end;
	}
	
</style>