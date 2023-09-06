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
					repo: "zankhq/epicfolio",
					branch: "main",
					base_url: "https://epicfolio.zank.studio",
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
						fields: [
							{
								name: "title",
								widget: "string",
								label: "Post Title",
								i18n: true,
							},
							{
								label: "Image",
								name: "image",
								widget: "object",
								i18n: true,
								fields: [
									{
										label: "Source",
										name: "src",
										widget: "image",
										i18n: "duplicate",
									},
									{
										label: "Alt Text",
										name: "alt",
										widget: "string",
										i18n: true,
									},
								],
							},
							{
								label: "Snippet",
								name: "snippet",
								widget: "text",
								i18n: true,
							},
							{
								label: "Publish Date",
								name: "publishDate",
								widget: "datetime",
								format: "YYYY-MM-DD HH:mm",
								i18n: "duplicate",
							},
							{
								label: "Category",
								name: "category",
								widget: "select",
								options: ["Tutorials", "News", "Reviews", "Frameworks"],
								i18n: "duplicate",
							},
							{
								name: "body",
								widget: "markdown",
								label: "Post Body",
								i18n: true,
							},
						],
					},
				],
			},
			disableIdentityWidgetInjection: true,
		}),
		alpinejs(),
	],
});
