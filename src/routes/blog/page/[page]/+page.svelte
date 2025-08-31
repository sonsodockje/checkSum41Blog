<script>
	import { base } from '$app/paths';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<svelte:head>
	<title>Blog - Page {data.currentPage}</title>
</svelte:head>

<div class="mx-auto w-xl px-4 py-8">
	<h1 class="mb-10 text-center text-4xl font-extrabold text-white">LIST</h1>

	<ul class="space-y-4">
		{#each data.posts as post}
			<li class="w-full">
				<a
					href="{base}/blog/{post.path}"
					class="flex flex-col rounded-lg border border-gray-200 p-4 transition-colors hover:bg-gray-50"
				>
					<h2 class="text-white">{post.meta.title}</h2>
					<p class="text-xs text-white">{post.meta.date}</p>
				</a>
			</li>
		{/each}
	</ul>

	<!-- 페이지네이션 UI -->
	<div class="mt-12 flex items-center justify-between">
		{#if data.currentPage > 1}
			<a
				href="{base}/blog/page/{data.currentPage - 1}"
				class="rounded bg-gray-200 px-4 py-2 text-black hover:bg-gray-300"
			>
				&larr; 이전
			</a>
		{:else}
			<div class="w-24"></div>
			<!-- 빈 공간을 채워 중앙 정렬 유지 -->
		{/if}

		<span class="text-white">
			Page {data.currentPage} of {data.totalPages}
		</span>

		{#if data.currentPage < data.totalPages}
			<a
				href="{base}/blog/page/{data.currentPage + 1}"
				class="rounded bg-gray-200 px-4 py-2 text-black hover:bg-gray-300"
			>
				다음 &rarr;
			</a>
		{:else}
			<div class="w-24"></div>
			<!-- 빈 공간을 채워 중앙 정렬 유지 -->
		{/if}
	</div>
</div>
