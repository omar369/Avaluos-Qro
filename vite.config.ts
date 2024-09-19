import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import Icons from 'unplugin-icons/vite';

export default defineConfig({
	plugins: [
		sveltekit(),
		Icons({
			compiler: 'svelte',
			autoInstall: true
		})
	],
	server: {
		fs: {
			// Allow access to files from the project root.
			allow: ['..']
		}
	},
	build: {
		rollupOptions: {
			external: ['svelte-forms-lib']
		}
	},
	optimizeDeps: {
		include: ['svelte-forms-lib']
	}
});
