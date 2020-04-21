---
forceTheme: blue
---

# 権限の処理について

場合によっては、コマンドを使用するための特定のアクセス許可をユーザーに与える必要がある場合や、コマンドを機能させるためにボットにアクセス許可が必要な場合があります。 Commando はこれら両方を非常に簡単にします。

## ユーザおよびアクセス権限

まず、アクセス許可を使用するコマンドを取得します。

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

次に、`userPermissions` および `clientPermissions` オプションを使用して、特定の権限を確認できます。 `meow` コマンドを制限し、ユーザーにメッセージを管理する機能とクライアントの完全な管理者アクセスを要求する場合は、次のようにします。

```js
super(client, {
    name: 'meow',
    group: 'first',
    memberName: 'meow',
    description: 'Replies with a meow, kitty cat.',
    clientPermissions: ['ADMINISTRATOR'],
    userPermissions: ['MANAGE_MESSAGES'],
});
```

プロパティを許可フラグの配列に設定するだけです。 それらのリストを見つけることができます <branch version="11.x" inline>[here](https://discord.js.org/#/docs/main/11.5.1/class/Permissions?scrollTo=s-FLAGS)</branch><branch version="12.x" inline>[here](https://discord.js.org/#/docs/main/master/class/Permissions?scrollTo=s-FLAGS)</branch>.

## Owner-only commands

Another thing you may want to do is set a command as owner-only. This will make a command only usable by the bot owner(s). Doing this is even simpler than the client/userPermissions, all you have to do is set the `ownerOnly` parameter to `true`.

```js
super(client, {
    name: 'meow',
    group: 'first',
    memberName: 'meow',
    description: 'Replies with a meow, kitty cat.',
    ownerOnly: true,
});
```
