<script lang="ts">
	export let uid: string;
	export let variant: 'cup' | 'bowl' = 'cup';
	/** Stacked color bands from bottom to top of the liquid, with relative weights. */
	export let bands: { color: string; weight: number }[] = [{ color: '#6f9450', weight: 1 }];
	export let iced = false;
	export let cloudFoam = false;
	export let steam = false;
	export let whisk = false;
	export let garnish: 'lemon' | 'strawberry' | 'mint' | 'coconut' | 'cocoa' | 'none' = 'none';

	const gradId = `liquid-${uid}`;
	const lightId = `light-${uid}`;

	// Precompute band rectangles (cup interior spans y 66..174, x 92..148 roughly, but we
	// render inside a clipPath so simple full-width bands work).
	const totalWeight = bands.reduce((sum, b) => sum + b.weight, 0);
	const liquidTop = 66;
	const liquidBottom = 174;
	const liquidHeight = liquidBottom - liquidTop;
	let y = liquidBottom;
	const bandRects = bands.map((b) => {
		const h = (b.weight / totalWeight) * liquidHeight;
		const rect = { color: b.color, y: y - h, h };
		y -= h;
		return rect;
	});
</script>

<svg viewBox="0 0 240 200" class="h-full w-full" role="img" aria-hidden="true">
	<defs>
		<linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
			<stop offset="0%" stop-color="white" stop-opacity="0.35" />
			<stop offset="100%" stop-color="white" stop-opacity="0" />
		</linearGradient>
		<radialGradient id={lightId} cx="30%" cy="20%" r="75%">
			<stop offset="0%" stop-color="white" stop-opacity="0.55" />
			<stop offset="100%" stop-color="white" stop-opacity="0" />
		</radialGradient>
		{#if variant === 'cup'}
			<clipPath id={`clip-${uid}`}>
				<path d="M75,52 L165,52 L150,174 Q150,181 143,181 L97,181 Q90,181 90,174 Z" />
			</clipPath>
		{:else}
			<clipPath id={`clip-${uid}`}>
				<ellipse cx="120" cy="100" rx="60" ry="15" />
			</clipPath>
		{/if}
	</defs>

	{#if variant === 'cup'}
		<!-- cup outline -->
		<path
			d="M75,52 L165,52 L150,174 Q150,181 143,181 L97,181 Q90,181 90,174 Z"
			fill="white"
			fill-opacity="0.5"
			stroke="currentColor"
			stroke-opacity="0.25"
			stroke-width="2"
		/>

		<g clip-path={`url(#clip-${uid})`}>
			{#each bandRects as rect}
				<rect x="70" y={rect.y} width="100" height={rect.h + 1} fill={rect.color} />
			{/each}

			{#if cloudFoam}
				<g>
					<ellipse cx="120" cy="78" rx="42" ry="16" fill="#faf6ea" />
					<circle cx="96" cy="72" r="12" fill="#faf6ea" />
					<circle cx="118" cy="66" r="14" fill="#faf6ea" />
					<circle cx="142" cy="73" r="11" fill="#faf6ea" />
				</g>
			{/if}

			{#if iced}
				<g fill="white" fill-opacity="0.55" stroke="white" stroke-opacity="0.7" stroke-width="1">
					<rect x="88" y="88" width="20" height="20" rx="4" transform="rotate(-12 98 98)" />
					<rect x="122" y="100" width="18" height="18" rx="4" transform="rotate(10 131 109)" />
					<rect x="100" y="128" width="20" height="20" rx="4" transform="rotate(6 110 138)" />
					<rect x="130" y="140" width="16" height="16" rx="4" transform="rotate(-14 138 148)" />
				</g>
			{/if}

			<rect x="70" y={liquidTop} width="100" height={liquidHeight} fill={`url(#${gradId})`} />
			<rect x="70" y={liquidTop} width="100" height={liquidHeight} fill={`url(#${lightId})`} />
		</g>

		<!-- rim -->
		<ellipse cx="120" cy="52" rx="45" ry="7" fill="none" stroke="currentColor" stroke-opacity="0.3" stroke-width="2" />

		<!-- straw -->
		<rect
			x="132"
			y="18"
			width="7"
			height="72"
			rx="3.5"
			fill="currentColor"
			fill-opacity="0.55"
			transform="rotate(14 135 54)"
		/>
	{:else}
		<!-- ceramic bowl body -->
		<path
			d="M52,112 C52,96 82,86 120,86 C158,86 188,96 188,112 L173,152 C171,163 150,170 120,170 C90,170 69,163 67,152 Z"
			fill="white"
			fill-opacity="0.55"
			stroke="currentColor"
			stroke-opacity="0.25"
			stroke-width="2"
		/>

		<!-- tea surface (recessed opening, seen at an angle) -->
		<ellipse cx="120" cy="103" rx="62" ry="16" fill="black" fill-opacity="0.12" />
		<g clip-path={`url(#clip-${uid})`}>
			{#each bandRects as rect}
				<rect x="40" y={rect.y - 40} width="160" height={rect.h + 50} fill={rect.color} />
			{/each}
			<ellipse cx="120" cy="100" rx="60" ry="15" fill={`url(#${lightId})`} />
		</g>
		<ellipse cx="120" cy="100" rx="60" ry="15" fill="none" stroke="currentColor" stroke-opacity="0.25" stroke-width="1.5" />

		{#if whisk}
			<g transform="rotate(-18 158 92)">
				<line x1="158" y1="92" x2="196" y2="46" stroke="#8a6a45" stroke-width="3.5" stroke-linecap="round" />
				{#each [-10, -4, 2, 8, 14] as dx}
					<path d={`M158,92 Q${152 + dx},108 ${146 + dx},122`} stroke="#c9a35f" stroke-width="1.6" fill="none" stroke-linecap="round" />
				{/each}
			</g>
		{/if}

		{#if steam}
			<g stroke="white" stroke-opacity="0.75" stroke-width="3" fill="none" stroke-linecap="round">
				<path d="M92,72 Q87,58 94,50 Q101,42 96,28" />
				<path d="M110,70 Q105,56 112,48 Q119,40 114,26" />
			</g>
		{/if}
	{/if}

	<!-- garnish -->
	{#if garnish === 'lemon'}
		<g transform="translate(178,42)">
			<circle r="14" fill="#f4d35e" stroke="currentColor" stroke-opacity="0.2" stroke-width="1.5" />
			{#each [0, 60, 120] as a}
				<line x1="0" y1="0" x2={14 * Math.cos((a * Math.PI) / 180)} y2={14 * Math.sin((a * Math.PI) / 180)} stroke="#fff" stroke-opacity="0.7" stroke-width="1.5" />
				<line x1="0" y1="0" x2={-14 * Math.cos((a * Math.PI) / 180)} y2={-14 * Math.sin((a * Math.PI) / 180)} stroke="#fff" stroke-opacity="0.7" stroke-width="1.5" />
			{/each}
		</g>
	{:else if garnish === 'strawberry'}
		<g transform="translate(178,40)">
			<path d="M0,-10 C10,-10 12,2 0,14 C-12,2 -10,-10 0,-10 Z" fill="#e0536b" />
			<path d="M-5,-11 L0,-4 L5,-11 Z" fill="#6f9450" />
			<circle cx="-3" cy="0" r="1" fill="#fbdada" />
			<circle cx="3" cy="3" r="1" fill="#fbdada" />
			<circle cx="0" cy="7" r="1" fill="#fbdada" />
		</g>
	{:else if garnish === 'mint'}
		<g transform="translate(178,40)">
			<path d="M0,10 Q-14,4 -8,-10 Q4,-8 6,4 Q8,8 0,10 Z" fill="#5f8a3d" />
			<line x1="-6" y1="6" x2="4" y2="-6" stroke="#3f5f28" stroke-width="1" />
		</g>
	{:else if garnish === 'coconut'}
		<g transform="translate(178,42)">
			<path d="M-13,-8 A13,13 0 0 1 13,-8 L10,10 A13,13 0 0 1 -10,10 Z" fill="#fdfaf1" stroke="#c9bfa0" stroke-width="1" />
			<line x1="-8" y1="-2" x2="8" y2="1" stroke="#d8cfae" stroke-width="1.2" />
			<line x1="-7" y1="3" x2="7" y2="6" stroke="#d8cfae" stroke-width="1.2" />
		</g>
	{:else if garnish === 'cocoa'}
		<g fill="#5c4030" opacity="0.6">
			<circle cx="172" cy="34" r="2" />
			<circle cx="182" cy="30" r="1.6" />
			<circle cx="190" cy="40" r="2.2" />
			<circle cx="178" cy="44" r="1.4" />
		</g>
	{/if}
</svg>
