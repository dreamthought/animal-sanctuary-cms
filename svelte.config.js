import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter({
                    pages: 'build',
                    assets: 'build',
                    fallback: "index.hytml",
                    precompress: false,
                    strict: true
                }),
                appDir: 'app',
                paths: {
                    base: process.env.NODE_ENV === 'production' ? '/animal-santuary-cms' : '',
                }
	}
};

export default config;
