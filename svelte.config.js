import adapter from '@sveltejs/adapter-static'; // Было adapter-auto
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: vitePreprocess(),
    kit: {
        adapter: adapter({
            pages: 'build',
            assets: 'build',
            fallback: '404.html', // Важно для работы роутинга при перезагрузке страниц
            precompress: false,
            strict: true
        })
    }
};

export default config;