<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { PawPrint } from 'lucide-svelte';
</script>

<section id="top" class="relative overflow-hidden">
	<div
		class="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,hsl(84_40%_88%),transparent_55%),radial-gradient(circle_at_80%_0%,hsl(45_60%_90%),transparent_45%)]"
	></div>

	<div class="container grid gap-12 py-20 md:grid-cols-2 md:py-28">
		<div class="flex flex-col justify-center gap-6">
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
				<Button href="#contact" size="lg">แวะมาที่ร้าน</Button>
			</div>

			<dl class="mt-6 grid grid-cols-3 gap-4 border-t border-border pt-6">
				<div>
					<dt class="text-2xl font-bold text-primary md:text-3xl">11+</dt>
					<dd class="text-sm text-muted-foreground">เมนูมัทฉะให้เลือก</dd>
				</div>
				<div>
					<dt class="text-2xl font-bold text-primary md:text-3xl">100%</dt>
					<dd class="text-sm text-muted-foreground">มัทฉะแท้ ชงสดทุกแก้ว</dd>
				</div>
				<div>
					<dt class="text-2xl font-bold text-primary md:text-3xl">4.9★</dt>
					<dd class="text-sm text-muted-foreground">คะแนนรีวิวลูกค้า</dd>
				</div>
			</dl>
		</div>

		<div class="relative flex items-center justify-center">
			<div
				class="aspect-square w-full max-w-md rounded-[2.5rem] bg-gradient-to-br from-primary/90 via-primary to-[hsl(84,45%,22%)] shadow-2xl shadow-primary/30"
			>
				<div class="flex h-full w-full items-center justify-center">
					<div class="h-40 w-40 rounded-full bg-accent/90 blur-2xl md:h-56 md:w-56"></div>
				</div>
			</div>
			<div
				class="absolute -bottom-6 -left-6 rounded-2xl border border-border bg-card px-5 py-4 shadow-lg md:-left-10"
			>
				<p class="font-serif text-lg font-semibold text-primary">Pure Matcha</p>
				<p class="text-sm text-muted-foreground">เมนูซิกเนเจอร์ ฿75</p>
			</div>
		</div>
	</div>
</section>
