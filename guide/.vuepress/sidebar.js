module.exports = {
	'/commando/': [
		{
			title: 'ホーム',
			children: [
				'/',
				'/requesting-more-content',
			],
		},
		{
			title: 'はじめに',
			children: [
				'/commando/',
				'/commando/first-command',
			],
		},
		{
			title: 'Extra Command Info',
			children: [
				'/commando/throttling',
				'/commando/guild-only',
				'/commando/permissions',
			],
		},
		{
			title: '引数',
			children: [
				'/commando/args',
				'/commando/validators',
			],
		},
		{
			title: '追加情報',
			children: [
				'/commando/client-values',
				'/commando/unknown-command-response',
			],
		},
	],
	'/': [
		{
			title: 'ホーム',
			children: [
				'/',
				'requesting-more-content',
			],
		},
		{
			title: 'インストールと準備',
			children: [
				'/preparations/',
				'/preparations/setting-up-a-linter',
				'/preparations/setting-up-a-bot-application',
				'/preparations/adding-your-bot-to-servers',
			],
		},
		{
			title: 'ボットの作成',
			children: [
				'/creating-your-bot/',
				'/creating-your-bot/configuration-files',
				'/creating-your-bot/adding-more-commands',
				'/creating-your-bot/commands-with-user-input',
			],
		},
		{
			title: 'コマンドハンドラ',
			children: [
				'/command-handling/',
				'/command-handling/adding-features',
			],
		},
		{
			title: 'イベントハンドラ',
			children: [
				'/event-handling/',
			],
		},
		{
			title: '人気のあるトピック',
			children: [
				'/popular-topics/faq',
				'/popular-topics/embeds',
				'/popular-topics/errors',
				'/popular-topics/permissions',
				'/popular-topics/permissions-extended',
				'/popular-topics/reactions',
				'/popular-topics/collectors',
				'/popular-topics/partials',
				'/popular-topics/intents',
				'/popular-topics/canvas',
				'/popular-topics/webhooks',
				'/popular-topics/audit-logs',
			],
		},
		{
			title: 'その他',
			children: [
				'/miscellaneous/parsing-mention-arguments',
				'/miscellaneous/useful-packages',
			],
		},
		{
			title: 'データベース',
			children: [
				'/sequelize/',
				'/sequelize/currency',
				'/keyv/',
			],
		},
		{
			title: 'Sharding',
			children: [
				'/sharding/',
				'/sharding/additional-information',
				'/sharding/extended',
			],
		},
		{
			title: 'OAuth2',
			children: [
				'/oauth2/',
			],
		},
		{
			title: '音声',
			children: [
				'/voice/',
				'/voice/understanding-voice',
				'/voice/the-basics',
				'/voice/voice-broadcasts',
				'/voice/optimisation-and-troubleshooting',
				'/voice/receiving-audio',
			],
		},
		{
			title: '開発環境の改善',
			children: [
				'/improving-dev-environment/pm2',
				'/improving-dev-environment/package-json-scripts',
			],
		},
		{
			title: '追加情報',
			children: [
				'/additional-info/notation',
				'/additional-info/es6-syntax',
				'/additional-info/collections',
				'/additional-info/async-await',
				'/additional-info/rest-api',
				'/additional-info/changes-in-v12',
			],
		},
	],
};
