import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "TypeORM Populate",
	description: "TypeORM seeder for populating your database with fake data.",
	themeConfig: {
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
