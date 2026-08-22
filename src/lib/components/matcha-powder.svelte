<script lang="ts">
	import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';

	const powders = [
		{
			name: 'Yamadaen Matcha Powder',
			notes: 'Milk = Nutty & Savory, Pure = Bittersweet with a light nutty finish',
			price: '19',
			status: null
		},
		{
			name: 'Yune Matcha Powder',
			notes: 'Ideal for smoky lattes, fragrant and elegant',
			price: '15',
			status: null
		},
		{
			name: 'Nishio Matcha Powder',
			notes: 'Almond notes, creamy mouthfeel, full umami',
			price: '19',
			status: null
		},
		{
			name: "Shop's Own Blend Matcha",
			notes: 'Light nutty taste, slight smoky character',
			price: '0',
			status: null
		},
		{
			name: 'Kagoshima Matcha',
			notes: 'Floral notes, rich umami, very creamy',
			price: '35',
			status: 'หมดชั่วคราว (Waitlist ได้)'
		},
		{
			name: 'Yame High Firing Matcha',
			notes: 'Strong nutty and smoky notes, intensely creamy',
			price: '55',
			status: null
		}
	];

	const intensityOptions = [
		{ grams: '4 กรัม', price: '19', extra: 'เพิ่มผงมัทฉะ 1 กรัม' },
		{ grams: '5 กรัม', price: '25', extra: 'เพิ่มผงมัทฉะ 2 กรัม' }
	];
</script>

<section id="matcha-powder" class="py-20 md:py-28">
	<div class="container">
		<div class="mx-auto max-w-2xl text-center">
			<span class="text-sm font-semibold uppercase tracking-widest text-primary">ผงมัทฉะให้เลือก</span>
			<h2 class="mt-3 text-3xl font-bold md:text-4xl">เลือกผงมัทฉะที่ใช่สำหรับคุณ</h2>
			<p class="mt-4 text-muted-foreground">
				แต่ละตัวมีรสสัมผัสต่างกัน ลองชิมแบบ sample 1 กรัม ก่อนเลือกแก้วโปรดของคุณได้
			</p>
		</div>

		<div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each powders as powder}
				<Card class="flex flex-col justify-between">
					<CardHeader>
						<div class="flex items-start justify-between gap-2">
							<CardTitle>{powder.name}</CardTitle>
							{#if powder.status}
								<Badge variant="secondary" class="shrink-0">{powder.status}</Badge>
							{/if}
						</div>
						<CardDescription>{powder.notes}</CardDescription>
					</CardHeader>
					<CardContent>
						<p class="text-xl font-semibold text-primary">฿{powder.price} / 1g sample</p>
					</CardContent>
				</Card>
			{/each}
		</div>

		<div class="mt-12 rounded-2xl border border-border bg-card p-6">
			<h3 class="font-serif text-lg font-semibold">เพิ่มความเข้มมัทฉะ</h3>
			<p class="mt-1 text-sm text-muted-foreground">สูตรทางร้านใช้ผงมัทฉะ 3 กรัมต่อแก้วเป็นมาตรฐาน</p>

			<div class="mt-6 grid gap-4 sm:grid-cols-2">
				{#each intensityOptions as option}
					<div class="flex items-center justify-between rounded-xl bg-secondary/40 px-5 py-4">
						<div>
							<p class="font-medium">เพิ่มเป็น {option.grams}</p>
							<p class="text-sm text-muted-foreground">({option.extra})</p>
						</div>
						<p class="text-lg font-semibold text-primary">฿{option.price}</p>
					</div>
				{/each}
			</div>
			<p class="mt-4 text-xs text-muted-foreground">* ราคาต่อแก้ว</p>
		</div>
	</div>
</section>
