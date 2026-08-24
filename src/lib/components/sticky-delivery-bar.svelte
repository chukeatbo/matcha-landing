<script lang="ts">
	import { onMount } from 'svelte';
	import LineManIcon from '$lib/components/icons/lineman.svelte';
	import GrabIcon from '$lib/components/icons/grab.svelte';
	import { GRAB_URL, LINEMAN_URL } from '$lib/delivery-links';

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
		class="pointer-events-auto flex items-center gap-2 rounded-full border border-border bg-background/95 py-2 pl-3 pr-2 shadow-lg shadow-black/10 backdrop-blur"
	>
		<span class="whitespace-nowrap text-xs font-medium text-muted-foreground">สั่งเดลิเวอรี่ได้เลย</span>
		<a
			href={GRAB_URL}
			target="_blank"
			rel="noopener noreferrer"
			aria-label="สั่งผ่าน Grab"
			class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#eaf8f0] shadow-sm transition-transform hover:scale-105 active:scale-95"
		>
			<GrabIcon class="h-3.5 w-auto" />
		</a>
		<a
			href={LINEMAN_URL}
			target="_blank"
			rel="noopener noreferrer"
			aria-label="สั่งผ่าน LINE MAN"
			class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#eaf8ef] shadow-sm transition-transform hover:scale-105 active:scale-95"
		>
			<LineManIcon class="h-7 w-7" />
		</a>
	</div>
</div>
