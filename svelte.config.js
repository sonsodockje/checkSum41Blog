import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';
import { rehypeImagePrefix } from './src/lib/rehype-image-prefix.js';

const base = process.env.BASE_PATH || '';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],

	preprocess: [
		mdsvex({
			extensions: ['.md'],
			rehypePlugins: [[rehypeImagePrefix, base]]
		})
	],

	kit: {
		adapter: adapter({
			fallback: '404.html'
		}),
		paths: {
			base: base
		}
	}
};

export default config;
