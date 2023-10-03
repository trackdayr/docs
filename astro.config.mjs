import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'TrackDayR Docs',
			description: 'Documentation website for TrackDayR about modding and tips.',
			logo: {
				alt: 'TrackDayR Logo',
				replacesTitle: true,
				light: './src/assets/logos/TrackDayR-logotype-light.svg',
				dark: './src/assets/logos/TrackDayR-logotype.svg',
			},
			favicon: 'favicon.ico',
			editLink: {
				baseUrl: 'https://github.com/trackdayr/docs/edit/main/',
			},
			social: {
				github: 'https://github.com/trackdayr/docs',
			},
			sidebar: [
				{
					label: 'Modding',
					items: [
						{ label: 'Bike', link: '/modding/bike' },
						{ label: 'Helmet', link: '/modding/helmet' },
						{
							label: 'Skin',
							autogenerate: { directory: 'modding/skin' },
						},
						{
							label: 'Tools',
							autogenerate: { directory: 'modding/tools' },
						},
					],
				},
				{
					label: 'Debugging',
					autogenerate: { directory: 'debugging' },
				},
				{
					label: 'API Reference',
					autogenerate: { directory: 'api' },
					badge: { text: 'Experimental', variant: 'caution' },
				},
				{
					label: 'Miscellaneous',
					autogenerate: { directory: 'misc' },
				},
			],
		}),
	],
});
