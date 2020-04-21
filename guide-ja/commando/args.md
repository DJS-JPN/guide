---
forceTheme: blue
---

# コマンドにおいての引数の利用について

コマンドを使用する際に、ユーザーからデータを取得し、それに応じて応答を変更したい時があると思います。 ここでは、メッセージから文字列を取得して、ユーザーに返すコマンドを作成します。

## 文字列引数

`string`引数は、コマンド名とプレフィックスの後の単なるテキストです。 例: `?say Hi there!` この場合、引数は`Hi there`の部分になります。 作成は非常に簡単です。

まず最初に、`first`フォルダに移動し、新しく`say.js`というファイルを作成します。 それができたら、meowコマンドのコマンドクラスと同様に、コマンドクラスとすべてをセットアップします。

```js
const { Command } = require('discord.js-commando');

module.exports = class SayCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'say',
            aliases: ['parrot', 'copy'],
            group: 'first',
            memberName: 'say',
            description: 'Replies with the text you provide.',
        });
    }

    run(message) {
        // 今は空白で可
    }
};
```

`args`フィールドは、オブジェクトの配列であり、各オブジェクトにはその引数のデータが含まれています。

```js
super(client, {
    name: 'say',
    aliases: ['parrot', 'copy'],
    group: 'first',
    memberName: 'say',
    description: 'Replies with the text you provide.',
    args: [
        {
            key: 'text',
            prompt: 'What text would you like the bot to say?',
            type: 'string',
        },
    ],
});
```

参照： シンプル

- `key` は引数の名前です。 `run` メゾットで定義すると、これが使用されます。
- ` prompt `は、引数が指定されていない場合に表示されるテキストです。 誰かが`?say` だけを利用すると、テキストを求めるプロンプトが表示されます。
- `type` は引数が含まれるタイプです。 これには、 `string`, `integer`, `user`, `member` などといった、様々なものがあります。

さらに引数を追加するのは、次のように別のオブジェクトを配列に追加するのと同じくらい簡単です。

```js
args: [
    {
        key: 'text',
        prompt: 'What text would you like the bot to say?',
        type: 'string',
    },
    {
        key: 'otherThing',
        prompt: 'What is this other useless thing?',
        type: 'string',
    },
]
```

引数をデフォルトの特定の値に設定することもできます。

```js
{
    key: 'otherThing',
    prompt: 'What is this other useless thing?',
    type: 'string',
    default: 'dog',
},
```

ご覧のとおり、これらは非常に強力なものです。

`run`メソッドに進み、`text`引数を変数に設定します。

```js
run(message, { text }) {
    // 今は空白で可
}
```

次に、`run`メソッドでテキストをユーザーに返します。

```js
run(message, { text }) {
    return message.reply(text);
}
```

そこに、argsを使用するsayコマンドがあります。

## 結果出来上がったコード

<resulting-code />
