<script lang="ts">
	import { Button, Accordion } from '@repo/fidui';

	// Sample accordion data
	const faqItems = [
		{
			id: 'general-1',
			heading: 'What is Fidui Design System?',
			subheading: 'Learn about our component library',
			expanded: false
		},
		{
			id: 'general-2',
			heading: 'How do I get started?',
			expanded: false
		},
		{
			id: 'general-3',
			heading: 'What browsers are supported?',
			subheading: 'Compatibility information',
			expanded: false
		}
	];

	const featureItems = [
		{
			id: 'feature-1',
			heading: 'Accessibility First',
			subheading: 'WCAG 2.1 AA compliant',
			expanded: true
		},
		{
			id: 'feature-2',
			heading: 'Customizable Theming',
			subheading: 'Complete design system',
			expanded: false
		},
		{
			id: 'feature-3',
			heading: 'Framework Agnostic',
			subheading: 'Use with any modern framework',
			expanded: false
		}
	];

	function handleAccordionToggle(itemId: string, expanded: boolean) {
		console.log(`Accordion item ${itemId} ${expanded ? 'expanded' : 'collapsed'}`);
	}
</script>

<div class="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100">
	<div class="container mx-auto px-6 py-12">
		<!-- Header Section -->
		<div class="mb-16 text-center">
			<h1 class="mb-4 text-5xl font-bold text-neutral-800">Fidui Design System</h1>
			<p class="mx-auto max-w-2xl text-xl text-neutral-600">
				A comprehensive component library showcasing our custom color palette and design tokens.
			</p>
		</div>

		<!-- Button Demo Section -->
		<div class="mb-20">
			<div class="mx-auto max-w-md rounded-2xl bg-white p-8 shadow-lg">
				<h2 class="mb-6 text-center text-2xl font-semibold text-neutral-800">Button Demo</h2>
				<div class="flex justify-center">
					<Button>Get Started</Button>
				</div>
			</div>
		</div>

		<!-- Accordion Demo Section -->
		<div class="mb-20">
			<div class="mx-auto max-w-4xl">
				<div class="mb-8 text-center">
					<h2 class="mb-4 text-3xl font-bold text-neutral-800">Accordion Component</h2>
					<p class="text-lg text-neutral-600">
						Fully accessible accordion with keyboard navigation and smooth animations
					</p>
				</div>

				<div class="grid gap-8 md:grid-cols-2">
					<!-- FAQ Example -->
					<div class="rounded-2xl bg-white p-6 shadow-lg">
						<h3 class="mb-4 text-xl font-semibold text-neutral-800">FAQ Example</h3>
						<p class="mb-6 text-sm text-neutral-600">
							Frequently asked questions with chevron icons
						</p>
						
						<Accordion 
							items={faqItems} 
							iconType="chevron"
							onToggle={handleAccordionToggle}
						>
							{#snippet children(item, isExpanded)}
								{#if item.id === 'general-1'}
									<p>
										Fidui is a comprehensive design system and component library built with accessibility, 
										performance, and developer experience in mind. It provides a complete set of UI components 
										with consistent styling and behavior patterns.
									</p>
									<ul class="mt-3 list-disc pl-5">
										<li>11 custom color palettes with 10 shades each</li>
										<li>Fully accessible components (WCAG 2.1 AA)</li>
										<li>Framework agnostic implementation</li>
									</ul>
								{:else if item.id === 'general-2'}
									<p>
										Getting started with Fidui is simple:
									</p>
									<ol class="mt-3 list-decimal pl-5 space-y-2">
										<li>Install the package: <code class="bg-neutral-100 px-2 py-1 rounded text-sm">npm install @repo/fidui</code></li>
										<li>Import the components you need</li>
										<li>Start building amazing user interfaces!</li>
									</ol>
									<p class="mt-3">
										Check out our <a href="#" class="text-blue-600 hover:text-blue-800 underline">documentation</a> 
										for detailed usage examples.
									</p>
								{:else if item.id === 'general-3'}
									<p>Fidui supports all modern browsers including:</p>
									<div class="mt-3 grid grid-cols-2 gap-2 text-sm">
										<span>✅ Chrome 88+</span>
										<span>✅ Firefox 85+</span>
										<span>✅ Safari 14+</span>
										<span>✅ Edge 88+</span>
									</div>
									<p class="mt-3 text-sm text-neutral-600">
										We automatically test across these browsers to ensure consistent behavior.
									</p>
								{/if}
							{/snippet}
						</Accordion>
					</div>

					<!-- Features Example -->
					<div class="rounded-2xl bg-white p-6 shadow-lg">
						<h3 class="mb-4 text-xl font-semibold text-neutral-800">Features Example</h3>
						<p class="mb-6 text-sm text-neutral-600">
							Key features with plus/minus icons and one item pre-expanded
						</p>
						
						<Accordion 
							items={featureItems} 
							iconType="plus"
							headingLevel={4}
							onToggle={handleAccordionToggle}
						>
							{#snippet children(item, isExpanded)}
								{#if item.id === 'feature-1'}
									<p>
										Every component in Fidui is built with accessibility as a core principle:
									</p>
									<ul class="mt-3 space-y-2">
										<li class="flex items-start gap-2">
											<span class="text-green-500 mt-1">✓</span>
											<span>Screen reader compatible with proper ARIA labels</span>
										</li>
										<li class="flex items-start gap-2">
											<span class="text-green-500 mt-1">✓</span>
											<span>Full keyboard navigation support</span>
										</li>
										<li class="flex items-start gap-2">
											<span class="text-green-500 mt-1">✓</span>
											<span>High contrast colors for better visibility</span>
										</li>
										<li class="flex items-start gap-2">
											<span class="text-green-500 mt-1">✓</span>
											<span>Reduced motion preferences respected</span>
										</li>
									</ul>
								{:else if item.id === 'feature-2'}
									<p>
										Customize every aspect of your design with our comprehensive theming system:
									</p>
									<div class="mt-3 space-y-2">
										<div class="flex items-center gap-3">
											<div class="w-4 h-4 bg-blue-500 rounded-full"></div>
											<span>CSS custom properties for easy customization</span>
										</div>
										<div class="flex items-center gap-3">
											<div class="w-4 h-4 bg-green-500 rounded-full"></div>
											<span>Consistent spacing and typography scales</span>
										</div>
										<div class="flex items-center gap-3">
											<div class="w-4 h-4 bg-purple-500 rounded-full"></div>
											<span>Dark mode support out of the box</span>
										</div>
									</div>
								{:else if item.id === 'feature-3'}
									<p>
										Use Fidui with any modern JavaScript framework or vanilla HTML:
									</p>
									<div class="mt-3 grid grid-cols-3 gap-4 text-center">
										<div class="p-3 bg-neutral-50 rounded">
											<div class="font-semibold text-blue-600">React</div>
											<div class="text-xs text-neutral-600">Full support</div>
										</div>
										<div class="p-3 bg-neutral-50 rounded">
											<div class="font-semibold text-green-600">Vue</div>
											<div class="text-xs text-neutral-600">Full support</div>
										</div>
										<div class="p-3 bg-neutral-50 rounded">
											<div class="font-semibold text-orange-600">Svelte</div>
											<div class="text-xs text-neutral-600">Native</div>
										</div>
									</div>
								{/if}
							{/snippet}
						</Accordion>
					</div>
				</div>

				<!-- Keyboard Navigation Instructions -->
				<div class="mt-8 rounded-xl bg-blue-50 border border-blue-200 p-6">
					<h3 class="mb-3 text-lg font-semibold text-blue-900">Keyboard Navigation</h3>
					<div class="grid gap-3 text-sm md:grid-cols-2">
						<div class="flex items-center gap-3">
							<kbd class="bg-white border border-blue-300 px-2 py-1 rounded text-xs font-mono">Tab</kbd>
							<span class="text-blue-800">Navigate between accordion triggers</span>
						</div>
						<div class="flex items-center gap-3">
							<kbd class="bg-white border border-blue-300 px-2 py-1 rounded text-xs font-mono">Enter/Space</kbd>
							<span class="text-blue-800">Toggle accordion section</span>
						</div>
						<div class="flex items-center gap-3">
							<kbd class="bg-white border border-blue-300 px-2 py-1 rounded text-xs font-mono">↑/↓</kbd>
							<span class="text-blue-800">Move focus between sections</span>
						</div>
						<div class="flex items-center gap-3">
							<kbd class="bg-white border border-blue-300 px-2 py-1 rounded text-xs font-mono">Home/End</kbd>
							<span class="text-blue-800">Jump to first/last section</span>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Color Palette Section -->
		<div class="mb-12">
			<div class="mb-12 text-center">
				<h2 class="mb-4 text-3xl font-bold text-neutral-800">Color Palette</h2>
				<p class="text-lg text-neutral-600">
					Our complete color system with 11 color families and 10 shades each
				</p>
			</div>

			<div class="rounded-2xl bg-white p-8 shadow-lg">
				<div class="grid grid-cols-10 gap-3">
					<div class="color-card bg-neutral-50">Neutral-50</div>
					<div class="color-card bg-neutral-100">Neutral-100</div>
					<div class="color-card bg-neutral-200">Neutral-200</div>
					<div class="color-card bg-neutral-300">Neutral-300</div>
					<div class="color-card bg-neutral-400">Neutral-400</div>
					<div class="color-card bg-neutral-500">Neutral-500</div>
					<div class="color-card bg-neutral-600">Neutral-600</div>
					<div class="color-card bg-neutral-700">Neutral-700</div>
					<div class="color-card bg-neutral-800">Neutral-800</div>
					<div class="color-card bg-neutral-900">Neutral-900</div>

					<div class="color-card bg-green-50">Green-50</div>
					<div class="color-card bg-green-100">Green-100</div>
					<div class="color-card bg-green-200">Green-200</div>
					<div class="color-card bg-green-300">Green-300</div>
					<div class="color-card bg-green-400">Green-400</div>
					<div class="color-card bg-green-500">Green-500</div>
					<div class="color-card bg-green-600">Green-600</div>
					<div class="color-card bg-green-700">Green-700</div>
					<div class="color-card bg-green-800">Green-800</div>
					<div class="color-card bg-green-900">Green-900</div>

					<div class="color-card bg-blue-50">Blue-50</div>
					<div class="color-card bg-blue-100">Blue-100</div>
					<div class="color-card bg-blue-200">Blue-200</div>
					<div class="color-card bg-blue-300">Blue-300</div>
					<div class="color-card bg-blue-400">Blue-400</div>
					<div class="color-card bg-blue-500">Blue-500</div>
					<div class="color-card bg-blue-600">Blue-600</div>
					<div class="color-card bg-blue-700">Blue-700</div>
					<div class="color-card bg-blue-800">Blue-800</div>
					<div class="color-card bg-blue-900">Blue-900</div>

					<div class="color-card bg-purple-50">Purple-50</div>
					<div class="color-card bg-purple-100">Purple-100</div>
					<div class="color-card bg-purple-200">Purple-200</div>
					<div class="color-card bg-purple-300">Purple-300</div>
					<div class="color-card bg-purple-400">Purple-400</div>
					<div class="color-card bg-purple-500">Purple-500</div>
					<div class="color-card bg-purple-600">Purple-600</div>
					<div class="color-card bg-purple-700">Purple-700</div>
					<div class="color-card bg-purple-800">Purple-800</div>
					<div class="color-card bg-purple-900">Purple-900</div>

					<div class="color-card bg-gold-50">Gold-50</div>
					<div class="color-card bg-gold-100">Gold-100</div>
					<div class="color-card bg-gold-200">Gold-200</div>
					<div class="color-card bg-gold-300">Gold-300</div>
					<div class="color-card bg-gold-400">Gold-400</div>
					<div class="color-card bg-gold-500">Gold-500</div>
					<div class="color-card bg-gold-600">Gold-600</div>
					<div class="color-card bg-gold-700">Gold-700</div>
					<div class="color-card bg-gold-800">Gold-800</div>
					<div class="color-card bg-gold-900">Gold-900</div>

					<div class="color-card bg-red-50">Red-50</div>
					<div class="color-card bg-red-100">Red-100</div>
					<div class="color-card bg-red-200">Red-200</div>
					<div class="color-card bg-red-300">Red-300</div>
					<div class="color-card bg-red-400">Red-400</div>
					<div class="color-card bg-red-500">Red-500</div>
					<div class="color-card bg-red-600">Red-600</div>
					<div class="color-card bg-red-700">Red-700</div>
					<div class="color-card bg-red-800">Red-800</div>
					<div class="color-card bg-red-900">Red-900</div>

					<div class="color-card bg-orange-50">Orange-50</div>
					<div class="color-card bg-orange-100">Orange-100</div>
					<div class="color-card bg-orange-200">Orange-200</div>
					<div class="color-card bg-orange-300">Orange-300</div>
					<div class="color-card bg-orange-400">Orange-400</div>
					<div class="color-card bg-orange-500">Orange-500</div>
					<div class="color-card bg-orange-600">Orange-600</div>
					<div class="color-card bg-orange-700">Orange-700</div>
					<div class="color-card bg-orange-800">Orange-800</div>
					<div class="color-card bg-orange-900">Orange-900</div>

					<div class="color-card bg-yellow-50">Yellow-50</div>
					<div class="color-card bg-yellow-100">Yellow-100</div>
					<div class="color-card bg-yellow-200">Yellow-200</div>
					<div class="color-card bg-yellow-300">Yellow-300</div>
					<div class="color-card bg-yellow-400">Yellow-400</div>
					<div class="color-card bg-yellow-500">Yellow-500</div>
					<div class="color-card bg-yellow-600">Yellow-600</div>
					<div class="color-card bg-yellow-700">Yellow-700</div>
					<div class="color-card bg-yellow-800">Yellow-800</div>
					<div class="color-card bg-yellow-900">Yellow-900</div>

					<div class="color-card bg-aqua-50">Aqua-50</div>
					<div class="color-card bg-aqua-100">Aqua-100</div>
					<div class="color-card bg-aqua-200">Aqua-200</div>
					<div class="color-card bg-aqua-300">Aqua-300</div>
					<div class="color-card bg-aqua-400">Aqua-400</div>
					<div class="color-card bg-aqua-500">Aqua-500</div>
					<div class="color-card bg-aqua-600">Aqua-600</div>
					<div class="color-card bg-aqua-700">Aqua-700</div>
					<div class="color-card bg-aqua-800">Aqua-800</div>
					<div class="color-card bg-aqua-900">Aqua-900</div>

					<div class="color-card bg-cobalt-50">Cobalt-50</div>
					<div class="color-card bg-cobalt-100">Cobalt-100</div>
					<div class="color-card bg-cobalt-200">Cobalt-200</div>
					<div class="color-card bg-cobalt-300">Cobalt-300</div>
					<div class="color-card bg-cobalt-400">Cobalt-400</div>
					<div class="color-card bg-cobalt-500">Cobalt-500</div>
					<div class="color-card bg-cobalt-600">Cobalt-600</div>
					<div class="color-card bg-cobalt-700">Cobalt-700</div>
					<div class="color-card bg-cobalt-800">Cobalt-800</div>
					<div class="color-card bg-cobalt-900">Cobalt-900</div>

					<div class="color-card bg-pink-50">Pink-50</div>
					<div class="color-card bg-pink-100">Pink-100</div>
					<div class="color-card bg-pink-200">Pink-200</div>
					<div class="color-card bg-pink-300">Pink-300</div>
					<div class="color-card bg-pink-400">Pink-400</div>
					<div class="color-card bg-pink-500">Pink-500</div>
					<div class="color-card bg-pink-600">Pink-600</div>
					<div class="color-card bg-pink-700">Pink-700</div>
					<div class="color-card bg-pink-800">Pink-800</div>
					<div class="color-card bg-pink-900">Pink-900</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.color-card {
		aspect-ratio: 1;
		border-radius: 0.5rem;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 0.75rem;
		font-weight: 500;
		color: white;
		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
		transition: all 0.2s;
		min-height: 80px;
	}

	.color-card:hover {
		transform: scale(1.05);
		box-shadow:
			0 4px 6px -1px rgb(0 0 0 / 0.1),
			0 2px 4px -2px rgb(0 0 0 / 0.1);
	}

	/* Ensure text is readable on light colors */
	.color-card:is(
			.bg-neutral-50,
			.bg-green-50,
			.bg-blue-50,
			.bg-purple-50,
			.bg-gold-50,
			.bg-red-50,
			.bg-orange-50,
			.bg-yellow-50,
			.bg-aqua-50,
			.bg-cobalt-50,
			.bg-pink-50
		),
	.color-card:is(
			.bg-neutral-100,
			.bg-green-100,
			.bg-blue-100,
			.bg-purple-100,
			.bg-gold-100,
			.bg-red-100,
			.bg-orange-100,
			.bg-yellow-100,
			.bg-aqua-100,
			.bg-cobalt-100,
			.bg-pink-100
		),
	.color-card:is(
			.bg-neutral-200,
			.bg-green-200,
			.bg-blue-200,
			.bg-purple-200,
			.bg-gold-200,
			.bg-red-200,
			.bg-orange-200,
			.bg-yellow-200,
			.bg-aqua-200,
			.bg-cobalt-200,
			.bg-pink-200
		),
	.color-card:is(.bg-yellow-300, .bg-yellow-400) {
		color: #292928;
	}
</style>
