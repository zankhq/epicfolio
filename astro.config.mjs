import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import NetlifyCMS from "astro-netlify-cms";
import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
	site: "https://epicfolio.zank.studio",
	vite: {
		define: {
			__DATE__: `'${new Date().toISOString()}'`,
		},
	},
	integrations: [
		tailwind(),
		sitemap(),
		NetlifyCMS({
			config: {
				backend: {
					name: "github",
					repo: "warpsi/astros",
					branch: "main",
					base_url: "https://astros-7h0.pages.dev",
					auth_endpoint: "/api/auth",
				},
				media_folder: "public/images",
				public_folder: "/images",
				collections: [
					// Content collections
					{
						name: "portflio",
						label: "Blog Posts",
						folder: "src/content/portfolio",
						create: true,
						delete: true,
						fields: [],
					},
				],
			},
			disableIdentityWidgetInjection: true,
		}),
		alpinejs(),
	],
});
