<script>
	export default {
		name: "AboutPage",
		data() {
			return { loaded: false }
		}
	}
</script>

<template>
	<div class="main">
			<div class="left">
				<Transition>
					<img v-show="loaded" @load="loaded = true" src="@/assets/sea-whip.jpeg" alt="sea whip"/>
				</Transition>
			</div>
		<div class="right">
			This is about text
		</div>
	</div>
</template>

<style scoped>
	.main {
		margin: 0 var(--side-padding);
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
		font-size: 24px;
		color: rgba(0,0,0,0.7);
	}
	
	img {
		object-fit: contain;
		width: 100%;
		//min-width: 0;
	}
	
	.left {
		width: 50%;
	}
	
	.right {
		padding-left: 200px;
		flex: 1;
	}
	
	.v-enter-active {
		transition: all 750ms ease;
	}
	
	.v-enter-from {
		opacity: 0;
		transform: translateY(10px);
	}
</style>