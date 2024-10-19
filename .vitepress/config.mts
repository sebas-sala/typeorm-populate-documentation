import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "TypeORM Populate",
	description: "A VitePress Site",
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config

		sidebar: [
			{
				text: "Examples",
				items: [
					{ text: "Quick Start", link: "/quick-start" },
					{ text: "Factory", link: "/factory" },
					{ text: "Scripts", link: "/scripts" },
				],
			},
		],

		socialLinks: [
			{
				icon: "github",
				link: "https://github.com/sebas-sala/typeorm-populate",
			},
		],
	},
});
