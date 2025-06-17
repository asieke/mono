# FidUI Design System

A corporate design system built with vanilla CSS and Svelte 5, focusing on clean, accessible, and professional components.

## Installation

```bash
npm install @repo/fidui
```

## Components

### Button

A versatile button component with three variants and comprehensive state management.

#### Basic Usage

```svelte
<script>
  import { Button } from '@repo/fidui';
</script>

<Button variant="primary">Click me</Button>
```

#### Variants

- **Primary**: Use for primary actions and call-to-action buttons
- **Secondary**: Use for secondary actions and complementary buttons  
- **Tertiary**: Use for navigation and less prominent actions (includes arrow icon)

```svelte
<Button variant="primary">Primary Action</Button>
<Button variant="secondary">Secondary Action</Button>
<Button variant="tertiary">Tertiary Action</Button>
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'tertiary'` | `'primary'` | Visual variant of the button |
| `disabled` | `boolean` | `false` | Whether the button is disabled |
| `type` | `'button' \| 'submit' \| 'reset'` | `'button'` | HTML button type attribute |
| `onclick` | `(event: MouseEvent) => void` | `undefined` | Click event handler |
| `class` | `string` | `''` | Additional CSS classes |
| `children` | `Snippet` | Required | Button content |

#### States

All button variants automatically support:
- **Hover**: Subtle elevation and color changes
- **Focus**: Visible outline for keyboard navigation  
- **Active**: Pressed state with reduced elevation
- **Disabled**: Reduced opacity and disabled cursor

#### Examples

**With Click Handler:**
```svelte
<script>
  let count = $state(0);
</script>

<Button variant="primary" onclick={() => count++}>
  Clicked {count} times
</Button>
```

**Loading State:**
```svelte
<script>
  let isLoading = $state(false);
  
  function handleSubmit() {
    isLoading = true;
    // ... async operation
    setTimeout(() => isLoading = false, 2000);
  }
</script>

<Button 
  variant="primary" 
  disabled={isLoading}
  onclick={handleSubmit}
>
  {isLoading ? 'Loading...' : 'Submit'}
</Button>
```

**Form Usage:**
```svelte
<form>
  <Button type="submit" variant="primary">Submit</Button>
  <Button type="button" variant="secondary">Cancel</Button>
  <Button type="reset" variant="tertiary">Reset</Button>
</form>
```

## Design Tokens

The design system uses consistent color tokens:

- **Primary Blue**: `#1e40af` (hover: `#1d4ed8`, active: `#1e3a8a`)
- **Secondary Gray**: `#f8fafc` background with `#475569` text
- **Borders**: `#e2e8f0` (hover: `#cbd5e1`, active: `#94a3b8`)

## Accessibility

- Full keyboard navigation support
- Focus indicators for screen readers
- Semantic HTML button elements
- ARIA-compliant disabled states
- High contrast color ratios

## Browser Support

- Modern browsers with CSS Grid support
- Responsive design with mobile-first approach
- Progressive enhancement for advanced features

## Development

This package is built with:
- **Svelte 5** with runes for reactivity
- **TypeScript** for type safety
- **Vanilla CSS** for styling (no dependencies)
- **Mobile-first** responsive design

## License

MIT