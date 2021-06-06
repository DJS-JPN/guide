---
pageTheme: blue
---

# 権限の処理について

Sometimes you may need a user to have a specific permission to use a command, or maybe your bot needs a permission to make the command work. Commando はこれら両方を非常に簡単にします。

## ユーザおよびアクセス権限

First, grab the command that you want to have permissions.

```js
const { Command } = require('discord.js-commando');

module.exports = class MeowCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'meow',
			group: 'first',
			memberName: 'meow',
			description: 'Replies with a meow, kitty cat.',
		});
	}

	run(message) {
		return message.say('Meow!');
	}
};
```

次に、`userPermissions` および `clientPermissions` オプションを使用して、特定の権限を確認できます。 If you wanted to restrict the `meow` command, requiring the member to have the ability to manage messages and the client full administrator access, you'd do the following:

```js {5-6}
module.exports = class MeowCommand extends Command {
    constructor(client) {
        super(client, {
            // ...
            clientPermissions: ['ADMINISTRATOR'],
            userPermissions: ['MANAGE_MESSAGES'],
        });
    }
};
```

プロパティを許可フラグの配列に設定するだけです。 それらのリストを見つけることができます <docs-link path="class/Permissions?scrollTo=s-FLAGS">here</docs-link>.

## 所有者専用コマンド

あなたがしたいかもしれないもう一つは、コマンドを所有者のみとして設定することです。 This option will make a command only usable by the bot owner(s). Doing this is even simpler than the client/userPermissions; all you have to do is set the `ownerOnly` parameter to `true`.

```js {5}
module.exports = class MeowCommand extends Command {
    constructor(client) {
        super(client, {
            // ...
            ownerOnly: true,
        });
    }
};
```
