import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { SvelteKitPWA  } from '@vite-pwa/sveltekit'

   
export default defineConfig({
	plugins: [
		 sveltekit(),
		 SvelteKitPWA({
			injectRegister: 'auto',
			registerType: 'autoUpdate',
			workbox: {
			  globPatterns: ['**/*.{js,css,html,ico,png,svg}']
			},
			manifest: {
			  name: 'gemini chat',
			  short_name: 'gemini',
			  description: 'a chat app to converse with the gemini pro model',
			  theme_color: '#ffffff',
			  icons: [
				{
				  src: 'web/icon-192.png',
				  sizes: '192x192',
				  type: 'image/png'
				},
				{
				  src: 'web/icon-192-maskable.png',
				  sizes: '192x192',
				  type: 'image/png',
				  purpose: 'maskable'
				},
				{
				  src: 'web/icon-512.png',
				  sizes: '512x512',
				  type: 'image/png'
				},
				{
				  src: 'web/icon-512-maskable.png',
				  sizes: '512x512',
				  type: 'image/png',
				  purpose: 'maskable'
				}
			  ]
			}
		  })
	],
	optimizeDeps: {
	  exclude: ['js-big-decimal']
	},
	build: {
	  target: 'esnext'
	}
});
