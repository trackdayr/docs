/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./astro.config.ts',
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
	],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				'yellowtdr': '#FFD800',
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
