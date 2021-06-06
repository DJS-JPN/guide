const sidebar = require('./sidebar.js');

const config = {
	title: 'Discord.js ガイド',
	description: 'discord.jsのコミュニティによって作られたユーザーガイドを日本語に翻訳したサイト',
	head: [
		['meta', { charset: 'utf-8' }],
		['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
		['link', { rel: 'icon', href: '/favicon.png' }],
		['meta', { name: 'theme-color', content: '#42b983' }],
		['meta', { name: 'twitter:card', content: 'summary' }],
		['meta', { property: 'og:title', content: 'Discord.js ガイド' }],
		['meta', { property: 'og:description', content: 'discord.jsのコミュニティによって作られたユーザーガイドを日本語に翻訳したサイト' }],
		['meta', { property: 'og:type', content: 'website' }],
		['meta', { property: 'og:url', content: 'https://guide.discordjs-japan.org' }],
		['meta', { property: 'og:locale', content: 'ja_JP' }],
		['meta', { property: 'og:image', content: '/meta-image.png' }],
	],
	plugins: [],
	theme: 'yuu',
	themeConfig: {
		yuu: {
			logo: 'GuideLogo',
			extraOptions: { before: 'BranchSelector' },
		},
		repo: 'discordjs-japan/guide',
		docsDir: 'guide',
		sidebarDepth: 3,
		editLinks: true,
		lastUpdated: true,
		nav: [
			{
				text: 'ホーム',
				link: '/',
			},
			{
				text: 'Commando',
				link: '/commando/',
			},
			{
				text: 'Discord.js ドキュメント',
				link: 'https://discord.js.org/#/docs/main/stable/general/welcome',
			},
		],
		sidebar,
	},
	configureWebpack: {
		resolve: {
			alias: {
				'@': '../',
			},
		},
	},
	globalUIComponents: ['EOLNotice'],
};

for (const group of Object.values(config.themeConfig.sidebar)) {
	for (const section of group) {
		if (section.collapsable) continue;
		section.collapsable = false;
	}
}

if (process.env.NODE_ENV === 'production') {
	config.themeConfig.algolia = {
		apiKey: 'c8d9361fb8403f7c5111887e0edf4b5e',
		indexName: 'discordjs',
	};

	config.plugins.push(['@vuepress/google-analytics', { ga: 'UA-108513187-1' }]);
}

module.exports = config;
