import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	const modules = import.meta.glob('/src/lib/posts/**/*.md');
	const postPath = `/src/lib/posts/${params.slug}.md`;

	const postResolver = modules[postPath];

	if (!postResolver) {
		throw error(404, 'Post not found');
	}

	const post = await postResolver();
	const { title, date } = post.metadata;
	const content = post.default;

	return {
		title,
		date,
		content,
		slug: params.slug
	};
}