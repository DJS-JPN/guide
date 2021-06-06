---
pageTheme: 青
---

# 最初のコマンド

これで、コマンドグループを設定してコマンドフォルダを登録したので、最初のコマンドファイルを作成する準備ができました！ まず、コマンド用のファイルを作成しましょう。 `commands` フォルダーに移動し、 `meow.js` というファイルを作成します。 これは、使われたときにメッセージを返す単純なものです。 引数などについては後程で説明します。

ファイルを作成したら、早速始めましょう！

## コマンドクラスの作成

色々なことをする前に、ファイルの先頭で、コマンドを要求する必要があります。 具体的には、Command クラスです。

```js
const { Command } = require('discord.js-command');
```

コマンドは `module.exports` でエクスポートされるクラスです。 クラスを作成し、 `module.exports` をそれに設定します。 You will also configure various options here, which we will explain below.

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

Don't let this scare you; it's straightforward.

- `name` はコマンドの名前です。
- `aliases` are other ways users can call the command. あなたは好きなだけ持つことができます!
- `group` is the command group of the command.
- `memberName` はグループ内でのコマンド名です。(名前とは異なる場合があります。)
- `description` is the help text displayed when someones use the help command.

There are many more properties you can use, but their sections will explain those.

## Runメソッドの作成

次に必要となるのは、 `run` メソッドです。 これは、コマンドのコンストラクタのすぐ下に行く必要があります。 内部では、メッセージを返します：

```js {6-8}
module.exports = class MeowCommand extends Command {
    constructor(client) {
        // ...
    }

    run(message) {
        return message.say('Meow!');
    }
};
```

As you can see, the `run` method is simply the code you want the bot to run when someone uses the command. This code can be anything you can do in core discord.js, as Commando is simply an extension.

You may have also noticed that `message.say` is used instead of `message.channel.send`. This syntax is Commando's magic. Instead of `send`, use `say`; embeds, use `embed`; code, use `code`. The only exception to this is attachments, which are still sent the same as usual.

The reason for this is that Commando allows editing messages into commands, and using these methods will enable Commando to save the messages for that use. また、現在のチャンネルにメッセージを送信できるかどうかもチェックします。

Now fire up the bot as usual and use your command! 自動的に`?meow`である必要があります。

## 結果のコード

<resulting-code />
