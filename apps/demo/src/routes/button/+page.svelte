<script lang="ts">
	import { Button } from '@repo/fidui';

	let clickCount = $state(0);
	let isLoading = $state(false);

	function handleClick() {
		clickCount++;
	}

	function handleAsyncAction() {
		isLoading = true;
		setTimeout(() => {
			isLoading = false;
		}, 2000);
	}

	function copyCode(code: string) {
		navigator.clipboard.writeText(code);
	}
</script>

<svelte:head>
	<title>Button Component - FidUI Design System</title>
</svelte:head>

<div class="button-demo">
	<header class="demo-header">
		<nav class="breadcrumb">
			<a href="/">Home</a>
			<span>/</span>
			<span>Button</span>
		</nav>
		<h1>Button Component</h1>
		<p>
			A versatile button component supporting primary, secondary, and tertiary variants with
			comprehensive state management and accessibility features.
		</p>
	</header>

	<main class="demo-content">
		<!-- Variants Section -->
		<section class="demo-section">
			<h2>Button Variants</h2>
			<p>Three distinct variants to establish clear visual hierarchy in your interface.</p>

			<div class="variant-grid">
				<div class="variant-demo">
					<h3>Primary</h3>
					<p>Use for primary actions and call-to-action buttons</p>
					<div class="button-showcase">
						<Button variant="primary">Primary Button</Button>
					</div>
					<button
						class="code-button"
						onclick={() => copyCode('<Button variant="primary">Primary Button</Button>')}
					>
						Copy Code
					</button>
				</div>

				<div class="variant-demo">
					<h3>Secondary</h3>
					<p>Use for secondary actions and complementary buttons</p>
					<div class="button-showcase">
						<Button variant="secondary">Secondary Button</Button>
					</div>
					<button
						class="code-button"
						onclick={() => copyCode('<Button variant="secondary">Secondary Button</Button>')}
					>
						Copy Code
					</button>
				</div>

				<div class="variant-demo">
					<h3>Tertiary</h3>
					<p>Use for navigation and less prominent actions</p>
					<div class="button-showcase">
						<Button variant="tertiary">Tertiary Button</Button>
					</div>
					<button
						class="code-button"
						onclick={() => copyCode('<Button variant="tertiary">Tertiary Button</Button>')}
					>
						Copy Code
					</button>
				</div>
			</div>
		</section>

		<!-- States Section -->
		<section class="demo-section">
			<h2>Button States</h2>
			<p>All variants support hover, focus, active, and disabled states automatically.</p>

			<div class="states-grid">
				<div class="state-demo">
					<h4>Default State</h4>
					<div class="button-group">
						<Button variant="primary">Primary</Button>
						<Button variant="secondary">Secondary</Button>
						<Button variant="tertiary">Tertiary</Button>
					</div>
				</div>

				<div class="state-demo">
					<h4>Disabled State</h4>
					<div class="button-group">
						<Button variant="primary" disabled>Primary</Button>
						<Button variant="secondary" disabled>Secondary</Button>
						<Button variant="tertiary" disabled>Tertiary</Button>
					</div>
				</div>
			</div>

			<div class="state-instructions">
				<h4>Interactive States</h4>
				<p>Hover over, focus (using Tab), and click the buttons above to see the interactive states:</p>
				<ul>
					<li><strong>Hover:</strong> Subtle elevation and color changes</li>
					<li><strong>Focus:</strong> Visible outline for keyboard navigation</li>
					<li><strong>Active:</strong> Pressed state with reduced elevation</li>
				</ul>
			</div>
		</section>

		<!-- Usage Examples -->
		<section class="demo-section">
			<h2>Usage Examples</h2>
			<p>Real-world examples of how to use the button component.</p>

			<div class="usage-examples">
				<div class="example">
					<h4>Click Counter</h4>
					<div class="example-demo">
						<Button variant="primary" onclick={handleClick}>
							Clicked {clickCount} times
						</Button>
						<Button variant="secondary" onclick={() => (clickCount = 0)}>Reset</Button>
					</div>
					<pre class="code-block"><code>{`<script>
  let clickCount = $state(0);
  
  function handleClick() {
    clickCount++;
  }
</script>

<Button variant="primary" onclick={handleClick}>
  Clicked {clickCount} times
</Button>
<Button variant="secondary" onclick={() => clickCount = 0}>
  Reset
</Button>`}</code></pre>
				</div>

				<div class="example">
					<h4>Loading State</h4>
					<div class="example-demo">
						<Button variant="primary" disabled={isLoading} onclick={handleAsyncAction}>
							{isLoading ? 'Loading...' : 'Start Process'}
						</Button>
					</div>
					<pre class="code-block"><code>{`<script>
  let isLoading = $state(false);
  
  function handleAsyncAction() {
    isLoading = true;
    setTimeout(() => {
      isLoading = false;
    }, 2000);
  }
</script>

<Button 
  variant="primary" 
  disabled={isLoading} 
  onclick={handleAsyncAction}
>
  {isLoading ? 'Loading...' : 'Start Process'}
</Button>`}</code></pre>
				</div>

				<div class="example">
					<h4>Form Actions</h4>
					<div class="example-demo">
						<form class="demo-form" on:submit|preventDefault>
							<Button type="submit" variant="primary">Submit</Button>
							<Button type="button" variant="secondary">Cancel</Button>
							<Button type="reset" variant="tertiary">Reset Form</Button>
						</form>
					</div>
					<pre class="code-block"><code>{`<form on:submit|preventDefault>
  <Button type="submit" variant="primary">Submit</Button>
  <Button type="button" variant="secondary">Cancel</Button>
  <Button type="reset" variant="tertiary">Reset Form</Button>
</form>`}</code></pre>
				</div>
			</div>
		</section>

		<!-- API Reference -->
		<section class="demo-section">
			<h2>API Reference</h2>
			<div class="api-table">
				<table>
					<thead>
						<tr>
							<th>Prop</th>
							<th>Type</th>
							<th>Default</th>
							<th>Description</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td><code>variant</code></td>
							<td><code>'primary' | 'secondary' | 'tertiary'</code></td>
							<td><code>'primary'</code></td>
							<td>Visual variant of the button</td>
						</tr>
						<tr>
							<td><code>disabled</code></td>
							<td><code>boolean</code></td>
							<td><code>false</code></td>
							<td>Whether the button is disabled</td>
						</tr>
						<tr>
							<td><code>type</code></td>
							<td><code>'button' | 'submit' | 'reset'</code></td>
							<td><code>'button'</code></td>
							<td>HTML button type attribute</td>
						</tr>
						<tr>
							<td><code>onclick</code></td>
							<td><code>(event: MouseEvent) => void</code></td>
							<td><code>undefined</code></td>
							<td>Click event handler</td>
						</tr>
						<tr>
							<td><code>class</code></td>
							<td><code>string</code></td>
							<td><code>''</code></td>
							<td>Additional CSS classes</td>
						</tr>
						<tr>
							<td><code>children</code></td>
							<td><code>Snippet</code></td>
							<td>Required</td>
							<td>Button content</td>
						</tr>
					</tbody>
				</table>
			</div>
		</section>
	</main>
