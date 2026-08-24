<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { PawPrint } from 'lucide-svelte';
	import { handleAnchorClick } from '$lib/scroll-to';
	import DeliveryButtons from '$lib/components/delivery-buttons.svelte';
</script>

<section id="top" class="relative overflow-hidden">
	<div
		class="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,hsl(84_40%_88%),transparent_55%),radial-gradient(circle_at_80%_0%,hsl(45_60%_90%),transparent_45%)]"
	></div>

	<div class="container py-20 md:py-28">
		<div class="flex flex-col items-center gap-10 md:flex-row md:items-center md:justify-center">
			<div class="flex max-w-2xl flex-col gap-6">
				<span
					class="inline-flex w-fit items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-accent-foreground"
				>
					<PawPrint class="h-4 w-4" />
					ねこや — ร้านมัทฉะธีมแมวสุดน่ารัก
				</span>

				<h1 class="text-4xl font-bold leading-tight text-foreground md:text-6xl">
					T Cat
					<span class="text-primary">Matcha House</span>
				</h1>

				<p class="max-w-md text-lg text-muted-foreground">
					มัทฉะแท้ ชงสดทุกแก้ว เสิร์ฟพร้อมความน่ารักสไตล์แมวเหมียว
					ไม่ว่าจะเป็นมัทฉะลาเต้แก้วโปรด, มัทฉะเข้มข้นแบบตีสด หรือเมนูรสชาติพิเศษเฉพาะร้าน
					เราตั้งใจชงทุกแก้วด้วยใจเหมือนแมวที่รักเจ้าของ
				</p>

				<div class="flex flex-wrap gap-4">
					<Button href="#contact" on:click={handleAnchorClick} size="lg">แวะมาที่ร้าน</Button>
				</div>

				<div>
					<p class="mb-2.5 text-sm font-medium text-muted-foreground">สั่งเดลิเวอรี่ได้เลย</p>
					<DeliveryButtons />
				</div>
			</div>

			<div class="relative flex shrink-0 items-center justify-center">
				<div class="absolute h-40 w-40 rounded-full bg-primary/15 blur-3xl md:h-56 md:w-56"></div>

				<video
					class="relative h-40 w-40 rounded-full object-cover shadow-xl shadow-primary/20 md:h-56 md:w-56"
					src="/videos/maneki-neko.mp4"
					autoplay
					loop
					muted
					playsinline
					aria-label="แมวกวักมาสคอตร้าน"
				></video>
			</div>
		</div>

		<dl class="mt-16 grid grid-cols-3 divide-x divide-border border-y border-border py-8 text-center">
			<div>
				<dt class="text-3xl font-bold text-primary md:text-4xl">11+</dt>
				<dd class="mt-1 text-sm text-muted-foreground">เมนูมัทฉะให้เลือก</dd>
			</div>
			<div>
				<dt class="text-3xl font-bold text-primary md:text-4xl">100%</dt>
				<dd class="mt-1 text-sm text-muted-foreground">มัทฉะแท้ ชงสดทุกแก้ว</dd>
			</div>
			<div>
				<dt class="text-3xl font-bold text-primary md:text-4xl">5.0 ★</dt>
				<dd class="mt-1 text-sm text-muted-foreground">คะแนนรีวิวลูกค้า</dd>
			</div>
		</dl>
	</div>
</section>
