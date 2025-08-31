<script>
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<main class="flex min-h-screen w-full p-4">
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
		background-image:
			linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
			/* 검은색 반투명 오버레이 */ url('/src/lib/assets/bg.jpg'); /* 배경 이미지 */
		background-size: cover;
		background-position: center;
		background-attachment: fixed;
		z-index: 1; /* 콘텐츠가 위로 올라오도록 설정 */
	}
</style>
