<script lang="ts">
	import { Button } from '@repo/fidui';
</script>

<div class="demo-home">
	<header class="demo-header">
		<h1>FidUI Design System</h1>
		<p>A corporate design system built with vanilla CSS and Svelte 5</p>
	</header>

	<main class="demo-content">
		<section class="component-grid">
			<div class="component-card">
				<h2>Button Component</h2>
				<p>Primary, secondary, and tertiary button variants with comprehensive state management</p>
				<div class="button-preview">
					<Button variant="primary">Primary</Button>
					<Button variant="secondary">Secondary</Button>
					<Button variant="tertiary">Tertiary</Button>
				</div>
				<a href="/button" class="view-component">
					<Button variant="primary">View Component</Button>
				</a>
			</div>

			<div class="component-card upcoming">
				<h2>Input Component</h2>
				<p>Coming soon...</p>
				<div class="button-preview">
					<div class="placeholder">Input preview</div>
				</div>
			</div>

			<div class="component-card upcoming">
				<h2>Card Component</h2>
				<p>Coming soon...</p>
				<div class="button-preview">
					<div class="placeholder">Card preview</div>
				</div>
			</div>
		</section>
	</main>
</div>

<style>
	.demo-home {
		min-height: 100vh;
		background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
		padding: 2rem;
	}

	.demo-header {
		text-align: center;
		margin-bottom: 3rem;
	}

	.demo-header h1 {
		font-size: 3rem;
		font-weight: 700;
		color: #1e293b;
		margin-bottom: 1rem;
		background: linear-gradient(135deg, #1e40af, #6366f1);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.demo-header p {
		font-size: 1.2rem;
		color: #64748b;
		max-width: 600px;
		margin: 0 auto;
	}

	.demo-content {
		max-width: 1200px;
		margin: 0 auto;
	}

	.component-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
		gap: 2rem;
	}

	.component-card {
		background: white;
		border-radius: 12px;
		padding: 2rem;
		box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
		transition: all 0.3s ease;
		border: 1px solid #e2e8f0;
	}

	.component-card:hover {
		transform: translateY(-4px);
		box-shadow: 0 12px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
	}

	.component-card.upcoming {
		opacity: 0.6;
		background: #f8fafc;
	}

	.component-card h2 {
		font-size: 1.5rem;
		font-weight: 600;
		color: #1e293b;
		margin-bottom: 0.5rem;
	}

	.component-card p {
		color: #64748b;
		margin-bottom: 1.5rem;
		line-height: 1.6;
	}

	.button-preview {
		display: flex;
		gap: 1rem;
		margin-bottom: 1.5rem;
		padding: 1rem;
		background: #f8fafc;
		border-radius: 8px;
		border: 1px solid #e2e8f0;
		flex-wrap: wrap;
	}

	.placeholder {
		background: #e2e8f0;
		border-radius: 6px;
		padding: 12px 24px;
		color: #64748b;
		font-size: 0.9rem;
	}

	.view-component {
		text-decoration: none;
	}

	@media (max-width: 768px) {
		.demo-home {
			padding: 1rem;
		}

		.demo-header h1 {
			font-size: 2rem;
		}

		.component-grid {
			grid-template-columns: 1fr;
		}

		.button-preview {
			flex-direction: column;
		}
	}
</style>
