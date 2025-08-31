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

<div class="mx-auto w-xl px-4 py-8 text-white">
	<a href="{base}/blog" class="text-blue-600 hover:underline">&larr; Back to Blog</a>

	<article class="mt-4">
		<header class="mb-8 text-center">
			<h1 class="text-whitemd:text-4xl mb-2 text-3xl font-extrabold tracking-tight">
				{data.title}
			</h1>
			<p class="text-base text-white">Published on {data.date}</p>
		</header>

		<div class="prose prose-lg max-w-none">
			<svelte:component this={data.content} />
		</div>
	</article>

	<hr class="my-12 border-gray-200" />

	<!-- <Disqus identifier={data.slug} url={$page.url.href} /> -->
</div>

<style>
	:global(article h2) {
		margin-top: 2rem;
		margin-bottom: 1rem;
		font-weight: 800;
	}

	:global(article p) {
		margin-bottom: 1rem;
	}

	:global(article img) {
		max-width: 100%;
		height: auto;
		border-radius: 8px;
		margin: 1rem auto 1rem auto;
	}
</style>
