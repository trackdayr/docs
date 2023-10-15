import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.trackdayr.com',
	integrations: [
		starlight({
			title: 'TrackDayR Docs',
			description: 'Documentation website for TrackDayR about modding and tips.',
			logo: {
				alt: 'TrackDayR Logo',
				replacesTitle: true,
				light: './src/assets/logos/TrackDayR-mark-light.svg',
				dark: './src/assets/logos/TrackDayR-mark.svg',
			},
			favicon: 'favicon.ico',
			editLink: {
				baseUrl: 'https://github.com/trackdayr/docs/edit/main/',
			},
			social: {
				discord: 'https://discord.gg/5wytnM254v',
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
					label: 'Miscellaneous',
					autogenerate: { directory: 'misc' },
				},
				{
					label: 'API Reference',
					autogenerate: { directory: 'api' },
				},
			],
		}),
	],
});
