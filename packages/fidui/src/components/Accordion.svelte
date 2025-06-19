<script lang="ts">
	import type { Snippet } from 'svelte';

	interface AccordionItem {
		id: string;
		heading: string;
		subheading?: string;
		expanded?: boolean;
	}

	let {
		items = [],
		children,
		onToggle = () => {},
		headingLevel = 3,
		iconType = 'chevron' // 'chevron' or 'plus'
	}: {
		items: AccordionItem[];
		children: Snippet<[AccordionItem, boolean]>;
		onToggle?: (itemId: string, expanded: boolean) => void;
		headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
		iconType?: 'chevron' | 'plus';
	} = $props();

	// Track expanded state for each item
	let expandedStates = $state<Record<string, boolean>>({});

	// Initialize expanded states based on items prop
	$effect(() => {
		const newStates: Record<string, boolean> = {};
		items.forEach(item => {
			newStates[item.id] = item.expanded || false;
		});
		expandedStates = newStates;
	});

	function toggleItem(itemId: string, event?: Event) {
		if (event) {
			event.preventDefault();
		}
		
		const currentState = expandedStates[itemId] || false;
		const newState = !currentState;
		
		expandedStates[itemId] = newState;
		
		// Call analytics callback
		onToggle(itemId, newState);
	}

	function handleKeydown(event: KeyboardEvent, itemId: string, itemIndex: number) {
		const triggers = document.querySelectorAll('[data-accordion-trigger]');
		const currentTrigger = event.target as HTMLElement;
		
		switch (event.key) {
			case 'Enter':
			case ' ':
				event.preventDefault();
				toggleItem(itemId);
				break;
			case 'ArrowDown':
				event.preventDefault();
				const nextIndex = (itemIndex + 1) % triggers.length;
				(triggers[nextIndex] as HTMLElement).focus();
				break;
			case 'ArrowUp':
				event.preventDefault();
				const prevIndex = itemIndex === 0 ? triggers.length - 1 : itemIndex - 1;
				(triggers[prevIndex] as HTMLElement).focus();
				break;
			case 'Home':
				event.preventDefault();
				(triggers[0] as HTMLElement).focus();
				break;
			case 'End':
				event.preventDefault();
				(triggers[triggers.length - 1] as HTMLElement).focus();
				break;
		}
	}

	// Helper function to get heading element
	function getHeadingTag(level: number) {
		return `h${level}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
	}
</script>

<ul class="accordion" role="region" aria-label="Accordion">
	{#each items as item, index (item.id)}
		{@const isExpanded = expandedStates[item.id] || false}
		{@const triggerId = `accordion-trigger-${item.id}`}
		{@const panelId = `accordion-panel-${item.id}`}
		
		<li class="accordion-item">
			<svelte:element this={getHeadingTag(headingLevel)} class="accordion-heading">
				<button
					id={triggerId}
					class="accordion-trigger"
					aria-expanded={isExpanded}
					aria-controls={panelId}
					data-accordion-trigger
					onclick={() => toggleItem(item.id)}
					onkeydown={(e) => handleKeydown(e, item.id, index)}
				>
					<span class="accordion-icon" class:expanded={isExpanded}>
						{#if iconType === 'chevron'}
							<svg
								width="16"
								height="16"
								viewBox="0 0 16 16"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								aria-hidden="true"
							>
								<path
									d="M6 4L10 8L6 12"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						{:else}
							<svg
								width="16"
								height="16"
								viewBox="0 0 16 16"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								aria-hidden="true"
							>
								{#if isExpanded}
									<path
										d="M4 8H12"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
									/>
								{:else}
									<path
										d="M8 4V12M4 8H12"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
									/>
								{/if}
							</svg>
						{/if}
					</span>
					<div class="accordion-text">
						<span class="accordion-title">{item.heading}</span>
						{#if item.subheading}
							<span class="accordion-subtitle">{item.subheading}</span>
						{/if}
					</div>
				</button>
			</svelte:element>
			
			<div
				id={panelId}
				class="accordion-panel"
				class:expanded={isExpanded}
				role="region"
				aria-labelledby={triggerId}
				aria-hidden={!isExpanded}
			>
				<div class="accordion-content">
					{@render children(item, isExpanded)}
				</div>
			</div>
		</li>
	{/each}
</ul>

<style>
	.accordion {
		list-style: none;
		margin: 0;
		padding: 0;
		border: 1px solid var(--color-neutral-200);
		border-radius: 0.75rem;
		overflow: hidden;
		background: var(--color-neutral-0);
	}

	.accordion-item {
		border-bottom: 1px solid var(--color-neutral-200);
	}

	.accordion-item:last-child {
		border-bottom: none;
	}

	.accordion-heading {
		margin: 0;
		font-size: inherit;
	}

	.accordion-trigger {
		width: 100%;
		padding: 1rem 1.25rem;
		background: none;
		border: none;
		text-align: left;
		cursor: pointer;
		display: flex;
		align-items: flex-start;
		gap: 0.75rem;
		transition: all 0.2s ease;
		font-family: inherit;
		color: var(--color-neutral-800);
	}

	.accordion-trigger:hover {
		background-color: var(--color-neutral-50);
		color: var(--color-blue-600);
	}

	.accordion-trigger:focus {
		outline: 2px solid var(--color-blue-500);
		outline-offset: -2px;
		background-color: var(--color-neutral-50);
		color: var(--color-blue-600);
	}

	.accordion-icon {
		flex-shrink: 0;
		margin-top: 0.125rem;
		color: var(--color-neutral-500);
		transition: transform 0.2s ease;
	}

	.accordion-icon.expanded {
		transform: rotate(90deg);
	}

	.accordion-trigger:hover .accordion-icon,
	.accordion-trigger:focus .accordion-icon {
		color: var(--color-blue-600);
	}

	.accordion-text {
		flex: 1;
		min-width: 0;
	}

	.accordion-title {
		display: block;
		font-size: 1rem;
		font-weight: 600;
		line-height: 1.5;
		color: inherit;
	}

	.accordion-subtitle {
		display: block;
		font-size: 0.875rem;
		font-weight: 400;
		color: var(--color-neutral-600);
		margin-top: 0.25rem;
		line-height: 1.4;
	}

	.accordion-panel {
		max-height: 0;
		overflow: hidden;
		transition: max-height 0.3s ease;
	}

	.accordion-panel.expanded {
		max-height: 50rem; /* Large enough for most content */
		overflow-y: auto;
	}

	.accordion-content {
		padding: 0 1.25rem 1.25rem 2.5rem;
		color: var(--color-neutral-700);
		line-height: 1.6;
	}

	/* Better transition for height animation */
	@media (prefers-reduced-motion: no-preference) {
		.accordion-panel {
			transition: max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.accordion-panel,
		.accordion-icon,
		.accordion-trigger {
			transition: none;
		}
	}

	/* Ensure panel scrolls if content is too tall */
	.accordion-panel.expanded {
		max-height: min(50rem, 70vh);
	}
</style>