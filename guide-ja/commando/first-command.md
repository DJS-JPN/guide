---
forceTheme: 青
---

# 最初のコマンド

これで、コマンドグループを設定してコマンドフォルダを登録したので、最初のコマンドファイルを作成する準備ができました！ まず、コマンド用のファイルを作成しましょう。 `commands` フォルダーに移動し、 `meow.js` というファイルを作成します。 これは、使われたときにメッセージを返す単純なものです。 引数などについては後程で説明します。

ファイルを作成したら、早速始めましょう！

## コマンドクラスの作成

色々なことをする前に、ファイルの先頭で、コマンドを要求する必要があります。 具体的には、Command クラスです。

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
- `memberName` はグループ内でのコマンド名です。(名前とは異なる場合があります。)
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

`message.channel.send` の代わりに `message.say` を使用したことに気づいたかもしれません。 これはコマンドの魔法です。 `send`の代わりに、`say`を使います。 埋め込みには、`embed`を使用します。 コードには、`code`を使用します。 例外はファイルだけで、通常と同じように送信されます。

その理由は、Commandoではメッセージをコマンドに編集することができ、これらのメソッドを使用することで、Commandoはその用途のためにメッセージを保存することができるからです。 また、現在のチャンネルにメッセージを送信できるかどうかもチェックします。

通常通りにボットを起動して、コマンドを使用してください！ 自動的に`?meow`である必要があります。

## 結果のコード

<resulting-code />
