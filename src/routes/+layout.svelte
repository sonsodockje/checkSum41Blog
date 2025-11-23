<script>
	import { base } from '$app/paths';
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<header class="p-4 text-center">
	<nav class="space-x-4">
		<a href="{base}/page/1" class="text-lg text-white hover:underline">전체글</a>
		<a href="{base}/category/카테1/1" class="text-lg text-white hover:underline"> @</a>
		<a href="{base}/category/카테2/1" class="text-lg text-white hover:underline"> @@</a>
	</nav>
</header>

<main class="flex min-h-screen w-full p-4">
	{@render children?.()}
</main>

<style>
</style>
