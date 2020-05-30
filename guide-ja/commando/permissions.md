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

プロパティを許可フラグの配列に設定するだけです。 それらのリストを見つけることができます <branch version="11.x" inline>[here](https://discord.js.org/#/docs/main/v11/class/Permissions?scrollTo=s-FLAGS)</branch><branch version="12.x" inline>[here](https://discord.js.org/#/docs/main/stable/class/Permissions?scrollTo=s-FLAGS)</branch>.

## 所有者専用コマンド

あなたがしたいかもしれないもう一つは、コマンドを所有者のみとして設定することです。 これにより、ボットの所有者(達) のみがコマンドを使用できるようになります。 利用できるようにすることは client / userPermissions よりもさらに簡単です。必要なのは、`ownerOnly` パラメータを `true` に設定することだけです。

```js
super(client, {
    name: 'meow',
    group: 'first',
    memberName: 'meow',
    description: 'Replies with a meow, kitty cat.',
    ownerOnly: true,
});
```
