<script lang="ts" context="module">
	import { type VariantProps, tv } from 'tailwind-variants';

	export const buttonVariants = tv({
		base: 'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
		variants: {
			variant: {
				default: 'bg-primary text-primary-foreground shadow hover:bg-primary/90',
				outline:
					'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
				ghost: 'hover:bg-accent hover:text-accent-foreground',
				link: 'text-primary underline-offset-4 hover:underline'
			},
			size: {
				default: 'h-10 px-5 py-2',
				sm: 'h-9 rounded-md px-3 text-xs',
				lg: 'h-12 rounded-md px-8 text-base'
			}
		},
		defaultVariants: {
			variant: 'default',
			size: 'default'
		}
	});

	export type ButtonVariant = VariantProps<typeof buttonVariants>['variant'];
	export type ButtonSize = VariantProps<typeof buttonVariants>['size'];
</script>

<script lang="ts">
	import { cn } from '$lib/utils';

	export let variant: ButtonVariant = 'default';
	export let size: ButtonSize = 'default';
	export let href: string | undefined = undefined;

	let className: string | undefined = undefined;
	export { className as class };
</script>

{#if href}
	<a {href} class={cn(buttonVariants({ variant, size }), className)} {...$$restProps} on:click>
		<slot />
	</a>
{:else}
	<button class={cn(buttonVariants({ variant, size }), className)} {...$$restProps} on:click>
		<slot />
	</button>
{/if}
