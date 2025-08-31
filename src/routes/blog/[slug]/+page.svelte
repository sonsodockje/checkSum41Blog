<script>
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import Disqus from '$lib/components/Disqus.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<svelte:head>
	<title>{data.title}</title>
</svelte:head>

<main class="mx-auto my-2 w-xl text-white">
	<a href="{base}/blog" class="text-blue-400 hover:underline">&larr; Back to Blog</a>

	<article class="post mt-4">
		<header class="mb-8 text-center">
			<h1 class="mb-2 text-3xl font-extrabold tracking-tight md:text-4xl">
				{data.title}
			</h1>
			<p class="text-base text-gray-300">Published on {data.date}</p>
		</header>

		<svelte:component this={data.content} />
	</article>

	<hr class="my-12 border-gray-600" />

	<!-- <Disqus identifier={data.slug} url={$page.url.href} /> -->
</main>

<style>
	:global(.post img) {
		max-width: 100%;
		height: auto;
		border-radius: 0.5rem;
		margin: 1rem auto;
	}
</style>
