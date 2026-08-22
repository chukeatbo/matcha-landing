<script lang="ts">
	const tiles = [
		{ label: 'เคาน์เตอร์บาร์', tone: 'from-primary/90 to-[hsl(84,45%,20%)]' },
		{ label: 'มัทฉะลาเต้เย็น', tone: 'from-accent to-[hsl(45,55%,75%)]' },
		{ label: 'มุมแมวประจำร้าน', tone: 'from-[hsl(84,30%,45%)] to-primary' },
		{ label: 'มุมนั่งชิล', tone: 'from-secondary to-[hsl(60,20%,80%)]' },
		{ label: 'โลโก้ ねこや', tone: 'from-[hsl(45,60%,80%)] to-accent' },
		{ label: 'มัทฉะตีสด', tone: 'from-primary to-[hsl(84,45%,18%)]' }
	];
</script>

<section id="gallery" class="py-20 md:py-28">
	<div class="container">
		<div class="mx-auto max-w-2xl text-center">
			<span class="text-sm font-semibold uppercase tracking-widest text-primary">บรรยากาศร้าน</span>
			<h2 class="mt-3 text-3xl font-bold md:text-4xl">พื้นที่ผ่อนคลาย กลิ่นอายญี่ปุ่น</h2>
		</div>

		<div class="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3">
			{#each tiles as tile}
				<div
					class={`flex aspect-square items-end rounded-2xl bg-gradient-to-br p-4 shadow-sm ${tile.tone}`}
				>
					<span class="rounded-md bg-background/80 px-3 py-1 text-sm font-medium backdrop-blur">
						{tile.label}
					</span>
				</div>
			{/each}
		</div>
	</div>
</section>
