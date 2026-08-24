<script lang="ts">
	import { Star, PawPrint } from 'lucide-svelte';

	const reviews = [
		{
			name: 'สุพิชญา ปิ่นทิพย์',
			text: 'ปกติสั่งมัทฉะมะพร้าว วันนี้ลองสั่งน้ำผึ้งมะนาว อร่อยมากเลยค่ะ สดชื่นคนละแบบกับมะพร้าว หอมน้ำผึ้งก...',
			rating: 5
		},
		{
			name: 'J',
			text: 'ร้านน่ารักมาก มีขนมมีโน้ตแปะให้ รสชาติดีได้เป็นร้านประจำแน่นอนครับ',
			rating: 5
		}
	];
</script>

<section id="reviews" class="bg-secondary/40 py-20 md:py-28">
	<div class="container">
		<div class="mx-auto max-w-2xl text-center">
			<span
				class="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-accent-foreground"
			>
				<PawPrint class="h-4 w-4" />
				รีวิวจากลูกค้า
			</span>
			<h2 class="mt-4 text-3xl font-bold md:text-4xl">เสียงตอบรับที่เราภูมิใจ</h2>
			<p class="mt-4 text-muted-foreground">ความประทับใจจริงจากลูกค้าที่แวะมาที่ร้าน</p>
		</div>

		<div class="mx-auto mt-12 grid max-w-3xl gap-6 sm:grid-cols-2">
			{#each reviews as review}
				<div class="rounded-2xl border border-border bg-card p-6 shadow-sm">
					<p class="font-medium leading-relaxed text-foreground">{review.text}</p>

					<div class="mt-5 flex items-center gap-3">
						<div
							class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent font-serif text-sm font-semibold text-accent-foreground"
						>
							{review.name[0]}
						</div>
						<div class="flex items-center gap-1.5 text-sm">
							<div class="flex text-amber-400">
								{#each Array(review.rating) as _}
									<Star class="h-3.5 w-3.5 fill-current" />
								{/each}
							</div>
							<span class="text-muted-foreground">·</span>
							<span class="font-medium text-foreground">{review.name}</span>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
