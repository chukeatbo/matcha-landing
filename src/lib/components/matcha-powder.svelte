<script lang="ts">
	import { Badge } from '$lib/components/ui/badge';
	import { Button } from '$lib/components/ui/button';

	type FlavorScore = { label: string; value: number };

	type Powder = {
		id: string;
		name: string;
		tags: string[];
		profile: FlavorScore[];
		description: string;
		samplePrice: string;
		upgradePrice: string;
		soldOut?: boolean;
		included?: boolean;
	};

	const powders: Powder[] = [
		{
			id: 'yamadaen',
			name: 'Yamadaen Matcha Powder',
			tags: ['Nutty', 'Savory', 'Bittersweet'],
			profile: [
				{ label: 'Umami', value: 4 },
				{ label: 'Bitterness', value: 2 },
				{ label: 'Aroma', value: 5 }
			],
			description: 'รสสัมผัสกลมกล่อม ขมอ่อนๆ ปิดท้ายด้วยกลิ่นหอมมัน เหมาะสำหรับทำเมนูลาเต้',
			samplePrice: '19',
			upgradePrice: '19'
		},
		{
			id: 'yune',
			name: 'Yune Matcha Powder',
			tags: ['Smoky', 'Floral', 'Fragrant'],
			profile: [
				{ label: 'Umami', value: 3 },
				{ label: 'Smoky', value: 5 },
				{ label: 'Aroma', value: 4 }
			],
			description: 'กลิ่นควันอ่อนๆ ผสานความหอมดอกไม้ ให้รสสัมผัสสง่างามและมีเอกลักษณ์',
			samplePrice: '15',
			upgradePrice: '15'
		},
		{
			id: 'nishio',
			name: 'Nishio Matcha Powder',
			tags: ['High Umami', 'Creamy', 'Almond notes'],
			profile: [
				{ label: 'Umami', value: 5 },
				{ label: 'Bitterness', value: 1 },
				{ label: 'Creaminess', value: 5 }
			],
			description: 'กลิ่นอัลมอนด์ เนื้อสัมผัสครีมมี่ อูมามิเต็มคำ',
			samplePrice: '19',
			upgradePrice: '19'
		},
		{
			id: 'shop-blend',
			name: "Shop's Own Blend Matcha",
			tags: ['Light Nutty', 'Slight Smoky', 'Daily Brew'],
			profile: [
				{ label: 'Umami', value: 3 },
				{ label: 'Bitterness', value: 2 },
				{ label: 'Balance', value: 4 }
			],
			description: 'ตัวเลือกมาตรฐานประจำร้าน รสกลมกล่อม สมดุลระหว่างมันและควันอ่อนๆ',
			samplePrice: '0',
			upgradePrice: '0',
			included: true
		},
		{
			id: 'kagoshima',
			name: 'Kagoshima Matcha',
			tags: ['Floral notes', 'Rich umami', 'Very creamy'],
			profile: [],
			description: 'กลิ่นดอกไม้ อูมามิเข้มข้น เนื้อครีมมี่นุ่มละมุน',
			samplePrice: '35',
			upgradePrice: '35',
			soldOut: true
		},
		{
			id: 'yame',
			name: 'Yame High Firing Matcha',
			tags: ['Intense Nutty', 'Strong Smoky', 'Rich Roast'],
			profile: [
				{ label: 'Umami', value: 4 },
				{ label: 'Roast', value: 5 },
				{ label: 'Aroma', value: 5 }
			],
			description: 'รสมันเข้มและกลิ่นควันชัดเจน ปิดท้ายด้วยรสคั่วเข้ม เนื้อสัมผัสครีมมี่',
			samplePrice: '55',
			upgradePrice: '55'
		}
	];

	const intensityOptions = [
		{ label: '+1g เพิ่มความเข้ม', price: '19' },
		{ label: '+2g ดับเบิ้ลเข้ม', price: '25' }
	];

	function imgFallback(node: HTMLImageElement) {
		function showFallback() {
			node.style.display = 'none';
			const fallback = node.nextElementSibling as HTMLElement | null;
			if (fallback) fallback.style.display = 'flex';
		}
		// SSR can fetch (and 404) the image before this action attaches the
		// listener below, so also check the already-settled state on mount.
		if (node.complete && node.naturalWidth === 0) showFallback();
		node.addEventListener('error', showFallback);
		return { destroy: () => node.removeEventListener('error', showFallback) };
	}
</script>

