<script lang="ts">
	import { onMount } from 'svelte';

	let visible = false;

	onMount(() => {
		const onScroll = () => {
			visible = window.scrollY > 480;
		};
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	});

	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
</script>

<button
	type="button"
	on:click={scrollToTop}
	aria-label="กลับขึ้นด้านบน"
	class="fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full transition-all duration-300 hover:scale-105 {visible
		? 'translate-y-0 opacity-100'
		: 'pointer-events-none translate-y-4 opacity-0'}"
>
	<div class="paw-bob h-full w-full">
		<img
			src="/images/paw-up.png"
			alt=""
			class="h-full w-full object-contain drop-shadow-[0_0_10px_rgba(244,114,160,0.55)]"
		/>
	</div>
</button>

<style>
	.paw-bob {
		animation: paw-bob 2.2s ease-in-out infinite;
	}

	@keyframes paw-bob {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-5px);
		}
	}
</style>
