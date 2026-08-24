<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { MapPin, Clock, Mail } from 'lucide-svelte';
	import DeliveryButtons from '$lib/components/delivery-buttons.svelte';
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
						<p class="font-medium">หน้าร้าน</p>
						<p class="text-sm text-muted-foreground">ยังไม่เปิดหน้าร้าน — เร็ว ๆ นี้</p>
					</div>
				</div>
				<div class="flex gap-4">
					<Clock class="h-5 w-5 shrink-0 text-primary" />
					<div>
						<p class="font-medium">เวลาทำการ</p>
						<p class="text-sm text-muted-foreground">07:00 - 20:00 น.</p>
					</div>
				</div>
				<div class="flex gap-4">
					<Mail class="h-5 w-5 shrink-0 text-primary" />
					<div>
						<p class="font-medium">ติดต่อธุรกิจ</p>
						<p class="text-sm text-muted-foreground">oranat57@gmail.com</p>
					</div>
				</div>
			</div>

			<div class="mt-8">
				<Button href="mailto:oranat57@gmail.com" size="lg">ติดต่อสอบถาม</Button>
			</div>
		</div>

		<div class="flex min-h-[280px] flex-col items-center justify-center gap-4 rounded-2xl border border-dashed border-border bg-secondary/40 p-6 text-center">
			<span class="text-3xl">🐾</span>
			<div class="text-sm text-muted-foreground">
				<p class="font-medium text-foreground">หน้าร้านกำลังจะเปิดเร็ว ๆ นี้</p>
				<p>ระหว่างนี้สั่งเดลิเวอรี่ได้เลยผ่านแอปด้านล่าง</p>
			</div>
			<DeliveryButtons />
		</div>
	</div>
</section>
