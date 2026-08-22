<script lang="ts">
	import { Leaf, Droplets, PawPrint } from 'lucide-svelte';

	const points = [
		{
			icon: Leaf,
			title: 'มัทฉะแท้ คัดสรรอย่างดี',
			desc: 'เลือกใช้ผงมัทฉะคุณภาพสูง ชงสดใหม่ทุกแก้ว ไม่ใช้ผงสำเร็จรูปรสหวานจัด'
		},
		{
			icon: Droplets,
			title: 'ตีมัทฉะสดทุกออเดอร์',
			desc: 'ตีมัทฉะด้วยชะเซ็นก่อนเสิร์ฟทุกครั้ง ให้ได้ฟองเนียนละเอียดและรสชาติเข้มข้นกำลังดี'
		},
		{
			icon: PawPrint,
			title: 'เสิร์ฟด้วยใจแบบเหมียว ๆ',
			desc: 'ธีมร้านแมวสุดน่ารัก ตั้งใจสร้างมุมพักผ่อนอบอุ่นให้ทุกคนมาชิลกับมัทฉะแก้วโปรด'
		}
	];
</script>

<section id="about" class="py-20 md:py-28">
	<div class="container grid gap-12 md:grid-cols-2 md:items-center">
		<div>
			<span class="text-sm font-semibold uppercase tracking-widest text-primary">เรื่องราวของเรา</span>
			<h2 class="mt-3 text-3xl font-bold md:text-4xl">ねこや — บ้านแมวที่มีมัทฉะ</h2>
			<p class="mt-4 text-muted-foreground">
				T Cat Matcha House เกิดจากความรักในแมวและมัทฉะ เราอยากสร้างพื้นที่เล็ก ๆ
				ที่ให้ทุกคนได้พักผ่อนไปกับเครื่องดื่มมัทฉะแท้รสชาติดี ท่ามกลางบรรยากาศอบอุ่นน่ารักสไตล์แมวเหมียว
				ทุกแก้วชงสดใหม่ด้วยความตั้งใจ เหมือนที่แมวดูแลคนที่มันรัก
			</p>
		</div>

		<div class="grid gap-6">
			{#each points as point}
				<div class="flex gap-4 rounded-xl border border-border bg-card p-5">
					<div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
						<svelte:component this={point.icon} class="h-5 w-5" />
					</div>
					<div>
						<h3 class="font-serif text-lg font-semibold">{point.title}</h3>
						<p class="mt-1 text-sm text-muted-foreground">{point.desc}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
