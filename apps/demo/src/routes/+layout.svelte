<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

{@render children()}

<style>
	:global(html) {
		font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
		line-height: 1.5;
		font-weight: 400;
		color-scheme: light;
		color: #213547;
		background-color: #ffffff;
		font-synthesis: none;
		text-rendering: optimizeLegibility;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		-webkit-text-size-adjust: 100%;
	}

	:global(body) {
		margin: 0;
		padding: 0;
		display: flex;
		min-width: 320px;
		min-height: 100vh;
		font-size: 16px;
	}

	:global(#app) {
		width: 100%;
		margin: 0 auto;
		text-align: left;
	}

	:global(h1, h2, h3, h4, h5, h6) {
		font-weight: 600;
		line-height: 1.2;
		margin: 0;
	}

	:global(p) {
		margin: 0;
	}

	:global(a) {
		color: inherit;
		text-decoration: inherit;
	}

	:global(button) {
		font-family: inherit;
	}

	:global(*) {
		box-sizing: border-box;
	}

	:global(code) {
		font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
	}
</style>
