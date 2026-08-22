<script lang="ts">
	import { Facebook, Instagram } from 'lucide-svelte';

	const year = new Date().getFullYear();
</script>

<footer class="border-t border-border bg-secondary/40">
	<div class="container flex flex-col items-center justify-between gap-4 py-10 md:flex-row">
		<a href="#top" class="flex items-center gap-2 font-serif text-lg font-semibold text-primary">
			<img src="/logo.png" alt="T Cat Matcha House" class="h-10 w-10 rounded-full object-cover" />
			T Cat Matcha House
		</a>

		<p class="text-sm text-muted-foreground">© {year} T Cat Matcha House. สงวนลิขสิทธิ์.</p>

		<div class="flex gap-4 text-muted-foreground">
			<a href="#contact" aria-label="Facebook" class="transition-colors hover:text-primary">
				<Facebook class="h-5 w-5" />
			</a>
			<a href="https://www.instagram.com/t_cat.matcha/" aria-label="Instagram" class="transition-colors hover:text-primary">
				<Instagram class="h-5 w-5" />
			</a>
			<a href="mailto:info@tcatmatcha.com" aria-label="Email" class="transition-colors hover:text-primary">
				<span class="text-sm">info@tcatmatcha.com</span>
			</a>
		</div>
	</div>
</footer>
