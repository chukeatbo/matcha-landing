<script lang="ts">
	import LineManIcon from '$lib/components/icons/lineman.svelte';
	import GrabIcon from '$lib/components/icons/grab.svelte';

	let className: string | undefined = undefined;
	export { className as class };
</script>

<div class="flex flex-wrap gap-3 {className}">
	<a
		href="https://r.grab.com/g/6-20260824_204825_27B199551D89497E85DB16CC8EC386E1_MEXMPS-3-C8AJTGBDA3MZRX"
		target="_blank"
		rel="noopener noreferrer"
		class="inline-flex items-center gap-2.5 rounded-full bg-[#eaf8f0] py-2 pl-2 pr-5 text-sm font-semibold text-[#00963f] shadow-sm transition-all hover:-translate-y-0.5 hover:bg-[#daf1e4] hover:shadow-md active:translate-y-0"
	>
		<span class="flex h-8 shrink-0 items-center rounded-md bg-white px-2 shadow-sm">
			<GrabIcon class="h-4 w-auto" />
		</span>
		สั่งผ่าน Grab
	</a>

	<a
		href="https://lin.ee/5k6tSN8?openExternalBrowser=1"
		target="_blank"
		rel="noopener noreferrer"
		class="inline-flex items-center gap-2.5 rounded-full bg-[#eaf8ef] py-2 pl-2 pr-5 text-sm font-semibold text-[#2f8a52] shadow-sm transition-all hover:-translate-y-0.5 hover:bg-[#daf1e2] hover:shadow-md active:translate-y-0"
	>
		<LineManIcon class="h-8 w-8 shrink-0" />
		สั่งผ่าน LINE MAN
	</a>
</div>
