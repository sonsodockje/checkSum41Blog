<script>
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="SvelteKit Blog" />
</svelte:head>

<section
	class="m-auto flex w-xl flex-grow flex-col items-center justify-center px-4 py-16 text-center"
>
	<h1 class="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
		Welcome to My Blog
	</h1>
	<p class="mb-8 max-w-2xl text-lg text-gray-500">
		This is a simple blog built with SvelteKit and Tailwind CSS.
	</p>
	<a
		href="{base}/blog"
		class="inline-block rounded-lg bg-blue-600 px-6 py-3 font-bold text-white transition-colors hover:bg-blue-700"
	>
		Go to Blog
	</a>
</section>
