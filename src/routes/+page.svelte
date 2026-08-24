<script lang="ts">
	import Navbar from '$lib/components/navbar.svelte';
	import Hero from '$lib/components/hero.svelte';
	import About from '$lib/components/about.svelte';
	import Menu from '$lib/components/menu.svelte';
	import MatchaPowder from '$lib/components/matcha-powder.svelte';
	import Testimonials from '$lib/components/testimonials.svelte';
	import Contact from '$lib/components/contact.svelte';
	import Footer from '$lib/components/footer.svelte';
	import BackToTop from '$lib/components/back-to-top.svelte';
</script>

<svelte:head>
	<title>T Cat Matcha House — ねこや</title>
</svelte:head>

<Navbar />
<main>
	<Hero />
	<About />
	<Menu />
	<MatchaPowder />
	<Testimonials />
	<Contact />
</main>
<Footer />
<BackToTop />
