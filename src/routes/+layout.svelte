<script>
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<main class="flex min-h-screen w-full flex-col p-4">
	<!--
	<header class="w-full bg-gray-800 p-4 text-white">
		<div class="container mx-auto flex max-w-xl items-center justify-between">
			<a href="/" class="text-xl font-bold">My Blog</a>
			<nav>
				<a href="/" class="mr-4 hover:underline">X</a>
				<a href="/blog" class="hover:underline">Blog</a>
			</nav>
		}
	</header>
-->
	{@render children?.()}
</main>
