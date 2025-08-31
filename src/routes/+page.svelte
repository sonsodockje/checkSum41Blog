<script>
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="SvelteKit Blog" />
</svelte:head>

<section>
	<h1>Welcome to My Blog</h1>
	<p>This is a simple blog built with SvelteKit.</p>
	<a href="{base}/blog" class="button">Go to Blog</a>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
		text-align: center;
	}

	h1 {
		font-size: 2.5rem;
		margin-bottom: 1rem;
	}

	p {
		font-size: 1.2rem;
		margin-bottom: 2rem;
	}

	.button {
		display: inline-block;
		padding: 0.8rem 1.5rem;
		background-color: #007bff;
		color: white;
		text-decoration: none;
		border-radius: 5px;
		font-weight: bold;
		transition: background-color 0.2s;
	}

	.button:hover {
		background-color: #0056b3;
	}
</style>

