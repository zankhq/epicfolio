/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Inter Variable", "Inter", ...defaultTheme.fontFamily.sans],
			},
			colors: {
				primary: {
					50: "#fafaf9",
					100: "#f5f5f4",
					200: "#e7e5e4",
					300: "#d6d3d1",
					400: "#a8a29e",
					500: "#78716c",
					600: "#57534e",
					700: "#44403c",
					800: "#292524",
					900: "#1c1917",
					950: "#0c0a09",
				},
			},
		},
	},
	plugins: [require("@tailwindcss/typography"), require.resolve("prettier-plugin-astro")],
	overrides: [
		{
			files: "*.astro",
			options: {
				parser: "astro",
			},
		},
	],
	darkMode: "class",
};