<section id="matcha-powder" class="py-20 md:py-28">
	<div class="container">
		<div class="mx-auto max-w-2xl text-center">
			<span class="text-sm font-semibold uppercase tracking-widest text-primary">ผงมัทฉะให้เลือก</span>
			<h2 class="mt-3 text-3xl font-bold md:text-4xl">คัดสรรผงมัทฉะแท้</h2>
			<p class="mt-4 text-muted-foreground">
				เลือกผงมัทฉะที่ใช่ในสไตล์ที่คุณชอบ แต่ละตัวมี character และ flavor notes ที่แตกต่างกัน
				สามารถลองชิมแบบ Sample 1g หรือเลือกเปลี่ยนเสมอผงมัทฉะในแก้วของคุณได้
			</p>
		</div>

		<div class="mx-auto mt-10 flex max-w-3xl items-center justify-center gap-2 rounded-full border border-border bg-secondary/50 px-5 py-3 text-center text-sm text-secondary-foreground">
			<span>🍵</span>
			<span>มาตรฐานร้าน: ใช้ผงมัทฉะ 3 กรัมต่อแก้ว (Standard 3g per glass)</span>
		</div>

		<div class="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each powders as powder}
				<div class="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
					<div class="relative h-48 w-full shrink-0 overflow-hidden bg-secondary/60">
						<img
							src="/images/powders/{powder.id}.jpg"
							alt={powder.name}
							loading="lazy"
							class="h-full w-full object-cover {powder.soldOut ? 'grayscale' : ''}"
							use:imgFallback
						/>
						<div class="hidden h-full w-full items-center justify-center bg-secondary/60 text-4xl">🍵</div>
						{#if powder.soldOut}
							<span class="absolute right-3 top-3 rounded-full bg-destructive px-3 py-1 text-xs font-semibold text-destructive-foreground">
								หมดชั่วคราว
							</span>
						{/if}
					</div>

					<div class="flex flex-1 flex-col gap-3 p-5">
						<h3 class="font-serif text-lg font-semibold leading-snug">{powder.name}</h3>

						<div class="flex flex-wrap gap-1.5">
							{#each powder.tags as tag}
								<Badge variant="outline" class="border-primary/30 text-[11px] font-normal text-primary">
									{tag}
								</Badge>
							{/each}
						</div>

						{#if powder.profile.length}
							<div class="space-y-1.5">
								{#each powder.profile as score}
									<div class="flex items-center gap-2 text-xs">
										<span class="w-20 shrink-0 text-muted-foreground">{score.label}</span>
										<div class="flex flex-1 gap-1">
											{#each Array(5) as _, i}
												<span class="h-1.5 flex-1 rounded-full {i < score.value ? 'bg-primary' : 'bg-secondary'}"></span>
											{/each}
										</div>
										<span class="w-6 shrink-0 text-right text-muted-foreground">{score.value}/5</span>
									</div>
								{/each}
							</div>
						{/if}

						<p class="text-sm text-muted-foreground">{powder.description}</p>

						<div class="mt-auto flex gap-2 pt-2">
							{#if powder.soldOut}
								<Button variant="outline" class="w-full" disabled>ขอคิว Waitlist</Button>
							{:else if powder.included}
								<Badge variant="secondary" class="w-full justify-center py-2 text-xs font-medium">
									ตัวเลือกมาตรฐาน · รวมในราคาแล้ว
								</Badge>
							{:else}
								<Button variant="outline" size="sm" class="flex-1">Sample 1g (฿{powder.samplePrice})</Button>
								<Button size="sm" class="flex-1">Upgrade (+฿{powder.upgradePrice})</Button>
							{/if}
						</div>
					</div>
				</div>
			{/each}
		</div>

		<div class="mt-12 rounded-2xl border border-border bg-card p-6">
			<h3 class="font-serif text-lg font-semibold">เพิ่มความเข้มมัทฉะ (Extra Shot)</h3>
			<p class="mt-1 text-sm text-muted-foreground">สูตรทางร้านใช้ผงมัทฉะ 3 กรัมต่อแก้วเป็นมาตรฐาน</p>

			<div class="mt-6 grid gap-4 sm:grid-cols-2">
				{#each intensityOptions as option}
					<Button variant="outline" class="h-auto w-full justify-between rounded-xl px-5 py-4 text-base font-medium">
						<span>{option.label}</span>
						<span class="font-semibold text-primary">฿{option.price}</span>
					</Button>
				{/each}
			</div>
			<p class="mt-4 text-xs text-muted-foreground">* ราคาต่อแก้ว</p>
		</div>
	</div>
</section>
