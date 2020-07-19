---
forceTheme: blue
---

# コマンドをギルド専用に設定する

時には、サーバーでしか使えないコマンドを要求する必要があるかもしれません。 サーバー情報が表示されるかもしれないし、サーバーの絵文字が表示されるかもしれないし、何をしていてもギルド専用に設定するのはとても簡単です。

まず、ギルド専用にしたいコマンドを取得します。

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

`description`の後に、`guildOnly`の設定を追加し、`true`に設定します。

```js
super(client, {
    name: 'meow',
    group: 'first',
    memberName: 'meow',
    description: 'Replies with a meow, kitty cat.',
    guildOnly: true,
});
```

これで完了です。 DMで使用した場合、ボットがコマンドを許可しないようになり、エラーが出なくなりました!
