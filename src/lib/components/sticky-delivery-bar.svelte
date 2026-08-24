<script lang="ts">
	import { onMount } from 'svelte';
	import DeliveryButtons from '$lib/components/delivery-buttons.svelte';

	let visible = false;

	onMount(() => {
		const onScroll = () => {
			const scrolledPastHero = window.scrollY > 480;

			let overContact = false;
			const contact = document.getElementById('contact');
			if (contact) {
				const rect = contact.getBoundingClientRect();
				overContact = rect.top < window.innerHeight * 0.5;
			}

			visible = scrolledPastHero && !overContact;
		};
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	});
</script>

<div
	class="fixed inset-x-0 bottom-6 z-30 flex justify-start px-4 transition-all duration-300 sm:px-6 {visible
		? 'translate-y-0 opacity-100'
		: 'pointer-events-none translate-y-4 opacity-0'}"
>
	<div
		class="pointer-events-auto max-w-full rounded-2xl border border-border bg-background/95 p-3 shadow-lg shadow-black/10 backdrop-blur"
	>
		<p class="mb-1.5 px-0.5 text-xs font-medium text-muted-foreground">สั่งเดลิเวอรี่ได้เลย</p>
		<DeliveryButtons />
	</div>
</div>
