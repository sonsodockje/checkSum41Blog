export const fetchPosts = async () => {
	const allPostFiles = import.meta.glob('/src/lib/posts/*.md');
	const iterablePostFiles = Object.entries(allPostFiles);

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const postPath = path.slice(15, -3);

			return {
				meta: metadata,
				path: postPath
			};
		})
	);

	// 'published: false'인 게시물을 필터링합니다.
	const publishedPosts = allPosts.filter(post => post.meta.published !== false);

	return publishedPosts;
};
