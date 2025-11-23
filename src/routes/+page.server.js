import { redirect } from '@sveltejs/kit';
import { base } from '$app/paths';

/** @type {import('./$types').PageServerLoad} */
export function load() {
	throw redirect(308, `${base}/page/1`);
}
