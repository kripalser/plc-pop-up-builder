import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

// https://vitejs.dev/config/
export default defineConfig({
    base: '/plc-pop-up-builder/',
    plugins: [svelte()],
    css: {
        preprocessorOptions: {
            scss: {
                // Silencing these deprecation warnings because Bootstrap 5 won't be compatible with Dart Sass
                // https://github.com/twbs/bootstrap/issues/40962#issuecomment-3730409408
                silenceDeprecations: ['color-functions', 'global-builtin', 'import', 'if-function']
            },
        }
    },
});
