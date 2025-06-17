<script lang="ts">
	interface Props {
		children: any;
		variant?: 'primary' | 'secondary' | 'tertiary';
		disabled?: boolean;
		onclick?: (event: MouseEvent) => void;
		type?: 'button' | 'submit' | 'reset';
		class?: string;
	}

	let {
		children,
		variant = 'primary',
		disabled = false,
		onclick,
		type = 'button',
		class: className = '',
		...restProps
	}: Props = $props();
</script>

<button
	{type}
	{disabled}
	onclick={onclick}
	class="fds-button fds-button--{variant} {className}"
	{...restProps}
>
	{@render children()}
	{#if variant === 'tertiary'}
		<svg class="fds-button__arrow" width="16" height="16" viewBox="0 0 16 16" fill="none">
			<path
				d="M8.78033 8L5.48744 4.70711C5.09692 4.31658 5.09692 3.68342 5.48744 3.29289C5.87797 2.90237 6.51113 2.90237 6.90166 3.29289L10.9017 7.29289C11.2922 7.68342 11.2922 8.31658 10.9017 8.70711L6.90166 12.7071C6.51113 13.0976 5.87797 13.0976 5.48744 12.7071C5.09692 12.3166 5.09692 11.6834 5.48744 11.2929L8.78033 8Z"
				fill="currentColor"
			/>
		</svg>
	{/if}
</button>

<style>
	.fds-button {
		/* Reset */
		border: none;
		margin: 0;
		padding: 0;
		text-decoration: none;
		background: transparent;
		color: inherit;
		font-family: inherit;
		font-size: inherit;
		cursor: pointer;
		outline: none;

		/* Base styles */
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 8px;
		padding: 12px 24px;
		border-radius: 8px;
		font-weight: 500;
		font-size: 14px;
		line-height: 1.2;
		transition: all 0.2s ease-in-out;
		min-height: 40px;
		white-space: nowrap;
		user-select: none;
		position: relative;
	}

	.fds-button:disabled {
		cursor: not-allowed;
		opacity: 0.5;
	}

	/* Primary variant */
	.fds-button--primary {
		background-color: #1e40af;
		color: white;
		border: 2px solid #1e40af;
	}

	.fds-button--primary:hover:not(:disabled) {
		background-color: #1d4ed8;
		border-color: #1d4ed8;
		transform: translateY(-1px);
		box-shadow: 0 4px 12px rgba(30, 64, 175, 0.3);
	}

	.fds-button--primary:focus:not(:disabled) {
		box-shadow: 0 0 0 3px rgba(30, 64, 175, 0.3);
		outline: 2px solid #1e40af;
		outline-offset: 2px;
	}

	.fds-button--primary:active:not(:disabled) {
		background-color: #1e3a8a;
		border-color: #1e3a8a;
		transform: translateY(0);
		box-shadow: 0 2px 4px rgba(30, 64, 175, 0.2);
	}

	/* Secondary variant */
	.fds-button--secondary {
		background-color: #f8fafc;
		color: #475569;
		border: 2px solid #e2e8f0;
	}

	.fds-button--secondary:hover:not(:disabled) {
		background-color: #f1f5f9;
		border-color: #cbd5e1;
		transform: translateY(-1px);
		box-shadow: 0 4px 12px rgba(71, 85, 105, 0.1);
	}

	.fds-button--secondary:focus:not(:disabled) {
		box-shadow: 0 0 0 3px rgba(71, 85, 105, 0.2);
		outline: 2px solid #475569;
		outline-offset: 2px;
	}

	.fds-button--secondary:active:not(:disabled) {
		background-color: #e2e8f0;
		border-color: #94a3b8;
		transform: translateY(0);
		box-shadow: 0 2px 4px rgba(71, 85, 105, 0.1);
	}

	/* Tertiary variant */
	.fds-button--tertiary {
		background-color: transparent;
		color: #475569;
		border: 2px solid #e2e8f0;
		padding-right: 16px;
	}

	.fds-button--tertiary:hover:not(:disabled) {
		background-color: #f8fafc;
		border-color: #cbd5e1;
		color: #334155;
		transform: translateY(-1px);
		box-shadow: 0 4px 12px rgba(71, 85, 105, 0.1);
	}

	.fds-button--tertiary:focus:not(:disabled) {
		box-shadow: 0 0 0 3px rgba(71, 85, 105, 0.2);
		outline: 2px solid #475569;
		outline-offset: 2px;
	}

	.fds-button--tertiary:active:not(:disabled) {
		background-color: #f1f5f9;
		border-color: #94a3b8;
		transform: translateY(0);
		box-shadow: 0 2px 4px rgba(71, 85, 105, 0.1);
	}

	.fds-button__arrow {
		flex-shrink: 0;
		transition: transform 0.2s ease-in-out;
	}

	.fds-button--tertiary:hover:not(:disabled) .fds-button__arrow {
		transform: translateX(2px);
	}

	/* Responsive adjustments */
	@media (max-width: 768px) {
		.fds-button {
			min-height: 44px;
			padding: 14px 20px;
		}
	}
</style>
