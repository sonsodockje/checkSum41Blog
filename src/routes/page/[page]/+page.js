import { fetchPosts } from '../../../lib/post-handler';

export const prerender = true;

export async function load({ params }) {
	const page = parseInt(params.page) || 1;
	const pageSize = 15;

	const allPosts = await fetchPosts();
	const sortedPosts = allPosts.sort((a, b) => {
		const dateA = new Date(`${a.meta.date} ${a.meta.time}`);
		const dateB = new Date(`${b.meta.date} ${b.meta.time}`);
		return dateB - dateA;
	});

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

export async function entries() {
	const allPosts = await fetchPosts();
	const totalPosts = allPosts.length;
	const pageSize = 15;
	const totalPages = Math.ceil(totalPosts / pageSize);

	const paths = Array.from({ length: totalPages }, (_, i) => ({
		page: (i + 1).toString()
	}));

	return paths;
}
