import { fetchPosts } from '../../../../lib/post-handler';

export const prerender = true;

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	const page = parseInt(params.page) || 1;
	const pageSize = 15;
	const category = params.category;

	const allPosts = await fetchPosts();
	const filteredPosts = allPosts.filter((post) => post.meta.category === category);

	const sortedPosts = filteredPosts.sort((a, b) => {
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
		totalPages: totalPages,
		category: category
	};
}

/** @type {import('./$types').EntryGenerator} */
export async function entries() {
	const allPosts = await fetchPosts();
	const categories = [...new Set(allPosts.map((post) => post.meta.category))];
	const pageSize = 15;

	const paths = [];

	for (const category of categories) {
		const postsInCategory = allPosts.filter((post) => post.meta.category === category);
		const totalPages = Math.ceil(postsInCategory.length / pageSize);
		for (let i = 0; i < totalPages; i++) {
			paths.push({ category: category, page: (i + 1).toString() });
		}
	}

	return paths;
}
