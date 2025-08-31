import { fetchPosts } from '../../lib/post-handler';

/** @type {import('./$types').PageLoad} */
export async function load({ url }) {
	const allPosts = await fetchPosts();
	const sortedPosts = allPosts.sort((a, b) => {
		const dateA = new Date(`${a.meta.date} ${a.meta.time}`);
		const dateB = new Date(`${b.meta.date} ${b.meta.time}`);
		return dateB - dateA;
	});

	const page = parseInt(url.searchParams.get('page') || '1');
	const pageSize = 5;
	const totalPosts = sortedPosts.length;
	const totalPages = Math.ceil(totalPosts / pageSize);

	const startIndex = (page - 1) * pageSize;
	const endIndex = startIndex + pageSize;
	const posts = sortedPosts.slice(startIndex, endIndex);

	return {
		posts: posts,
		currentPage: page,
		totalPages: totalPages
	};
}
