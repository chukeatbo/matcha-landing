<script lang="ts">
	import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';

	const items = [
		{ name: 'Pure Matcha', th: 'มัทฉะแท้ล้วน', desc: 'Pure Matcha', price: '75', tag: null },
		{ name: 'Matcha Latte', th: 'มัทฉะลาเต้', desc: 'Latte with selected milk', price: '89', tag: 'ยอดนิยม' },
		{ name: 'Cold Whisk Matcha', th: 'มัทฉะตีเย็น', desc: 'Whisked, creamy', price: '89', tag: null },
		{ name: 'Hojicha Latte', th: 'โฮจิฉะลาเต้', desc: 'Extra matcha', price: '85', tag: null },
		{ name: 'Matcha Honey Lemon', th: 'มัทฉะน้ำผึ้งมะนาว', desc: 'Refreshing', price: '80', tag: null },
		{
			name: 'Strawberry Matcha Latte',
			th: 'สตรอว์เบอร์รี่มัทฉะลาเต้',
			desc: 'Latte with real strawberry',
			price: '95',
			tag: null
		},
		{ name: 'Coconut Matcha', th: 'มะพร้าวมัทฉะ', desc: 'Coconut water & matcha', price: '85', tag: null },
		{ name: 'Thai Tea', th: 'ชาไทย', desc: 'Thai tea', price: '69', tag: 'ใหม่' },
		{
			name: 'Coconut Matcha Cloud Foam',
			th: 'มะพร้าวมัทฉะฟองนุ่ม',
			desc: 'Fluffy foam',
			price: '115',
			tag: null
		},
		{ name: 'Cocoa Latte', th: 'โกโก้ลาเต้', desc: 'Rich cocoa', price: '70', tag: null },
		{
			name: 'Ice Tea Honey Lemon',
			th: 'ชาเย็นน้ำผึ้งมะนาว',
			desc: 'Refreshing ice tea',
			price: '79',
			tag: null
		}
	];

	const milkOptions = [
		{ name: 'Not Fat Milk', price: 'รวมในราคา' },
		{ name: 'Almond Milk', price: '+25 บาท' },
		{ name: 'Hazelnut Milk', price: '+25 บาท' },
		{ name: 'Oat Milk', price: '+25 บาท' }
	];

	const sweetness = ['0% (ไม่หวาน)', '25% (หวานน้อย)', '50% (หวานปกติ)', '100% (หวานมาก)'];
</script>

<section id="menu" class="bg-secondary/40 py-20 md:py-28">
	<div class="container">
		<div class="mx-auto max-w-2xl text-center">
			<span class="text-sm font-semibold uppercase tracking-widest text-primary">เมนูของร้าน</span>
			<h2 class="mt-3 text-3xl font-bold md:text-4xl">มัทฉะทุกแก้ว ชงสดทุกออเดอร์</h2>
			<p class="mt-4 text-muted-foreground">เสิร์ฟในแก้ว 14 oz. ปรับความหวานและนมได้ตามใจคุณ</p>
		</div>

		<div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each items as item}
				<Card class="flex flex-col justify-between">
					<CardHeader>
						<div class="flex items-start justify-between gap-2">
							<CardTitle>{item.name}</CardTitle>
							{#if item.tag}
								<Badge variant="secondary" class="shrink-0">{item.tag}</Badge>
							{/if}
						</div>
						<CardDescription>{item.th} · {item.desc}</CardDescription>
					</CardHeader>
					<CardContent>
						<p class="text-xl font-semibold text-primary">฿{item.price}</p>
					</CardContent>
				</Card>
			{/each}
		</div>

		<div class="mt-12 grid gap-6 rounded-2xl border border-border bg-card p-6 md:grid-cols-2">
			<div>
				<h3 class="font-serif text-lg font-semibold">ตัวเลือกนม</h3>
				<ul class="mt-3 space-y-2 text-sm text-muted-foreground">
					{#each milkOptions as milk}
						<li class="flex justify-between border-b border-border/60 pb-2 last:border-0">
							<span>{milk.name}</span>
							<span>{milk.price}</span>
						</li>
					{/each}
				</ul>
			</div>
			<div>
				<h3 class="font-serif text-lg font-semibold">ระดับความหวาน</h3>
				<div class="mt-3 flex flex-wrap gap-2">
					{#each sweetness as level}
						<Badge variant="outline">{level}</Badge>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>
