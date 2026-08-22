<script lang="ts">
	import { Menu, X } from 'lucide-svelte';

	let open = false;

	const links = [
		{ href: '#about', label: 'เรื่องราวของเรา' },
		{ href: '#menu', label: 'เมนู' },
		{ href: '#matcha-powder', label: 'ผงมัทฉะ' },
		{ href: '#contact', label: 'ติดต่อ & ที่ตั้ง' }
	];
</script>

<header class="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur">
	<div class="container flex h-16 items-center justify-between">
		<a href="#top" class="flex items-center gap-2 font-serif text-lg font-semibold text-primary">
			<img src="/logo.png" alt="T Cat Matcha House" class="h-10 w-10 rounded-full object-cover" />
			T Cat Matcha House
		</a>

		<nav class="hidden items-center gap-8 md:flex">
			{#each links as link}
				<a href={link.href} class="text-sm font-medium text-foreground/80 transition-colors hover:text-primary">
					{link.label}
				</a>
			{/each}
		</nav>

		<button
			class="inline-flex h-9 w-9 items-center justify-center rounded-md md:hidden"
			aria-label="เปิดเมนู"
			on:click={() => (open = !open)}
		>
			{#if open}
				<X class="h-5 w-5" />
			{:else}
				<Menu class="h-5 w-5" />
			{/if}
		</button>
	</div>

	{#if open}
		<nav class="border-t border-border/60 bg-background md:hidden">
			<div class="container flex flex-col gap-1 py-3">
				{#each links as link}
					<a
						href={link.href}
						class="rounded-md px-2 py-2 text-sm font-medium text-foreground/80 hover:bg-accent hover:text-primary"
						on:click={() => (open = false)}
					>
						{link.label}
					</a>
				{/each}
			</div>
		</nav>
	{/if}
</header>
