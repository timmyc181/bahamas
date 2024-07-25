<script>
	import Header from '@/components/header/Header.vue'
	
	export default {
		name: "App",
		components: {Header},
		computed: {
			headerStyle() {
				switch (this.$route.path) {
					case '/':
						return 'light'
					case '/turtle-nest':
						return 'dark'
					case '/dock':
						return 'dark'
					case '/contact':
						return 'light'
					default:
						return 'light'
				}
			}
		}
	}
</script>

<template>
	<header>
		<Header :headerStyle="headerStyle"/>
	</header>
	
	<main>
		<RouterView/>
	</main>
</template>

<style scoped>
	header {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 2;
	}
	
	main {
		width: 100%;
		height: 100%;
	}
	
	.logo {
		display: block;
		margin: 0 auto 2rem;
	}
	
	@media (min-width: 1024px) {
		header {
			display: flex;
			place-items: center;
		}
		
		.logo {
			margin: 0 2rem 0 0;
		}
		
		header .wrapper {
			display: flex;
			place-items: flex-start;
			flex-wrap: wrap;
		}
	}
</style>
