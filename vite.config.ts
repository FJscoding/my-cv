import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [
        tailwindcss(),
        sveltekit({
            compilerOptions: {
                // Включаем режим runes для Svelte 5
                runes: ({ filename }) => filename.split(/[/\\]/).includes('node_modules') ? undefined : true
            }
        })
    ]
});
