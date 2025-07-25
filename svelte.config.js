import adapter from '@sveltejs/adapter-static';

export default {
	kit: {
		adapter: adapter({

			pages: 'docs',
			assets: 'docs',
			fallback: "404.html",
			precompress: false,
			strict: true
		}),

		paths: {
			base: "/trivia-linux"
		}
	}
};