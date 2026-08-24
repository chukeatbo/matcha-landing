function easeOutCubic(t: number) {
	return 1 - Math.pow(1 - t, 3);
}

export function scrollToY(targetY: number, duration = 700) {
	const startY = window.scrollY;
	const distance = targetY - startY;
	if (distance === 0) return;

	const startTime = performance.now();

	function step(now: number) {
		const progress = Math.min((now - startTime) / duration, 1);
		window.scrollTo(0, startY + distance * easeOutCubic(progress));
		if (progress < 1) requestAnimationFrame(step);
	}

	requestAnimationFrame(step);
}

/** Smoothly scrolls to the element with the given id (no leading '#') and updates the URL hash. */
export function scrollToId(id: string, duration = 700) {
	const el = document.getElementById(id);
	if (!el) return;

	const targetY = el.getBoundingClientRect().top + window.scrollY;
	history.pushState(null, '', `#${id}`);
	scrollToY(targetY, duration);
}

/** Click handler for anchor links like href="#section" — animates instead of jumping. */
export function handleAnchorClick(event: MouseEvent) {
	const anchor = event.currentTarget as HTMLAnchorElement;
	const id = anchor.getAttribute('href')?.slice(1);
	if (!id) return;

	event.preventDefault();
	scrollToId(id);
}
