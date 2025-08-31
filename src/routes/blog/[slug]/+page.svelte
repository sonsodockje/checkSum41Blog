<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<svelte:head>
	<title>{data.title}</title>
</svelte:head>

<div class="container">
	<a href="/blog" class="back-link">&larr; Back to Blog</a>
	<h1>{data.title}</h1>
	<p class="date">Published on {data.date}</p>

	<div class="content">
		<svelte:component this={data.content} />
	</div>
</div>

<style>
	.container {
		max-width: 800px;
		margin: 0 auto;
		padding: 2rem;
	}

	.back-link {
		display: inline-block;
		margin-bottom: 1rem;
		color: #007bff;
		text-decoration: none;
	}

	.back-link:hover {
		text-decoration: underline;
	}

	h1 {
		margin-bottom: 0.5rem;
	}

	.date {
		color: #666;
		margin-bottom: 2rem;
	}

	.content {
		line-height: 1.6;
	}

	/* Apply some basic styling to the rendered markdown */
	:global(.content h2) {
		margin-top: 2rem;
		margin-bottom: 1rem;
		font-weight: 800;
	}

	:global(.content p) {
		margin-bottom: 1rem;
	}

	:global(.content img) {
		max-width: 100%;
		height: auto;
		border-radius: 8px;
	}
</style>
