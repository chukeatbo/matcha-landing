<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { MapPin, Clock, Mail } from 'lucide-svelte';
</script>

<section id="contact" class="py-20 md:py-28">
	<div class="container grid gap-12 md:grid-cols-2">
		<div>
			<span class="text-sm font-semibold uppercase tracking-widest text-primary">ติดต่อ & ที่ตั้ง</span>
			<h2 class="mt-3 text-3xl font-bold md:text-4xl">แวะมาชิมมัทฉะแก้วโปรดของคุณ</h2>

			<div class="mt-8 space-y-6">
				<div class="flex gap-4">
					<MapPin class="h-5 w-5 shrink-0 text-primary" />
					<div>
						<p class="font-medium">ที่อยู่ร้าน</p>
						<p class="text-sm text-muted-foreground">
							กรุงเทพฯ ประเทศไทย
							<br />
							<span class="italic">(ใส่ที่อยู่สาขาของคุณตรงนี้)</span>
						</p>
					</div>
				</div>
				<div class="flex gap-4">
					<Clock class="h-5 w-5 shrink-0 text-primary" />
					<div>
						<p class="font-medium">เวลาทำการ</p>
						<p class="text-sm text-muted-foreground">
							<span class="italic">(ใส่เวลาเปิด-ปิดร้านของคุณตรงนี้)</span>
						</p>
					</div>
				</div>
				<div class="flex gap-4">
					<Mail class="h-5 w-5 shrink-0 text-primary" />
					<div>
						<p class="font-medium">ติดต่อธุรกิจ</p>
						<p class="text-sm text-muted-foreground">info@tcatmatcha.com</p>
					</div>
				</div>
			</div>

			<div class="mt-8">
				<Button href="mailto:info@tcatmatcha.com" size="lg">ติดต่อสอบถาม</Button>
			</div>
		</div>

		<div class="flex min-h-[280px] items-center justify-center rounded-2xl border border-dashed border-border bg-secondary/40 text-sm text-muted-foreground">
			แผนที่ร้าน (แทรก Google Maps embed ของร้านคุณที่นี่)
		</div>
	</div>
</section>
