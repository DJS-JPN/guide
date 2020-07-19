---
forceTheme: blue
---

# 最初のコマンド

これで、コマンドグループを設定してコマンドフォルダを登録したので、最初のコマンドファイルを作成する準備ができました! まず、コマンドの新しいファイルを作成する必要があります。 `commands` フォルダーに移動し、 `最初の` フォルダーに移動し、 `meow.js` という新しいファイルを作成します。 これは単純なコマンドで、使われたときにのみメッセージを返します。 引数などについては後で説明します。

ファイルを作成したら、始める時間です!

## コマンドクラスの作成

何かをする前に、ファイルの先頭で、再度Commandoを要求する必要があります。 具体的には、Command クラスです。

```js
const { Command } = require('discord.js-command');
```

コマンドは `module.exports` でエクスポートされるクラスです。 クラスを作成し、 `module.exports` をそれに設定します。 ここでは、以下で説明する一連のオプションも設定します。

```js
module.exports = class MeowCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'meow',
            aliases: ['kitty-cat'],
            group: 'first',
            memberName: 'meow',
            description: 'Replies with a meow, kitty cat.',
        });
    }
};
```

これを怖がらせてはいけない、それは実際、非常に簡単です。

- `name` はコマンドの名前です。
- `aliases` はコマンドを呼び出すことができる他の方法です。 あなたは好きなだけ持つことができます!
- ` group `は、コマンドが属するコマンドグループです。
- `memberName` is the name of the command within the group (this can be different from the name).
- `description` はヘルプコマンドを使用すると表示されるヘルプテキストです。

使用できるプロパティはさらに多くありますが、それらはそれぞれのセクションで説明されます。

## Runメソッドの作成

次に必要となるのは、 `run` メソッドです。 これは、コマンドのコンストラクタのすぐ下に行く必要があります。 内部では、メッセージを返します：

```js
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

ご覧のとおり、 `run` メソッドは、コマンドが使用されたときにボットに実行させたいコードです。 Commandoは単なる拡張機能なので、これは通常のDiscord.jsでできることなら何でもかまいません。

`message.channel.send` の代わりに `message.say` を使用したことに気づいたかもしれません。 This is Commando's magic. Instead of `send`, use `say`. For embeds, use `embed`. For code, use `code`. The only exception to this is files, which are still sent the same as normal.

The reason for this is that Commando allows editing messages into commands, and using these methods allows Commando to save the messages for that use. It also checks if it can send a message to the current channel, so you get two things in one!

Now fire up the bot as normal and use your command! It should automatically be `?meow` to use it.

## Resulting code

<resulting-code />
