<script lang="ts">
	import { Button } from '@repo/fidui';
</script>

<div class="demo-container">
	<h1>Fidui Demo</h1>
	<p>This demonstrates using the fidui component library with its CSS variables.</p>

	<div class="button-demo">
		<Button>Click me</Button>
	</div>

	<div class="color-demo">
		<div class="color-card blue">Blue</div>
		<div class="color-card green">Green</div>
		<div class="color-card purple">Purple</div>
		<div class="color-card gold">Gold</div>
	</div>
</div>

<style>
	.demo-container {
		max-width: 800px;
		margin: 0 auto;
		padding: 2rem;
		font-family: system-ui, sans-serif;
	}

	h1 {
		color: var(--neutral-900);
		margin-bottom: 1rem;
	}

	p {
		color: var(--neutral-600);
		margin-bottom: 2rem;
	}

	.button-demo {
		margin-bottom: 2rem;
	}

	.color-demo {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
		gap: 1rem;
	}

	.color-card {
		padding: 1rem;
		border-radius: 8px;
		text-align: center;
		font-weight: 500;
		color: white;
	}

	.color-card.blue {
		background-color: var(--blue-500);
	}

	.color-card.green {
		background-color: var(--green-500);
	}

	.color-card.purple {
		background-color: var(--purple-500);
	}

	.color-card.gold {
		background-color: var(--gold-500);
	}
</style>
