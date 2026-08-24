<script lang="ts">
	import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '$lib/components/ui/card';
	import MenuDrinkArt from '$lib/components/menu-drink-art.svelte';

	type DrinkArt = {
		variant?: 'cup' | 'bowl';
		bands: { color: string; weight: number }[];
		iced?: boolean;
		cloudFoam?: boolean;
		steam?: boolean;
		whisk?: boolean;
		garnish?: 'lemon' | 'strawberry' | 'mint' | 'coconut' | 'cocoa' | 'none';
	};

	type MenuItem = {
		id: string;
		name: string;
		th: string;
		desc: string;
		price: string;
		tag: string | null;
		tone: string;
		art: DrinkArt;
	};

	const items: MenuItem[] = [
		{
			id: 'pure-matcha',
			name: 'Pure Matcha',
			th: 'มัทฉะแท้ล้วน',
			desc: 'Pure Matcha',
			price: '75',
			tag: null,
			tone: 'from-[hsl(84,32%,90%)] to-[hsl(84,25%,80%)]',
			art: { variant: 'bowl', bands: [{ color: '#4f7a34', weight: 1 }], whisk: true, steam: true, garnish: 'none' }
		},
		{
			id: 'matcha-latte',
			name: 'Matcha Latte',
			th: 'มัทฉะลาเต้',
			desc: 'Latte with selected milk',
			price: '89',
			tag: 'ยอดนิยม',
			tone: 'from-[hsl(84,30%,88%)] to-[hsl(60,25%,86%)]',
			art: {
				bands: [
					{ color: '#f3ead0', weight: 0.35 },
					{ color: '#5f8a3d', weight: 0.65 }
				],
				iced: true,
				garnish: 'none'
			}
		},
		{
			id: 'cold-whisk-matcha',
			name: 'Cold Whisk Matcha',
			th: 'มัทฉะตีเย็น',
			desc: 'Whisked, creamy',
			price: '89',
			tag: null,
			tone: 'from-[hsl(84,35%,86%)] to-[hsl(84,28%,78%)]',
			art: { bands: [{ color: '#5b8339', weight: 1 }], iced: true, garnish: 'none' }
		},
		{
			id: 'hojicha-latte',
			name: 'Hojicha Latte',
			th: 'โฮจิฉะลาเต้',
			desc: 'Extra matcha',
			price: '85',
			tag: null,
			tone: 'from-[hsl(35,45%,88%)] to-[hsl(25,40%,80%)]',
			art: {
				bands: [
					{ color: '#f3ead0', weight: 0.3 },
					{ color: '#a9702f', weight: 0.7 }
				],
				iced: true,
				garnish: 'none'
			}
		},
		{
			id: 'matcha-honey-lemon',
			name: 'Matcha Honey Lemon',
			th: 'มัทฉะน้ำผึ้งมะนาว',
			desc: 'Refreshing',
			price: '80',
			tag: null,
			tone: 'from-[hsl(84,30%,88%)] to-[hsl(45,45%,84%)]',
			art: {
				bands: [
					{ color: '#e0a83c', weight: 0.25 },
					{ color: '#6f9450', weight: 0.75 }
				],
				iced: true,
				garnish: 'lemon'
			}
		},
		{
			id: 'strawberry-matcha-latte',
			name: 'Strawberry Matcha Latte',
			th: 'สตรอว์เบอร์รี่มัทฉะลาเต้',
			desc: 'Latte with real strawberry',
			price: '95',
			tag: null,
			tone: 'from-[hsl(345,45%,90%)] to-[hsl(84,25%,84%)]',
			art: {
				bands: [
					{ color: '#e0536b', weight: 0.3 },
					{ color: '#6f9450', weight: 0.7 }
				],
				iced: true,
				garnish: 'strawberry'
			}
		},
		{
			id: 'coconut-matcha',
			name: 'Coconut Matcha',
			th: 'มะพร้าวมัทฉะ',
			desc: 'Coconut water & matcha',
			price: '85',
			tag: null,
			tone: 'from-[hsl(84,25%,90%)] to-[hsl(60,20%,84%)]',
			art: { bands: [{ color: '#a8c98f', weight: 1 }], iced: true, garnish: 'coconut' }
		},
		{
			id: 'thai-tea',
			name: 'Thai Tea',
			th: 'ชาไทย',
			desc: 'Thai tea',
			price: '69',
			tag: 'ใหม่',
			tone: 'from-[hsl(30,55%,88%)] to-[hsl(20,50%,80%)]',
			art: {
				bands: [
					{ color: '#f3ead0', weight: 0.22 },
					{ color: '#e08a3c', weight: 0.78 }
				],
				iced: true,
				garnish: 'none'
			}
		},
		{
			id: 'coconut-matcha-cloud-foam',
			name: 'Coconut Matcha Cloud Foam',
			th: 'มะพร้าวมัทฉะฟองนุ่ม',
			desc: 'Fluffy foam',
			price: '115',
			tag: null,
			tone: 'from-[hsl(84,28%,88%)] to-[hsl(60,22%,84%)]',
			art: { bands: [{ color: '#5f8a3d', weight: 1 }], iced: true, cloudFoam: true, garnish: 'coconut' }
		},
		{
			id: 'cocoa-latte',
			name: 'Cocoa Latte',
			th: 'โกโก้ลาเต้',
			desc: 'Rich cocoa',
			price: '70',
			tag: null,
			tone: 'from-[hsl(25,35%,86%)] to-[hsl(20,30%,76%)]',
			art: {
				bands: [
					{ color: '#f3ead0', weight: 0.25 },
					{ color: '#6b4a34', weight: 0.75 }
				],
				iced: true,
				garnish: 'cocoa'
			}
		},
		{
			id: 'ice-tea-honey-lemon',
			name: 'Ice Tea Honey Lemon',
			th: 'ชาเย็นน้ำผึ้งมะนาว',
			desc: 'Refreshing ice tea',
			price: '79',
			tag: null,
			tone: 'from-[hsl(35,45%,88%)] to-[hsl(84,20%,84%)]',
			art: { bands: [{ color: '#c98a3c', weight: 1 }], iced: true, garnish: 'mint' }
		}
	];

	const milkOptions = [
		{ name: 'Not Fat Milk', price: 'รวมในราคา', included: true },
		{ name: 'Almond Milk', price: '+25 บาท', included: false },
		{ name: 'Hazelnut Milk', price: '+25 บาท', included: false },
		{ name: 'Oat Milk', price: '+25 บาท', included: false }
	];

	const sweetness = [
		{ label: '0%', th: 'ไม่หวาน', level: 0 },
		{ label: '25%', th: 'หวานน้อย', level: 1 },
		{ label: '50%', th: 'หวานปกติ', level: 2 },
		{ label: '100%', th: 'หวานมาก', level: 4 }
	];
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
				<Card class="flex flex-col justify-between overflow-hidden">
					<div class={`relative flex h-44 w-full shrink-0 items-center justify-center overflow-hidden bg-gradient-to-br ${item.tone} text-primary`}>
						<div class="h-32 w-32">
							<MenuDrinkArt uid={item.id} {...item.art} />
						</div>
						{#if item.tag === 'ยอดนิยม'}
							<span
								class="absolute right-3 top-3 inline-flex shrink-0 items-center gap-1 rounded-full bg-amber-500 px-3 py-1 text-xs font-bold text-white shadow-md shadow-amber-900/30 ring-1 ring-white/50"
							>
								<svg viewBox="0 0 20 20" fill="currentColor" class="h-3 w-3">
									<path
										d="M10 1.5l2.35 5.1 5.55.62-4.15 3.8 1.15 5.48L10 13.9l-4.9 2.6 1.15-5.48-4.15-3.8 5.55-.62L10 1.5z"
									/>
								</svg>
								{item.tag}
							</span>
						{:else if item.tag === 'ใหม่'}
							<span
								class="absolute right-3 top-3 inline-flex shrink-0 items-center gap-1 rounded-full bg-rose-500 px-3 py-1 text-xs font-bold text-white shadow-md shadow-rose-900/30 ring-1 ring-white/50"
							>
								<svg viewBox="0 0 20 20" fill="currentColor" class="h-3 w-3">
									<path
										d="M10 2c.4 2.9 1.6 4.9 4.5 5.5-2.9.6-4.1 2.6-4.5 5.5-.4-2.9-1.6-4.9-4.5-5.5C8.4 6.9 9.6 4.9 10 2z"
									/>
									<path d="M16 12.5c.2 1.4.8 2.4 2 2.7-1.2.3-1.8 1.3-2 2.7-.2-1.4-.8-2.4-2-2.7 1.2-.3 1.8-1.3 2-2.7z" />
								</svg>
								{item.tag}
							</span>
						{/if}
					</div>
					<CardHeader>
						<CardTitle>{item.name}</CardTitle>
						<CardDescription>{item.th} · {item.desc}</CardDescription>
					</CardHeader>
					<CardContent>
						<p class="text-xl font-semibold text-primary">฿{item.price}</p>
					</CardContent>
				</Card>
			{/each}
		</div>

		<div class="mt-12 grid gap-8 rounded-2xl border border-border bg-card p-6 md:grid-cols-2 md:p-8">
			<div>
				<h3 class="flex items-center gap-2 font-serif text-lg font-semibold">
					<span class="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
						<svg viewBox="0 0 24 24" fill="none" class="h-4.5 w-4.5" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M12 3c-2.6 3.2-5 6.4-5 9.5a5 5 0 0 0 10 0C17 9.4 14.6 6.2 12 3Z"
								stroke="currentColor"
								stroke-width="1.6"
								stroke-linejoin="round"
							/>
							<path d="M9.5 13.2c0 1.4 1.1 2.3 2.3 2.3" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" />
						</svg>
					</span>
					ตัวเลือกนม
				</h3>
				<div class="mt-4 grid grid-cols-2 gap-2.5">
					{#each milkOptions as milk}
						<div
							class="flex flex-col gap-1 rounded-xl border p-3 text-sm transition-colors {milk.included
								? 'border-primary/40 bg-primary/5'
								: 'border-border bg-background/60'}"
						>
							<span class="font-medium leading-snug">{milk.name}</span>
							<span class="text-xs {milk.included ? 'text-primary font-semibold' : 'text-muted-foreground'}">
								{milk.price}
							</span>
						</div>
					{/each}
				</div>
			</div>
			<div>
				<h3 class="flex items-center gap-2 font-serif text-lg font-semibold">
					<span class="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
						<svg viewBox="0 0 24 24" fill="none" class="h-4.5 w-4.5" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M12 2.5s6 6.6 6 11a6 6 0 1 1-12 0c0-4.4 6-11 6-11Z"
								stroke="currentColor"
								stroke-width="1.6"
								stroke-linejoin="round"
							/>
						</svg>
					</span>
					ระดับความหวาน
				</h3>
				<div class="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
					{#each sweetness as level}
						<div class="flex flex-col items-center gap-2 rounded-xl border border-border bg-background/60 p-3">
							<div class="flex gap-1">
								{#each Array(4) as _, i}
									<span class="h-4 w-1.5 rounded-full {i < level.level ? 'bg-primary' : 'bg-secondary'}"></span>
								{/each}
							</div>
							<div class="text-center">
								<p class="text-sm font-semibold">{level.label}</p>
								<p class="text-xs text-muted-foreground">{level.th}</p>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>