</div>

<style>
	.button-demo {
		min-height: 100vh;
		background: #ffffff;
		padding: 2rem;
	}

	.demo-header {
		max-width: 1200px;
		margin: 0 auto 3rem;
	}

	.breadcrumb {
		margin-bottom: 1rem;
		font-size: 0.9rem;
		color: #64748b;
	}

	.breadcrumb a {
		color: #1e40af;
		text-decoration: none;
	}

	.breadcrumb a:hover {
		text-decoration: underline;
	}

	.breadcrumb span {
		margin: 0 0.5rem;
	}

	.demo-header h1 {
		font-size: 2.5rem;
		font-weight: 700;
		color: #1e293b;
		margin-bottom: 1rem;
	}

	.demo-header p {
		font-size: 1.1rem;
		color: #64748b;
		line-height: 1.6;
		max-width: 700px;
	}

	.demo-content {
		max-width: 1200px;
		margin: 0 auto;
	}

	.demo-section {
		margin-bottom: 4rem;
		padding-bottom: 2rem;
		border-bottom: 1px solid #e2e8f0;
	}

	.demo-section:last-child {
		border-bottom: none;
	}

	.demo-section h2 {
		font-size: 1.8rem;
		font-weight: 600;
		color: #1e293b;
		margin-bottom: 0.5rem;
	}

	.demo-section > p {
		color: #64748b;
		margin-bottom: 2rem;
		line-height: 1.6;
	}

	.variant-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 2rem;
	}

	.variant-demo {
		background: #f8fafc;
		border-radius: 12px;
		padding: 1.5rem;
		border: 1px solid #e2e8f0;
	}

	.variant-demo h3 {
		font-size: 1.2rem;
		font-weight: 600;
		color: #1e293b;
		margin-bottom: 0.5rem;
	}

	.variant-demo p {
		color: #64748b;
		margin-bottom: 1.5rem;
		font-size: 0.9rem;
		line-height: 1.5;
	}

	.button-showcase {
		margin-bottom: 1rem;
		padding: 1rem;
		background: white;
		border-radius: 8px;
		text-align: center;
		border: 1px solid #e2e8f0;
	}

	.code-button {
		font-size: 0.8rem;
		color: #1e40af;
		background: none;
		border: none;
		cursor: pointer;
		text-decoration: underline;
	}

	.states-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
		gap: 2rem;
		margin-bottom: 2rem;
	}

	.state-demo {
		background: #f8fafc;
		border-radius: 12px;
		padding: 1.5rem;
		border: 1px solid #e2e8f0;
	}

	.state-demo h4 {
		font-size: 1.1rem;
		font-weight: 600;
		color: #1e293b;
		margin-bottom: 1rem;
	}

	.button-group {
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
	}

	.state-instructions {
		background: #eff6ff;
		border-radius: 12px;
		padding: 1.5rem;
		border: 1px solid #bfdbfe;
	}

	.state-instructions h4 {
		font-size: 1.1rem;
		font-weight: 600;
		color: #1e40af;
		margin-bottom: 0.5rem;
	}

	.state-instructions p {
		color: #1e40af;
		margin-bottom: 1rem;
	}

	.state-instructions ul {
		color: #1d4ed8;
		padding-left: 1.5rem;
	}

	.state-instructions li {
		margin-bottom: 0.5rem;
	}

	.usage-examples {
		display: grid;
		gap: 2rem;
	}

	.example {
		background: #f8fafc;
		border-radius: 12px;
		padding: 1.5rem;
		border: 1px solid #e2e8f0;
	}

	.example h4 {
		font-size: 1.1rem;
		font-weight: 600;
		color: #1e293b;
		margin-bottom: 1rem;
	}

	.example-demo {
		background: white;
		border-radius: 8px;
		padding: 1.5rem;
		margin-bottom: 1rem;
		border: 1px solid #e2e8f0;
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
		align-items: center;
	}

	.demo-form {
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
	}

	.code-block {
		background: #1e293b;
		color: #e2e8f0;
		border-radius: 8px;
		padding: 1rem;
		overflow-x: auto;
		font-size: 0.9rem;
		line-height: 1.5;
	}

	.code-block code {
		font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
	}

	.api-table {
		overflow-x: auto;
	}

	.api-table table {
		width: 100%;
		border-collapse: collapse;
		background: white;
		border-radius: 8px;
		overflow: hidden;
		box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
	}

	.api-table th,
	.api-table td {
		padding: 1rem;
		text-align: left;
		border-bottom: 1px solid #e2e8f0;
	}

	.api-table th {
		background: #f8fafc;
		font-weight: 600;
		color: #1e293b;
	}

	.api-table td {
		color: #64748b;
	}

	.api-table code {
		background: #f1f5f9;
		padding: 0.2rem 0.4rem;
		border-radius: 4px;
		font-size: 0.9rem;
		color: #1e40af;
		font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
	}

	@media (max-width: 768px) {
		.button-demo {
			padding: 1rem;
		}

		.demo-header h1 {
			font-size: 2rem;
		}

		.variant-grid {
			grid-template-columns: 1fr;
		}

		.states-grid {
			grid-template-columns: 1fr;
		}

		.button-group {
			flex-direction: column;
			align-items: flex-start;
		}

		.example-demo {
			flex-direction: column;
			align-items: flex-start;
		}

		.demo-form {
			flex-direction: column;
		}
	}
</style>