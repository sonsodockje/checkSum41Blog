<script>
	import { base } from '$app/paths';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<div class="mx-auto w-xl px-4 py-8">
	<h1 class="mb-10 text-center text-4xl font-extrabold">LIST</h1>

	<ul class="space-y-4">
		{#each data.posts as post}
			<li class="w-full">
				<a
					href="{base}/blog/{post.path}"
					class="flex flex-col rounded-lg border border-gray-200 p-4 transition-colors hover:bg-gray-50"
				>
					<h2 class="">{post.meta.title}</h2>
					<p class="">{post.meta.date}</p>
				</a>
			</li>
		{/each}
	</ul>
</div>
