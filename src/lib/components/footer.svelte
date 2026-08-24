<script lang="ts">
	import { Instagram } from 'lucide-svelte';
	import { handleAnchorClick } from '$lib/scroll-to';

	const year = new Date().getFullYear();
</script>

<footer class="border-t border-border bg-secondary/40">
	<div class="container flex flex-col items-center justify-between gap-4 py-10 md:flex-row">
		<a
			href="#top"
			on:click={handleAnchorClick}
			class="flex items-center gap-2 font-serif text-lg font-semibold text-primary"
		>
			<img src="/logo.png" alt="T Cat Matcha House" class="h-10 w-10 rounded-full object-cover" />
			T Cat Matcha House
		</a>

		<p class="text-sm text-muted-foreground">© {year} T Cat Matcha House. สงวนลิขสิทธิ์.</p>

		<div class="flex gap-4 text-muted-foreground">
			<a
				href="https://www.tiktok.com/@tcatmatchahouse"
				aria-label="TikTok"
				target="_blank"
				rel="noopener noreferrer"
				class="transition-colors hover:text-primary"
			>
				<svg viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5">
					<path
						d="M16.5 2h-3v13.2a2.8 2.8 0 1 1-2-2.68V9.4a5.8 5.8 0 1 0 5 5.75V8.8a7.7 7.7 0 0 0 4.5 1.45V7.25A4.8 4.8 0 0 1 16.5 2Z"
					/>
				</svg>
			</a>
			<a
				href="https://www.instagram.com/t_cat.matcha/"
				aria-label="Instagram"
				target="_blank"
				rel="noopener noreferrer"
				class="transition-colors hover:text-primary"
			>
				<Instagram class="h-5 w-5" />
			</a>
			<a href="mailto:oranat57@gmail.com" aria-label="Email" class="transition-colors hover:text-primary">
				<span class="text-sm">oranat57@gmail.com</span>
			</a>
		</div>
	</div>
</footer>
