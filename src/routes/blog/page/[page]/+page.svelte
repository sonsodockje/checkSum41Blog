<script>
	import { base } from '$app/paths';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<svelte:head>
	<title>Blog - Page {data.currentPage}</title>
</svelte:head>

<div class="m-auto w-xl">
	<h1 class="mb-10 text-center text-3xl font-extrabold text-white md:text-4xl">LIST</h1>

	<ul class="space-y-6">
		{#each data.posts as post}
			<li>
				<a
					href="{base}/blog/{post.path}"
					class="border-black-700 block rounded-lg border bg-white/5 p-4 transition-colors hover:bg-white/1 md:p-6"
				>
					<h2 class="text-md font-semibold text-white">{post.meta.title}</h2>
					<p class="mt-2 text-sm text-gray-400">{post.meta.date}</p>
				</a>
			</li>
		{/each}
	</ul>

	<!-- 페이지네이션 UI -->
	<div class="mt-12 flex items-center justify-between text-sm md:text-base">
		{#if data.currentPage > 1}
			<a
				href="{base}/blog/page/{data.currentPage - 1}"
				class="rounded bg-gray-700 px-3 py-2 text-white hover:bg-gray-600"
			>
				&larr; 이전
			</a>
		{:else}
			<div class="w-20 md:w-24"></div>
			<!-- 빈 공간을 채워 중앙 정렬 유지 -->
		{/if}

		<span class="text-gray-300">
			Page {data.currentPage} of {data.totalPages}
		</span>

		{#if data.currentPage < data.totalPages}
			<a
				href="{base}/blog/page/{data.currentPage + 1}"
				class="rounded bg-gray-700 px-3 py-2 text-white hover:bg-gray-600"
			>
				다음 &rarr;
			</a>
		{:else}
			<div class="w-20 md:w-24"></div>
			<!-- 빈 공간을 채워 중앙 정렬 유지 -->
		{/if}
	</div>
</div>
