<script>
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<main class="flex min-h-screen w-full flex-col">
	<!--
	<header class="w-full bg-gray-800 p-4 text-white">
		<div class="container mx-auto flex max-w-xl items-center justify-between">
			<a href="/" class="text-xl font-bold">My Blog</a>
			<nav>
				<a href="/" class="mr-4 hover:underline">X</a>
				<a href="/blog" class="hover:underline">Blog</a>
			</nav>
		</div>
	</header>
-->
	{@render children?.()}
</main>

<style>
	main {
		position: relative;
		z-index: 1;
		background-image: url('/src/lib/assets/bg.jpg');
		background-size: cover;
		background-position: center;
		background-attachment: fixed;
	}

	main::before {
		content: '';
		position: fixed;
		background-color: black;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		opacity: 0.5;
		z-index: -1;
	}
</style>
