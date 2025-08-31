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
	<a
		href="{base}/blog"
		class="inline-block rounded-lg bg-blue-600 px-6 py-3 font-bold text-white transition-colors hover:bg-blue-700"
	>
		안농
	</a>
</section>
