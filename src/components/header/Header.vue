<script>
	import HeaderOption from '@/components/header/HeaderOption.vue'
	
	export default {
		name: "Header",
		components: {HeaderOption},
		props: ['headerStyle']
	}
</script>

<template>
	<nav :class="headerStyle">
		<div class="leading">
			<RouterLink to="/">
				<img src="@/assets/storr-villas.svg" alt="logo" height="25"/>
			</RouterLink>
		</div>
		
		<div class="center">
			<HeaderOption to="/turtle-nest">Turtle Nest</HeaderOption>
			<HeaderOption to="/dock">Dock</HeaderOption>
			<HeaderOption to="/turtle-nest">Storrhaven</HeaderOption>
		</div>

		<div class="trailing">
			<HeaderOption to="/about">About</HeaderOption>
			<HeaderOption to="/contact">Contact</HeaderOption>
		</div>
	</nav>
</template>

<style scoped>
	nav {
		display: flex;
		width: 100%;
		padding: 30px var(--side-padding) 0;
	}
	
	nav *,
	nav::before {
		transition: all 500ms ease;
	}
	
	nav.light a {
		color: black
	}
	
	nav.light img {
		filter: invert(1);
	}
	
	nav.dark a,
	nav.dark img {
		color: white;
	}
	
	nav::before {
		content: '';
		height: 130px;
		width: 100%;
		position: absolute;
		background: linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0));
		opacity: 0;
		top: 0;
		left: 0;
		pointer-events: none;
	}
	
	nav.dark::before {
		opacity: 1;
	}
	
	nav * {
		z-index: 1;
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
		gap: 30px;
	}
	
</style>