<script>
	import { base } from '$app/paths';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<div class="container">
	<!-- <h1>Blog</h1> -->

	<ul>
		{#each data.posts as post}
			<li>
				<a href="{base}/blog/{post.path}">
					<h2>{post.meta.title}</h2>
					<p>{post.meta.date}</p>
				</a>
			</li>
		{/each}
	</ul>
</div>

<style>
	.container {
		max-width: 800px;
		margin: 0 auto;
		padding: 2rem;
	}

	ul {
		list-style: none;
		padding: 0;
	}

	li {
		margin-bottom: 1.5rem;
	}

	a {
		text-decoration: none;
		color: inherit;
		border: 1px solid #ccc;
		padding: 1rem;
		display: block;
		border-radius: 8px;
		transition: background-color 0.2s;
	}

	a:hover {
		background-color: #f0f0f0;
	}

	h2 {
		margin: 0 0 0.5rem 0;
	}

	p {
		margin: 0;
		color: #666;
	}
</style>
