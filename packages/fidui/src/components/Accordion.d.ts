import type { Snippet } from 'svelte';

export interface AccordionItem {
	id: string;
	heading: string;
	subheading?: string;
	expanded?: boolean;
}

export interface AccordionProps {
	items: AccordionItem[];
	children: Snippet<[AccordionItem, boolean]>;
	onToggle?: (itemId: string, expanded: boolean) => void;
	headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
	iconType?: 'chevron' | 'plus';
}

declare const Accordion: import('svelte').Component<AccordionProps>;
export default Accordion;