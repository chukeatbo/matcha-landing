<script lang="ts">
	import { Card, CardContent } from '$lib/components/ui/card';
	import { Star } from 'lucide-svelte';

	const reviews = [
		{
			name: 'คุณใบเฟิร์น',
			text: 'มัทฉะลาเต้ที่นี่เข้มข้นแบบไม่ขมเกินไป ธีมร้านแมวน่ารักมาก ถ่ายรูปสวยทุกมุม',
			rating: 5
		},
		{
			name: 'คุณธนกร',
			text: 'Cold Whisk Matcha อร่อยมาก บาริสต้าใส่ใจทุกขั้นตอน บรรยากาศร้านอบอุ่นสุด ๆ',
			rating: 5
		},
		{
			name: 'คุณพิมพ์ชนก',
			text: 'Coconut Matcha Cloud Foam ฟองนุ่มมาก สั่งซ้ำทุกครั้งที่แวะมา',
			rating: 5
		}
	];
</script>

<section id="reviews" class="bg-secondary/40 py-20 md:py-28">
	<div class="container">
		<div class="mx-auto max-w-2xl text-center">
			<span class="text-sm font-semibold uppercase tracking-widest text-primary">รีวิวจากลูกค้า</span>
			<h2 class="mt-3 text-3xl font-bold md:text-4xl">เสียงตอบรับที่เราภูมิใจ</h2>
		</div>

		<div class="mt-12 grid gap-6 md:grid-cols-3">
			{#each reviews as review}
				<Card>
					<CardContent class="pt-6">
						<div class="flex gap-1 text-primary">
							{#each Array(review.rating) as _}
								<Star class="h-4 w-4 fill-current" />
							{/each}
						</div>
						<p class="mt-4 text-sm text-foreground/90">“{review.text}”</p>
						<p class="mt-4 font-serif font-semibold text-primary">{review.name}</p>
					</CardContent>
				</Card>
			{/each}
		</div>
	</div>
</section>
