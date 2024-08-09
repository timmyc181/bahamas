<script>
	export default {
		name: "ReserveButton"
	}
</script>

<template>
	<div id="reserve-button">
		<div class="price-info">
			<span class="price">$75</span>
			<span class="week"> week</span>
		</div>
		<button>Reserve</button>
	</div>
</template>

<style scoped>
	#reserve-button {
		display: flex;
		padding: 12px 16px;
		background: var(--card-background);
		align-items: center;
		flex: 0;
		
	}
	
	.price-info {
		display: flex;
		align-items: flex-end;
	}
	
	.price {
		font: bold 24px Anybody;
		
	}
	
	.week {
		font: normal 16px Lexend;
		color: rgba(0,0,0,0.6);
		margin-bottom: 2px;
		margin-left: 4px;
	}
	
	button {
		background: var(--button-accent);
		margin-left: 20px;
	}
</style>