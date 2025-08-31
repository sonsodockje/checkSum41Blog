import { fetchPosts } from '../../lib/post-handler';

/** @type {import('./$types').PageLoad} */
export async function load() {
	const posts = await fetchPosts();
	const sortedPosts = posts.sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date));

	return { posts: sortedPosts };
}
